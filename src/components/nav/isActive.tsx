interface Props {
	href: string;
	path: string;
}
function isActive(props: Props) {
	const { href, path } = props;
	return typeof window !== "undefined" && href === path;
}

export default isActive;
