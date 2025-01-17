import DataCard from "./DataCard";

import { cardData } from "../../constants/cardViewConstants";

const CardsList = () => {
	return (
		<div className="px-5 flex flex-col justify-center items-center gap-9">
			{cardData.map((data) => (
				<DataCard key={data.id} data={data} />
			))}
		</div>
	);
};

export default CardsList;
