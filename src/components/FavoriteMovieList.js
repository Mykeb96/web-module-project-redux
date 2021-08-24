import React from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { removeFavorite } from '../actions/movieActions';
import { useParams, useHistory } from 'react-router-dom';


const FavoriteMovieList = (props) => {
    const favorites = [];
    const { push } = useHistory();

    const deleteFavorite = (movieID) => {
        props.removeFavorite(movieID);
    }
    
    
    return (<div className="col-xs savedContainer">
        <h5>Favorite Movies</h5>
        {
            props.favorites.favorites.map(movie=>{
                return <div key={movie.id}>
                    <Link className="btn btn-light savedButton" to={`/movies/${movie.id}`}>
                        {movie.title}
                        <span><span class="material-icons" onClick={() => deleteFavorite(movie.id)}>remove_circle</span></span>
                    </Link> 
                </div>
            })
        }
    </div>);
}


const mapStateToProps = state => {
    return {
        favorites: state.favorites
    }
}

export default connect(mapStateToProps, {removeFavorite})(FavoriteMovieList);