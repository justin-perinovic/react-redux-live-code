import _ from 'lodash';
import React from 'react';
import * as GameUtils from 'Utils/GameUtils';
import Tile from 'Components/Board/Tile';


class Column extends React.Component {
    constructor() {
        super();

        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
        this.handleClick = this.handleClick.bind(this);

        this.state = {
            isActive: false
        };
    }

    componentWillReceiveProps(nextProps) {
        if (GameUtils.isColumnFull(nextProps.columnData) || nextProps.isGameComplete) {
            this.setState({isActive: false});
        }
    }

    handleMouseEnter() {
        if (!GameUtils.isColumnFull(this.props.columnData)) {
            this.setState({isActive: true});
        }
    }

    handleMouseLeave() {
        this.setState({isActive: false});
    }

    handleClick() {
        if (!GameUtils.isColumnFull(this.props.columnData)) {
            this.props.addToColumn();
        }
    }

    render() {
        const tiles = [];
        _.forEach(this.props.columnData, (occupant, tileIndex) => {
            const tileProps = {};
            if (occupant) {
                tileProps.owningPlayerNumber = occupant;
            }
            if (this.props.isGameComplete) {
                tileProps.wasWinningTile = _.has(this.props.victoryTiles, [this.props.columnNumber, tileIndex]);
            }

            tiles.push(
                <Tile key={tileIndex} {...tileProps} />
            );
        });

        const columnClasses = ['column'];
        if (this.state.isActive) {
            columnClasses.push('selected');
        }

        const wrapperProps = {className: columnClasses.join(' ')};
        if (!this.props.isGameComplete) {
            wrapperProps.onMouseEnter = this.handleMouseEnter;
            wrapperProps.onMouseLeave = this.handleMouseLeave;
            wrapperProps.onClick = this.handleClick;
        }

        return (
            <div {...wrapperProps}>
                {tiles}
            </div>
        );
    }
}

Column.defaultProps = {
    columnData: React.PropTypes.object.isRequired,
    isGameComplete: React.PropTypes.bool.isRequired
};


export default Column;