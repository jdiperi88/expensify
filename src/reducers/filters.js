//FILTER REDUCER 
const filterReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

export default (state = filterReducerDefaultState,action) => {
    switch(action.type){
        case 'SET_TEXT_FILTER':
            return {
                ...state, 
                text: action.text
            }
        case 'SORT_BY_DATE':
            return {
                ...state,
                text: 'date'
            }
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                text:'amount'
            }
        case 'SET_START_DATE':
            return { 
                ...state,
                startDate: action.payload
            }
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.payload
            }
        default:
            return state;
    }
}