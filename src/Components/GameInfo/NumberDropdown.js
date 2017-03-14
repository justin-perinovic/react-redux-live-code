import React from 'react';


function NumberDropdown(props) {
    const {min, max, ...selectProps} = props;

    const options = [];
    for (let i = min; i <= max; i++) {
        options.push(
            <option key={i} value={i}>{i}</option>
        )
    }

    return (
        <select {...selectProps}>
            {options}
        </select>
    );
}

NumberDropdown.propTypes = {
    min: React.PropTypes.number.isRequired,
    max: React.PropTypes.number.isRequired
};


export default NumberDropdown;