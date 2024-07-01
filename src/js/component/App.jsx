import React, { useState } from 'react';
import { Container } from './Container';

export const App = () => {
    const [ counter, setCounter ] = useState(0);
    const [ id, setId ] = useState();

    return (
        <>
        <Container
            firstDigit={Math.floor(counter)}
            secondDigit={Math.floor(counter/10)}
            thirdDigit={Math.floor(counter/100)}
            fourthDigit={Math.floor(counter/1000)}
            fifthDigit={Math.floor(counter/10000)}
        />
        <button className='btn btn-primary' onClick={(event) => {
            clearInterval(id);
            setId(undefined);
        }}>Stop</button>
        <button className='btn btn-success' onClick={(event) => {
            if(!id) {
                const _id = setInterval(
                    () => {
                        setCounter((prevCounter) => prevCounter + 1);
                    },
                    1000
                );
                setId(_id);
            };
        }}>Start</button>
        <button className='btn btn-warning' onClick={(event) => {
            setCounter(0);
        }}>Reset</button>
        </>
    );
};