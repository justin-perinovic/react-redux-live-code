import React from 'react';

import NumberDropdown from 'Components/GameInfo/NumberDropdown';


function RowCountInput(props) {
    return (
        <div className="inputArea">
            <span>Row Count:</span>
            &nbsp;
            <NumberDropdown onChange={props.onChange} value={props.currentCount} min={3} max={12} />
        </div>
    )
}

RowCountInput.propTypes = {
    currentCount: React.PropTypes.number.isRequired,
    onChange: React.PropTypes.func.isRequired
};


export default RowCountInput;