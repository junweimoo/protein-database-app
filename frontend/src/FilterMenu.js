// FilterMenu.js
import React from 'react';

const FilterMenu = ({ onFilterChange, onSubmit }) => {
    return (
        <div className="filter-menu">
            <input 
                placeholder="Protein Name"
                onChange={e => onFilterChange('protein_name', e.target.value)}
            />
            {/* Repeat for other filters */}
            <button onClick={onSubmit}>Fetch Data</button>
        </div>
        
    );
};

export default FilterMenu;
