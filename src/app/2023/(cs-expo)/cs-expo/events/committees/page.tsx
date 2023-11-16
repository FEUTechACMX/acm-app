import React from 'react';
import MeetTheCommitteesHeader from '@/components/MeetTheCommitteesHeader';
import CommitteesGrid from '@/components/CommitteesGrid';
import CommitteesPic from '@/components/CommitteesPic';

const EventsCommittees = () => {
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