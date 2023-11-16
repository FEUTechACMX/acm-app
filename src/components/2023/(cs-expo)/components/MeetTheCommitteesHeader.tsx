import React from 'react';

interface MeetTheCommitteesProps {
    headerText: string;
    subheaderText: string;
}

const MeetTheCommitteesHeader: React.FC<MeetTheCommitteesProps> = ({ headerText, subheaderText }) => {
    return (
        <main>
            <div className="p-23">
                <div className="ms-28">
                    <div className="font-regular text-7xl m-0 mb-[-1.5rem]">
                        <p>{headerText}</p>
                    </div>
                    <div className="font-black text-8xl m-0 mt-[-1rem]">
                        <p>{subheaderText}</p>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default MeetTheCommitteesHeader;
