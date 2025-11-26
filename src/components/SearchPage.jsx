import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function SearchComponent(){
        const navigate = useNavigate();
        const [searchTerm, setSearchTerm] = useState("");
        const [filter, setFilter] = useState("");

    const handleSearch = () => {
        if (searchTerm.trim() === "") return;
        navigate(`/search?query=${searchTerm}&filter=${filter}`)
    }
    return (
        <div className="search-page">
                <h2>Explore your target city</h2>
                <div className="inputs">  
                <input 
                type="text"
                placeholder="Search city"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                />
                <div className="search-filters">
                    <button onClick={handleSearch}>Submit</button>
                    <select name="" id="" onChange={(e) => setFilter(e.target.value)}>
                        <option value="" >Filters</option>
                        <option value="rating">By Rating</option>
                        <option value="trending">Trending</option>
                    </select>
                </div>
                </div>
            </div>
    )
}