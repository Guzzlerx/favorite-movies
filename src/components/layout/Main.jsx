import { useEffect, useState } from "react";
import "./Main.css";
import Cards from "../Cards";
import Preloader from "../Preloader";
import Search from "../Search";

const API_KEY = process.env.REACT_APP_API_KEY;

function Main() {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    function getAllMovies() {
        return fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=simpsons`)
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(`Ошибка: ${res.status}`);
            })
            .then((data) => {
                setMovies(data.Search);
                setIsLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setIsLoading(false);
            });
    }

    const searchMovieByName = (
        searchName = "simpsons",
        selectedCheckbox = "all"
    ) => {
        setIsLoading(true);
        return fetch(
            `https://www.omdbapi.com/?apikey=${API_KEY}&s=${
                searchName === "" ? (searchName = "simpsons") : searchName
            }${selectedCheckbox !== "all" ? `&type=${selectedCheckbox}` : ""}`
        )
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(`Ошибка: ${res.status}`);
            })
            .then((data) => {
                setMovies(data.Search);
                setIsLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setIsLoading(false);
            });
    };

    useEffect(() => {
        getAllMovies();
    }, []);

    return (
        <main className="container content">
            <Search searchMovieByName={searchMovieByName} />
            {!isLoading ? (
                <>
                    <Cards movies={movies} />
                </>
            ) : (
                <Preloader />
            )}
        </main>
    );
}

export default Main;
