import React, { useState, useEffect } from 'react';
import Quote from './Quote';
import Tweet from './Tweet';

const API_URI = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';

const QuoteMachine = () => {
    const [quotes, setQuotes] = useState([]);
    const [index, setIndex] = useState(0);

    const getRandomInt = (min, max) => {
        return Math.floor(Math.random() * (max - min)) + min;
    };

    const generateRandomIndex = (quotes) => {
        setIndex(getRandomInt(0, quotes.length));
    }

    useEffect(() => {
        const fetchQuotes = async () => {
            let request = await fetch(API_URI);
            let data = await request.json();
            setQuotes(data.quotes);
        };

        fetchQuotes();
    }, []);


    useEffect(() => {

        if (quotes.length > 0) {
            setIndex(getRandomInt(0, quotes.length));
        }
    }, [quotes]);

    return (
        <div>
            {
                quotes.length > 0 &&
                <>
                    <Quote quote={quotes[index].quote} author={quotes[index].author} />
                    <Tweet quote={quotes[index].quote} author={quotes[index].author} />
                    <button onClick={() => generateRandomIndex(quotes)}>New Quote</button>
                </>
            }
        </div>
    );
};

export default QuoteMachine;