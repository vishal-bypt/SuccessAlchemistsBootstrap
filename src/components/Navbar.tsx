"use client";
import React from "react";
import Image from "next/image";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Link from "next/link";

// import authApi from "../api/auth";
import { usePathname } from "next/navigation";
// import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
// import { toast } from 'react-toastify';
// import { useDispatch } from "react-redux";
// import { startLoading, stopLoading } from "@/store/LoaderSlice";
// import { setUser } from "@/store/UserSlice";
// import { useSelector } from "react-redux";
// import { setToken } from "@/store/TokenSlice";
import "../components/navbar.css";
import logo from "../../public/assets/images/main_logo.png";

// import {
//   Navbar,
//   Collapse,
//   Typography,
//   IconButton,
// } from "@material-tailwind/react";
import { DropDownIcon } from "@/app/svg";

const NavbarMenu = () => {
  // const dispatch = useDispatch();
  const pathname = usePathname();
  // const user: any = useSelector((state: any) => state.user.user);
  const router = useRouter();

  function NavList() {
    return <div></div>;
  }

  const [openNav, setOpenNav] = React.useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  return (
    // <div className="main_layout">
    // <div className="main_logo" />
    <Navbar expand="lg" className="">
      <Navbar.Brand href="/home">
        <div className="main_logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link
            href="/home"
            className={`${
              pathname === "/home"
                ? "active-link font-semibold"
                : "inactive-link font-normal"
            } text-sm xl:text-xl font-barlow`}
          >
            <div
              className={`${
                pathname === "/home"
                  ? "active-link font-semibold"
                  : "inactive-link font-normal"
              } home_text_div nav_text_div`}
            >
              Home
            </div>
          </Nav.Link>
          <Nav.Link
            href="/about"
            className={`${
              pathname === "/about"
                ? "active-link font-semibold"
                : "inactive-link font-normal"
            } text-sm xl:text-xl font-barlow`}
          >
            <div
              className={`${
                pathname === "/about"
                  ? "active-link font-semibold"
                  : "inactive-link font-normal"
              }  nav_text_div`}
            >
              About us
            </div>
          </Nav.Link>
          <Nav.Link
            href="/who"
            className={`${
              pathname === "/who"
                ? "active-link font-semibold"
                : "inactive-link font-normal"
            } text-sm xl:text-xl font-barlow`}
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
          </Nav.Link>
          <Nav.Link
            href="/success"
            className={`${
              pathname === "/success"
                ? "active-link font-semibold"
                : "inactive-link font-normal"
            } text-sm xl:text-xl font-barlow`}
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
            href="/assessment"
            className={`${
              pathname === "/assessment"
                ? "active-link font-semibold"
                : "inactive-link font-normal"
            } text-sm xl:text-xl font-barlow`}
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
            href="/resources"
            className={`${
              pathname === "/resources"
                ? "active-link font-semibold"
                : "inactive-link font-normal"
            } text-sm xl:text-xl font-barlow`}
          >
            <div
              className={`${
                pathname === "/resources"
                  ? "active-link font-semibold"
                  : "inactive-link font-normal"
              }  nav_text_div`}
            >
              Resources
            </div>
          </Nav.Link>
          <NavDropdown
            title={<span className={`${
              [
                "/events/podcast",
                "/events/webinar",
                "/events/basecamp",
                "/events/webinarDetail"
              ].includes(pathname)
                ? "active-link font-semibold"
                : "inactive-link font-normal"
            } nav_text_div`}>Events</span>}
            id="basic-nav-dropdown"
          >
            <NavDropdown.Item
              href="/events/webinarDetail"
              className={`${
                pathname === "/events/webinarDetail"
                  ? "active-link font-semibold"
                  : "inactive-link font-normal"
              }  nav_text_div`}
            >
              Event Calendar
            </NavDropdown.Item>
            <NavDropdown.Item
              href="/events/webinar"
              className={`${
                pathname === "/events/webinar"
                  ? "active-link font-semibold"
                  : "inactive-link font-normal"
              }  nav_text_div`}
            >
              Masterminds Webinar
            </NavDropdown.Item>
            <NavDropdown.Item
              href="/events/basecamp"
              className={`${
                pathname === "/events/basecamp"
                  ? "active-link font-semibold"
                  : "inactive-link font-normal"
              }  nav_text_div`}
            >
              Basecamp Workshop
            </NavDropdown.Item>
            <NavDropdown.Item href="/events/podcast"
            className={`${
              pathname === "/events/podcast"
                ? "active-link font-semibold"
                : "inactive-link font-normal"
            }  nav_text_div`}>
              Pathfinders Podcast
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link
            href="/contactUs"
            style={{ color: "white" }}
            className={`${
              pathname === "/events/basecamp"
                ? "active-link font-semibold"
                : "inactive-link font-normal"
            } contact_div contact_div_text`}
          >
            Contact us
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarMenu;
