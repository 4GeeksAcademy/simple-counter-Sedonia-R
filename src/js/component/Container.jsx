import React from 'react';
import PropTypes from 'prop-types';
import { Clock } from './Clock';

export function Container(props) {
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