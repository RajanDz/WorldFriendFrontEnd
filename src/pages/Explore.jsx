import { div, h2, p } from "framer-motion/client"
import { NavigationBar } from "../components/layout/Navbar"
import { useState } from "react"
import { FaHeart, FaRegHeart } from "react-icons/fa";
import paris from "../assets/images/paris.jpg";
import restourantDemo from "../assets/images/milanRestourant.jpeg";
import "../styles/ExplorePage.css";
import { useNavigate } from "react-router-dom";
import { locations } from "../data/citiesData";
import bannerImg from "../assets/images/welcome-img.png";
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
                        <div className="location" key={loc.id} onClick={() => navigate(`/location/${loc.id}`)}>
                            <div className="img-wrapper">
                                <img src={loc.image} alt=""  />
                            </div>

                            <div className="loc-badge">
                                <p className="trending-badge">🔥 Trending</p>
                                <FaHeart className="liked-badge"/>
                            </div>

                            <div className="overlay">
                                <p className="city" >{loc.name}</p>
                                <p className="country">📍 {loc.country}</p>
                            </div>

                            <div className="about-city">
                                <p>{adjustDescription(loc.description)}</p>
                                <div className="rating">
                                    <p>⭐ {loc.rating}</p>
                                    <p>(1,244 recenzija)</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="trending-locations">
                <h2>Featured locations</h2>
                <div className="locations">
                    {featuredLocations.map((loc) => (
                        <div className="location" key={loc.id} onClick={() => navigate(`/location/${loc.id}`)} >
                            <div className="img-wrapper">
                                <img src={loc.image} alt="" />
                            </div>

                            <div className="loc-badge">
                                <p className="trending-badge">Restourant</p>
                                <FaHeart className="liked-badge"/>
                            </div>

                            <div className="overlay">
                                <p className="city">{loc.name}</p>
                                <p className="country">📍 {loc.city}</p>
                            </div>

                            <div className="about-city">
                                <p>{adjustDescription(loc.description)}</p>
                                <div className="rating">
                                    <p>⭐ {loc.rating}</p>
                                    <p>(1,244 recenzija)</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}