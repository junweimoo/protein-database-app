// App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FilterMenu from './FilterMenu';
import ResultsTable from './ResultsTable';

const App = () => {
    const [data, setData] = useState([]);
    const [filters, setFilters] = useState({});
    const [columns, setColumns] = useState({
        id: true,
        protein_name: true,
        protein_source: true,
        length: true,
        uniprot_id: true,
        mutation_protein: true,
        nucleic_acid: true,
        type_nuc: true,
        ph: true,
        temperature: true,
        method: true,
        dg_wild: true,
        ddg: true,
        year: true,
        authors: true,
        journal: true,
        keywords: true
    });

    const fetchData = async () => {
        console.log('fetching...')
        try {
            axios
              .get('http://localhost:8008/proteins', { params: filters })
              .then(response => {
                console.log('test');
                setData(response.data);
              });
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const handleFilterChange = (column, value) => {
        setFilters(prev => ({ ...prev, [column]: value }));
    };

    const handleColumnToggle = column => {
        setColumns(prev => ({ ...prev, [column]: !prev[column] }));
    };

    return (
        <div className="app">
            <FilterMenu onFilterChange={handleFilterChange} onSubmit={fetchData}/>
            <ResultsTable data={data} columns={columns} onColumnToggle={handleColumnToggle} />
        </div>
    );
};

export default App;