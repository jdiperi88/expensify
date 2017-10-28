
//SET_TEXT_FILTER
export const setTextFilter = (text ='')=>({
    type: 'SET_TEXT_FILTER',
    text
})
//SORT_BY_DATE

export const sortByDate = () => ({
    type: 'SORT_BY_DATE',
})

export const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT',  
})

//SET_START_DATE
export const setStartDate = (payload) => ({
    type: 'SET_START_DATE',
    payload
})

export const setEndDate = (payload) => ({
    type: 'SET_END_DATE',
    payload
})