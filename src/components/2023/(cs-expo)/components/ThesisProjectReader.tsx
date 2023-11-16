import React from "react";
import thesisData from "../thesis-projects.json";

interface ThesisProject {
	groupname: string;
	thesisTitle: string;
	abstract: string;
	summary: string;
	members: string[];
	category: string;
	posterFilePath: string;
	AVPLink: string;
}

interface ThesisProjectsData {
	[key: string]: ThesisProject;
}

const ThesisProjectsList: React.FC = () => {
	const thesisDataTyped = thesisData as ThesisProjectsData;

	return (
		<div>
			{Object.keys(thesisDataTyped).map((key) => {
				const project = thesisDataTyped[key];
				return (
					<div key={key}>
						<h2>{project.groupname}</h2>
						<p>{project.thesisTitle}</p>
						<p>{project.abstract}</p>
						<p>{project.summary}</p>
						<ul>
							{project.members.map((member, index) => (
								<li key={index}>{member}</li>
							))}
						</ul>
						<p>Category: {project.category}</p>
						<p>Poster File Path: {project.posterFilePath}</p>
						<p>AVP Link: {project.AVPLink}</p>
					</div>
				);
			})}
		</div>
	);
};

export default ThesisProjectsList;
