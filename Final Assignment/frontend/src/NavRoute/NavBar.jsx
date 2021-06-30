import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return (
        <React.Fragment>
        <nav class="navbar sticky-top navbar-dark bg-dark">
        <div class="container-fluid">
        <Link to='/' className="navbar-brand m-5"><strong>Home</strong></Link>   
        <Link to='/posts' className="navbar-brand m-5"><strong>Posts</strong></Link>    
        </div>
        </nav>
        </React.Fragment>
        );
    }
}