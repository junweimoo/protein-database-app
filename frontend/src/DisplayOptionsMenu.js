import React from 'react';

const DisplayOptionsMenu = ({ filters, onFilterChange, columns, onColumnToggle }) => {
    return (
        <div className="display-options-menu form-control">
            <h2 className="component-title text-center">Display Options</h2>
            <h4 className='pt-3'>Columns to show:</h4>
            <div className="column-toggle column">
                {Object.keys(columns).map(column => (
                    <div>
                        <label key={column}>
                            <input 
                                className='mx-1'
                                type="checkbox" 
                                checked={columns[column]} 
                                onChange={() => onColumnToggle(column)} 
                            />
                            {column.replace(/_/g, ' ')}
                        </label>
                    </div>
                ))}
            </div>
            <h4 className='pt-4'>Sorting Order:</h4>
            <div className="sorting-order">
                <div className='row'>
                    <div className='col-sm-2'>
                        Type:
                    </div>
                    <div className='col-sm-10'>
                        <label className='mx-1'>
                            <input
                                className='mx-1'
                                type="radio"
                                value="descending"
                                checked={filters['sort_type']==='none'}
                                onChange={e => {
                                    onFilterChange('sort_type', 'none');
                                    onFilterChange('sort_by_column', null);
                                }}
                            />
                            None
                        </label>
                        <label className='mx-1'>
                            <input
                                className='mx-1'
                                type="radio"
                                value="ascending"
                                checked={filters['sort_type']==='asc'}
                                onChange={e => onFilterChange('sort_type', 'asc')}
                            />
                            Ascending
                        </label>
                        <label className='mx-1'>
                            <input
                                className='mx-1'
                                type="radio"
                                value="descending"
                                checked={filters['sort_type']==='desc'}
                                onChange={e => onFilterChange('sort_type', 'desc')}
                            />
                            Descending
                        </label>
                    </div>
                </div>
                <div className='pt-2 row'>
                    <div className='col-sm-2'>
                        Sort By:
                    </div>
                    <div className='col-sm-10'>

                    <label className='mx-1'>
                        <input
                            className='mx-1'
                            type="radio"
                            value="Length"
                            checked={filters['sort_by_column']==='length'}
                            onChange={e => onFilterChange('sort_by_column', 'length')}
                            disabled={filters['sort_type']==='none'}
                        />
                        Length
                    </label>
                    <label className='mx-1'>
                        <input
                            className='mx-1'
                            type="radio"
                            value="descending"
                            checked={filters['sort_by_column']==='ph'}
                            onChange={e => onFilterChange('sort_by_column', 'ph')}
                            disabled={filters['sort_type']==='none'}
                        />
                        pH
                    </label>
                    <label className='mx-1'>
                        <input
                            className='mx-1'
                            type="radio"
                            value="Temperature"
                            checked={filters['sort_by_column']==='temperature'}
                            onChange={e => onFilterChange('sort_by_column', 'temperature')}
                            disabled={filters['sort_type']==='none'}
                        />
                        Temperature
                    </label>
                    <label className='mx-1'>
                        <input
                            className='mx-1'
                            type="radio"
                            value="ΔG Wild"
                            checked={filters['sort_by_column']==='dg_wild'}
                            onChange={e => onFilterChange('sort_by_column', 'dg_wild')}
                            disabled={filters['sort_type']==='none'}
                        />
                        ΔG Wild
                    </label>
                    <label className='mx-1'>
                        <input
                            className='mx-1'
                            type="radio"
                            value="ΔΔG"
                            checked={filters['sort_by_column']==='ddg'}
                            onChange={e => onFilterChange('sort_by_column', 'ddg')}
                            disabled={filters['sort_type']==='none'}
                        />
                        ΔΔG
                    </label>
                    <label className='mx-1'>
                        <input
                            className='mx-1'
                            type="radio"
                            value="Year"
                            checked={filters['sort_by_column']==='year'}
                            onChange={e => onFilterChange('sort_by_column', 'year')}
                            disabled={filters['sort_type']==='none'}
                        />
                        Year
                    </label>
                    <label className='mx-1'>
                        <input
                            className='mx-1'
                            type="radio"
                            value="id"
                            checked={filters['sort_by_column']==='id'}
                            onChange={e => onFilterChange('sort_by_column', 'id')}
                            disabled={filters['sort_type']==='none'}
                        />
                        ID
                    </label>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DisplayOptionsMenu;