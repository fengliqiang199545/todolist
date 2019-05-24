import React from 'react';
import TodoInput from "../page/TodoList";
import TodoItem from "./TodoItem";

class TodoListUi extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};

    }

    render() {
        return (
            <div>

                TodoLIst UI
                <br/>
                {/*<input type="text" value={this.props.inputValue}/>*/}
                <TodoInput
                    inputValue={this.props.inputValuep}
                />
                {/*<TodoInput*/}
                    {/*inputValue={this.props.inputValue}*/}
                    {/*handleInput={this.props.handleInput}*/}
                    {/*handleSubmit={this.props.handleSubmit}*/}
                {/*/>*/}
                {/*<br/>*/}
                {/*<ul>*/}
                    {/*{*/}
                        {/*this.props.list.map((value,index)=>{*/}
                            {/*return (*/}
                                {/*<TodoItem*/}
                                    {/*key={index}*/}
                                    {/*value={value}*/}
                                    {/*index={index}*/}
                                    {/*handleDelete={this.props.handleDelete.bind(this,index)}*/}
                                {/*/>*/}

                            {/*)*/}
                        {/*})*/}
                    {/*}*/}
                {/*</ul>*/}
            </div>
        );
    }
}

TodoListUi.propTypes = {};

export default TodoListUi;