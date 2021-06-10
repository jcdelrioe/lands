import React from "react";
import Layout from "../Layout";
import data from "Data/data.json";
import Land from "components/Land";

export default function Home() {
	return (
		<>
			<Layout>
				{data.data.map((item) => (
					<Land
						key={item.id}
						id={item.id}
						name={item.name}
						squareM={item.squareM}
						frente={item.frente}
						fondo={item.fondo}
						address={item.address}
						images={item.images}
						price={item.price}
					/>
				))}
			</Layout>
		</>
	);
}
