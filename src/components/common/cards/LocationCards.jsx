import { useNavigate } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
export function LocationCard({loc}){
    const navigate = useNavigate();


    const adjustDescription = (desc) => {
    const max = 100;
    return desc.length > max ? `${desc.substring(0, max)}...` : desc;
  };



    const createBadge  = () => {
            if (loc.trending){
                return "Trending";
            } else {
                return loc.type;
            }
    }
return (
        <div className="location" key={loc.id} onClick={() => navigate(`/location/${loc.id}`)}>
           <div className="img-wrapper">
              <img src={loc.image} alt=""  />
            </div>
    
            <div className="loc-badge">
                <p className="trending-badge">{createBadge()}</p>
                <FaHeart className="liked-badge"/>
                </div>
    
                <div className="overlay">
                    <p className="city" >{loc.name}</p>
                    <p className="country">📍 {loc.country || loc.city}</p>
                </div>
    
                <div className="about-city">
                    <p>{adjustDescription(loc.description)}</p>
                    <div className="rating">
                    <p>⭐ {loc.rating}</p>
                    <p>(1,244 recenzija)</p>
                    </div>
                </div>
            </div>
)
}