import { createSlice } from "@reduxjs/toolkit";
import { EMPTYSTRING, INITIALSTATE } from "../constantExports/globalConstants";

export const householdSlice = createSlice({
    name: "household",

    initialState: {
        value: {cleanOut: false,
                display: EMPTYSTRING,
                displayLine: EMPTYSTRING,
                record: []},
        },

    reducers: {
            setDisplay: (state, action) => {
                if (state.value.cleanOut) {
                    state.value.display = EMPTYSTRING
                    state.value.displayLine = EMPTYSTRING
                    state.value.record = []
                    state.value.cleanOut = !state.value.cleanOut
                }
                state = {...state}
                state.value.display = action.payload
                state.value.displayLine += action.payload
            },

            pushToRecord: (state, action) => {
                state.value.record = [...state.value.record, action.payload]
            },

            popRecord: (state) => {
                state = {...state}
                state.value.display = state.value.record.pop()
                state.value.displayLine = state.value.record.join('')
            },
            
            clearGeneral: (state) => {
                state.value =  INITIALSTATE
            },

            prepareResult: (state, action) => {
                state = {...state}
                state.value.display = state.value.displayLine
                state.value.displayLine = action.payload
                state.value.cleanOut = true
            },
    }
})
console.log('householdSlice intern:',householdSlice)

const { actions, reducer } = householdSlice
export const { setDisplay, pushToRecord, popRecord, clearGeneral, prepareResult } = actions;
export default reducer;

