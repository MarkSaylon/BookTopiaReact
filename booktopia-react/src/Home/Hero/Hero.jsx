import './Hero.css'
import logo from './Title2.svg'

function Hero(){

    return(
        <>
            <div class="hero">
                <img src={logo} alt="" class="logo2" />
                <h1 class="motto">"Open the gates to a new world"</h1>
                <div class="search">
                    <input placeholder="Search for books or authors..." type="text" />
                    <button type="submit">Go</button>
                </div>
                <svg
                class="waves"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
                stroke="transparent"
                >
                <path
                    fill="#ffffff"
                    fill-opacity="1"
                    d="M0,256L48,218.7C96,181,192,107,288,101.3C384,96,480,160,576,165.3C672,171,768,117,864,90.7C960,64,1056,64,1152,85.3C1248,107,1344,149,1392,170.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                ></path>
                </svg>
            </div>
        </>
    );
}

export default Hero