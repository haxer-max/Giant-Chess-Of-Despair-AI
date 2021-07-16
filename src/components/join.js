import React, { useState } from "react";
import "./../join.css";
import { Link } from "react-router-dom";
//import techno from "./Game/images/logo.png"

export default function Join() {
    return (
        <div className="joinOuterContainer">
            <div className="joinInnerContainer">
                <img
                    className="image"
                    src={process.env.PUBLIC_URL+"/logo.png"}
                    alt="GCOD"
                    width="200"
                    height="200"
                ></img>
                <h1 className="heading">Giant Chess Of Despair</h1>
                <h2 className="subheading">Artificial Intelligence</h2>
                <hr></hr>
                <div>
                    <Link
                        to={{
                            pathname: `/game`,
                            state: {
                                white: 1,
                                //roomid:"gsfgasdfg"
                            },
                        }}
                    >
                        <button className={"buttonc "} type="submit">
                            Create Game
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
