const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
require('dotenv').config();

const app = express();
app.use(cors());

const PORT = 8008;
const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

pool.on('error', (err, client) => {
    console.error('Unexpected error on idle client', err);
    process.exit(-1);
});

app.get('/proteins', async (req, res) => {
    const { sort_type, sort_by_column, protein_name, protein_source, length_geq, length_leq, uniprot_id, mutation_protein, nucleic_acid, type_nuc, ph_geq, ph_leq, temperature_geq, temperature_leq, method, dg_wild_geq, dg_wild_leq, ddg_geq, ddg_leq, year_geq, year_leq, authors, journal, keywords, function: func, sequence, structure } = req.query;

    let queryParams = [];
    let filterConditions = [];

    let isInvalidQuery = false;

    if (protein_name) {
        queryParams.push(`%${protein_name}%`);
        filterConditions.push(`protein_name ILIKE $${queryParams.length}`);
    }

    if (protein_source) {
        queryParams.push(`%${protein_source}%`);
        filterConditions.push(`protein_source ILIKE $${queryParams.length}`);
    }

    if (uniprot_id) {
        queryParams.push(uniprot_id);
        filterConditions.push(`uniprot_id = $${queryParams.length}`)
    }

    if (nucleic_acid) {
        queryParams.push(`%${nucleic_acid}%`);
        filterConditions.push(`nucleic_acid ILIKE $${queryParams.length}`);
    }

    if (authors) {
        queryParams.push(`%${authors}%`);
        filterConditions.push(`authors ILIKE $${queryParams.length}`);
    }

    if (keywords) {
        queryParams.push(`%${keywords}%`);
        filterConditions.push(`keywords ILIKE $${queryParams.length}`);
    }

    if (func) {
        queryParams.push(func);
        filterConditions.push(`function = $${queryParams.length}`);
    }

    if (sequence) {
        queryParams.push(sequence);
        filterConditions.push(`sequence = $${queryParams.length}`);
    }

    if (structure) {
        queryParams.push(structure);
        filterConditions.push(`structure = $${queryParams.length}`);
    }

    if (mutation_protein) {
        const mutation_protein_array = mutation_protein.split(',').map(name=> `%${name.trim()}%`)
        const placeholders = mutation_protein_array.map((name, index) => `$${index + queryParams.length + 1}`).join(', ')

        queryParams.push(...mutation_protein_array);
        filterConditions.push(`mutation_protein ILIKE ANY(ARRAY[${placeholders}])`);
    }

    if (type_nuc) {
        const type_nuc_array = type_nuc.split(',').map(name=> `%${name.trim()}%`)
        const placeholders = type_nuc_array.map((name, index) => `$${index + queryParams.length + 1}`).join(', ')

        queryParams.push(...type_nuc_array);
        filterConditions.push(`type_nuc ILIKE ANY(ARRAY[${placeholders}])`);
    }

    if (method) {
        const method_array = method.split(',').map(name=> `%${name.trim()}%`)
        const placeholders = method_array.map((name, index) => `$${index + queryParams.length + 1}`).join(', ')

        queryParams.push(...method_array);
        filterConditions.push(`method ILIKE ANY(ARRAY[${placeholders}])`);
    }

    if (journal) {
        const journal_array = journal.split(',').map(name=> `%${name.trim()}%`)
        const placeholders = journal_array.map((name, index) => `$${index + queryParams.length + 1}`).join(', ')

        queryParams.push(...journal_array);
        filterConditions.push(`journal ILIKE ANY(ARRAY[${placeholders}])`);
    }

    if (length_geq || length_leq) {
        if (!length_leq) {
            queryParams.push(length_geq);
            filterConditions.push(`length >= $${queryParams.length - 1}`);
        } else if (!length_geq) {
            queryParams.push(length_leq);
            filterConditions.push(`length <= $${queryParams.length}`);
        } else {
            queryParams.push(length_geq);
            queryParams.push(length_leq);
            filterConditions.push(`length >= $${queryParams.length - 1} AND length <= $${queryParams.length}`);
        }
    }

    if (ph_geq || ph_leq) {
        if (!ph_leq) {
            queryParams.push(ph_geq);
            filterConditions.push(`ph >= $${queryParams.length - 1}`);
        } else if (!ph_geq) {
            queryParams.push(ph_leq);
            filterConditions.push(`ph <= $${queryParams.length}`);
        } else {
            queryParams.push(ph_geq);
            queryParams.push(ph_leq);
            filterConditions.push(`ph >= $${queryParams.length - 1} AND ph <= $${queryParams.length}`);
        }
    }

    if (temperature_geq || temperature_leq) {
        if (!temperature_leq) {
            queryParams.push(temperature_geq);
            filterConditions.push(`temperature >= $${queryParams.length - 1}`);
        } else if (!temperature_geq) {
            queryParams.push(temperature_leq);
            filterConditions.push(`temperature <= $${queryParams.length}`);
        } else {
            queryParams.push(temperature_geq);
            queryParams.push(temperature_leq);
            filterConditions.push(`temperature >= $${queryParams.length - 1} AND temperature <= $${queryParams.length}`);
        }
    }

    if (dg_wild_geq || dg_wild_leq) {
        if (!dg_wild_leq) {
            queryParams.push(dg_wild_geq);
            filterConditions.push(`dg_wild >= $${queryParams.length - 1}`);
        } else if (!dg_wild_geq) {
            queryParams.push(dg_wild_leq);
            filterConditions.push(`dg_wild <= $${queryParams.length}`);
        } else {
            queryParams.push(dg_wild_geq);
            queryParams.push(dg_wild_leq);
            filterConditions.push(`dg_wild >= $${queryParams.length - 1} AND dg_wild <= $${queryParams.length}`);
        }
    }

    if (ddg_geq || ddg_leq) {
        if (!ddg_leq) {
            queryParams.push(ddg_geq);
            filterConditions.push(`ddg >= $${queryParams.length - 1}`);
        } else if (!ddg_geq) {
            queryParams.push(ddg_leq);
            filterConditions.push(`ddg <= $${queryParams.length}`);
        } else {
            queryParams.push(ddg_geq);
            queryParams.push(ddg_leq);
            filterConditions.push(`ddg >= $${queryParams.length - 1} AND ddg <= $${queryParams.length}`);
        }
    }

    if (year_geq || year_leq) {
        if (!year_leq) {
            queryParams.push(year_geq);
            filterConditions.push(`year >= $${queryParams.length - 1}`);
        } else if (!year_geq) {
            queryParams.push(year_leq);
            filterConditions.push(`year <= $${queryParams.length}`);
        } else {
            queryParams.push(year_geq);
            queryParams.push(year_leq);
            filterConditions.push(`year >= $${queryParams.length - 1} AND year <= $${queryParams.length}`);
        }
    }

    let baseQuery = "SELECT * FROM proteins";
    if (filterConditions.length > 0) {
        baseQuery += " WHERE " + filterConditions.join(" AND ");
    }

    if (sort_by_column) {
        if (sort_type == 'asc') {
            baseQuery += ` ORDER BY ${sort_by_column}`
        } else if (sort_type == 'desc') {
            baseQuery += ` ORDER BY ${sort_by_column} DESC`
        }
    }

    // baseQuery += " LIMIT 100";

    console.log(baseQuery);

    if (isInvalidQuery) {
        console.error('Invalid query');
        res.status(500).json({ error: "Bad Request" });
        return;
    }

    try {
        const results = await pool.query(baseQuery, queryParams);
        await new Promise(resolve => setTimeout(resolve, 1000));
        res.json(results.rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

