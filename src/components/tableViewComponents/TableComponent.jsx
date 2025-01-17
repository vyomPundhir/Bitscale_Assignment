import { tableHeaderData } from "../../constants/tableViewConstants";
import { tableRowData } from "../../constants/tableViewConstants";

const TableComponent = () => {
	return (
		<section className="border-[1px] rounded-sm border-[black]">
			<div className="w-full pl-[10px] flex flex-row justify-start items-center gap-[]">
				{tableHeaderData.map((data) => {
					if (data.id === 1) {
						return (
							<span key={data.id} className={`w-[50px] text-left`}>
								{data.title}
							</span>
						);
					}
					if (data.id === 2) {
						return (
							<span key={data.id} className={`w-[50px] text-left `}>
								{data.title}
							</span>
						);
					}
					if (data.id === 3) {
						return (
							<span key={data.id} className={`w-[100px] text-left`}>
								{data.title}
							</span>
						);
					}
					if (data.id === 4) {
						return (
							<span key={data.id} className={`w-[300px] text-left `}>
								{data.title}
							</span>
						);
					}
					if (data.id === 5) {
						return (
							<span key={data.id} className={`w-[300px] text-left `}>
								{data.title}
							</span>
						);
					}
					if (data.id === 6) {
						return (
							<span key={data.id} className={`w-[100px] text-left `}>
								{data.title}
							</span>
						);
					}
				})}
			</div>
			<div className="flex flex-col">
				{tableRowData.map((row, index) => (
					<div className="flex flex-row" key={index}>
						{row.map((data) => {
							if (data.id === 1) {
								return (
									<span
										key={data.id}
										className={`w-[50px] px-[10px] py-[5px] text-ellipsis whitespace-nowrap overflow-hidden`}
									>
										{data.title}
									</span>
								);
							}
							if (data.id === 2) {
								return (
									<div className="w-[50px] " key={data.id}>
										<img src={data.title} className="w-[20px]" />
									</div>
								);
							}
							if (data.id === 3) {
								return (
									<span
										key={data.id}
										className={`w-[100px] px-[10px] py-[5px] text-ellipsis whitespace-nowrap overflow-hidden`}
									>
										{data.title}
									</span>
								);
							}
							if (data.id === 4) {
								return (
									<span
										key={data.id}
										className={`w-[300px] px-[10px] py-[5px] text-ellipsis whitespace-nowrap overflow-hidden`}
									>
										{data.title}
									</span>
								);
							}
							if (data.id === 5) {
								return (
									<span
										key={data.id}
										className={`w-[300px] px-[10px] py-[5px] text-ellipsis whitespace-nowrap overflow-hidden`}
									>
										{data.title}
									</span>
								);
							}
						})}
					</div>
				))}
			</div>
		</section>
	);
};

export default TableComponent;
