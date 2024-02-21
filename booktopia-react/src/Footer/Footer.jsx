import './Footer.css'


function Footer(){

    return(
        <div className="footer">
            <footer>
                <p>&copy; {new Date().getFullYear()}  BookTopia</p>
            </footer>
        </div>
    )
}

export default Footer