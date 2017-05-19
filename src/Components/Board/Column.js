import _ from 'lodash';
import React from 'react';
import * as GameUtils from 'Utils/GameUtils';
import Tile from 'Components/Board/Tile';


class Column extends React.Component {
    constructor() {
        super();

        this.canAddTiles = this.canAddTiles.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);

        this.state = {
            isSelected: false
        };
    }

    componentWillReceiveProps(nextProps) {
        if (!this.canAddTiles(nextProps)) {
            this.setState({isSelected: false});
        }
    }

    canAddTiles(props) {
        return (
            !GameUtils.isColumnFull(props.columnData)
            && !props.isGameComplete
        );
    }

    handleMouseEnter() {
        if (this.canAddTiles(this.props)) {
            this.setState({isSelected: true});
        }
    }

    handleMouseLeave() {
        this.setState({isSelected: false});
    }

    handleClick() {
        if (this.canAddTiles(this.props)) {
            this.props.addTileToColumn();
        }
    }

    render() {
        const tiles = [];
        _.forEach(this.props.columnData, (occupantNumber, rowIndex) => {
            let wasWinningTile;
            if (this.props.isGameComplete) {
                wasWinningTile = _.has(
                    this.props.victoryTiles, 
                    [this.props.columnIndex, rowIndex]
                );
            }

            tiles.push(
                <Tile
                    key={rowIndex}
                    onClick={this.handleClick}
                    owningPlayerNumber={occupantNumber}
                    wasWinningTile={wasWinningTile}
                />
            )
        });

        
        const classNames = ['column'];
        if (this.state.isSelected) {
            classNames.push('selected')
        }

        const wrapperProps = {
            className: classNames.join(' '),
            onMouseEnter: this.handleMouseEnter,
            onMouseLeave: this.handleMouseLeave
        };
        
        return (
            <div {...wrapperProps}>
                {tiles}
            </div>
        );
    }
}

Column.propTypes = {
    columnData: React.PropTypes.object.isRequired,
    victoryTiles: React.PropTypes.object.isRequired,
    addTileToColumn: React.PropTypes.func.isRequired,
    columnIndex: React.PropTypes.number.isRequired,
    isGameComplete: React.PropTypes.bool.isRequired
};


export default Column;