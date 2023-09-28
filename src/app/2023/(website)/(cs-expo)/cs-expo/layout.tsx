interface Props {
	children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
	return <body>{children}</body>;
};

export default Layout;
