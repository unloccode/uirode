import React from 'react';
import {Link} from 'react-router-dom';

export default class AppNavbar extends React.Component{
    render(){
        return(
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                <div className="navbar-brand">
                    <Link to="/">
                        <button className="btn btn-warning">Account Settings</button>
                    </Link>
                </div>
            </nav>
        );
    }
}