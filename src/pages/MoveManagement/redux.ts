import { ITapeSlot } from "../../interfaces/ITapeSlot"
import * as _ from 'lodash';
import { Reducer } from "react";


export interface IMoveMgmtState {
    sourceSlots: Array<ITapeSlot>
    destinationSlots: Array<ITapeSlot>
    source?: ITapeSlot
    destination?: ITapeSlot
    stagedMoves: Array<Array<ITapeSlot>> 
}

export enum Actions {
    SET_SOURCE,
    SET_DESTINATION,
    ADD_MOVE_TO_QUEUE
}

export const reducer: Reducer<IMoveMgmtState, { type: Actions, payload?: ITapeSlot }> = ( state: IMoveMgmtState, action: { type: Actions, payload?: ITapeSlot } ) => {
    switch( action.type ){
        case Actions.SET_SOURCE:
            if( _.isUndefined( action.payload ) ) throw `No source slot given for action type ${  action.type }`
            return { ...state, source: action.payload as ITapeSlot };
        case Actions.SET_DESTINATION:
            if( _.isUndefined( action.payload ) ) throw `No destination slot given for action type ${  action.type }`
            return { ...state, destination: action.payload };
        case Actions.ADD_MOVE_TO_QUEUE:
            if( _.isUndefined(state.source && state.destination) ) throw `Attempt to dispatch ${ action.payload } when source and/or destination have not been selected`
            return { 
                //remove slots from respective lists now that they're in the queue
                sourceSlots: state.sourceSlots.filter( iter => iter.id !== state.source?.id ), 
                destinationSlots: state.destinationSlots.filter( iter => iter.id !== state.destination?.id ),
                stagedMoves: [ ...state.stagedMoves, [ state.source as ITapeSlot, state.destination as ITapeSlot ] ],                
            }
        default: 
            return state;
    }
}
