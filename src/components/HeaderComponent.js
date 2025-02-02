import { Navbar, Nav } from 'react-bootstrap';

const Header = (props) => {
    return (
        <Navbar bg="dark" expand="md" variant="dark">
            <Navbar.Brand href="#">
                <img
                    alt="Marketplace Dapp"
                    src="logo512.png"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />{' '}
                Marketplace
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse>
                <Nav className="ml-auto">
                    <Navbar.Text>
                        Compte: {props.account === '0x0'
                            ? <label>Chargement en cours...</label>
                            : props.account
                        }
                    </Navbar.Text>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;
