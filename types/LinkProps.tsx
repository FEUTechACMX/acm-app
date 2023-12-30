interface LinkProps {
	name: string;
	href: string;
	icon?: React.ReactNode | React.ElementType;
}
export interface LinkPropsElement extends LinkProps {
	icon?: React.ElementType;
}
export interface LinkPropsNode extends LinkProps {
	icon?: React.ReactNode;
}
