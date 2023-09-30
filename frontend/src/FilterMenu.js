// FilterMenu.js
import React from 'react';

const FilterMenu = ({ onFilterChange, onSubmit, isErrored }) => {
    return (
        <div className="filter-menu">
            {/* Single input filters */}
            <div>
                Protein Name:
                <input 
                    placeholder="Protein Name"
                    onChange={e => onFilterChange('protein_name', e.target.value)}
                />
            </div>
            
            <div>
                Protein Source:
                <input 
                    placeholder="Protein Source"
                    onChange={e => onFilterChange('protein_source', e.target.value)}
                />
            </div>

            <div>
                Uniprot ID: 
                <input 
                    placeholder="Uniprot ID"
                    onChange={e => onFilterChange('uniprot_id', e.target.value)}
                />
            </div>

            <div>
                Mutation Protein:
                <input 
                    placeholder="Mutation Protein"
                    onChange={e => onFilterChange('mutation_protein', e.target.value)}
                />
            </div>

            <div>
                Nucleic Acid:
                <input 
                    placeholder="Nucleic Acid"
                    onChange={e => onFilterChange('nucleic_acid', e.target.value)}
                />
            </div>

            <div>
                Type of Nucleic Acid:
                <input 
                    placeholder="Type of Nucleic Acid"
                    onChange={e => onFilterChange('type_nuc', e.target.value)}
                />
            </div>

            <div>
                Method:
                <input 
                    placeholder="Method"
                    onChange={e => onFilterChange('method', e.target.value)}
                />
            </div>

            <div>
                Authors:
                <input 
                    placeholder="Authors"
                    onChange={e => onFilterChange('authors', e.target.value)}
                />
            </div>

            <div>
                Journal:
                <input 
                    placeholder="Journal"
                    onChange={e => onFilterChange('journal', e.target.value)}
                />
            </div>

            <div>
                Keywords:
                <input 
                    placeholder="Keywords"
                    onChange={e => onFilterChange('keywords', e.target.value)}
                />
            </div>

            {/* Range input filters */}
            <div>
                Length:
                <input 
                    placeholder="From"
                    type="number"
                    onChange={e => onFilterChange('length_geq', e.target.value)}
                />
                <input 
                    placeholder="To"
                    type="number"
                    onChange={e => onFilterChange('length_leq', e.target.value)}
                />
            </div>

            <div>
                pH:
                <input 
                    placeholder="From"
                    type="number"
                    onChange={e => onFilterChange('ph_geq', e.target.value)}
                />
                <input 
                    placeholder="To"
                    type="number"
                    onChange={e => onFilterChange('ph_leq', e.target.value)}
                />
            </div>

            <div>
                Temperature:
                <input 
                    placeholder="From"
                    type="number"
                    onChange={e => onFilterChange('temperature_geq', e.target.value)}
                />
                <input 
                    placeholder="To"
                    type="number"
                    onChange={e => onFilterChange('temperature_leq', e.target.value)}
                />
            </div>

            <div>
                ΔG Wild:
                <input 
                    placeholder="From"
                    type="number"
                    onChange={e => onFilterChange('dg_wild_geq', e.target.value)}
                />
                <input 
                    placeholder="To"
                    type="number"
                    onChange={e => onFilterChange('dg_wild_leq', e.target.value)}
                />
            </div>

            <div>
                ΔΔG:
                <input 
                    placeholder="From"
                    type="number"
                    onChange={e => onFilterChange('ddg_geq', e.target.value)}
                />
                <input 
                    placeholder="To"
                    type="number"
                    onChange={e => onFilterChange('ddg_leq', e.target.value)}
                />
            </div>

            <div>
                Year:
                <input 
                    placeholder="From"
                    type="number"
                    onChange={e => onFilterChange('year_geq', e.target.value)}
                />
                <input 
                    placeholder="To"
                    type="number"
                    onChange={e => onFilterChange('year_leq', e.target.value)}
                />
            </div>

            <button onClick={onSubmit}>Fetch Data</button>

            <div>{isErrored && "ERROR"}</div>
        </div>
    );
};

export default FilterMenu;
