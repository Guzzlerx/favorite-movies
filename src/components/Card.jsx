import { Component } from "react";


class Card extends Component {
	render() {
		const {
			Title: title,
			imdbID: id,
			Year: year,
			Type: type,
			Poster: poster
		} = this.props;

		return(
			<div>
				<div className="card" id={id}>
						<div className="card-image waves-effect waves-block waves-light">
							{poster === 'N/A' ? <img alt={title} className="activator" src='https://img.myloview.ru/posters/no-photo-vector-icon-isolated-on-white-background-outline-thin-line-no-photo-icon-for-website-design-and-mobile-app-development-thin-line-no-photo-outline-icon-vector-illustration-700-215592339.jpg'/>
							: <img alt={title} className="activator" src={poster}/>}
					</div>
						<div className="card-content">
						<span className="card-title activator grey-text text-darken-4">{title}</span>
						<p style={{color: 'orange'}}>{year}</p>
						<br />
						<p>{type}</p>
					</div>
				</div>
			</div>	
		)
	}
}

export default Card;