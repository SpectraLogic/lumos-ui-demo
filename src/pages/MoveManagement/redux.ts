import { ITapeSlot } from "../../interfaces/ITapeSlot"
import * as _ from 'lodash';
import { Reducer } from "react";

export enum MoveStatus {
    Pending = "Pending", 
    InProgress = "In Progress",
    Success = "Succeeded",
    Fail = "Failed"
}

export interface IMoveMgmtState {
    sourceSlots: Array<ITapeSlot>
    destinationSlots: Array<ITapeSlot>
    source?: ITapeSlot
    destination?: ITapeSlot
    stagedMoves: Array<Array<ITapeSlot>> 
    issuedMoves: Array<Array<ITapeSlot>>
    concludedMoves: Array<Array<ITapeSlot>> //NO PENDING OR IN-PROGRESS MOVES
    moveStatus: { [barcode: string]: MoveStatus }
}

export enum Actions {
    SET_SOURCE,
    SET_DESTINATION,
    ADD_MOVE_TO_QUEUE,
    SUBMIT_QUEUE,
    DISCARD_QUEUE,
    MOVE_COMPLETE,
    DISCARD_COMPLETED 
}

// { type: Actions, payload?: ITapeSlot | { barcode: string, status: MoveStatus}
export const reducer: Reducer<IMoveMgmtState, { type: Actions, payload?: ITapeSlot | { barcode: string, status: MoveStatus } }> = ( state: IMoveMgmtState, action ) => {
    switch( action.type ){
        case Actions.SET_SOURCE:
            if( _.isUndefined( action.payload ) ) throw `No source slot given for action type ${  action.type }`
            return { ...state, source: action.payload as ITapeSlot };
        case Actions.SET_DESTINATION:
            if( _.isUndefined( action.payload ) ) throw `No destination slot given for action type ${  action.type }`
            return { ...state, destination: action.payload as ITapeSlot };
        case Actions.ADD_MOVE_TO_QUEUE:
            if( _.isUndefined(state.source && state.destination) ) throw `Attempt to dispatch ${ action.payload } when source and/or destination have not been selected`
            return { 
                //remove slots from respective lists now that they're in the queue
                sourceSlots: state.sourceSlots.filter( iter => iter.id !== state.source?.id ), 
                destinationSlots: state.destinationSlots.filter( iter => iter.id !== state.destination?.id ),
                stagedMoves: [ ...state.stagedMoves, [ state.source as ITapeSlot, state.destination as ITapeSlot ] ],   
                issuedMoves: state.issuedMoves,
                concludedMoves: state.concludedMoves,
                moveStatus: state.moveStatus    
            }
        case Actions.SUBMIT_QUEUE:
            const issuedMoves = [ ...state.issuedMoves, ...state.stagedMoves ];
            return {
                ...state,
                stagedMoves: [],
                issuedMoves: issuedMoves,
                moveStatus: issuedMoves.reduce( (prev, [{barcode}], index) => {
                    if( index === 0 ){
                        return { ...prev, [barcode!]: MoveStatus.InProgress}
                    }else if( _.isUndefined( prev[barcode!] ) ){
                        return { ...prev, [barcode!]: MoveStatus.Pending }
                    }else{
                        return prev
                    }
                }, state.moveStatus )
            }
        case Actions.DISCARD_QUEUE:
            return{
                ...state,
                stagedMoves: []
            }
        case Actions.MOVE_COMPLETE: 
            const { barcode: moveBarcode, status: moveStatus } = action.payload as { barcode: string, status: MoveStatus };
            const move: Array<ITapeSlot> = state.issuedMoves.find( moveIter => moveBarcode === moveIter[0].barcode! )!;
            const filteredIssuedMoves = state.issuedMoves.filter( moveIter => moveBarcode !== moveIter[0].barcode! );
            const newInProgressMove =  filteredIssuedMoves.length < 1 ? {} : { [filteredIssuedMoves[0][0].barcode!]: MoveStatus.InProgress };
            return{
                ...state,
                issuedMoves: filteredIssuedMoves,
                concludedMoves: [ ...state.concludedMoves, state.issuedMoves[0] ],
                moveStatus: {
                    ...state.moveStatus,
                    ...newInProgressMove,
                    [moveBarcode]: moveStatus,
                },
                sourceSlots: moveStatus === MoveStatus.Success ? [ ...state.sourceSlots, { ...move[1], barcode: moveBarcode} ] :  [ ...state.sourceSlots, move[0] ],
                destinationSlots: moveStatus === MoveStatus.Success ? [ ...state.destinationSlots, _.omit( move[0], ['barcode'] ) ] : [ ...state.destinationSlots, move[1] ]
            }
        case Actions.DISCARD_COMPLETED:
            return {
                ...state,
                concludedMoves: []
            }
        default: 
            return state;
    }
}


const getMoveStatus = ( move: Array<ITapeSlot>, statusMap: { [barcode: string]: MoveStatus } ) => {
    return statusMap[ move[0].barcode! ]
}