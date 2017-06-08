import _ from 'lodash';
import * as BoardUtils from 'Utils/BoardUtils';
import * as ActionTypes from 'Constants/ActionTypes';
import getInitialState from 'Reducers/InitialStates/BoardInitialState';


let statePatch;
export default function(state = getInitialState(), action) {
    switch (action.type) {
        default:
            return state;
    }
};