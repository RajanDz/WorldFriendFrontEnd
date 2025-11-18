import { button, div, p } from "framer-motion/client";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { NavigationBar } from "../components/layout/Navbar";
import "../styles/SearchFilters.css";
import { useState } from "react";
import { locations } from "../data/citiesData";
import { FaHeart, FaRegHeart } from "react-icons/fa";

export function SearchResults(){
    const [searchParams] = useSearchParams();
    const query = searchParams.get("query");
    const filter = searchParams.get("filter"); 
    const [activeTab,setActiveTab] = useState("all");
    const navigate = useNavigate();

  let filteredSearch = locations.filter((loc) => 
    query ? loc.city.toLowerCase().includes(query.toLowerCase()) : true
  );

  if (filter === "rating") {
  filteredSearch = [...filteredSearch].sort((a, b) => b.rating - a.rating);
  } else if (filter === "trending") {
  filteredSearch = filteredSearch.filter((loc) => loc.trending);
  }

  const filteredCity = filteredSearch.filter((city) => city.isCity);

  const filteredLocations = filteredSearch.filter((loc) => !loc.isCity);
   const tabs = [
    { id: "all", label: `Sve (${filteredSearch.length})` },
    { id: "cities", label: `Gradovi (${filteredCity.length})` },
    { id: "locations", label: `Lokacije (${filteredLocations.length})` },
  ];
function LocationCard({ loc }) {
  return (
    <div className="location" key={loc.id} onClick={() => navigate(`/location/${loc.id}`)}>
      <div className="img-wrapper">
        <img src={loc.image} alt={loc.name} />
      </div>

      <div className="location-badge">
        <p>{loc.type}</p>
        <FaHeart className="like-badge" />
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
  );
}
function ShowList({ list, query }) {
  return (
    <>
   {list.length < 1 ? (
      <p className="not-found-msg">We can not find the city that start with "{query}"</p>
        ): (
        <>
        {list.map((loc) => <LocationCard key={loc.id} loc={loc}/>)}
          </>
        )}
    </>
  )
}
const adjustDescription = (desc) => {
        const max = 100;
        return desc.length > max ? `${desc.substring(0,max)}...`: desc;
    }
    return(
        <div className="search-results-page">
            <NavigationBar/>
            <div className="search-content">

              <div className="search-info">
                <p>Search result for:</p>
                <h2>"{query}"</h2>
                <p>Found locations: {filteredSearch.length}</p>
              </div>

            <div className="tabs-container">
                {tabs.map((tab) => (
                  <button
                  key={tab.id}
                  className={`tab-btn ${activeTab === tab.id ? "active" : ""}`}
                  onClick={() => setActiveTab(tab.id)}
                  >
                  {tab.label}
                  </button>
                ))}
            </div>
              {activeTab === "all" && (
                <>
              <div className="results-container">
                  <h2>City</h2>
                  <div className="search-results">
                    <ShowList list={filteredCity} query={query}/>
                  </div>
              </div>

              <div className="results-container">
                  <h2>Locations</h2>
                  <div className="search-results">
                    <ShowList list={filteredLocations} query={query}/>
                  </div>
              </div>
              </>
              )}

              {activeTab === "cities" && (
                <div className="results-container">
                  <h2>City</h2>
                  <div className="search-results">
                  <ShowList list={filteredCity} query={query}/>
                  </div>
              </div>
              )}

              {activeTab === "locations" && (
                <div className="results-container">
                  <h2>Locations</h2>
                  <div className="search-results">
                    <ShowList list={filteredLocations} query={query}/>
                  </div>
                </div>
              )}
          </div>
        </div>

    )
}