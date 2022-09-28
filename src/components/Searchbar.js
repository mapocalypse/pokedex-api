import React, { useState } from "react";

const Searchbar = (props) => {
    const { onSearch } = props;
    const [search, setSearch] = useState('');

    const handleChangeSearch = (e) => {
        setSearch(e.target.value);

        if(e.target.value.length === 0) {
            onSearch(undefined);
        } 
    }

    const handleOnClick = async (e) => {
        onSearch(search);
    }

    const handleKeyDown = async(e) => {
        if(e.key === 'Enter') {
            onSearch(search);
        }
    }

    return(
        <div className="searchbar-container">
            <div className="input-group mb-3">
                <input type="text"
                className="form-control searchbar"
                placeholder="Search for your favourite Pokémon"
                aria-label="Search for your favourite Pokémon"
                aria-describedby="button-addon2"
                onChange={handleChangeSearch}
                onKeyDown={handleKeyDown}
            />
                <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={handleOnClick}>GO!</button>
            </div>
        </div>
    )
};

export default Searchbar;