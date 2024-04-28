import React from 'react';

function SearchInput({ setSearchTerm }) {
    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    return (
        <div className='search'>
            <input
                type='text'
                placeholder='Search Your Transaction Here (enter the description please)'
                onChange={handleSearchChange}
            />
        </div>
    );
}

export default SearchInput;
