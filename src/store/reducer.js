import  {CHANGE_INPUT_VALUE,ADD_ITEM,DELETE_ITEM} from '../store/actionTypes';

const defaultState = {
    inputValue: 'hello redux',
    list: []
};
export default (state = defaultState,action)=>{
    if(action.type=== CHANGE_INPUT_VALUE){
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
    }else if (action.type === ADD_ITEM){
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        newState.inputValue = '';
        console.log(newState);
        return newState;
    }
    if(action.type === DELETE_ITEM){
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index,1);
        return newState;
    }

    if (action.type === 'store_list'){
        const newState = JSON.parse(JSON.stringify(state));
        newState.list = action.list;
        return newState;
    }
    return state;
}