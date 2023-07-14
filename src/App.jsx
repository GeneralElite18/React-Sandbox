import { Component } from 'react';
import './App.css';

//Inheriting from the react library
class App extends Component {

  constructor(){
    super();

    this.state = {
      list: ["ready", "set", "GO"],
      text: ""
    }

    this.mapStrings = this.mapStrings.bind(this);
    this.updateInput = this.updateInput.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  mapStrings(){
    let newList = this.state.list.map((item, index) => {
      let newLi = <li key={index}>{item}</li>;
      return newLi;
    });
    return newList;
  }

  updateInput(event){
    this.setState({text: event.target.value});
  }

  onSubmit(event){
    event.preventDefault();
    this.setState({
      list: [...this.state.list, this.state.text]
    });
  }

  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <form onSubmit={this.onSubmit}>
          <input type="text" value={this.state.text} onChange={this.updateInput}/>
          <button type="submit">Add</button>
        </form>
        <ul>
          {this.mapStrings()}
        </ul>
        
      </div>
    );
  }
}

export default App;
