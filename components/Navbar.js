import styled from "styled-components";
import Link from "next/link";
import Logo from './Logo'
import Button from './Button'

const Nav = styled.nav`
	background-color: #009ddc;
	display: flex;
	justify-content: space-around;
	align-items: center;
	width: 100%;
	height: 10vh;
	box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.35);
`;

const NavbarLinkList = styled.ul`
	list-style: none;
	width: 15rem;
	display: flex;
	flex-direction: row;
	justify-content: space-around;
`;

const Navbar = () => {
	return (
		<Nav>
			<Logo />
			<NavbarLinkList>
					<li>
						<Link href="/">
							<Button text="Home" />
						</Link>
					</li>
					<li>
						<Link href="/">
							<Button text="About" />
						</Link>
					</li>
			</NavbarLinkList>
		</Nav>
	);
};
export default Navbar;
