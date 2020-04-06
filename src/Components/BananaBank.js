import React, { Component } from 'react';
import './bananabank.css'
import logo from './bananabank.jpg'


class BananaBank extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
            sum: 0
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleEinzahlen = this.handleEinzahlen.bind(this);
    }
    handleChange(event) {
        this.setState({ value: event.target.value });
        event.preventDefault();
    }
    handleEinzahlen(event) {
        this.setState({ sum: this.state.sum + this.state.value });
        event.preventDefault();

    }

    render() {
        return (
            <section>
                <img src={logo} id="logoImg" alt="" />
                <h1 id="title">Banana Bank</h1>
                <div className="konto">
                    <h2>Dein Girokonto</h2>
                    <div className="saldo">
                        <h3>{this.state.sum} €</h3>
                    </div>
                    <input type="number"
                        className="geldbetrag"
                        placeholder="Gib einen Geldbetrag ein"
                        onChange={this.handleChange}
                        value={this.state.value}>
                    </input>
                    <br />
                    <input type="button" value="Einzahlen" className="einzahlen" onclick={this.handleEinzahlen} >{}</input>
                    <input type="button" value="Auszahlen" className="auszahlen"></input>
                </div>
            </section>
        );
    }
}

export default BananaBank;







// import React, { Component } from 'react';
// import './bankStyle.css';

// class Bank extends Component {
//     state = {
//         valueState: '',
//         sum: 0
//     }
//     handleChange = (event) => {
//         this.setState({ valueState: event.target.value });
//     }
//     plus = () => {
//         console.log(this.state.valueState)
//         this.setState({ sum: this.state.sum * 1 + this.state.valueState * 1 }, () => this.setState({ valueState: '' }));

//         ///document.getElementById("myForm").reset();
//     }
//     min = () => {
//         this.setState({ sum: this.state.sum * 1 - this.state.valueState * 1 }, () => this.setState({ valueState: '' }));
//     }
//     render() {
//         return (
//             <section className="main-sec" >
//                 <h2>Dein Girokonto</h2>
//                 <h1 id="show" >{this.state.sum === 0 ? 0 : this.state.sum}$</h1>
//                 <form action="" id="form">
//                     <input id="eingabe" type="Number" value={this.state.valueState} onChange={this.handleChange} placeholder="Gib ein Geldbetrag ein" /><br></br>
//                 </form>

//                 <div>
//                     <button onClick={this.plus} >+</button>
//                     <button onClick={this.min} >-</button>
//                 </div>
//             </section >
//         );
//     }
// }

// export default Bank;
