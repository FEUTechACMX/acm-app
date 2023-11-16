import { NextPage } from "next";
import MeetTheCommitteesHeader from "@expo23-components/MeetTheCommitteesHeader";
import CommitteesGrid from "@expo23-components/CommitteesGrid";
import CommitteesPic from "@expo23-components/CommitteesPic";

const EventsCommittees: NextPage = () => {
	return (
		<main className="flex min-h-screen justify-between p-24">
			<div>
				<MeetTheCommitteesHeader
					headerText="meet the"
					subheaderText="COMMITTEES"
				/>
				<CommitteesGrid />
				<CommitteesPic />
			</div>
		</main>
	);
};

export default EventsCommittees;
