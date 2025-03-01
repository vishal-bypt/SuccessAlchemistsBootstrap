"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
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
  // /Users/byptmacbookpro704/Desktop/topicsService/success-alchemists/success-alchemists/public/assets/images/main_logo.png
  return (
    // <div className="main_layout">
    // <div className="main_logo" />
    <Navbar expand="lg" className="bg-body-tertiary">
      <Navbar.Brand href="#home">
        <div className="main_logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link href="#home">
            <div className="home_text_div text_div">Home</div>
          </Nav.Link>
          <Nav.Link href="#home">
            <div className="text_div">About us</div>
          </Nav.Link>
          <Nav.Link href="#home">
            <div className=" text_div">Who we are</div>
          </Nav.Link>
          <Nav.Link href="#home">
            <div className=" text_div">Our success</div>
          </Nav.Link>
          <Nav.Link href="#home">
            <div className=" text_div">Quick assessment</div>
          </Nav.Link>
          <Nav.Link href="#home">
            <div className=" text_div">Our success</div>
          </Nav.Link>

          <Nav.Link href="#link">Link</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    // {/* <div className="main_logo" />
    // <div className="right_div_layout">
    //   <div className="home_text_div text_div">Home</div>
    //   <div className="text_div">About us</div>
    //   <div className="text_div">Who we are</div>
    //   <div className="text_div">Our success</div>
    //   <div className="text_div">Quick assessment</div>
    //   <div className="text_div">Resources</div>
    //   <div className="text_div events_div">
    //     Events <DropDownIcon />
    //   </div>
    //   <div className="contact_div contact_div_text">
    //     <div className="text_div">Contact us</div>
    //   </div>
    // </div> */}
    // </div>
  );
};

export default NavbarMenu;
