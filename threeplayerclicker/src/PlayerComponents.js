import React, { Component } from 'react';

class PlayerComponents extends Component{
    constructor(props){
        super(props);
        this.state = {
            score: 0,
        }
    }

    whenButtonIsClicked = (e) =>{
        this.setState(
            {score: this.state.score + this.props.amount
            })
    };

    render(){
        return(
            <div>
                <h1>Player {this.props.name}</h1>
                <h1>Score {this.state.score}</h1>
                <button onClick={this.whenButtonIsClicked}>{this.props.amount} pt</button>
            </div>
        );
    }
}

export default PlayerComponents;