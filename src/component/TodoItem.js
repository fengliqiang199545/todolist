import React from 'react';

class TodoItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};

    }

    componentDidMount() {

    }

    handleClick=()=>{
        alert(this.props.index);
    };

    render() {
        return (
                <li  key={this.props.index} onClick={this.props.handleDelete.bind(this,this.props.index)}>{this.props.value}</li>
        );
    }
}

TodoItem.propTypes = {};

export default TodoItem;