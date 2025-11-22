
export function CityInfo({city}){
    return (
        <div>
            <h2>Information</h2>
                <div className="loc-info">
                    <p>📊Status</p>
                    <p>{city.trending ? "🔥 Trending": "Active"}</p>
                </div>
                    <div className="loc-info">
                        <p>🏆Avarage rating</p>
                        <p>{city.rating}⭐</p>
                    </div>
                        <div className="loc-info">
                            <p>👋Reviews</p>
                            <p>1,244</p>
                        </div>
                            <div className="loc-info">
                                <p>🌎Country</p>
                                <p>{city.country}</p>
                            </div>
        </div>
    )
}