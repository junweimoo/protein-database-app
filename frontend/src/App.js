import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FilterMenu from './FilterMenu';
import ResultsTable from './ResultsTable';
import DisplayOptionsMenu from './DisplayOptionsMenu';

const App = () => {
    const [data, setData] = useState([]);
    const [filters, setFilters] = useState({
        protein_name: '',
        protein_source: '',
        length_geq: '',
        length_leq: '',
        uniprot_id: '',
        mutation_protein: '',
        nucleic_acid: '',
        type_nuc: '',
        ph_geq: '',
        ph_leq: '',
        temperature_geq: '',
        temperature_leq: '',
        method: '',
        dg_wild_geq: '',
        dg_wild_leq: '',
        ddg_geq: '',
        ddg_leq: '',
        year_geq: '',
        year_leq: '',
        authors: '',
        journal: '',
        keywords: '',
        sort_type: 'none',
    });  
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
    const [isErrored, setIsErrorred] = useState(false);

    const fetchData = async () => {
        axios
          .get('http://localhost:8008/proteins', { params: filters })
          .then(response => {
            setData(response.data);
            setIsErrorred(false);
          })
          .catch(error => {
            console.error("Error fetching data:", error);
            setIsErrorred(true);
          });
    };

    const resetFields = () => {
        handleFilterChange('protein_name', '');
        handleFilterChange('protein_source', '');
        handleFilterChange('length_geq', '');
        handleFilterChange('length_leq', '');
        handleFilterChange('uniprot_id', '');
        handleFilterChange('mutation_protein', '');
        handleFilterChange('nucleic_acid', '');
        handleFilterChange('type_nuc', '');
        handleFilterChange('ph_geq', '');
        handleFilterChange('ph_leq', '');
        handleFilterChange('temperature_geq', '');
        handleFilterChange('temperature_leq', '');
        handleFilterChange('method', '');
        handleFilterChange('dg_wild_geq', '');
        handleFilterChange('dg_wild_leq', '');
        handleFilterChange('ddg_geq', '');
        handleFilterChange('ddg_leq', '');
        handleFilterChange('year_geq', '');
        handleFilterChange('year_leq', '');
        handleFilterChange('authors', '');
        handleFilterChange('journal', '');
        handleFilterChange('keywords', '');
        handleFilterChange('sort_type', 'none')
        handleFilterChange('sort_by_column', null)
    };  

    const selectAllColumns = () => {

    }

    const handleFilterChange = (column, value) => {
        setFilters(prev => ({ ...prev, [column]: value }));
    };

    const handleColumnToggle = column => {
        setColumns(prev => ({ ...prev, [column]: !prev[column] }));
    };

    return (
        <div className="app">
            <h1>Interaction Energy Between Proteins and Nucleic Acids</h1>
            <FilterMenu filters={filters} onFilterChange={handleFilterChange} onSubmit={fetchData} onReset={resetFields} isErrored={isErrored}/>
            <DisplayOptionsMenu filters={filters} onFilterChange={handleFilterChange} columns={columns} onColumnToggle={handleColumnToggle} />
            <br/><br/>
            <div className='query-form-buttons'>
              <button onClick={fetchData}>Submit</button>
              <button onClick={resetFields}>Reset</button>
            </div>
            <ResultsTable data={data} columns={columns} onColumnToggle={handleColumnToggle} />
        </div>
    );
};

export default App;
