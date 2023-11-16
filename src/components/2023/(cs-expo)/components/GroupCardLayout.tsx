"use client";
import Link from "@/node_modules/next/link";
import React, { useEffect, useState } from "react";
import Sidebar from "@/components/ProjectsSidebar";

interface GroupCardProps {
	groupId: string;
	group: {
		thesisTitle: any;
		abstract: any;
		summary: any;
		members: any;
		category: any;
		posterFilePath?: any;
		AVPLink?: any;
		groupName: string;
	};

	allFilter: any;
	filterState: any;
}

const GroupCard: React.FC<GroupCardProps> = ({
	groupId,
	group,
	allFilter,
	filterState,
}) => {
	return (
		(allFilter || filterState) && (
			<Link href={groupId}>
				<div className="flex flex-col w-[300px] h-[450px] bg-stone-300 s-full justify-end">
					<div className="flex "></div>
					<div className="flex flex-col h-[140px] bg-rose-500 s-full text-white text-start text-2xl px-2 pr-2 pt-1">
						<div className="font-bold font-['Helvetica Now Text']">
							{group.groupname}
						</div>
						<div className="text-sm font-['Helvetica Now Text']">
							{group.thesisTitle}
						</div>
					</div>
				</div>
			</Link>
		)
	);
};

interface GroupCardLayoutProps {
	groupData: any;
}
const GroupCardLayout: React.FC<GroupCardLayoutProps> = ({ groupData }) => {
	const groupNames = Object.keys(groupData);
	const groupCards: React.JSX.Element[] = [];

	const [allFilter, setAllFilter] = useState(true);
	const [dataanalyticFilter, setDataanalyticFilter] = useState(false);
	const [educationFilter, setEducationFilter] = useState(false);
	const [healthFilter, setHealthFilter] = useState(false);
	const [imgproccvFilter, setImageprooccvFilter] = useState(false);
	const [iotFilter, setIotFilter] = useState(false);
	const [nlpFilter, setNlpFilter] = useState(false);

	const [currentFilter, setCurrentFilter] = useState(() => {
		if (typeof localStorage !== "undefined") {
			const filterData = localStorage.getItem("currentFilter");
			return filterData ? JSON.parse(filterData) : "All";
		} else {
			return "All";
		}
	});
	const updateCurrentFilter = (filter: string) => {
		setCurrentFilter(filter);
		localStorage.setItem("currentFilter", JSON.stringify(filter));
	};

	useEffect(() => {
		filterProjects(currentFilter);
		// console.log(currentFilter);
	}, []);

	const filterProjects = (category: string) => {
		if (category === "All") {
			setAllFilter(true);

			setDataanalyticFilter(false);
			setEducationFilter(false);
			setHealthFilter(false);
			setImageprooccvFilter(false);
			setIotFilter(false);
			setNlpFilter(false);
			updateCurrentFilter("All");
		} else if (category === "Data Analytics") {
			setDataanalyticFilter(true);

			setAllFilter(false);
			setEducationFilter(false);
			setHealthFilter(false);
			setImageprooccvFilter(false);
			setIotFilter(false);
			setNlpFilter(false);
			updateCurrentFilter("Data Analytics");
		} else if (category === "Education") {
			setEducationFilter(true);

			setAllFilter(false);
			setDataanalyticFilter(false);
			setHealthFilter(false);
			setImageprooccvFilter(false);
			setIotFilter(false);
			setNlpFilter(false);
			updateCurrentFilter("Education");
		} else if (category === "Health") {
			setHealthFilter(true);

			setAllFilter(false);
			setDataanalyticFilter(false);
			setEducationFilter(false);
			setImageprooccvFilter(false);
			setIotFilter(false);
			setNlpFilter(false);
			updateCurrentFilter("Health");
		} else if (category === "Img Proc - CV") {
			setImageprooccvFilter(true);

			setAllFilter(false);
			setDataanalyticFilter(false);
			setEducationFilter(false);
			setHealthFilter(false);
			setIotFilter(false);
			setNlpFilter(false);
			updateCurrentFilter("Img Proc - CV");
		} else if (category === "IOT") {
			setIotFilter(true);

			setAllFilter(false);
			setDataanalyticFilter(false);
			setEducationFilter(false);
			setHealthFilter(false);
			setImageprooccvFilter(false);
			setNlpFilter(false);
			updateCurrentFilter("IOT");
		} else if (category === "NLP") {
			setNlpFilter(true);

			setAllFilter(false);
			setDataanalyticFilter(false);
			setEducationFilter(false);
			setHealthFilter(false);
			setImageprooccvFilter(false);
			setIotFilter(false);
			updateCurrentFilter("NLP");
		}
	};

	const sideBarCallback = (m: string) => {
		filterProjects(m);
	};

	let gCategoryFilter: boolean = false;
	groupNames.forEach((groupId, index) => {
		const group = groupData[groupId];
		const category = group["category"];

		if (category === "IoT") {
			gCategoryFilter = iotFilter;
		} else if (category === "Health") {
			gCategoryFilter = healthFilter;
		} else if (category === "Img proc/CV") {
			gCategoryFilter = imgproccvFilter;
		} else if (category === "NLP") {
			gCategoryFilter = nlpFilter;
		} else if (category === "Data analytics") {
			gCategoryFilter = dataanalyticFilter;
		} else if (category === "Educ") {
			gCategoryFilter = educationFilter;
		}
		groupCards.push(
			<GroupCard
				key={index}
				groupId={groupId}
				group={group}
				allFilter={allFilter}
				filterState={gCategoryFilter}
			/>,
		);
	});

	return (
		<main>
			<div className="grid 2xl:grid-cols-4 xl:grid-cols-3 lg:justify-items-start lg:grid-cols-2 sm:grid-cols-1 sm:justify-items-center  gap-10 pt-20 justify-items-center">
				{groupCards}
			</div>
			<Sidebar sideBarCallback={sideBarCallback} />
		</main>
	);
};

export default GroupCardLayout;
