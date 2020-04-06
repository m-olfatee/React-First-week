import React, { Component } from 'react';
import './counter.css'
class Counter extends Component {
    state = {
        num: 0
    }
    plusClik = () => {
        this.setState({ num: this.state.num + 1 });
    }
    minusClick = () => {
        this.setState({ num: this.state.num - 1 })
    }
    resetClick = () => {
        this.setState({ num: 0 })
    }
    render() {
        return (
            <section>

                <button onClick={this.plusClik}>+</button>
                <p>{this.state.num}</p>
                <button onClick={this.minusClick}>-</button>
                <button onClick={this.resetClick}>Reset</button>
            </section>
        );
    }
}

export default Counter;