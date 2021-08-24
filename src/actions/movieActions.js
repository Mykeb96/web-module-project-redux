export const DELETE_MOVIE = "DELETE_MOVIE";
export const ADD_MOVIE = "ADD_MOVIE";
export const TOGGLE_FAVORITES = "TOGGLE_FAVORITES";
export const ADD_FAVORITES = "ADD_FAVORITES";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";

export const deleteMovieAction = (id)=>{
    return({type: DELETE_MOVIE, payload:id});
}

export const addMovie = (newMovie) => {
    return ({ type: ADD_MOVIE, payload: newMovie })
}

export const toggleFavorites = () => {
    return ({ type: TOGGLE_FAVORITES })
}

export const addFavorites = (favMovie) => {
    console.log(favMovie)
    return ({ type: ADD_FAVORITES, payload: favMovie })
}

export const removeFavorite = (id) => {
    return ({ type: REMOVE_FAVORITE, payload: id })
}