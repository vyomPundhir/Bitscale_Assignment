import { useState, useEffect } from "react";

import ProfileName from "./ProfileName";
import PersonalInformation from "./PersonalInformation";
import Address from "./Address";

import ProfileShimmer from "../generalComponents/shimmerComponents/ProfileShimmer";

import { getProfileInfo } from "../../constants/profileConstants";

const Layout = () => {
	const [profileInfo, setProfileInfo] = useState(null);

	useEffect(() => {
		const profileData = getProfileInfo();

		const timeoutID = setTimeout(() => {
			setProfileInfo(profileData);
		}, 2000);

		return () => {
			clearTimeout(timeoutID);
		};
	}, []);

	return profileInfo ? (
		<div className="w-full mt-[50px] flex flex-col items-center gap-[40px]">
			<ProfileName
				profileImg={profileInfo.profileImg}
				fullName={profileInfo.fullName}
				designation={profileInfo.designation}
				shortAddress={profileInfo.shortAddress}
			/>
			<div className="flex flex-row flex-wrap justify-center items-center gap-[30px]">
				<PersonalInformation personalInfo={profileInfo.personalInfo} />
				<Address addressInfo={profileInfo.addressInfo} />
			</div>
		</div>
	) : (
		<ProfileShimmer />
	);
};

export default Layout;
