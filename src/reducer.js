const TotoListReducer = (state, action) => {
    switch(action.type){
        case 'add':
            if(action.payload.length > 0)
                return [
                    ...state,
                    {
                        index:Date.now(),
                        label:action.payload,
                        isComplited:false,
                    }
                ]
            else 
                return state
        case 'toggle':
            return state.map(el => {
                if(action.payload === el.index){
                  el.isComplited = !el.isComplited
                }
                return el
            })

        case 'remove':
            return state.filter(el => action.payload !== el.index)
        default:
            return state
    }
}

const TotoListInputReducer = (state, action) => {
    switch(action.type){
        case 'add':
            return [
                action.payload 
            ]
        default:
            return state
    }
}

export { TotoListReducer, TotoListInputReducer }