import React,{Component} from 'react';
// import Links from './Links';
import {Link} from 'react-router-dom';
import {postData} from '../fetch';
class Nav extends Component{
    constructor(props){
        super(props);

    }
    onClick(navObject){
        console.log(navObject.props);
        postData('/user/logout')
        .then((data)=>{
            console.log("logged out");
            navObject.props.changeLinks(false);
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    render(){
        let content='';
        if(this.props.isLoggedIn){
            content=
            <ul className="navbar-nav flex-grow-1">
                <li className="nav-item">
                    <span className="nav-link text-dark" onClick={()=>this.onClick(this)}>Logout</span>
                </li>
            </ul>
        }
        else{
            content=
            <ul className="navbar-nav flex-grow-1">                    
                <li className="nav-item">
                    <Link className="nav-link text-dark" to="/register">Register</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-dark" to="/login">Login</Link>
                </li>
            </ul>
        }
        return(
            <header>
                <nav className="navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3">
                    <div className="container">
                        <Link className="navbar-brand" to="#">Home</Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="navbar-collapse collapse d-sm-inline-flex flex-sm-row-reverse">
                            {content}
                        </div>
                        {/* <Links history={this.props.history}/> */}
                    </div>
                </nav>
            </header>
        );
    }
}
export default Nav;