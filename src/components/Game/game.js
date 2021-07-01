import React, { Component } from "react";
//import "./Game.css";
import { Modal, Button, ModalBody } from "react-bootstrap";
import Clock from "./timer";
import "./ui.css";
import "bootstrap/dist/css/bootstrap.min.css";
//import React from "react";
import Box from "./Board/box.js";
import io from "socket.io-client";
import pieceRotation from "./Board/pieceRotation";
import wallRotation from "./Board/wallRotation";
import whitescore from "./Board/whitescore";
import blackscore from "./Board/blackscore";
import greenlogic from "./Board/greenlogic";
import { AboutModal } from "./AboutModal";
import { RulesModal } from "./RulesModal";
import "./../../css/App.css";
//import wallslogicc from "./Board/wallslogicc"
//import { render } from "@testing-library/react";

const serverURI = "http://localhost:4000";
const sizex = 15;
const sizey = 10;
const initgreen = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];
class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            BoardState: [
                [3, 0, 0, 0, 1, 5, 0, 0, 0,-5,-1, 0, 0,-5,-4],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,-3],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,-2],
                [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,-2],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,-1],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [4, 5, 0, 0, 1, 5, 0, 0, 0,-5,-1, 0, 0, 0,-3],
            ],
            walls: [
                [2, 3, 1, 4, 0, 4, 3, 3, 0, 1, 0, 3, 4, 0, 3],
                [0, 0, 4, 0, 0, 0, 0, 0, 4, 0, 4, 0, 3, 0, 0],
                [4, 3, 0, 3, 0, 4, 0, 0, 4, 0, 0, 0, 4, 0, 0],
                [0, 4, 0, 0, 4, 4, 0, 3, 3, 0, 3, 0, 0, 3, 2],
                [0, 0, 0, 3, 2, 3, 0, 0, 4, 3, 0, 3, 2, 0, 0],
                [3, 3, 4, 0, 3, 4, 3, 3, 0, 0, 4, 0, 0, 0, 0],
                [4, 0, 0, 0, 0, 0, 0, 0, 4, 4, 0, 3, 4, 3, 0],
                [0, 4, 3, 0, 0, 4, 0, 0, 4, 0, 0, 0, 0, 4, 0],
                [3, 0, 0, 4, 3, 4, 0, 3, 3, 0, 0, 4, 0, 3, 0],
                [0, 4, 0, 1, 0, 3, 0, 0, 4, 0, 4, 0, 3, 0, 4],
            ],
            timeLeft: 60 * 20,
            whiteTime: 60 * 20,
            blackTime: 60 * 20,
            gamestarted: 0,
            turn: -1,
            joined: 0,
            rot: -1,
            ended: 0,
            green: [
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            ],
        };

        this.selectedboxI = -1;
        this.selectedboxJ = -1;
        this.selectedPiece = 0;
        this.counter = 0;
        //this.isWhite=undefined;
        this.socket = io(serverURI);
        this.score1 = 0;
        this.score2 = 0;

        this.movepiece = (i, j) => {
            if (this.state.ended === 1) return;
            if (this.state.gamestarted === 0) return;
            this.score1 = whitescore(this.state.BoardState);
            this.score2 = blackscore(this.state.BoardState);
            if (this.state.turn == !this.isWhite) return;
            if (this.selectedPiece === 0) {
                if (this.state.BoardState[i][j] !== 0) {
                    this.selectedboxI = i;
                    this.selectedboxJ = j;
                    if (this.state.BoardState[i][j] !== 0) {
                        if (
                            (this.isWhite === 1 &&
                                this.state.BoardState[i][j] > 0) ||
                            (this.isWhite === 0 &&
                                this.state.BoardState[i][j] < 0)
                        ) {
                            this.selectedPiece = this.state.BoardState[i][j];
                            valids=[];
                            greenlogic(
                                i,
                                j,
                                this.state.BoardState,
                                this.state.walls,
                                valids
                            );
                        }
                    }
                }
            } else {
                if (this.state.green[i][j] === 1) {
                    if (
                        (this.isWhite === 1 && this.state.BoardState[i][j] === -4) ||
                        (this.isWhite === 0 && this.state.BoardState[i][j] === 4)
                    ) {
                        console.log("winwin");
                    }
                    this.state.BoardState[i][j] = this.selectedPiece;
                    this.state.BoardState[this.selectedboxI][this.selectedboxJ] = 0;
                }

                this.score1 = whitescore(this.state.BoardState);
                this.score2 = blackscore(this.state.BoardState);

                this.selectedPiece = 0;
            }
        };
    }
    rotate(i, j) {
        if (this.state.ended === 1) return;
        if (this.state.gamestarted === 0) return;
        if (this.state.turn == !this.isWhite) return;
        const boardtemp = this.state.BoardState.map(function (arr) {
            return arr.slice();
        });
        const wallstemp = this.state.walls.map(function (arr) {
            return arr.slice();
        });
        wallRotation(wallstemp, i, j, this.isWhite);
        pieceRotation(boardtemp, i, j, this.isWhite);
        this.socket.emit("rotated", { board: boardtemp, wall: wallstemp });
    }

    componentDidMount() {
        console.log("hm " + this.props.location.state.roomid);
        this.join(
            this.props.location.state.roomid,
            this.props.location.state.name
        );        
    }


    renbox(i, j) {
        return (
            <Box
                key={j + i * sizex}
                colour={j + i * sizex}
                v={this.state.BoardState[i][j]}
                w={this.state.walls[i][j]}
                onClick={() => {
                    this.movepiece(i, j);
                }}
                isgreen={this.state.green[i][j]}
            />
        );
    }

    render() {
        let ll = [];
        for (var i = 0; i < sizey; i++) {
            for (var j = 0; j < sizex; j++) {
                ll.push(this.renbox(i, j));
            }
            ll.push(<span key={-i - 1}>&#010;</span>);
        }
        return (
            <div className="main">
                <div className="navbar">
                    <p className="roomid">
                        Your Room ID is <span className="code">{this.props.location.state.roomid}</span>
                    </p>
                    <h2 className="chess">Giant Chess of Despair</h2>
                    <nav>
                        <AboutModal />
                        <RulesModal />
                    </nav>
                    {(() => {
                        if (this.isWhite !== undefined) {
                            if (this.isWhite === 1)
                                return <h2 className="you">You are White</h2>;
                            else return <h2 className="you">You are Black</h2>;
                        }
                    })()}
                </div>
                <div className="boardclass">
                    <div style={{ display: "flex" }}>
                        <button
                            className="btn btn-info"
                            style={{    cursor:"pointer",
                                marginLeft:"115px",
                                marginRight:"110px",
                                marginBottom: "5px",
                                marginTop: "5px"}}
                            onClick={() => {
                                this.rotate(0, 0);
                            }}
                        >
                            {" "}
                            Rotate{" "}
                        </button>
                        <button
                            className="btn btn-info"
                            style={{    cursor:"pointer",
                                marginLeft:"115px",
                                marginRight:"110px",
                                marginBottom: "5px",
                                marginTop: "5px"}}
                            onClick={() => {
                                this.rotate(0, 5);
                            }}
                        >
                            {" "}
                            Rotate{" "}
                        </button>
                        <button
                            className="btn btn-info"
                            style={{    cursor:"pointer",
                                marginLeft:"115px",
                                marginRight:"110px",
                                marginBottom: "5px",
                                marginTop: "5px"}}
                            onClick={() => {
                                this.rotate(0, 10);
                            }}
                        >
                            {" "}
                            Rotate{" "}
                        </button>
                    </div>
                    <div>{ll}</div>
                    <div style={{ display: "flex" }}>
                        <button
                            className="btn btn-info"
                            style={{    cursor:"pointer",
                                marginLeft:"115px",
                                marginRight:"110px", 
                                marginBottom: "5px",
                                marginTop: "5px"}}
                            onClick={() => {
                                this.rotate(5, 0);
                            }}
                        >
                            {" "}
                            Rotate{" "}
                        </button>
                        <button
                            className="btn btn-info"
                            style={{    cursor:"pointer",
                                marginLeft:"115px",
                                marginRight:"110px", 
                                marginBottom: "5px",
                                marginTop: "5px"}}
                            onClick={() => {
                                this.rotate(5, 5);
                            }}
                        >
                            {" "}
                            Rotate{" "}
                        </button>
                        <button
                            className="btn btn-info"
                            style={{    cursor:"pointer",
                                marginLeft:"115px",
                                marginRight:"110px", 
                                marginBottom: "5px",
                                marginTop: "5px"}}
                            onClick={() => {
                                this.rotate(5, 10);
                            }}
                        >
                            {" "}
                            Rotate{" "}
                        </button>
                    </div>
                </div>

                <div className="timer">
                    {(() => {
                        if (this.state.ended === 0) {
                            return (
                                <button
                                    className="btn btn-danger"
                                >
                                    I wanna give up
                                </button>
                            );
                        }
                    })()}
                </div>

            </div>
        );
    }
}

export default Game;
