import './Bestsellers.css'
import book1 from './TheWomen.jpg'
import book2 from './TheHouseOfFlame.jpg'
import book3 from './FourthWing.jpg'
import book4 from './IronFlame.jpg'

function Bestsellers({onBookClick}){

    console.log('Bestsellers is alive');

    return(
        <div class="bestsellers">
            <div class="header">
            <h1 className='bestsellerTag'>Best Sellers</h1>
            </div>
            <div class="books">
            <div class="book">
                <img src={book1} alt="the women" />
                <div class="bookinfo">
                <h4>The Women</h4>
                <p>Kristin Hannah</p>
                <h4>$20.00</h4>
                </div>
            </div>
            <div class="book">
                <img src={book2} alt="the women" />
                <div class="bookinfo">
                <h4>The House of Flame and Shadow</h4>
                <p>Kristin Hannah</p>
                <h4>$20.00</h4>
                </div>
            </div>
            <div class="book">
                <img src={book3} alt="the women" />
                <div class="bookinfo">
                <h4>The Fourth Wing</h4>
                <p>Kristin Hannah</p>
                <h4>$20.00</h4>
                </div>
            </div>
            <div class="book">
                <img src={book4} alt="the women" />
                <div class="bookinfo">
                <h4>Iron Flame</h4>
                <p>Kristin Hannah</p>
                <h4>$20.00</h4>
                </div>
            </div>
            </div>
            <button onClick={onBookClick} class="SeeMore">Take a look!</button>
        </div>
    );

}

export default Bestsellers