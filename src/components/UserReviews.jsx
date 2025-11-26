import "../styles/UserReviewsStyle.css";
import { reviews } from "../data/citiesData";
export function UserReviews(){

    const adjustUsername = (user) => {
        const fullName = user.author.split(" ");
        const first = fullName[0][0];
        const last = fullName.length > 1 ? fullName[fullName.length - 1][0]: "";
        return first + last;
    }
    const ratingView = (stars) => {
        let output = "";
        for (let i = 0; i < stars;i++){
            output+="⭐";
        }
        return output;
    }

    const adjustComment = (comment) => {
        let max = 200;
        if (comment.length > max){
          return  comment.substring(0,max) + "...";
        } else {
            return comment;
        }
    }
    return (
        <div className="reviews-container">
            <div className="about-section">
                <h2>Users reviews</h2>
                <button>
                    <p>All reviews</p>
                    <span class="material-symbols-outlined">arrow_right_alt</span>
                </button>
            </div>
            <div className="reviews">
                {reviews.map((rev) => (
                    <div className="review">
                        <div className="user-info">
                            <p className="user-logo" style={{cursor: "pointer"}}>{adjustUsername(rev)}</p>
                            <div className="rev-details-container">
                                <p style={{cursor: "pointer"}}>{rev.author}</p>
                                <p style={{color: "gray", height:"1px", cursor: "pointer"}}>{rev.location}</p>
                                <div className="rating-container"> 
                                <p>{ratingView(rev.rating)}</p>
                                <p style={{color: "gray", fontSize:"12px"}}>{rev.date}</p>
                                </div>
                            </div>
                        </div>
                        <p>{adjustComment(rev.comment)}</p>
                        <div className="comment-info">
                            <p>👍Like</p>
                            <p>💬Response</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}