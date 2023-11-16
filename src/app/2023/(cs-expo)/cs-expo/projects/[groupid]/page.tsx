import ProjectArticle from "@expo23-components/ProjectArticle";
import GroupsData from "@expo23-json/thesis-projects.json";

interface GroupProps {
	params: {
		groupid: string;
	};
}

const Page: React.FC<GroupProps> = ({ params }) => {
	const groupsData = new Map(Object.entries(GroupsData));
	const groupData = groupsData.get(params.groupid);
	return (
		<main className="flex items-center justify-center">
			<ProjectArticle
				groupname={groupData?.groupname}
				thesisTitle={groupData?.thesisTitle}
				abstract={groupData?.abstract}
				summary={groupData?.summary}
				members={groupData?.members}
				category={groupData?.category}
				posterFilePath={groupData?.posterFilePath}
				AVPLink={groupData?.AVPLink}
			/>
		</main>
	);
};

export default Page;
