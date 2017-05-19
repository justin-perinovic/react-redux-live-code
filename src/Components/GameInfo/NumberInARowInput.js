import React from 'react';

import NumberDropdown from 'Components/GameInfo/NumberDropdown';


function NumberInARowInput(props) {
    return (
        <div className="inputArea">
            <span>Number in a Row to Win:</span>
            &nbsp;
            <NumberDropdown onChange={props.onChange} value={props.currentNumber} min={2} max={8} />
        </div>
    )
}

NumberInARowInput.propTypes = {
    currentNumber: React.PropTypes.number.isRequired,
    onChange: React.PropTypes.func.isRequired
};


export default NumberInARowInput;