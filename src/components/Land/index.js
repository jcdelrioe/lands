import React from "react";
import "./style.css";

export default function Land({ id, name, squareM, images }) {
	console.log(images);
	return (
		<>
			<div className="land-container">
				<h3>{name}</h3>
				<small>{squareM}</small>
				<div className="img-container slider">
					{images.map((image) => (
						<img loading="lazy" className="land-img" src={image} alt={name} />
					))}
				</div>
			</div>
		</>
	);
}
