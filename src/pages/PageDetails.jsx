import "../styles/AboutLocation.css";
import { useParams } from "react-router-dom";
import { locations } from "../data/citiesData";
import { NavigationBar } from "../components/layout/Navbar";
import { CityInfo } from "../components/details/CityInfo";
import { LocationInfo } from "../components/details/LocationInfo";
import { LocationHeader } from "../components/LocationHeader";
import { LocationDescripiton } from "../components/LocationDescription";
import { RecommendedLocation } from "../components/RecommendedLocation";
import { SimiliarLocations } from "../components/SimiliarLocations";
export function AboutLocation(){

    const { id } = useParams();
    const location = locations.find((loc) => loc.id === id);
    if (!location) {
        return (
            <div className="location-page">
                <NavigationBar />
                <h2 style={{ padding: "40px" }}>Location not found</h2>
            </div>
        );
    }
    return (
        <div className="location-page">
            <NavigationBar/>
                <LocationHeader location={location}/>
                <div className="about-location">
                    <div className="left-side-info">
                        <LocationDescripiton location={location}/>
                        <RecommendedLocation id={location.id}/>
                    </div>

                    <div className="right-side-info">
                        {location.isCity ? (
                            <CityInfo city={location}/>
                        ):(
                            <LocationInfo loc={location}/>
                        )}
                    </div>
                </div>
                    <SimiliarLocations id={location.id}/>
        </div>
    )
}