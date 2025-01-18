/* eslint-disable react/prop-types */

const ProfileName = ({ profileImg, fullName, designation, shortAddress }) => {
	return (
		<div className="flex flex-row justify-center items-start px-[50px]">
			<div className="flex sm:flex-row xs:flex-col justify-start items-center gap-[30px]">
				<img
					src={profileImg}
					alt="profile-icon"
					className="w-[100px] h-[100px] rounded-full"
				/>
				<div className="">
					<h3 className="text-[22px] font-[700]">{fullName}</h3>
					<p className="text-[13px]">{designation}</p>
					<p className="text-[13px]">{shortAddress}</p>
				</div>
			</div>
		</div>
	);
};

export default ProfileName;
