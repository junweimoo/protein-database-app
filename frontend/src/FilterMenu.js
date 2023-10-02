import React from 'react';

const FilterMenu = ({ filters, onFilterChange, onSubmit, onReset, isErrored }) => {
    return (
        <div className="filter-menu form-control">
            <h2 className="component-title text-center">Search Query</h2>
            <div className="row mb-2">
                <div className="form-group row">
                    <label className="col-sm-4 col-form-label">Protein Name:</label>
                    <div className="col-sm-8">
                        <input 
                            id="protein_name"
                            className="form-control"
                            onChange={e => onFilterChange('protein_name', e.target.value)}
                            value={filters['protein_name']}
                        />
                    </div>
                </div>
            </div>


            <div className="row mb-2">
                <div className="form-group row">
                    <label className="col-sm-4 col-form-label">Protein Source:</label>
                    <div className="col-sm-8">
                        <input 
                            id="protein_source"
                            className="form-control"
                            onChange={e => onFilterChange('protein_source', e.target.value)}
                            value={filters['protein_source']}
                        />
                    </div>
                </div>
            </div>

            <div className="row mb-2">
                <div className="form-group row">
                    <label className="col-sm-4 col-form-label">Uniprot ID:</label>
                    <div className="col-sm-8">
                        <input 
                            id="uniprot_id"
                            className="form-control"
                            onChange={e => onFilterChange('uniprot_id', e.target.value)}
                            value={filters['uniprot_id']}
                        />
                    </div>
                </div>
            </div>

            <div className="row mb-2">
                <div className="form-group row">
                    <label className="col-sm-4 col-form-label">Mutation Protein:</label>
                    <div className="col-sm-8">
                        <input 
                            id="mutation_protein"
                            className="form-control"
                            onChange={e => onFilterChange('mutation_protein', e.target.value)}
                            value={filters['mutation_protein']}
                        />
                    </div>
                </div>
            </div>

            <div className="row mb-2">
                <div className="form-group row">
                    <label className="col-sm-4 col-form-label">Nucleic Acid:</label>
                    <div className="col-sm-8">
                        <input 
                            id="nucleic_acid"
                            className="form-control"
                            onChange={e => onFilterChange('nucleic_acid', e.target.value)}
                            value={filters['nucleic_acid']}
                        />
                    </div>
                </div>
            </div>

            <div className="row mb-2">
                <div className="form-group row">
                    <label className="col-sm-4 col-form-label">Type of Nucleic Acid:</label>
                    <div className="col-sm-8">
                        <input 
                            id="type_nuc"
                            className="form-control"
                            onChange={e => onFilterChange('type_nuc', e.target.value)}
                            value={filters['type_nuc']}
                        />
                    </div>
                </div>
            </div>

            <div className="row mb-2">
                <div className="form-group row">
                    <label className="col-sm-4 col-form-label">Method:</label>
                    <div className="col-sm-8">
                        <input 
                            id="method"
                            className="form-control"
                            onChange={e => onFilterChange('method', e.target.value)}
                            value={filters['method']}
                        />
                    </div>
                </div>
            </div>

            <div className="row mb-2">
                <div className="form-group row">
                    <label className="col-sm-4 col-form-label">Authors:</label>
                    <div className="col-sm-8">
                        <input 
                            id="authors"
                            className="form-control"
                            onChange={e => onFilterChange('authors', e.target.value)}
                            value={filters['authors']}
                        />
                    </div>
                </div>
            </div>

            <div className="row mb-2">
                <div className="form-group row">
                    <label className="col-sm-4 col-form-label">Journal:</label>
                    <div className="col-sm-8">
                        <input 
                            id="journal"
                            className="form-control"
                            onChange={e => onFilterChange('journal', e.target.value)}
                            value={filters['journal']}
                        />
                    </div>
                </div>
            </div>

            <div className="row mb-2">
                <div className="form-group row">
                    <label className="col-sm-4 col-form-label">Keywords:</label>
                    <div className="col-sm-8">
                        <input 
                            id="keywords"
                            className="form-control"
                            onChange={e => onFilterChange('keywords', e.target.value)}
                            value={filters['keywords']}
                        />
                    </div>
                </div>
            </div>
            
            <div className="form-group row">
                <label className="col-sm-4 col-form-label">Length:</label>
                <div className="col-sm-4">
                    <input 
                        placeholder="From"
                        type="number"
                        onChange={e => onFilterChange('length_geq', e.target.value)}
                        value={filters['length_geq']}
                    />
                </div>
                <div className="col-sm-4">
                    <input 
                        placeholder="To"
                        type="number"
                        onChange={e => onFilterChange('length_leq', e.target.value)}
                        value={filters['length_leq']}
                    />
                </div>
            </div>

            <div className="form-group row">
                <label className="col-sm-4 col-form-label">pH:</label>
                <div className="col-sm-4">
                    <input 
                        placeholder="From"
                        type="number"
                        onChange={e => onFilterChange('ph_geq', e.target.value)}
                        value={filters['ph_geq']}
                    />
                </div>
                <div className="col-sm-4">
                    <input 
                        placeholder="To"
                        type="number"
                        onChange={e => onFilterChange('ph_leq', e.target.value)}
                        value={filters['ph_leq']}
                    />
                </div>
            </div>

            <div className="form-group row">
                <label className="col-sm-4 col-form-label">Temperature:</label>
                <div className="col-sm-4">
                    <input 
                        placeholder="From"
                        type="number"
                        onChange={e => onFilterChange('temperature_geq', e.target.value)}
                        value={filters['temperature_geq']}
                    />
                </div>
                <div className="col-sm-4">
                    <input
                        placeholder="To"
                        type="number"
                        onChange={e => onFilterChange('temperature_leq', e.target.value)}
                        value={filters['temperature_leq']}
                    />
                </div>
            </div>

            <div className="form-group row">
                <label className="col-sm-4 col-form-label">ΔG Wild:</label>
                <div className="col-sm-4">
                    <input 
                        placeholder="From"
                        type="number"
                        onChange={e => onFilterChange('dg_wild_geq', e.target.value)}
                        value={filters['dg_wild_geq']}
                    />
                </div>
                <div className="col-sm-4">
                    <input 
                        placeholder="To"
                        type="number"
                        onChange={e => onFilterChange('dg_wild_leq', e.target.value)}
                        value={filters['dg_wild_leq']}
                    />
                </div>
            </div>

            <div className="form-group row">
                <label className="col-sm-4 col-form-label">ΔΔG:</label>
                <div className="col-sm-4">
                    <input 
                        placeholder="From"
                        type="number"
                        onChange={e => onFilterChange('ddg_geq', e.target.value)}
                        value={filters['ddg_geq']}
                    />
                </div>
                <div className="col-sm-4">
                    <input 
                        placeholder="To"
                        type="number"
                        onChange={e => onFilterChange('ddg_leq', e.target.value)}
                        value={filters['ddg_leq']}
                    />
                </div>
            </div>

            <div className="form-group row">
                <label className="col-sm-4 col-form-label">Year:</label>
                <div className="col-sm-4">
                    <input 
                        placeholder="From"
                        type="number"
                        onChange={e => onFilterChange('year_geq', e.target.value)}
                        value={filters['year_geq']}
                    />
                </div>
                <div className="col-sm-4">
                    <input 
                        placeholder="To"
                        type="number"
                        onChange={e => onFilterChange('year_leq', e.target.value)}
                        value={filters['year_leq']}
                    />
                </div>
            </div>
        </div>
    );
};

export default FilterMenu;
