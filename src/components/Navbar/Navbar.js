import React, {Component} from 'react';
import './Navbar.css';

class Navbar extends Component {
    render() {
        return(
            <nav className="navbar navbar-default navbar-fixed-top">
            <ul>
                <li className="item-left"></li>
                <li className="item-center"></li>
                <li className="item-right">Current Game Score: {this.props.score}</li>
            </ul>
            </nav>
        );
    }
}

export default Navbar;