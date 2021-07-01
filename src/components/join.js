import React, { useState } from "react";
import "./../join.css";
import { Link } from "react-router-dom";
//import techno from "./Game/images/logo.png"

export default function Join(){
    return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
      <img className="image" src={require("./Game/images/pub.png")} alt="Technotholon" width="200" height="200"></img>
        <h1 className="heading">Giant Chess Of Despair</h1>
        <h2 className="subheading">AI</h2>
        <hr></hr>
        <div>
        <Link 
            to={{
                pathname:`/game`,
                state: {
                    name: "name",
                    roomid:"gsfgasdfg"
                }
            }}
        >
          <button className={'buttonc '} type="submit">Create Game</button>
        </Link>
        
        <h3>OR</h3>
        
        <Link to={{pathname:`/game`,state: {name: "nvczxvame", roomid:"room"}}}>
          <button className={'button'} type="submit">Join Game</button>
        </Link>
        
        </div>
      </div>
    
    
    </div>
    );
};