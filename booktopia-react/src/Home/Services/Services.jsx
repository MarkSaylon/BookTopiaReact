import './Services.css'
import truck from './delivery-truck.svg'
import gift from './gift.svg'
import credit from './credit.svg'
import comments from './comments.svg'

function Services(){

    return(
        <div class="weProvide">
            <div class="header">
                <h1 className='serviceTag'>We Provide</h1>
            </div>
            <div class="services">
            <div class="service">
                <img src={truck} alt="" className='serviceIcon1'/>
                <h2>Free Shipping</h2>
                <p>Delivery within 3 days</p>
            </div>
            <div class="service">
                <img src={gift} alt="" className='serviceIcon' />
                <h2>Gifts and Sales</h2>
                <p>Gift Coupons Available</p>
            </div>
            <div class="service">
                <img src={credit} alt="" className='serviceIcon'/>
                <h2>Secure Payments</h2>
                <p>100% Secure payments</p>
            </div>
            <div class="service">
                <img src={comments} alt="" className='serviceIcon'/>
                <h2>Online Support</h2>
                <p>24/7 Customer Support</p>
            </div>
            </div>
        </div>
    );
}

export default Services