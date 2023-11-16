import React from "react";
import Image from "next/image";

interface PartnerIconProps {
	partner: {
		imagePath?: string;
	};
}

const PartnerIcon: React.FC<PartnerIconProps> = ({ partner }) => {
	const backgroundImageStyle = partner.imagePath
		? { backgroundImage: `url(${partner.imagePath})`, backgroundSize: "cover" }
		: undefined;
	return (
		<div>
			{partner.imagePath && (
				<div
					className="flex-shrink-0 w-[170px] h-[170px] bg-blue-500 rounded-full ml-3"
					style={backgroundImageStyle}
				/>
			)}
		</div>
	);
};

interface PartnersIconLayoutProps {
	partners: Array<any>;
}
const PartnerIconsLayout: React.FC<PartnersIconLayoutProps> = ({
	partners,
}) => {
	const partnerIcons = [];

	partners.forEach((partner, index) => {
		partnerIcons.push(<PartnerIcon key={index} partner={partner} />);
	});
	return <>{partnerIcons}</>;
};

export default PartnerIconsLayout;
