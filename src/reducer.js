export default function (state, action){
    switch(action.type){
        case 'add':
            //setTodoLabel('')
            //setTodos([
            return [
                ...state,
                {
                    index:Date.now(),
                    label:action.payload,
                    isComplited:false,
                }
            ]
        case 'toggle':
            return state.map(el => {
                console.log(action.payload, el.index)
                //if(action.payload !== el.index)
                  el.isComplited = !el.isComplited
                return el
            })

        case 'remove':
            return state.filter(el => {
                return action.payload !== el.index
            })

        default:
            return state
    }
}