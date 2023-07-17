import { Component } from 'react';

class FilmsList extends Component{
    constructor(){
        super();

        this.state = {
            list: []
        }

        this.mapFilms = this.mapFilms.bind(this);
        this.getFilms = this.getFilms.bind(this);
    }

    getFilms(){
        let link = "https://studioghibliapi-d6fc8.web.app/films"
        fetch(link)
        .then((response) =>{
            return response.json()
        })
        .then((result) => {
            this.setState({
                list: result
            });
        })
        .catch((err) => {
            console.error(err);
        })
        
    }

    componentDidMount(){
        this.getFilms();
    }

    mapFilms(){
        let newList = this.state.list.map((item, index) => {
          let newLi = <li key={index}>{item.title}</li>;
          return newLi;
        });
        return newList;
      }

    render(){
        return <ul>{this.mapFilms()}</ul>;
    }
}

export default FilmsList;