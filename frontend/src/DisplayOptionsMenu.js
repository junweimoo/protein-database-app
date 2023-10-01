import React from 'react';

const DisplayOptionsMenu = ({ filters, onFilterChange, columns, onColumnToggle }) => {
    return (
        <div className="Display Options">
            <h2>Display Options</h2>
            <h4>Columns to show:</h4>
            <div className="column-toggle">
                {Object.keys(columns).map(column => (
                    <label key={column}>
                        <input 
                            type="checkbox" 
                            checked={columns[column]} 
                            onChange={() => onColumnToggle(column)} 
                        />
                        {column.replace(/_/g, ' ')}
                    </label>
                ))}
            </div>
            <h4>Sorting Order:</h4>
            <div className="sorting-order">
                <div>
                    <label>
                        <input
                            type="radio"
                            value="descending"
                            checked={filters['sort_type']=='none'}
                            onChange={e => {
                                onFilterChange('sort_type', 'none');
                                onFilterChange('sort_by_column', null);
                            }}
                        />
                        None
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="ascending"
                            checked={filters['sort_type']=='asc'}
                            onChange={e => onFilterChange('sort_type', 'asc')}
                        />
                        Ascending
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="descending"
                            checked={filters['sort_type']=='desc'}
                            onChange={e => onFilterChange('sort_type', 'desc')}
                        />
                        Descending
                    </label>
                </div>
                <br/>
                <div>
                    <label>
                        <input
                            type="radio"
                            value="Length"
                            checked={filters['sort_by_column']=='length'}
                            onChange={e => onFilterChange('sort_by_column', 'length')}
                            disabled={filters['sort_type']=='none'}
                        />
                        Length
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="descending"
                            checked={filters['sort_by_column']=='ph'}
                            onChange={e => onFilterChange('sort_by_column', 'ph')}
                            disabled={filters['sort_type']=='none'}
                        />
                        pH
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="Temperature"
                            checked={filters['sort_by_column']=='temperature'}
                            onChange={e => onFilterChange('sort_by_column', 'temperature')}
                            disabled={filters['sort_type']=='none'}
                        />
                        Temperature
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="ΔG Wild"
                            checked={filters['sort_by_column']=='dg_wild'}
                            onChange={e => onFilterChange('sort_by_column', 'dg_wild')}
                            disabled={filters['sort_type']=='none'}
                        />
                        ΔG Wild
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="ΔΔG"
                            checked={filters['sort_by_column']=='ddg'}
                            onChange={e => onFilterChange('sort_by_column', 'ddg')}
                            disabled={filters['sort_type']=='none'}
                        />
                        ΔΔG
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="Year"
                            checked={filters['sort_by_column']=='year'}
                            onChange={e => onFilterChange('sort_by_column', 'year')}
                            disabled={filters['sort_type']=='none'}
                        />
                        Year
                    </label>
                </div>
            </div>
        </div>
    );
}

export default DisplayOptionsMenu;