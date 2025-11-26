import { NavigationBar } from "../components/layout/Navbar"
import { useState } from "react"
import "../styles/ExplorePage.css";
import { useNavigate } from "react-router-dom";
import { locations } from "../data/citiesData";
import bannerImg from "../assets/images/welcome-img.png";
import { LocationCard } from "../components/common/cards/LocationCards";
import { SearchComponent } from "../components/SearchPage";
import { UserReviews } from "../components/UserReviews";
export function ExplorePage(){

  const trendingCity = locations.filter(loc => loc.isCity);

  const featuredLocations = locations.filter(loc => loc.featured);
    return(
        <div className="explore-page">
            <img src={bannerImg} alt="" className="welcome-img" />
            <SearchComponent/>

            <div className="trending-locations">
                <h2>Trending city</h2>
                <div className="locations">
                    {trendingCity.map((loc) => (
                        <LocationCard loc={loc} key={loc.id}/>
                    ))}
                </div>
            </div>

            <div className="trending-locations">
                <h2>Featured locations</h2>
                <div className="locations">
                    {featuredLocations.map((loc) => (
                        <LocationCard loc={loc} key={loc.id}/>
                    ))}
                </div>
            </div>
            <UserReviews/>
        </div>
    )
}