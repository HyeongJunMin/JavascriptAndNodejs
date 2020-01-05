import React, {Component} from "react";

class BoardList extends Component {
    state = {username: null}

    componentDidMount() {
        fetch('http://localhost:2000/api/board/list')
            .then(res => res.json())
            .then(user => this.setState({ username: user.data }));
    }

    render() {
        return (
            <div className="BoardList">
                {this.state.username ? <h1>{`Hello ${this.state.username}`}</h1> : <h1>Loading.. please wait!</h1>}
            </div>
        );
    }
}

export default BoardList;