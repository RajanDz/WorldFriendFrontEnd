import "../styles/AboutLocation.css";
import { useNavigate, useParams } from "react-router-dom";
import { locations } from "../data/citiesData";
import { useEffect } from "react";
import { NavigationBar } from "../components/layout/Navbar";
import { div, h2, p } from "framer-motion/client";

export function AboutLocation(){

    const { id } = useParams();
    const navigate = useNavigate();

    const location = locations.find((loc) => loc.id === id);

    const atractiveLocations = locations.filter((loc) => {
        if (location.isCity){
            return loc.cityId === location.id;
        } else  {
            return loc.cityId === location.cityId && loc.id !== location.id;
        }
    });
    //test
    useEffect(() => {
        console.log(location);
    }, [])
    return (
        <div className="location-page">
            <NavigationBar/>
                <div className="loc-information">
                    <div className="loc-img-wrapper">
                        <img src={location.image} alt="" />
                    </div>
                        <div className="loc-info-wrapper">
                            <h1 className="loc-city" >{location.name}</h1>
                            <p className="loc-country">📍 {location.isCity ? location.country: location.city}</p>
                            <p className="loc-rating">{location.rating}⭐ (1,244) recenzija</p>
                        </div>
                </div>

                <div className="about-location">
                    <div className="left-side-info">
                        <div className="loc-details">
                            <h2>{location.isCity ? "About city": "About Location"}</h2>
                            <p>{location.description}</p>
                        </div>
                        <div className="same-city-recommended-loc">
                            <h2>Attractive locations <span style={{color:"gray", fontSize: "15px"}}>(same city)</span></h2>
                            {atractiveLocations.length < 1 ? (
                                <p>This location doesn't have similar options</p>
                            ):(
                                <>      
                            {atractiveLocations.map((loc) => (
                                <p onClick={() => navigate(`/location/${loc.id}`)}>{loc.name}</p>
                            ))}
                                </>
                            )}
                        </div>
                    </div>

                    <div className="right-side-info">
                        <h2>Information</h2>
                        <div className="loc-info">
                            <p>Status</p>
                            <p>{location.trending || location.featured ? "🔥 Trending": "Active"}</p>
                        </div>
                        <div className="loc-info">
                            <p>Avarage rating</p>
                            <p>🌟 {location.rating}</p>
                        </div>
                        <div className="loc-info">
                            <p>Reviews</p>
                            <p>📝 1,244</p>
                        </div>
                        <div className="loc-info">
                            <p>Country</p>
                            <p>🌎 {location.isCity ? location.country: location.city}</p>
                        </div>
                    </div>
                </div>
                {atractiveLocations.length >= 1 && (
                <div className="similar-locations">
                        {atractiveLocations.map((loc) => (
                            <div className="similar-loc" onClick={() => navigate(`/location/${loc.id}`)}>
                                <img src={loc.image} alt="" />
                                <p>{loc.name}</p>
                                <p style={{color: "gray"}}>{loc.type}</p>
                                <p>🌟 {loc.rating}</p>
                            </div>
                        ))}
                </div>
                )}
        </div>
    )
}