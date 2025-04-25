"use client";
import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import "../components/navbar.css";

const NavbarMenu = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [openNav, setOpenNav] = React.useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  console.log(pathname, "pathname");
  return (
    <Navbar expand="lg" className="">
      <Navbar.Brand href="/home">
        <div className="main_logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
        <Nav.Link
        as={Link}
        href="/home"
        className={`${
          pathname === "/home"
            ? "active-link font-semibold"
            : "inactive-link font-normal"
        } text-sm xl:text-xl font-barlow link-underline link-underline-opacity-0`}
        
      >
        <div
                className={`${
                  pathname === "/home"
                    ? "active-link font-semibold"
                    : "inactive-link font-normal"
                }  nav_text_div`}>
                Home
              </div>
      </Nav.Link>
         
          <Nav.Link
              as={Link}
              href="/about"
              className={`${
                pathname === "/about"
                  ? "active-link font-semibold"
                  : "inactive-link font-normal"
              } text-sm xl:text-xl font-barlow link-underline link-underline-opacity-0`}
            >
              <div
                className={`${
                  pathname === "/about"
                    ? "active-link font-semibold"
                    : "inactive-link font-normal"
                }  nav_text_div`}>
                About us
              </div>
            
          </Nav.Link>
          {/* <Nav.Link
            as={Link}
              href="/who"
              className={`${
                pathname === "/who"
                  ? "active-link font-semibold"
                  : "inactive-link font-normal"
              } text-sm xl:text-xl font-barlow link-underline link-underline-opacity-0`}
            >
              <div
                className={`${
                  pathname === "/who"
                    ? "active-link font-semibold"
                    : "inactive-link font-normal"
                }  nav_text_div`}
              >
                Who we are
              </div>
          </Nav.Link> */}
          <Nav.Link
            as={Link}
              href="/success"
              className={`${
                pathname === "/success"
                  ? "active-link font-semibold"
                  : "inactive-link font-normal"
              } text-sm xl:text-xl font-barlow link-underline link-underline-opacity-0`}
            >
              <div
                className={`${
                  pathname === "/success"
                    ? "active-link font-semibold"
                    : "inactive-link font-normal"
                } nav_text_div`}
              >
                Our success
              </div>
          </Nav.Link>
          <Nav.Link
            as={Link}
              href="https://scalinguptoolkit.com/s/ScaleUpQA_AH"
              target="_blank"
              className={`${
                pathname === "/assessment"
                  ? "active-link font-semibold"
                  : "inactive-link font-normal"
              } text-sm xl:text-xl font-barlow link-underline link-underline-opacity-0`}
            >
              <div
                className={`${
                  pathname === "/assessment"
                    ? "active-link font-semibold"
                    : "inactive-link font-normal"
                } nav_text_div`}
              >
                Quick assessment
              </div>
          </Nav.Link>
          <Nav.Link
              as={Link}
              href="/resources"
              className={`${
                pathname === "/resources" || "/toolDetail"
                  ? "active-link font-semibold"
                  : "inactive-link font-normal"
              } text-sm xl:text-xl font-barlow link-underline link-underline-opacity-0`}
            >
              <div
               className={`${
                [
                  "/resources",
                  "/toolDetail",
                ].includes(pathname)
                  ? "active-link font-semibold"
                  : "inactive-link font-normal"
              } nav_text_div`}
              >
                Resources
              </div>
          </Nav.Link>
          <NavDropdown
            title={
              <span
                className={`${
                  [
                    "/events/podcast",
                    "/events/webinar",
                    "/events/basecamp",
                    "/events/webinarDetail",
                    "/events/eventDetail"
                  ].includes(pathname)
                    ? "active-link font-semibold"
                    : "inactive-link font-normal"
                } nav_text_div`}
              >
                Events
              </span>
            }
            id="basic-nav-dropdown"
          >
          
            <NavDropdown.Item>
              <Link
                href="/events/webinar"
                className={`${
                  pathname === "/events/webinar"
                    ? "active-link font-semibold"
                    : "inactive-link font-normal"
                }  nav_text_div link-underline link-underline-opacity-0`}
              >
                Masterminds Webinar
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link
                href="/events/basecamp"
                className={`${
                  pathname === "/events/basecamp"
                    ? "active-link font-semibold"
                    : "inactive-link font-normal"
                }  nav_text_div link-underline link-underline-opacity-0`}
              >
                Basecamp Workshop
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link
                href="/events/podcast"
                className={`${
                  pathname === "/events/podcast"
                    ? "active-link font-semibold"
                    : "inactive-link font-normal"
                }  nav_text_div link-underline link-underline-opacity-0`}
              >
                {" "}
                Pathfinders Podcast
              </Link>
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link
            as={Link}
              href="/contactUs"
              style={{ color: "white" }}
              className={`${
                pathname === "/events/basecamp"
                  ? "active-link font-semibold"
                  : "inactive-link font-normal"
              } contact_div contact_div_text link-underline link-underline-opacity-0`}
            >
              Contact us
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarMenu;
