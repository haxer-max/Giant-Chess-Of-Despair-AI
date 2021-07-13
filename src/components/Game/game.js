import React, { Component } from "react";
//import "./Game.css";
//import { Modal, Button, ModalBody } from "react-bootstrap";
import "./ui.css";
//import "bootstrap/dist/css/bootstrap.min.css";
//import React from "react";
import Box from "./Board/box.js";
import pieceRotation from "./Board/pieceRotation";
import wallRotation from "./Board/wallRotation";
import whitescore from "./Board/whitescore";
import blackscore from "./Board/blackscore";
import greenlogic from "./Board/greenlogic";
//import { AboutModal } from "./AboutModal";
//import { RulesModal } from "./RulesModal";
import "./../../css/App.css";
import AIplay from "./AI/AIplay";

const sizex = 15;
const sizey = 10;

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            BoardState: [
                [3, 0, 0, 0, 1, 5, 0, 0, 0, -5, -1, 0, 0, -5, -4],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -3],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -2],
                [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -2],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [4, 5, 0, 0, 1, 5, 0, 0, 0, -5, -1, 0, 0, 0, -3],
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
            valids: [],
            turn: 1,
            rot: 2,
            ended: 0,
        };

        this.selectedboxI = -1;
        this.selectedboxJ = -1;
        this.selectedPiece = 0;
        this.counter = 0;
        this.isWhite = undefined;
        this.score1 = 0;
        this.score2 = 0;
        this.AIplay = AIplay;

        this.movepiece = (i, j) => {
            if (this.state.ended === 1) return;
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
                            const validtemp = [];
                            greenlogic(
                                i,
                                j,
                                this.state.BoardState,
                                this.state.walls,
                                validtemp
                            );
                            this.setState({
                                valids: validtemp,
                            });
                            //console.log(this.state.valids);
                        }
                    }
                }
            } else {
                if (this.state.valids.includes(i * 15 + j)) {
                    if (
                        (this.isWhite === 1 &&
                            this.state.BoardState[i][j] === -4) ||
                        (this.isWhite === 0 &&
                            this.state.BoardState[i][j] === 4)
                    ) {
                        this.state.ended = 1;
                        console.log("winwin");
                    }
                    this.state.BoardState[i][j] = this.selectedPiece;
                    this.state.BoardState[this.selectedboxI][
                        this.selectedboxJ
                    ] = 0;
                    this.setState({
                        valids: [],
                    });
                    if (!this.state.ended) {
                        const isBlack = this.isWhite ? 0 : 1;
                        this.AIplay(this.state.BoardState,this.state.walls,this.state.rot,isBlack);
                        this.turn = this.isWhite;
                        this.setState({});
                        //console.log(this.state.BoardState);
                    }
                } else {
                    this.setState({
                        valids: [],
                    });
                }
                this.score1 = whitescore(this.state.BoardState);
                this.score2 = blackscore(this.state.BoardState);

                this.selectedPiece = 0;
            }
        };
    }

    rotate(i, j) {
        if (this.state.ended === 1) return;
        if (this.state.turn == !this.isWhite) return;
        wallRotation(this.state.walls, i, j, this.isWhite);
        pieceRotation(this.state.BoardState, i, j, this.isWhite);
        this.setState({
            rot: 0,
        });
    }

    componentDidMount() {
        //console.log("hm " + this.props.location.state.roomid);
        this.isWhite = 1;
        this.setState({
            valids: [],
        });
        if (this.isWhite !== this.state.turn) {
            const isBlack = this.isWhite ? 0 : 1;
            this.AIplay(this.state.BoardState,this.state.walls,this.state.rot,isBlack);
            this.turn = this.isWhite;
            this.setState({});
        }
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
                isgreen={this.state.valids.includes(15 * i + j)}
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
                        Your Room ID is{" "}
                        <span className="code">
                            {this.props.location.state.roomid}
                        </span>
                    </p>
                    <h2 className="chess">Giant Chess of Despair</h2>
                    <nav>
                        {/* <AboutModal />
                        <RulesModal /> */}
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
                            className="rot"
                            onClick={() => {
                                this.rotate(0, 0);
                            }}
                        >
                            Rotate
                        </button>
                        <button
                            className="rot"
                            onClick={() => {
                                this.rotate(0, 5);
                            }}
                        >
                            Rotate
                        </button>
                        <button
                            className="rot"
                            onClick={() => {
                                this.rotate(0, 10);
                            }}
                        >
                            Rotate
                        </button>
                    </div>
                    <div>{ll}</div>
                    <div style={{ display: "flex" }}>
                        <button
                            className="rot"
                            onClick={() => {
                                this.rotate(5, 0);
                            }}
                        >
                            Rotate
                        </button>
                        <button
                            className="rot"
                            onClick={() => {
                                this.rotate(5, 5);
                            }}
                        >
                            Rotate
                        </button>
                        <button
                            className="rot"
                            onClick={() => {
                                this.rotate(5, 10);
                            }}
                        >
                            Rotate
                        </button>
                    </div>
                </div>

                <div className="timer">
                    {(() => {
                        if (this.state.ended === 0) {
                            return (
                                <button className="stop">
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
