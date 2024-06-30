import React from "react";
import ReactDOM from "react-dom/client";
import PropTypes from 'prop-types';
import "../styles/index.css";
import { Clock } from './component/Clock'

function Container(props) {
    return (<div className="row container-fluid holder">
        <div className="col-2 clockIcon">
            {<Clock/>}
        </div>
        <div className="col numberCounter five">
            {props.fifthDigit % 10}
        </div>
        <div className="col numberCounter four">
            {props.fourthDigit % 10}
        </div>
        <div className="col numberCounter three">
            {props.thirdDigit % 10}
        </div>
        <div className="col numberCounter two">
            {props.secondDigit % 10}
        </div>
        <div className="col numberCounter one">
            {props.firstDigit % 10}
        </div>
    </div>);
}

Container.propTypes = {
    fifthDigit: PropTypes.number,
    fourthDigit: PropTypes.number,
    thirdDigit: PropTypes.number,
    secondDigit: PropTypes.number,
    firstDigit: PropTypes.number
};

let counter = 0;
setInterval(function() {
    const five = Math.floor(counter/10000);
    const four = Math.floor(counter/1000);
    const three = Math.floor(counter/100);
    const two = Math.floor(counter/10);
    const one = Math.floor(counter);
    counter++;
    root.render(
        <Container firstDigit={one} secondDigit={two} thirdDigit={three} 
        fourthDigit={four} fifthDigit={five}/>
    )
}, 1000);

const root = ReactDOM.createRoot(document.querySelector("#app"));