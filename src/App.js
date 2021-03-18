import React from 'react';

const App = () => {
    const accordionData = {
        title: `I'm an egg`,
        content: `and you're an egg too!`
    };

    const { title, content } = accordionData;

    return (
        <>
            <h1>React Accordion Example</h1>
            <div className="accordion">
                <div className="accordion-item">
                    <div className="accordion-title">
                        <div>{title}</div>
                        <div>+</div>
                    </div>
                    <div className="accordion-content">
                        {content}
                    </div>
                </div>
            </div>
        </>
    );
};

export default App;