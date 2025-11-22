
import { useNavigate } from "react-router-dom";
import { locations } from "../data/citiesData";

export function RecommendedLocation({id}){
    const navigate = useNavigate();
    const location = locations.find((loc) => loc.id === id);
    
        const atractiveLocations = locations.filter((loc) => {
            if (location.isCity){
                return loc.cityId === location.id;
            } else  {
                return loc.cityId === location.cityId && loc.id !== location.id;
            }
        });
    return(
        <div className="same-city-recommended-loc">
                <h2>Attractive locations <span style={{color:"gray", fontSize: "15px"}}>(same city)</span></h2>
                {atractiveLocations.length < 1 ? (
                    <p>This location doesn't have similar options</p>
                ):(
                    <>      
                    {atractiveLocations.map((loc) => (
                        <p key={loc.id} onClick={() => navigate(`/location/${loc.id}`)}>{loc.name}</p>
                    ))}
                    </>
                    )}
        </div>
    )
}