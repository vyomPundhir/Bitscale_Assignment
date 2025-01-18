import userProfile from "../assets/generalAssets/userProfile.svg";

export const getProfileInfo = () => {
	const profileData = {
		profileImg: userProfile,
		fullName: "Vyom Pundhir",
		designation: "Frontend Developer",
		shortAddress: "New Delhi, Delhi, India",
		personalInfo: [
			{
				id: 1,
				field: "First Name:",
				value: "Vyom"
			},
			{
				id: 2,
				field: "Last Name: ",
				value: "Pundhir"
			},
			{
				id: 3,
				field: "Email Address: ",
				value: "vyom.pundhir.prof@gmail.com"
			},
			{
				id: 4,
				field: "Phone: ",
				value: "+91-8445109500"
			},
			{
				id: 5,
				field: "Education: ",
				value: "Bachelor of Technology"
			},

		],
		addressInfo: [
			{
				id: 1,
				field: "Country:",
				value: "India"
			},
			{
				id: 2,
				field: "City:",
				value: "New Delhi"
			},
			{
				id: 3,
				field: "State:",
				value: "Delhi"
			},
			{
				id: 4,
				field: "Postal Code:",
				value: "110092"
			},
		],
		// personalInfo: {
		// 	fields: [
		// 		{ id: 1, title: "First Name:" },
		// 		{ id: 2, title: "Last Name:" },
		// 		{ id: 3, title: "Email Address:" },
		// 		{ id: 4, title: "Phone:" },
		// 		{ id: 5, title: "Education:" },
		// 	],
		// 	values: [
		// 		{ id: 1, title: "Vyom" },
		// 		{ id: 2, title: "Pundhir" },
		// 		{ id: 3, title: "vyom.pundhir.prof@gmail.com" },
		// 		{ id: 4, title: "+91-8445198500" },
		// 		{ id: 5, title: "Bachelor of Technology" },
		// 	],
		// },
		// addressInfo: {
		// 	fields: [
		// 		{ id: 1, title: "Country:" },
		// 		{ id: 2, title: "City:" },
		// 		{ id: 3, title: "State:" },
		// 		{ id: 4, title: "Postal Code:" },
		// 	],
		// 	values: [
		// 		{ id: 1, title: "India" },
		// 		{ id: 2, title: "East Delhi" },
		// 		{ id: 3, title: "Delhi" },
		// 		{ id: 4, title: "110092" },
		// 	],
		// },
	};

	return profileData;
};
