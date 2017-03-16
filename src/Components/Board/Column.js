import _ from 'lodash';
import React from 'react';
import * as GameUtils from 'Utils/GameUtils';
import Tile from 'Components/Board/Tile';


class Column extends React.Component {
    constructor() {
        super();

        this.handleClick = this.handleClick.bind(this);
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);

        this.state = {
            isSelected: false
        };
    }

    componentWillReceiveProps(nextProps) {
        if (GameUtils.isColumnFull(nextProps.columnData) || nextProps.isGameComplete) {
            this.setState({isSelected: false});
        }
    }

    handleClick() {
        this.props.addToColumn();
    }

    handleMouseEnter() {
        if (!GameUtils.isColumnFull(this.props.columnData)) {
            this.setState({isSelected: true});
        }
    }

    handleMouseLeave() {
        this.setState({isSelected: false});
    }

    render() {
        const tiles = [];
        _.forEach(this.props.columnData, (occupantNumber, rowIndex) => {
            const tileProps = {
                key: rowIndex,
                owningPlayerNumber: occupantNumber
            };
            if (this.props.isGameComplete) {
                tileProps.wasWinningTile = _.has(this.props.victoryTiles, [this.props.columnIndex, rowIndex]);
            }

            tiles.push(
                <Tile {...tileProps} />
            )
        });

        const wrapperClasses = ['column'];
        if (this.state.isSelected) {
            wrapperClasses.push('selected');
        }

        const wrapperProps = {className: wrapperClasses.join(' ')};
        if (!this.props.isGameComplete) {
            wrapperProps.onClick = this.handleClick;
            wrapperProps.onMouseEnter = this.handleMouseEnter;
            wrapperProps.onMouseLeave = this.handleMouseLeave;
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
    addToColumn: React.PropTypes.func.isRequired,
    columnIndex: React.PropTypes.number.isRequired
};


export default Column;