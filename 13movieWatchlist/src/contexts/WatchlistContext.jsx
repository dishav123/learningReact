import { createContext, useContext } from "react"


export const WatchlistContext=createContext({
    watchlistMovies:[{
        id:"",
        name:"",
        director:"",
        rating:'',
        image:""
    }],
    addWatchlistMovies:(movie)=>{},
    removeWatchlistMovies:(id)=>{}
});

export const useWatchlistMovies=()=>{
    return useContext(WatchlistContext)
}

export const WatchlistProvider=WatchlistContext.Provider;