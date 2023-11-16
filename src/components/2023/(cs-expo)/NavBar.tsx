"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AiOutlineDown } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const NavBar: React.FC = () => {
	const useWindowSize = () => {
		const [size, setSize] = useState([0, 0]);

		useEffect(() => {
			const updateSize = () => {
				setSize([window.innerWidth, window.innerHeight]);
			};
			window.addEventListener("resize", updateSize);
			updateSize();
			return () => window.removeEventListener("resize", updateSize);
		}, []);

		return size;
	};

	const [width] = useWindowSize();
	const isMobile = width < 768;
	const [showEventsDropdown, setShowEventsDropdown] = useState<boolean>(false);
	const [showProjectsDropdown, setShowProjectsDropdown] =
		useState<boolean>(false);
	const [showMobileEventsDropdown, setShowMobileEventsDropdown] =
		useState<boolean>(false);
	const [showMobileProjectsDropdown, setShowMobileProjectsDropdown] =
		useState<boolean>(false);
	const [mobileMenuVisible, setMobileMenuVisible] = useState<boolean>(false);
	const dropdownRef = useRef<HTMLDivElement | null>(null);
	const [isNavbarAtTop, setIsNavbarAtTop] = useState<boolean>(true);
	const mobileNavbarRef = useRef<HTMLDivElement | null>(null);

	const toggleEventsDropdown = () => {
		setShowEventsDropdown((prev) => !prev);
		setShowProjectsDropdown(false);
	};

	const toggleProjectsDropdown = () => {
		setShowProjectsDropdown((prev) => !prev);
		setShowEventsDropdown(false);
	};

	const handleDropdownLinkClick = () => {
		setShowEventsDropdown(false);
		setShowProjectsDropdown(false);
	};

	const toggleMobileEventsDropdown = () => {
		setShowMobileEventsDropdown((prev) => !prev);
	};

	const toggleMobileProjectsDropdown = () => {
		setShowMobileProjectsDropdown((prev) => !prev);
	};

	const handleMobileDropdownLinkClick = () => {
		setShowMobileEventsDropdown(false);
		setShowMobileProjectsDropdown(false);
	};

	const toggleMobileMenu = () => {
		setShowMobileEventsDropdown(false);
		setShowMobileProjectsDropdown(false);
		setMobileMenuVisible((prev) => !prev);
	};

	useEffect(() => {
		const handleOutsideClick = (event: MouseEvent) => {
			if (
				mobileNavbarRef.current &&
				!mobileNavbarRef.current.contains(event.target as HTMLElement)
			) {
				handleMobileDropdownLinkClick();
				toggleMobileMenu();
				setMobileMenuVisible(false);
			}

			if (
				dropdownRef.current &&
				!dropdownRef.current.contains(event.target as HTMLElement)
			) {
				handleDropdownLinkClick();
			}
		};

		document.addEventListener("mousedown", handleOutsideClick);

		return () => {
			document.removeEventListener("mousedown", handleOutsideClick);
		};
	}, [dropdownRef, mobileNavbarRef]);

	useEffect(() => {
		const handleScroll = () => {
			const isAtTop = window.scrollY === 0;
			setIsNavbarAtTop(isAtTop);

			if (isAtTop && mobileMenuVisible) {
				setShowEventsDropdown(false);
				setShowProjectsDropdown(false);
				setShowMobileEventsDropdown(false);
				setShowMobileProjectsDropdown(false);
				setMobileMenuVisible(false);
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [mobileMenuVisible]);

	// const [menuOpen, setMenuOpen] = useState(false);
	// const handleNav = () => {
	// 	setMenuOpen(!menuOpen);
	// };

	const defaultMenu = () => {
		return (
			<>
				<div className="relative group">
					<button
						onClick={toggleEventsDropdown}
						className="flex items-center cursor-pointer font-medium hover:text-coral-pink hidden md:flex"
					>
						Events
						<span className="pl-2">
							<AiOutlineDown />
						</span>
					</button>

					{showEventsDropdown && (
						<div
							ref={dropdownRef}
							className="absolute mt-2 bg-white border rounded-md text-left font-normal w-max"
						>
							<Link
								href="/2023/cs-expo/events"
								className="block px-4 py-2 hover:text-coral-pink"
								onClick={handleDropdownLinkClick}
							>
								Overview
							</Link>

							<Link
								href="/2023/cs-expo/events/dev-day"
								className="block px-4 py-2 hover:text-coral-pink"
								onClick={handleDropdownLinkClick}
							>
								Dev Day
							</Link>

							<Link
								href="/2023/cs-expo/events/cs-expo"
								className="block px-4 py-2 hover:text-coral-pink"
								onClick={handleDropdownLinkClick}
							>
								CS Expo
							</Link>

							<Link
								href="/2023/cs-expo/events/committees"
								className="block px-4 py-2 hover:text-coral-pink"
								onClick={handleDropdownLinkClick}
							>
								Committees
							</Link>
						</div>
					)}
				</div>

				<div className="relative group">
					<button
						onClick={toggleProjectsDropdown}
						className="flex items-center cursor-pointer ml-4 font-medium hover:text-coral-pink hidden md:flex"
					>
						Projects
						<span className="pl-2">
							<AiOutlineDown />
						</span>
					</button>

					{showProjectsDropdown && (
						<div
							ref={dropdownRef}
							className="absolute mt-2 bg-white border rounded-md font-normal w-max"
						>
							<Link
								href="/2023/cs-expo/projects"
								className="block px-4 py-2 hover:text-coral-pink"
								onClick={handleDropdownLinkClick}
							>
								Overview
							</Link>

							<Link
								href="/2023/cs-expo/projects/hall-of-fame"
								className="block px-4 py-2 hover:text-coral-pink"
								onClick={handleDropdownLinkClick}
							>
								Hall of Fame
							</Link>

							<Link
								href="/2023/cs-expo/projects/collections-of-projects"
								className="block px-4 py-2 hover:text-coral-pink"
								onClick={handleDropdownLinkClick}
							>
								Collections of Projects
							</Link>
						</div>
					)}
				</div>

				<Link
					href="/2023/cs-expo/partners"
					className="cursor-pointer ml-4 font-medium hover:text-coral-pink"
				>
					Partners
				</Link>
			</>
		);
	};

	const mobileMenu = () => {
		// Dynamic class for text color
		const textColorClass = isNavbarAtTop ? "text-black" : "text-timberwolf";

		return (
			<div
				className={`mobile-menu flex flex-col px-6 py-3 items-start font-semibold ${textColorClass}`}
			>
				<div className="relative group">
					<button
						onClick={toggleMobileEventsDropdown}
						className="flex items-center cursor-pointer hover:text-coral-pink"
					>
						Events
						<span className="pl-2">
							<AiOutlineDown />
						</span>
					</button>

					{showMobileEventsDropdown && (
						<div className="relative m-4 flex flex-col text-left font-normal w-max">
							<Link
								href="/2023/cs-expo/events"
								onClick={handleMobileDropdownLinkClick}
								className="hover:text-coral-pink"
							>
								Overview
							</Link>

							<Link
								href="/2023/cs-expo/events/dev-day"
								onClick={handleDropdownLinkClick}
								className="hover:text-coral-pink"
							>
								Dev Day
							</Link>

							<Link
								href="/2023/cs-expo/events/cs-expo"
								onClick={handleDropdownLinkClick}
								className="hover:text-coral-pink"
							>
								CS Expo
							</Link>

							<Link
								href="/2023/cs-expo/events/committees"
								onClick={handleDropdownLinkClick}
								className="hover:text-coral-pink"
							>
								Committees
							</Link>
						</div>
					)}
				</div>

				<div className="relative group">
					<button
						onClick={toggleMobileProjectsDropdown}
						className="flex items-center justify-center cursor-pointer hover:text-coral-pink"
					>
						Projects
						<span className="pl-2">
							<AiOutlineDown />
						</span>
					</button>

					{showMobileProjectsDropdown && (
						<div className="relative m-4 flex flex-col text-left font-normal w-max">
							<Link
								href="/2023/cs-expo/projects"
								onClick={handleMobileDropdownLinkClick}
								className="hover:text-coral-pink"
							>
								Overview
							</Link>

							<Link
								href="/2023/cs-expo/projects/hall-of-fame"
								onClick={handleDropdownLinkClick}
								className="hover:text-coral-pink"
							>
								Hall of Fame
							</Link>

							<Link
								href="/2023/cs-expo/projects/collections-of-projects"
								onClick={handleDropdownLinkClick}
								className="hover:text-coral-pink"
							>
								Collections of Projects
							</Link>
						</div>
					)}
				</div>

				<Link
					href="/2023/cs-expo/partners"
					className="cursor-pointer hover:text-coral-pink"
				>
					Partners
				</Link>
			</div>
		);
	};

	return (
		<header
			ref={mobileNavbarRef}
			className={`w-full fixed z-10 top-0 right-0 left-0 transition-all ${
				isNavbarAtTop ? "h-auto" : "bg-eerie-black"
			}`}
		>
			<nav className="w-full mx-auto flex justify-between items-center px-6 py-3 bg-transparent">
				<Link href="/2023/cs-expo">
					<Image
						src={
							isNavbarAtTop
								? "/2023/cs-expo/cs-expo-logo-black.png"
								: "/2023/cs-expo/cs-expo-logo-white.png"
						}
						alt="logo"
						width={117}
						height={85}
						className="object-contain"
					/>
				</Link>

				<div className="cursor-pointer ml-auto flex" onClick={toggleMobileMenu}>
					{isMobile ? (
						mobileMenuVisible ? (
							<div className="text-coral-pink">
								<IoClose />
							</div>
						) : (
							<div className="text-coral-pink">
								<FaBars />
							</div>
						)
					) : isNavbarAtTop ? (
						defaultMenu()
					) : mobileMenuVisible ? (
						<div className="text-coral-pink">
							<IoClose />
						</div>
					) : !mobileMenuVisible && isNavbarAtTop ? (
						<>
							{" "}
							{toggleMobileMenu()} {defaultMenu()}{" "}
						</>
					) : (
						<div className="text-coral-pink">
							<FaBars />
						</div>
					)}
				</div>
			</nav>

			{(isMobile && mobileMenuVisible) || (mobileMenuVisible && !isNavbarAtTop)
				? mobileMenu()
				: null}
		</header>
	);
};

export default NavBar;
