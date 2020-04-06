import React, { Component } from 'react';
import './faq.css'

class FaqItems extends Component {
    state = {
        questionFlag: '+',
        shortAnswerFlag: '+',
        shortAnswerSituation: false,
        longAnswerSituation: false,
        shortAnswerDisplay: 'none',
        longAnswerDisplay: 'none',
    }

    answer = () => {
        if (this.state.shortAnswerSituation === false) {
            this.setState({ questionFlag: '-' });
            this.setState({ shortAnswerDisplay: 'flex' });
            this.setState({ shortAnswerSituation: true });
        } else {
            this.setState({ questionFlag: '+' });
            this.setState({ shortAnswerDisplay: 'none' });
            this.setState({ shortAnswerSituation: false });
            this.setState({ longAnswerDisplay: 'none' });
            this.setState({ shortAnswerFlag: '+' });
        }
    }
    answerLong = () => {
        if (this.state.longAnswerSituation === false) {
            this.setState({ shortAnswerFlag: '-' });
            this.setState({ longAnswerDisplay: 'block' });
            this.setState({ longAnswerSituation: true });
        } else {
            this.setState({ shortAnswerFlag: '+' });
            this.setState({ longAnswerDisplay: 'none' });
            this.setState({ longAnswerSituation: false });
        }
    }
    render() {
        return (

            <article>
                <div className='question'>
                    <h2>{this.props.question}</h2>
                    <button onClick={(() => this.answer())}>{this.state.questionFlag}</button>
                </div>
                <div className='answer' style={{ display: this.state.shortAnswerDisplay }}>
                    <h3>{this.props.answer}</h3>
                    <button onClick={this.answerLong}>{this.state.shortAnswerFlag}</button>
                </div>
                <p style={{ display: this.state.longAnswerDisplay }}>{this.props.answerLong}</p>
            </article>

        );
    }
}

export default FaqItems;