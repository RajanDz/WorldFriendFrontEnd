import { NavigationBar } from "../components/layout/Navbar"
import { useState } from "react"
import "../styles/ExplorePage.css";
import { useNavigate } from "react-router-dom";
import { locations } from "../data/citiesData";
import bannerImg from "../assets/images/welcome-img.png";
import { LocationCard } from "../components/common/cards/LocationCards";
export function ExplorePage(){
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState("");
    const [filter, setFilter] = useState("");

  const trendingCity = locations.filter(loc => loc.isCity);

  const featuredLocations = locations.filter(loc => loc.featured);

    const filteredLocations = locations.filter((loc) => 
        loc.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
    );

    const handleSearch = () => {
        if (searchTerm.trim() === "") return;
        navigate(`/search?query=${searchTerm}&filter=${filter}`)
    }
    const adjustDescription = (desc) => {
        const max = 100;
        return desc.length > max ? `${desc.substring(0,max)}...`: desc;
    }
    return(
        <div className="explore-page">
            <NavigationBar/>
            <img src={bannerImg} alt="" className="welcome-img" />
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

            <div className="trending-locations">
                <h2>Trending city</h2>
                <div className="locations">
                    {trendingCity.map((loc) => (
                        <LocationCard loc={loc} key={loc.id}/>
                    ))}
                </div>
            </div>

            <div className="trending-locations">
                <h2>Featured locations</h2>
                <div className="locations">
                    {featuredLocations.map((loc) => (
                        <LocationCard loc={loc} key={loc.id}/>
                    ))}
                </div>
            </div>
        </div>
    )
}