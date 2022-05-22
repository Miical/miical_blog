import React, { useState, useEffect } from "react";
import { get } from "../../utilities";
import { Link } from "@reach/router";
import GoogleLogin, { GoogleLogout } from "react-google-login";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import "./NavBar.css";

const GOOGLE_CLIENT_ID = "935092820769-9d2d5v809unq0rftffv4gegbvo7ma5s0.apps.googleusercontent.com";

/**
 * The navigation bar at the top of pages.
 */
const NavBar = ({ pathname, userId, handleLogin, handleLogout }) => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    get("/api/articlelist", { directory: "all" }).then((articlesObj) => {
      setArticles(articlesObj);
    });
  }, []);

  let dirList = [];
  for (let article of articles) {
    let dir = dirList.find((dir) => dir.directory === article.directory);
    if (!dir) dirList.push({ directory: article.directory, number: 1 });
    else dir.number++;
  }

  let dirItemList = null;
  if (dirList.length !== 0) {
    dirList.sort((x, y) => (x.directory > y.directory ? 1 : -1));

    dirItemList = [];
    dirItemList = [
      ...dirItemList,
      dirList.map((dirItem) => (
        <>
          <NavDropdown.Item href={"/articlelist/" + dirItem.directory}>
            {dirItem.directory}
          </NavDropdown.Item>
        </>
      )),
    ];
  } else {
    dirItemList = null;
  }

  return (
    <Navbar className="Navbar-container" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="/" className="Navbar-title">
          Miical
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" activeKey={pathname}>
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="Article List" id="basic-nav-dropdown">
              <NavDropdown.Item href="/articlelist/all">All</NavDropdown.Item>
              <NavDropdown.Divider />
              {dirItemList}
            </NavDropdown>
            <Nav.Link href="manage" disabled>
              Article Management
            </Nav.Link>
          </Nav>
          <Nav>
            {userId ? (
              <NavDropdown title={userId} id="basic-nav-dropdown">
                <GoogleLogout
                  className="googleLogin"
                  clientId={GOOGLE_CLIENT_ID}
                  buttonText="Logout"
                  onLogoutSuccess={handleLogout}
                  onFailure={(err) => console.log(err)}
                />
              </NavDropdown>
            ) : (
              <NavDropdown title="Login" id="basic-nav-dropdown">
                <GoogleLogin
                  className="googleLogin"
                  clientId={GOOGLE_CLIENT_ID}
                  buttonText="Login"
                  onSuccess={handleLogin}
                  onFailure={(err) => console.log(err)}
                />
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
