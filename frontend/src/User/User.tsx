import React, { Component } from 'react'
import IUser from './IUser';
import "./User.css";


interface Props{
    name:string;
    email:string;
}


interface State{
    isLoggedIn :boolean;
}
export default class User extends Component<Props,State> {
    constructor(props:Props){
        // initialized props
        super(props);

        // initialize state
        this.state = {
            isLoggedIn:false
        }
        // console.log("Inside Constructor",props);
        
    }

    login = (e)=>{
        console.log(e);
        this.setState({isLoggedIn:true})
    }


    render() {
        // console.log("render");
        
        const {name,email} = this.props;
                
        return (
            <>
            <div className="box">
                <h1>name : {name}</h1>
                <h1>email :{email}</h1>
                <h1 className={this.state.isLoggedIn?"loggedin":'loggedout'}>
                    {this.state.isLoggedIn?"User logged in":"Logged out"}</h1>
                <button onClick={this.login}>Login</button>
            </div>
                
            </>
        )
    }
}
