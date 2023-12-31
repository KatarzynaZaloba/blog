import React from 'react';
import {Link} from "react-router-dom";
import NavBarTitle from "../../atoms/NavBarTitle";
import SearchBar from "../../molecules/SearchBar";

const NavBar = ({searchTerm, onSearch}) => {
    return (
        <>
            <div className="md:flex justify-between items-center py-4 md:py-8 gap-x-1 relative overflow-hidden bg-cover bg-no-repeat">
                <div className="bg-white text-center md:text-start md:flex md:justify-start justify-center gap-x-10">
                    <Link to="/blog"><NavBarTitle title="Home"/></Link>
                </div>
                <div className="md:flex justify-end items-center gap-x-3 md:gap-x-10 hidden">
                    <SearchBar
                        searchTerm={searchTerm}
                        onSearch={onSearch}
                        className=""/>
                </div>
                <div className="md:hidden m-auto flex justify-center items-center">
                    <SearchBar
                        searchTerm={searchTerm}
                        onSearch={onSearch}/>
                </div>
            </div>
        </>
    )
}

export default NavBar;