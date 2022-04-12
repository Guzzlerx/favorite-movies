import { useState } from "react";
import "./Search.css";

function Search(props) {
    const { searchMovieByName = Function.prototype } = props;
    const [search, setSearch] = useState("");
    const [checkbox, setCheckbox] = useState("all");

    const submitByEnter = (e) => {
        if (e.code === "Enter") {
            searchMovieByName(search, checkbox);
        }
    };

    const submitOnClick = () => {
        searchMovieByName(search, checkbox);
    };

    const handleCheckboxFilter = (e) => {
        setCheckbox(e.target.id);
        searchMovieByName(search, e.target.id);
    };

    return (
        <div className="row">
            <div className="col s12">
                <div className="input-field">
                    <input
                        name="search"
                        type="search"
                        className="validate"
                        placeholder="Поиск"
                        value={search}
                        onKeyDown={submitByEnter}
                        onChange={(e) => {
                            setSearch(e.target.value);
                        }}
                    />
                    <button
                        className="cyan lighten-0 btn button-search"
                        onClick={submitOnClick}
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
                                onChange={handleCheckboxFilter}
                                checked={checkbox === "all"}
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
                                onChange={handleCheckboxFilter}
                                checked={checkbox === "movie"}
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
                                onChange={handleCheckboxFilter}
                                checked={checkbox === "series"}
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
                                onChange={handleCheckboxFilter}
                                checked={checkbox === "game"}
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

export default Search;
