import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <header>
                <nav>
                    <div className="nav-wrapper grey">
                        <h5 className="brand-logo center">Trading hour</h5>
                    </div>
                </nav>
            </header>
        );
    }
}

export default Header;
