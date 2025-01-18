const ProfileShimmer = () => {
	return (
		<div className="w-full min-h-[500px] flex flex-col justify-center items-center px-[30px] gap-10">
			<div className="min-w-[500px] flex flex-row justify-center items-center gap-5">
				<div className="skeleton dark:bg-gray-900 bg-gray-200 h-28 w-28 rounded-full"></div>
				<div className="flex flex-col justify-center items-start gap-3">
					<div className="skeleton dark:bg-gray-900 bg-gray-200 w-60 h-8 rounded-sm"></div>
					<div className="skeleton dark:bg-gray-900 bg-gray-200 w-52 h-5 rounded-sm"></div>
					<div className="skeleton dark:bg-gray-900 bg-gray-200 w-52 h-5 rounded-sm"></div>
				</div>
			</div>
			<div className="flex flex-row justify-center items-center flex-wrap gap-20">
				{[1, 2].map((_, idx) => (
					<div
						key={idx}
						className="min-w-[450px] flex flex-col justify-center items-center gap-4"
					>
						<div className="skeleton dark:bg-gray-900 bg-gray-200 w-72 h-8 rounded"></div>
						{[1, 2, 3, 4, 5].map((_, index) => (
							<div
								key={index}
								className="flex flex-row justify-start items-center gap-10"
							>
								<div className="skeleton dark:bg-gray-900 bg-gray-200 w-32 h-4 rounded-sm"></div>
								<div className="skeleton dark:bg-gray-900 bg-gray-200 w-64 h-4 rounded-sm"></div>
							</div>
						))}
					</div>
				))}
			</div>
		</div>
	);
};

export default ProfileShimmer;
