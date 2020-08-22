import React from 'react';
import '../css/Footer.css'


export default function Footer() {

    return(
        <footer className="main-footer">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h4>StreamBoat Inc</h4>
                        <ul className="list-unstyled">
                            <li>GitHub Usernames</li>
                            <li>Florida, USA</li>
                            <li>V1.0</li>
                        </ul>
                    </div>
                    <div className="col">
                        <h4>Follow us!</h4>
                        <ul className="list-unstyled">
                            <li>Twitter</li>
                            <li>Spotify</li>
                            <li>Instagram</li>
                        </ul>
                    </div>
                    <div className="col">
                        <h4>Resources</h4>
                        <ul className="list-unstyled">
                            <li>Wiki</li>
                            <li>Music</li>
                            <li>Licensing</li>
                        </ul>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <p className="col-sm">
                        &copy;{new Date().getFullYear()} STREAMBOAT INC | All rights reserved | Terms Of Service | Privacy
                    </p>
                </div>
            </div>
        </footer>
    );
}