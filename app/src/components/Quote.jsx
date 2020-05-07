import React from 'react';

const Quote = ({quote, author}) => {
    return (
        <div>
            <h1>{quote}</h1>
            <strong> - {author}</strong>
        </div>
    );
};

export default Quote;