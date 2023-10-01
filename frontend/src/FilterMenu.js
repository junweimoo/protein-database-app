import React from 'react';

const FilterMenu = ({ filters, onFilterChange, onSubmit, onReset, isErrored }) => {
    return (
        <div className="filter-menu">
            <h2>Search Query</h2>
            {/* Single input filters */}
            <div>
                Protein Name:
                <input 
                    placeholder="Protein Name"
                    onChange={e => onFilterChange('protein_name', e.target.value)}
                    value={filters['protein_name']}
                />
            </div>

            <div>
                Protein Source:
                <input 
                    placeholder="Protein Source"
                    onChange={e => onFilterChange('protein_source', e.target.value)}
                    value={filters['protein_source']}
                />
            </div>

            <div>
                Uniprot ID: 
                <input 
                    placeholder="Uniprot ID"
                    onChange={e => onFilterChange('uniprot_id', e.target.value)}
                    value={filters['uniprot_id']}
                />
            </div>

            <div>
                Mutation Protein:
                <input 
                    placeholder="Mutation Protein"
                    onChange={e => onFilterChange('mutation_protein', e.target.value)}
                    value={filters['mutation_protein']}
                />
            </div>

            <div>
                Nucleic Acid:
                <input 
                    placeholder="Nucleic Acid"
                    onChange={e => onFilterChange('nucleic_acid', e.target.value)}
                    value={filters['nucleic_acid']}
                />
            </div>

            <div>
                Type of Nucleic Acid:
                <input 
                    placeholder="Type of Nucleic Acid"
                    onChange={e => onFilterChange('type_nuc', e.target.value)}
                    value={filters['type_nuc']}
                />
            </div>

            <div>
                Method:
                <input 
                    placeholder="Method"
                    onChange={e => onFilterChange('method', e.target.value)}
                    value={filters['method']}
                />
            </div>

            <div>
                Authors:
                <input 
                    placeholder="Authors"
                    onChange={e => onFilterChange('authors', e.target.value)}
                    value={filters['authors']}
                />
            </div>

            <div>
                Journal:
                <input 
                    placeholder="Journal"
                    onChange={e => onFilterChange('journal', e.target.value)}
                    value={filters['journal']}
                />
            </div>

            <div>
                Keywords:
                <input 
                    placeholder="Keywords"
                    onChange={e => onFilterChange('keywords', e.target.value)}
                    value={filters['keywords']}
                />
            </div>

            {/* Range input filters */}
            <div>
                Length:
                <input 
                    placeholder="From"
                    type="number"
                    onChange={e => onFilterChange('length_geq', e.target.value)}
                    value={filters['length_geq']}
                />
                <input 
                    placeholder="To"
                    type="number"
                    onChange={e => onFilterChange('length_leq', e.target.value)}
                    value={filters['length_leq']}
                />
            </div>

            <div>
                pH:
                <input 
                    placeholder="From"
                    type="number"
                    onChange={e => onFilterChange('ph_geq', e.target.value)}
                    value={filters['ph_geq']}
                />
                <input 
                    placeholder="To"
                    type="number"
                    onChange={e => onFilterChange('ph_leq', e.target.value)}
                    value={filters['ph_leq']}
                />
            </div>

            <div>
                Temperature:
                <input 
                    placeholder="From"
                    type="number"
                    onChange={e => onFilterChange('temperature_geq', e.target.value)}
                    value={filters['temperature_geq']}
                />
                <input 
                    placeholder="To"
                    type="number"
                    onChange={e => onFilterChange('temperature_leq', e.target.value)}
                    value={filters['temperature_leq']}
                />
            </div>

            <div>
                ΔG Wild:
                <input 
                    placeholder="From"
                    type="number"
                    onChange={e => onFilterChange('dg_wild_geq', e.target.value)}
                    value={filters['dg_wild_geq']}
                />
                <input 
                    placeholder="To"
                    type="number"
                    onChange={e => onFilterChange('dg_wild_leq', e.target.value)}
                    value={filters['dg_wild_leq']}
                />
            </div>

            <div>
                ΔΔG:
                <input 
                    placeholder="From"
                    type="number"
                    onChange={e => onFilterChange('ddg_geq', e.target.value)}
                    value={filters['ddg_geq']}
                />
                <input 
                    placeholder="To"
                    type="number"
                    onChange={e => onFilterChange('ddg_leq', e.target.value)}
                    value={filters['ddg_leq']}
                />
            </div>

            <div>
                Year:
                <input 
                    placeholder="From"
                    type="number"
                    onChange={e => onFilterChange('year_geq', e.target.value)}
                    value={filters['year_geq']}
                />
                <input 
                    placeholder="To"
                    type="number"
                    onChange={e => onFilterChange('year_leq', e.target.value)}
                    value={filters['year_leq']}
                />
            </div>



            <div>{isErrored && "ERROR"}</div>
        </div>
    );
};

export default FilterMenu;
