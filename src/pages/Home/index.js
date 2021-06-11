import React, { Suspense } from "react";
import Layout from "../Layout";
import data from "Data/data.json";

const Land = React.lazy(() => import("components/Land"));

export default function Home() {
	return (
		<>
			<Layout>
				{data.data.map((item) => (
					<Suspense fallback={<div>Loading...</div>}>
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
					</Suspense>
				))}
			</Layout>
		</>
	);
}
