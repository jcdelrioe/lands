import React from "react";
import "./style.css";

export default function Land({
	id,
	name,
	squareM,
	frente,
	fondo,
	address,
	images,
	price,
}) {
	return (
		<>
			<div className="land-container">
				<h3>{name}</h3>
				<small>{squareM}</small>
				<div className="img-container slider">
					{images.map((image, index) => (
						<img
							key={index}
							loading="lazy"
							src={image}
							alt={name}
							width="500"
							height="375"
						/>
					))}
				</div>
				<p>
					Frente: {frente} - Fondo: {fondo}
				</p>
				<p>Dirección: {address}</p>
				<strong>Precio: {price}</strong>
			</div>
		</>
	);
}
