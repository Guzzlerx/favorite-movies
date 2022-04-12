import Card from "./Card";

function Cards(props) {
    const { movies = [] } = props;
    return (
        <div className="movies">
            {movies.length ? (
                movies.map((movie) => <Card key={movie.imdbID} {...movie} />)
            ) : (
                <h2 style={{ width: 1000 }}>Фильмов по запросу не найдено</h2>
            )}
        </div>
    );
}

export default Cards;
