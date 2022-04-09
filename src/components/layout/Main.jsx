import { Component } from "react";
import "./Main.css";
import Cards from "../Cards";
import Preloader from "../Preloader";
import Search from "../Search";

const API_KEY = process.env.REACT_APP_API_KEY;

class Main extends Component {
    state = {
        movies: [],
        isLoading: true,
    };

    componentDidMount() {
        this.getAllMovies();
    }

    getAllMovies() {
        return fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=simpsons`)
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(`Ошибка: ${res.status}`);
            })
            .then((data) =>
                this.setState({ movies: data.Search, isLoading: false })
            )
            .catch((err) => {
                console.error(err);
                this.setState({ isLoading: false });
            });
    }

    searchMovieByName = (searchName = "simpsons", selectedCheckbox = "all") => {
        this.setState({ isLoading: true });
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
            .then((data) =>
                this.setState({ movies: data.Search, isLoading: false })
            )
            .catch((err) => {
                console.error(err);
                this.setState({ isLoading: false });
            });
    };

    render() {
        return (
            <main className="container content">
                <Search searchMovieByName={this.searchMovieByName} />
                {!this.state.isLoading ? (
                    <>
                        <Cards movies={this.state.movies} />
                    </>
                ) : (
                    <Preloader />
                )}
            </main>
        );
    }
}

export default Main;
