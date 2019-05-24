import  {CHANGE_INPUT_VALUE,ADD_ITEM,DELETE_ITEM} from '../store/actionTypes';

export const getInputChangeAction =(value)=>{
    const action = {
        type: CHANGE_INPUT_VALUE,
        value,
    };
    return action;
};