import { useState, useEffect } from "react";
import {filterFilmsByDirector, getListOf} from "../helpers/film.helpers";
import "./filmsList.css";

function FilmsPage(props){
    
    const [list, setList] = useState([]);
    const [searchDirector, setSearchDirector] = useState("");

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
    }, []);

    function mapFilms(){
        let newList = filmsByDirector.map((item, index) => {
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

    const filmsByDirector = filterFilmsByDirector(list, searchDirector);
    const directors = getListOf(list, "director");

    return (
        <div>
            <h3>Studio Ghibli Films</h3>
            <form>
                <div className="form-group">
                    <label htmlFor="selector">Director Filter</label>
                    <select 
                    id="selector" 
                    value={searchDirector} 
                    onChange={((element) => setSearchDirector(element.target.value))}
                    >
                        <option value="">All</option>
                        {directors.map((director) => {
                            return <option value={director}>{director}</option>
                        })}
                    </select>
                </div>
            </form>
            <ul>{mapFilms()}</ul>
        </div>
    );
    
}

export default FilmsPage;