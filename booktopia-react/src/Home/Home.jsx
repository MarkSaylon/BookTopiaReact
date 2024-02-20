import Bestsellers from "./Bestsellers/Bestsellers.jsx";
import Hero from "./Hero/Hero.jsx";
import Services from "./Services/Services.jsx";
import './Home.css'

function Home({onBookClick}){

    return(
        <div className="container">
            <Hero/>
            <Services/>
            <Bestsellers onBookClick={() => onBookClick('Books')} />
        </div>
    );

}

export default Home