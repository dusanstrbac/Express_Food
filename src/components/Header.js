import '../App.css';
import InfoCards from './InfoCards';

const logIn = document.querySelector('#headerLogin');
const signUp = document.querySelector('#headerSignup');
const search = document.querySelector('#heroSearch');

// EVENT LISTENERS



function Header() {
    return (
        <div className="Header">
            
            <div className="headerSection">
                <div className="nameCompany">
                    <h1 id="companyName">Express Food</h1>
                </div>

                <div className="headerAccount">
                    <button id="headerLogin">Log in</button>
                    <button id="headerSignup">Sign up</button>
                </div>
            </div>

            <div className="heroSection">
                <h1>Order food near you</h1>
                <div className="heroInput">
                    <input type="text" id="searchInput" placeholder="Enter delivery address" />
                    <button id="heroSearch">Search</button>
                </div>
            </div>

            <img id="headerBackground" src="HeroBackground.jpg"/>
        </div>
    );
}

export default Header;