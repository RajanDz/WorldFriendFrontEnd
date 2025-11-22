import { useNavigate } from "react-router-dom";
import { locations } from "../data/citiesData";
export function SimiliarLocations({id}){
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

<>
            {atractiveLocations.length >= 1 && (
                <div className="similar-locations">
                        <h2>Similar locations</h2>
                        <div className="locations-container">    
                            {atractiveLocations.map((loc) => (
                                <div className="similar-loc" key={loc.id} onClick={() => navigate(`/location/${loc.id}`)}>
                                    <img src={loc.image} alt="" />
                                    <p>{loc.name}</p>
                                    <p style={{color: "gray"}}>{loc.type}</p>
                                    <p>⭐ {loc.rating}</p>
                                </div>
                            ))}
                        </div>
                </div>
            ) }  
</>               
)
}