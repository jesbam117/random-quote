import React from "react";

const Tweet = ({ quote, author }) => {
    let query = `"${quote}" ${author}`;
    let href = `https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${encodeURIComponent(query)}`;
    return (
        <a href={href} target="_blank" rel="noopener noreferrer">Tweet</a>
    );
};

export default Tweet;