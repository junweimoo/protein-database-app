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
                        <select 
                            className='select-dropdown form-select'
                            onChange={e => {
                                if (e.target.value === "All") {
                                    onFilterChange('type_nuc', '');
                                } else {
                                    onFilterChange('type_nuc', e.target.value);
                                }
                            }}
                            value={filters['type_nuc']}>
                            <option value={"All"}>All</option>
                            <option value="DNA">DNA</option>
                            <option value="RNA">RNA</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="row mb-2">
                <div className="form-group row">
                    <label className="col-sm-4 col-form-label">Method:</label>
                    <div className="col-sm-8">
                        <select 
                            className='select-dropdown form-select'
                            onChange={e => {
                                if (e.target.value === "All") {
                                    onFilterChange('method', '');
                                } else {
                                    onFilterChange('method', e.target.value);
                                }
                            }}
                            value={filters['method']}>
                            <option value={"All"}>All</option>
                            <option value="Gel shift">Gel shift</option>
                            <option value="Isothermal Titration Calorimetry (ITC)">Isothermal Titration Calorimetry (ITC)</option>
                            <option value="Fluorescence">Fluorescence</option>
                            <option value="PACE">PACE</option>
                            <option value="Filter binding">Filter binding</option>
                            <option value="Enzyme-labeled immunosorbent assay (ELISA)">Enzyme-labeled immunosorbent assay (ELISA)</option>
                            <option value="Surface plasmon resonance (SPR)">Surface plasmon resonance (SPR)</option>
                            <option value="Differential scanning calorimetry (DSC)">Differential scanning calorimetry (DSC)</option>
                            <option value="Fluorescence anisotropy">Fluorescence anisotropy</option>
                            <option value="spectrophotometric assay">spectrophotometric assay</option>
                            <option value="Footprinting">Footprinting</option>
                            <option value="Fluorescence stopped-flow">Fluorescence stopped-flow</option>
                            <option value="Fluorescence titrations">Fluorescence titrations</option>
                            <option value="Equilibrium competition assay">Equilibrium competition assay</option>
                            <option value="Force-induced melting">Force-induced melting</option>
                            <option value="Quartz Crystal Microbalance (QCM)">Quartz Crystal Microbalance (QCM)</option>
                            <option value="Fluorescence Resonance Energy Transfer (FRET)">Fluorescence Resonance Energy Transfer (FRET)</option>
                            <option value="UV laser footprinting">UV laser footprinting</option>
                            <option value="Fluorescence correlation spectroscopy (FCS)">Fluorescence correlation spectroscopy (FCS)</option>
                            <option value="Chemical quench">Chemical quench</option>
                        </select>
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
                        <select 
                            className='select-dropdown form-select'
                            onChange={e => {
                                if (e.target.value === "All") {
                                    onFilterChange('journal', '');
                                } else {
                                    onFilterChange('journal', e.target.value);
                                }
                            }}
                            value={filters['journal']}>
                            <option value={"All"}>All</option>
                            <option value="EMBO J">EMBO J</option>
                            <option value="Biochemistry">Biochemistry</option>
                            <option value="J Mol Biol">J Mol Biol</option>
                            <option value="RNA">RNA</option>
                            <option value="Proc Natl Acad Sci U S A">Proc Natl Acad Sci U S A</option>
                            <option value="J Biol Chem">J Biol Chem</option>
                            <option value="Arch Pharm (Weinheim)">Arch Pharm (Weinheim)</option>
                            <option value="Nucleic Acids Res">Nucleic Acids Res</option>
                            <option value="Nat Struct Biol">Nat Struct Biol</option>
                            <option value="Genes Dev">Genes Dev</option>
                            <option value="Science">Science</option>
                            <option value="Eur J Biochem">Eur J Biochem</option>
                            <option value="DNA Repair (Amst)">DNA Repair (Amst)</option>
                            <option value="Proteins">Proteins</option>
                            <option value="FEBS J">FEBS J</option>
                            <option value="J Bacteriol">J Bacteriol</option>
                            <option value="Biochem J">Biochem J</option>
                            <option value="Arch Biochem Biophys">Arch Biochem Biophys</option>
                            <option value="Biophys J">Biophys J</option>
                            <option value="Protein Sci">Protein Sci</option>
                        </select>
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
