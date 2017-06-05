import React from 'react';
import * as Sides from 'Constants/Sides'

const sideClasses = {
    [Sides.TOP]: 'top',
    [Sides.RIGHT]: 'right',
    [Sides.BOTTOM]: 'bottom',
    [Sides.LEFT]: 'left',
};

class Side extends React.Component {
    constructor(props) {
        super(props);

        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
        this.handleMouseDown = this.handleMouseDown.bind(this);

        this.state = {
            hoverActive: false
        };
    }

    handleMouseEnter() {
        this.setState({
            hoverActive: true
        });
    }

    handleMouseLeave() {
        this.setState({
            hoverActive: false
        });
    }

    handleMouseDown() {
        if (!this.props.owningPlayerNumber) {
            this.props.claimTile();
        }
    }

    render() {
        const classNames = [
            'side',
            sideClasses[this.props.side]
        ];

        if (!this.props.owningPlayerNumber) {
            if (!this.state.hoverActive) {
                classNames.push('unclaimed');
            } else {
                classNames.push('active')
            }
        } else {
            classNames.push(`player${this.props.owningPlayerNumber}Background`);
        }

        return (
            <div
                className={classNames.join(' ')}
                onMouseEnter={this.handleMouseEnter}
                onMouseLeave={this.handleMouseLeave}
                onMouseDown={this.handleMouseDown}
            >
            </div>
        )
    }
}

Side.propTypes = {
    side: React.PropTypes.string.isRequired,
    claimTile: React.PropTypes.func.isRequired,
    owningPlayerNumber: React.PropTypes.number
};

export default Side;