//import React, { Component } from 'react';
import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';
/*
class Movie extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        poster: PropTypes.string.isRequired
    }
    render() {
        // console.log(this.props);
        return (
            <div>
                <h1>{this.props.title}</h1>
                <MoviePoster poster={this.props.poster} />
            </div>
        )
    }
}

class MoviePoster extends Component {
    static propTypes = {
        poster: PropTypes.string.isRequired
    }
    render() {
        return (
            <img src={this.props.poster} alt="" />
        )
    }
}
*/

function Movie ({title, poster, genres, synopsis}){
    console.log(title);
    console.log(genres);
    return (
        <div className="Movie">
          <div className="Movie_Columns">
            <MoviePoster poster={poster} alt={title}/>
          </div>
          <div className="Movie_Colums">
            <h1>{title}</h1>
            <div className="Movie_Genres">
               {genres ? genres.map((genre, index) => <MovieGenre genre={genre} key={index} />) : 'none'}
            </div>
            <p className="Movie_Synopsis">
                {synopsis}
            </p>
          </div>
        </div>
    )
}

function MoviePoster({poster, alt}){
    return (
        <img src={poster} alt={alt} className="Movie_Poster"/>
    )
}

function MovieGenre({genre}){
    return (
        <span className="Movie_Genre">{genre} </span>
    )
}

Movie.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    synopsis: PropTypes.string.isRequired
}

MoviePoster.propTypes = {
    poster: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
}

export default Movie;

