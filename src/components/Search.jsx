import { Component } from "react";
import "./Search.css";

class Search extends Component {
    state = {
        search: "",
        checkbox: "all",
    };

    handleSearchSubmit = () => {
        this.props.searchMovieByName(this.state.search, this.state.checkbox);
    };

    submitByEnter = (e) => {
        if (e.code === "Enter") {
            this.props.searchMovieByName(
                this.state.search,
                this.state.checkbox
            );
        }
    };

    handleCheckboxFilter = (e) => {
        this.setState(
            () => ({ checkbox: e.target.id }),
            () => {
                this.handleSearchSubmit(this.state.search, this.state.checkbox);
            }
        );
    };

    render() {
        return (
            <div className="row">
                <div className="col s12">
                    <div className="input-field">
                        <input
                            name="search"
                            type="search"
                            className="validate"
                            placeholder="Поиск"
                            value={this.state.search}
                            onKeyDown={this.submitByEnter}
                            onChange={(e) => {
                                this.setState({
                                    [e.target.name]: e.target.value,
                                });
                            }}
                        />
                        <button
                            className="cyan lighten-0 btn button-search"
                            onClick={this.handleSearchSubmit}
                        >
                            Search
                        </button>
                    </div>
                    <div
                        className="container"
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                        }}
                    >
                        <p>
                            <label>
                                <input
                                    onChange={this.handleCheckboxFilter}
                                    checked={this.state.checkbox === "all"}
                                    className="with-gap"
                                    id="all"
                                    name="search-filter"
                                    type="radio"
                                />
                                <span>All</span>
                            </label>
                        </p>
                        <p>
                            <label>
                                <input
                                    onChange={this.handleCheckboxFilter}
                                    checked={this.state.checkbox === "movie"}
                                    className="with-gap"
                                    id="movie"
                                    name="search-filter"
                                    type="radio"
                                />
                                <span>Movies</span>
                            </label>
                        </p>
                        <p>
                            <label>
                                <input
                                    onChange={this.handleCheckboxFilter}
                                    checked={this.state.checkbox === "series"}
                                    className="with-gap"
                                    id="series"
                                    name="search-filter"
                                    type="radio"
                                />
                                <span>Series</span>
                            </label>
                        </p>
                        <p>
                            <label>
                                <input
                                    onChange={this.handleCheckboxFilter}
                                    checked={this.state.checkbox === "game"}
                                    className="with-gap"
                                    id="game"
                                    name="search-filter"
                                    type="radio"
                                />
                                <span>Game</span>
                            </label>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Search;
