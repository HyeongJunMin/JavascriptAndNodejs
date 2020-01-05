import React, {Component} from "react";

class BoardList extends Component {
    state = {username: null,
            list: [
                // {id:1, content:'1111'},
                // {id:2, content:'2222'}
          ],
        info: [
            {id:1, content:'1111'},
            {id:2, content:'2222'}
        ]
    }

    componentDidMount() {
        fetch('http://localhost:2000/api/board/connectioncheck')
            .then(res => res.json())
            .then(user => this.setState({ username: user.data }))
            .then(json => console.log(json))

        fetch('http://localhost:2000/api/board/list')
            .then(data => {this.setState({list: data.list})})
            .then(data => console.log(data))
            .then(data => console.log(JSON.stringify(data)))

        // this._getBoardList();
        this._callApi()
            .then(res => this.setState({info: res.list}))
            .catch(err => console.log(err));
    }

    _getBoardList = async () => {
        const boardList = await this._callApi();
        this.setState({info: boardList});
    }

    _callApi = async () => {
        const resp = await fetch("http://localhost:2000/api/board/list")
        const body = (await resp).json();
        return body;
    }

    render() {
        return (
            <div className="BoardList">
                {this.state.username ? <h1>{`Hello ${this.state.username}`}</h1> : <h1>Loading.. please wait!</h1>}
                {this.state.list}
                {JSON.stringify(this.state.info)}

            </div>
        );
    }
}

export default BoardList;