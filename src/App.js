import React, { useState } from 'react';
import './styles.css';
import Accordion from './Accordion';

const App = () => {


    const accordionData = [
        {
            title: `TITLE`,
            content: `and you're an egg too!`
        },
        {
            title: 'TITLE 2',
            content: 'maybe we\'re both eggs'
        },
        {
            title: 'title 3',
            content: 'definitely the second option'
        }
    ];

    const { title, content } = accordionData;


    return (
        <div className="container">
            <h1>React Accordion Menu Example</h1>
            <div className="accordion">
                {accordionData.map(({ title, content }) => (
                    <Accordion title={title} content={content} />)
                )}
            </div>
        </div>
    );
};

export default App;