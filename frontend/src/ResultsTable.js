import React from 'react';

const ResultsTable = ({ data, columns, onColumnToggle }) => {
    return (
        <div className="results-table">
            <h2>Results</h2>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        {columns.id && <th>ID</th>}
                        {columns.protein_name && <th>Protein Name</th>}
                        {columns.protein_source && <th>Protein Source</th>}
                        {columns.length && <th>Length</th>}
                        {columns.uniprot_id && <th>Uniprot ID</th>}
                        {columns.mutation_protein && <th>Mutation Protein</th>}
                        {columns.nucleic_acid && <th>Nucleic Acid</th>}
                        {columns.type_nuc && <th>Type Nucleic Acid</th>}
                        {columns.ph && <th>pH</th>}
                        {columns.temperature && <th>Temperature</th>}
                        {columns.method && <th>Method</th>}
                        {columns.dg_wild && <th>ΔG Wild</th>}
                        {columns.ddg && <th>ΔΔG</th>}
                        {columns.year && <th>Year</th>}
                        {columns.authors && <th>Authors</th>}
                        {columns.journal && <th>Journal</th>}
                        {columns.keywords && <th>Keywords</th>}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, index) => (
                        <tr key={row.id}>
                            {columns.id && <td>{row.id}</td>}
                            {columns.protein_name && <td>{row.protein_name}</td>}
                            {columns.protein_source && <td>{row.protein_source}</td>}
                            {columns.length && <td>{row.length}</td>}
                            {columns.uniprot_id && <td>{row.uniprot_id}</td>}
                            {columns.mutation_protein && <td>{row.mutation_protein}</td>}
                            {columns.nucleic_acid && <td>{row.nucleic_acid}</td>}
                            {columns.type_nuc && <td>{row.type_nuc}</td>}
                            {columns.ph && <td>{row.ph}</td>}
                            {columns.temperature && <td>{row.temperature}</td>}
                            {columns.method && <td>{row.method}</td>}
                            {columns.dg_wild && <td>{row.dg_wild}</td>}
                            {columns.ddg && <td>{row.ddg}</td>}
                            {columns.year && <td>{row.year}</td>}
                            {columns.authors && <td>{row.authors}</td>}
                            {columns.journal && <td>{row.journal}</td>}
                            {columns.keywords && <td>{row.keywords}</td>}
                        </tr>
                    ))}
                </tbody>
            </table>
            <h4>Number of hits: {data.length}</h4>
        </div>
    );
};

export default ResultsTable;
