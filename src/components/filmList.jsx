import { useState, useEffect } from "react";
import "./filmsList.css";

function FilmsList(props){
    
    const [list, setList] = useState([]);

    function getFilms(){
        let link = "https://studioghibliapi-d6fc8.web.app/films"
        fetch(link)
        .then((response) =>{
            return response.json()
        })
        .then((result) => {
            setList(result);
        })
        .catch((err) => {
            console.error(err);
        })
        
    }

    useEffect(() => {
        getFilms();
    }, [])

    function mapFilms(){
        let newList = list.map((item, index) => {
          let newLi = <li key={index}>
            <h3>{item.title}</h3>
            <p>{item.release_date}</p>
            <p>Critics: {item.rt_score}%</p>
            <img src={item.image} alt={item.title + " banner"} />
            <hr />
          </li>;
          return newLi;
        });
        return newList;
      }

    
    return (<ul>{mapFilms()}</ul>);
    
}

export default FilmsList;