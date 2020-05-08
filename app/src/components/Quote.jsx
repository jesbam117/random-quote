import React from 'react';

const Quote = ({ quote, author }) => {
    return (
        <div className="quote">
            <div className="quote-text">{quote}</div>
            <div className="quote-author">{author}</div>
        </div>
    );
};

export default Quote;