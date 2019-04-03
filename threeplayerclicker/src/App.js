import React, { Component } from 'react';
import './App.css';
import PlayerComponents from "./PlayerComponents";

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            amount: 1,
        }
    }

    goUpBy1 = (e)=>{
        this.setState({amount: 1});
    };

    goUpBy5 = (e)=>{
        this.setState({amount: 5});
    };

    goUpBy10 = (e)=>{
        this.setState({amount: 10});
    };

    render() {
        return (
            <div>
                <button onClick={this.goUpBy1}>1 pt</button>
                <button onClick={this.goUpBy5}>5 pts</button>
                <button onClick={this.goUpBy10}>10 pts</button>
                <div className="App">
                    <PlayerComponents name={1} amount={this.state.amount}/>
                    <PlayerComponents name={2} amount={this.state.amount}/>
                    <PlayerComponents name={3} amount={this.state.amount}/>
                </div>
            </div>
        );
    }
}

export default App;
