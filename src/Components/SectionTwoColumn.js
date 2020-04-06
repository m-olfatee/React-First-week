import React from 'react';
import picture from '../yoga1.jpeg'
import './sectiontwocolumn.css'
const SectionTwoColumn = () => {
    return (
        <section className="two">
            <div>
                <h1>Lorem ipsum dolor sit.</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa odio eius placeat quis dolor voluptatem molestiae molestias exercitationem iste voluptates?</p>
                <button>Click</button>
            </div>
            <div>
                <img src={picture} alt="" />
            </div>
        </section>
    );
}

export default SectionTwoColumn;