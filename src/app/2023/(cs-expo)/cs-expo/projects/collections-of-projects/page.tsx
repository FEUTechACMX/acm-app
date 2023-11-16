import { NextPage } from "next";

import CollectionOfProjectsHeader from "@expo23-components/CollectionOfProjectsHeader";
import GroupCardLayout from "@expo23-components/GroupCardLayout";
// import ThesisProjectsList from "@expo23-components/ThesisProjectReader";
// import thesisData from "@expo23-json/thesis-projects.json";
// import GroupsData from "@expo23-json/;

{
	/* <ThesisProjectsList />
/* Display Group Names
<div>
  <h3>Group Names</h3>
  <ul>
    {Object.keys(thesisDataTyped).map((key) => (
      <li key={key}>{thesisDataTyped[key].groupname}</li> 
    ))}
    </ul> */
}

// Define a type for your data
interface ThesisProjectData {
	[key: string]: {
		groupname: string;
		thesisTitle: string;
		abstract: string;
		summary: string;
		members: string[];
		category: string;
		posterFilePath: string;
		AVPLink: string;
	};
}

const CollectionOfProjects: NextPage = () => {
	return (
		<main className="flex min-h-screen flex-col p-24">
			<CollectionOfProjectsHeader
				headerText="COLLECTION OF PROJECTS"
				subheaderText="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic doloribus pariatur sapiente error iste, reiciendis, minima odit tenetur, rerum consequatur harum? Rerum molestiae fugit cupiditate pariatur corrupti, error quo quas."
			/>
			<GroupCardLayout groupData={GroupsData} />
		</main>
	);
};

export default CollectionOfProjects;
