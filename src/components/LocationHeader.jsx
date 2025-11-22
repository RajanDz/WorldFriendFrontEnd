export function LocationHeader({location}){
    return (
        <div className="loc-information">
                    <div className="loc-img-wrapper">
                        <img src={location.image} alt="" />
                    </div>
                        <div className="loc-info-wrapper">
                            <h1 className="loc-city" >{location.name}</h1>
                            <p className="loc-country">📍 {location.country || location.city}</p>
                            <p className="loc-rating">{location.rating}⭐ (1,244) recenzija</p>
                        </div>
        </div>
    )
}