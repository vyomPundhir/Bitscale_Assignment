/* eslint-disable react/prop-types */

const PersonalInformation = ({ personalInfo }) => {
  return (
    <div className="border-[1.5px] border-[black] dark:border-[#c8c8c8] px-[20px] py-[30px] rounded-lg flex flex-col justify-start items-center gap-[20px]">
      <h1 className="sm:text-[27px] font-[700] underline text-center xs:text-[23px]">
        Personal Information
      </h1>
      <div className="flex flex-row justify-center flex-wrap items-center">
        <div className="flex flex-col gap-[10px]">
          {personalInfo.map((data) => (
            <div className="flex flex-row flex-wrap text-[15px] gap-[5px]" key={data.id}>
              <span className="font-[600]">{data.field}</span>
              <span className="underline">{data.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PersonalInformation;
