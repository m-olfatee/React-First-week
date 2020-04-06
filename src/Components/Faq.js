import React, { Component } from 'react';
import { faq } from './FaqData';
import FaqItems from './FaqItems'

class Faq extends Component {
    state = {
        faqState: faq,
    }
    render() {
        const mapArray = this.state.faqState.map((elt, i) => {
            return <FaqItems question={elt.question} answer={elt.answer} answerLong={elt.answerLong} key={i} />
        })
        return (

            <section>
                {mapArray}
            </section >
        );
    }
}
export default Faq;

