import React from 'react';
import TodoInput from "../component/TodoInput";
import TodoItem from "../component/TodoItem";
import store from '../store';
import axios from 'axios';
import  {CHANGE_INPUT_VALUE,ADD_ITEM,DELETE_ITEM} from '../store/actionTypes';
import {getInputChangeAction} from '../store/actionCreator'
import TodoListUi from "../component/TodoListUI";
import UiTest from "../component/UITest";
class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
        //store > component
        store.subscribe(this.handleStoreChange)
    }

    handleStoreChange=()=>{
        // this.setState(store.getState())
        //component refresh
        this.setState(store.getState());
    };

    handleInput=(e)=>{
        const action = getInputChangeAction(e.target.value);
        store.dispatch(action);
    };

    handleSubmit=()=>{
        const action = {
            type: ADD_ITEM,
        };
        store.dispatch(action);
    };

    handleDelete=(index)=>{
        //create action
        const action = {
            type: DELETE_ITEM,
            index: index
        };

        store.dispatch(action);
    };

    componentDidMount() {
        axios.get('https://easy-mock.com/mock/5ca55b7ddcc23b30ca628b76/tableList/todolist/list')
            .then((result)=>{
                const action = {
                    type: 'store_list',
                    list: result.data,
                };

                store.dispatch(action);
            })
    }

    render() {
        return (

            <div>
                {/*<UiTest inputValue={this.state.inputValue}/>*/}

                <br/>

                <TodoInput
                    inputValue={this.state.inputValue}
                    handleInput={this.handleInput}
                    handleSubmit={this.handleSubmit}
                />
                <br/>
                <ul>
                    {
                        this.state.list.map((value,index)=>{
                            return (
                                <TodoItem
                                    key={index}
                                    value={value}
                                    index={index}
                                    handleDelete={this.handleDelete}
                                />

                            )
                        })
                    }
                </ul>
            </div>
        );
    }
}

TodoList.propTypes = {};

export default TodoList;