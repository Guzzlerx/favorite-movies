import { Component } from "react";

class Footer extends Component {
    render() {
        return (
            <footer className="page-footer orange lighten-0">
                <div className="footer-copyright">
                    <div className="container">
                        © {new Date().getFullYear()} Andrew
                        <a
                            className="grey-text text-lighten-4 right"
                            rel="noreferrer"
                            target="_blank"
                            href="https://github.com/Guzzlerx"
                        >
                            Github repo
                        </a>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
