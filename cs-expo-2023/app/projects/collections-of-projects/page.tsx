import React, { useEffect } from 'react';
import { NextPage } from "next";

import CollectionOfProjectsHeader from '../../../components/CollectionOfProjectsHeader';
import GroupCardLayout from '../../../components/GroupCardLayout'
import ThesisProjectsList from '../../../components/ThesisProjectReader';
import thesisData from '../../../thesis-projects.json';
import GroupsData from '../../../thesis-projects.json';

{/* <ThesisProjectsList />
/* Display Group Names
<div>
  <h3>Group Names</h3>
  <ul>
    {Object.keys(thesisDataTyped).map((key) => (
      <li key={key}>{thesisDataTyped[key].groupname}</li> 
    ))}
    </ul> */}

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


const CollectionOfProjects: NextPage = async () => {
  return (
    <main className="flex min-h-screen flex-col p-24">
      <CollectionOfProjectsHeader 
        headerText ="COLLECTION OF PROJECTS" 
        subheaderText="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic doloribus pariatur sapiente error iste, reiciendis, minima odit tenetur, rerum consequatur harum? Rerum molestiae fugit cupiditate pariatur corrupti, error quo quas."/>
      <GroupCardLayout groupData={GroupsData}/>
    </main>
  )
}

export default  CollectionOfProjects;
