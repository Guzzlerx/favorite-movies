import { Component } from "react";
import "./Header.css";

class Header extends Component {
    render() {
        return (
            <nav className="orange lighten-0">
                <div className="nav-wrapper">
                    <a href="favorite movies" className="center brand-logo">
                        Favorite Movies
                    </a>
                </div>
            </nav>
        );
    }
}

export default Header;
