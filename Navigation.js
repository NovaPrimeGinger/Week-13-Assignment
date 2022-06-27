import React from "react";
import 'bootstrap/dist/css/bootstrap.css';

export default class Navigation extends React.Component {
    render () {
        return (
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <a className="navbar-brand" href="index.html">Navigation</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="navbarNavDropdwon"
            aria-controls="#navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="">Home</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="">Members</a>
                    </li>
                </ul>
            </div>
            </nav>
        );
    }
}