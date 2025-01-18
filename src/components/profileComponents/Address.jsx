/* eslint-disable react/prop-types */

const Address = ({ addressInfo }) => {
	return (
		<div className="border-[1.5px] border-[black] dark:border-[#c8c8c8] px-[20px] py-[30px] rounded-lg flex flex-col justify-start items-center gap-[20px]">
			<h1 className="sm:text-[27px] xs:text-[23px] font-[700] underline">Address</h1>
			<div className="flex flex-row justify-center items-center">

				<div className="flex flex-col gap-[10px]">
          {addressInfo.map((data) => (
            <div className="flex flex-row flex-wrap gap-[5px] text-[15px]" key={data.id}>
              <span className="font-[600]">{data.field}</span>
              <span className="underline">{data.value}</span>
            </div>
          ))}
        </div>

				{/* <div className="font-[600]">
					{addressInfo.fields.map((field) => (
						<p key={field.id}>{field.title}</p>
					))}
				</div>
				<div className="text-left">
					{addressInfo.values.map((value) => (
						<p key={value.id}>{value.title}</p>
					))}
				</div> */}
			</div>
		</div>
	);
};

export default Address;
