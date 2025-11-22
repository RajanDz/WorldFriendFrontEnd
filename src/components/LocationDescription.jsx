export function LocationDescripiton({location}){
    return (
        <div className="loc-details">
            <h2>{location.isCity ? "About city": "About Location"}</h2>
            <p>{location.description}</p>
         </div>
    )
}