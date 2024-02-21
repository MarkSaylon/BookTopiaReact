import Bestsellers from "./Bestsellers/Bestsellers.jsx";
import Hero from "./Hero/Hero.jsx";
import Services from "./Services/Services.jsx";
import './Home.css'
import CommentCard from "./Comments/CommentCard/CommentCard.jsx";
import Comments from "./Comments/Comments.jsx";
import Footer from "../Footer/Footer.jsx";

function Home({onBookClick}){

    return(
        <div className="container">
            <Hero/>
            <Services/>
            <Bestsellers onBookClick={() => onBookClick('Books')} />
            <div className="userReviews">
                <div className="userReviewTag">
                    <h1 className="header">User Reviews</h1>
                </div>
                <Comments/>
            </div>
        </div>
    );

}

export default Home