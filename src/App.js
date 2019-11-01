import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            data:
                [
                    {
                        "id":1,
                        "name":"Foo",
                        "age":"20"
                    },
                    {
                        "id":2,
                        "name":"Bar",
                        "age":"30"
                    },
                    {
                        "id":3,
                        "name":"Baz",
                        "age":"40"
                    }
                ]
        }
    }
    render() {
        return (
            <div>
                {/* display header*/}
              <Header/>
                {/* display table*/}
              <table>
                <tbody>
                {this.state.data.map((person, i) => <TableRow key = {i}
                                                              data = {person} />)}
                </tbody>
              </table>
                {/* display table*/}
                <content/>
                <form1/>
                <button/>
                <MyForm/>
                <Football/>
            </div>
        );
    }
}
class Header extends React.Component {
    render() {
        return (
            <div>
              <h1>List of person</h1>
            </div>
        );
    }
}
class TableRow extends React.Component {
    render() {
        return (
            <tr>
              <td>{this.props.data.id}</td>
              <td>{this.props.data.name}</td>
              <td>{this.props.data.age}</td>
            </tr>
        );
    }
}

class content extends React.Component {
    render() {
        return (
            <div>
              <h2>{this.props.contentProp}</h2>
              <h3>this props contentProp</h3>
            </div>
        );
    }
}
class form1 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: 'Initial data...'
        }
        this.updateState = this.updateState.bind(this);
    };

    updateState(e) {
        this.setState({data: e.target.value});
    }

    render() {
        return (
            <form>
              <input type="text" name="name" value={this.state.data}
                     onChange={this.updateState}/>
              <h4>{this.state.data}</h4>
            </form>
        );
    }
}

class button extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: 'Initial data...'
        }
        this.updateState = this.updateState.bind(this);
    };
    updateState() {
        this.setState({data: 'Data updated...'})
    }
    render() {
        return (
            <div>
              <button onClick = {this.updateState}>CLICK1</button>
              <h4>{this.state.data}</h4>
            </div>

        );
    }
}

class MyForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: 'Initial data...'
        }
        this.updateState = this.updateState.bind(this);
    };
    updateState() {
        this.setState({data: 'Data updated from the child component...'})
    }
    render() {
        return (
            <div>
              <Content myDataProp = {this.state.data}
                       updateStateProp = {this.updateState}></Content>
            </div>
        );
    }
}
class Content extends React.Component {
    render() {
        return (
            <div>
              <button onClick = {this.props.updateStateProp}>CLICK</button>
              <h3>{this.props.myDataProp}</h3>
            </div>
        );
    }
}

class Football extends React.Component {
    shoot() {
        alert("Great Shot!");
    }
    render() {
        return (
            <button onClick={this.shoot}>Take the shot!</button>
        );
    }
}


export default App;