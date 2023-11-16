import React from 'react';

interface HomeOverviewHeaderProps {
    title: string;
    description: string;
    button: string;
}

const EventComponent: React.FC<HomeOverviewHeaderProps> = ({ title, description, button }) => {
    const desc = description.split('\n').map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br />
    </React.Fragment>
  ));

    return (
        <div className="pt-80 align-center mt-80">
            <br />
            <p className="text-eerie-black text-8xl flex flex-col items-center font-bold font-family-helvetica">
                {title}
            </p>
            <p className="leading-3 text-eerie-black text-base text-center mt-5 mb-14 flex flex-col items-center font-family-montserrat">
                {desc}
            </p>
            <p className="mt-5 mb-36 flex flex-col items-center font-family-helvetica">
                <a href={button} className="hover:bg-eerie-black mb-56 text-base bg-coral-pink flex py-4 px-8 lex justify-center items-center text-white">
                    View event details
                </a>
            </p>
        </div>
    );
};

export default EventComponent;
