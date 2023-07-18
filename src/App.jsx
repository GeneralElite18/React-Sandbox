import { Component } from 'react';
import { useState } from 'react';
import './App.css';
import FilmsList from './components/filmList';

//Inheriting from the react library
function App(props) {

  const [list, setList] = useState(["ready","set","GO"]);
  const [text, setText] = useState("");

  function mapStrings(){
    let newList = list.map((item, index) => {
      let newLi = <li key={index}>{item}</li>;
      return newLi;
    });
    return newList;
  }

  function updateInput(event){
    setText(event.target.value);
  }

  function onSubmit(event){
    event.preventDefault();
    setList([...list, text]);
  }

  
  return (
    <div>
      <h1>Hello World</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={updateInput}/>
        <button type="submit">Add</button>
      </form>
      <ul>
        {mapStrings()}
      </ul>
      <FilmsList />
    </div>
  );
}

export default App;
