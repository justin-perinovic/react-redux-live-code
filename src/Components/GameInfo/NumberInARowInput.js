import React from 'react';

import NumberDropdown from 'Components/GameInfo/NumberDropdown';


function NumberInARowInput(props) {
    return (
        <div className="inputArea">
            <span>Number in a Row to Win:</span>
            &nbsp;
            <NumberDropdown onChange={props.onChange} value={props.currentNumber} min={4} max={8} />
        </div>
    )
}

NumberInARowInput.defaultProps = {
    currentNumber: React.PropTypes.number.isRequired,
    onChange: React.PropTypes.func.isRequired
};


export default NumberInARowInput;