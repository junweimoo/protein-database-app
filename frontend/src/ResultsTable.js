import React from 'react';

function JSONToCSVConvertor(JSONData, ReportTitle, ShowLabel) {
    var arrData = typeof JSONData != 'object' ? JSON.parse(JSONData) : JSONData;
    var CSV = '';    
    if (ShowLabel) {
        var row = "";
        for (var index in arrData[0]) {
            row += index + ',';
        }
        row = row.slice(0, -1);
        CSV += row + '\r\n';
    }
    for (var i = 0; i < arrData.length; i++) {
        var rowb = "";
        for (var indexb in arrData[i]) {
            rowb += '"' + arrData[i][indexb] + '",';
        }
        rowb.slice(0, rowb.length - 1);
        CSV += rowb + '\r\n';
    }
    if (CSV === '') {        
        alert("Invalid data");
        return;
    }   
    var fileName = ReportTitle.replace(/ /g,"_");   
    var blob = new Blob([CSV], { type: 'text/csv;charset=utf-8;' });
    var link = document.createElement("a");
    if (link.download !== undefined) {
        var url = URL.createObjectURL(blob);
        link.setAttribute("href", url);
        link.setAttribute("download", fileName);
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
}


const ResultsTable = ({ page, setPage, entriesPerPage, setEntriesPerPage, data, columns, onColumnToggle }) => {

    let firstDisplayedIndex = page * entriesPerPage;
    let lastDisplayedIndex = Math.min(page * entriesPerPage + entriesPerPage, data.length)

    return (
        <div className="results-table">
            <h2 className="component-title text-center">Results</h2>
            <div className="mx-2">
                <h5>Displaying {data.length === 0 ? 0 : firstDisplayedIndex + 1} to {lastDisplayedIndex} out of {data.length} entries</h5>
                
            </div>
            <div className='row pb-3 mx-1'>
                <select 
                    className='select-dropdown form-select w-auto mx-1'
                    onChange={e => {
                        setEntriesPerPage(parseInt(e.target.value));
                        setPage(0);
                }}>
                    <option value={100}>100 per page</option>
                    <option value={75}>75 per page</option>
                    <option value={50}>50 per page</option>
                    <option value={25}>25 per page</option>
                </select>
                <button 
                    className='mx-1 btn btn-primary w-auto' 
                    onClick={e => setPage(Math.max(0, page - 1))}>
                    Previous Page
                </button>
                <button 
                    className='mx-1 btn btn-primary w-auto' 
                    onClick={e => {
                        if (lastDisplayedIndex !== data.length) {
                            setPage(page + 1);
                        }
                    }}>
                    Next Page
                </button>
                <button 
                    className='mx-1 btn btn-info w-auto' 
                    onClick={e => {
                        JSONToCSVConvertor(data, "proteinExportData", true);
                    }}>
                    Download CSV
                </button>
            </div>
            <table className="table table-bordered">
                <thead className="light-blue-bg">
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
                    {data
                        .slice(firstDisplayedIndex, lastDisplayedIndex)
                        .map((row, index) => (
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
        </div>
    );
};

export default ResultsTable;
