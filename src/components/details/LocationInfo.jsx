
export function LocationInfo({loc}){
    return(
        <div>
            <h2>Information</h2>
                <div className="loc-info">
                    <p>📍Address</p>
                    <p>Demo adress</p>
                </div>
                <div className="loc-info">
                    <p>🕐Working time</p>
                    <p>12:00pm - 12:00am</p>
                </div>
                    <div className="loc-info">
                        <p>🏆Avarage rating</p>
                        <p>{loc.rating}</p>
                    </div>
                        <div className="loc-info">
                            <p>Reviews</p>
                            <p>1,244</p>
                        </div>
                            <div className="loc-info">
                                <p>🌎City</p>
                                <p>{loc.city}</p>
                            </div>
                            <div className="loc-info">
                                <p>🏛️Type</p>
                                <p>{loc.type}</p>
                            </div>
        </div>
    )
}