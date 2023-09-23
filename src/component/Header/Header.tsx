"use client";
import React, { useState, useLayoutEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import css from "./Header.module.css";
import Link from "next/link";
import axios from "axios";
import Cookies from "universal-cookie";

interface HeaderProps {
  page: string;
}

const Header: React.FC<HeaderProps> = (props) => {
  const [navbarToggleClicked, setNavbarToggleClicked] = useState(false);
  const [dropdownToggleClicked, setDropdownToggleClicked] = useState(false);
  const [dropdownLiToggleClicked, setDropdownLiToggleClicked] = useState(false);

  const handleNavbarToggle = () => {
    setNavbarToggleClicked(true);
  };

  const handleBackButton = () => {
    setNavbarToggleClicked(false);
  };

  const handleDropdownToggle = () => {
    setDropdownToggleClicked(!dropdownToggleClicked);
  };

  const handleDropdownLiToggle = () => {
    setDropdownLiToggleClicked(!dropdownLiToggleClicked);
  };

  // Routing Handler

  const router = useRouter();

  const homeHandler = () => {
    router.push("/landingpage");
  };

  const competetionHandler = () => {
    router.push("/");
  };

  const bootcampHandler = () => {
    router.push("/");
  };

  const webinarHandler = () => {
    router.push("/");
  };

  const miniChallengeHandler = () => {
    router.push("/");
  };

  const registerUserHandler = () => {
    router.push("/");
  };

  const [username, setUsername] = useState<string | null>(null);
  const cookies = new Cookies();
  const user_id = cookies.get("user_id"); // Read JWT token from cookies
  // const user_id = "e43aee0f-8f18-48c1-97fe-32049a99f40b";
  const [usernameReady, setUsernameReady] = useState<boolean>(false);

  useLayoutEffect(() => {
    if (user_id) {
      // Call the API to fetch profile data
      fetchProfileData();
      setUsernameReady(true);
    } else {
      setUsername(null);
      setUsernameReady(true);
    }
  }, []);

  const fetchProfileData = async () => {
    try {
      const response = await axios.get(
        "https://be-staging-b6utdt2kwa-et.a.run.app/profile/" + user_id
      );
      setUsername(response.data.data.username);
    } catch (error) {
      console.error("Error fetching profile data:", error);
    }
  };

  return (
    <section>
      <div className={`h-20 ${css.outer}`}>
        <button>
          <Link href="/">
            <img
              src="./images/landingpage/Logo.svg"
              alt="logo"
              className={css.logo}
            />
          </Link>
        </button>

        <div className={`${css.rightNavbar}`}>
          <button
            className={`${css.navbarItem} ${
              props.page === "Home" ? css.buttonActive : ""
            }`}
          >
            <Link href="/" className={``}>
              Home
            </Link>
          </button>
          <button className={`${css.navbarItem} `}>
            <Link
              href="/competition"
              className={`${
                props.page === "Competition" ? css.buttonActive : ""
              }`}
            >
              Competition
            </Link>
          </button>
          <button
            className={`${css.navbarItem} ${
              props.page === "Bootcamp" ? css.buttonActive : ""
            }`}
          >
            <Link href="/bootcamp">Bootcamp</Link>
          </button>
          <button
            className={`${css.navbarItem} ${
              props.page === "Webinar" ? css.buttonActive : ""
            }`}
          >
            <Link href="/webinar">Webinar</Link>
          </button>
          <button
            className={`${css.navbarItem} ${
              props.page === "Mini Challenge" ? css.buttonActive : ""
            }`}
          >
            <Link href="/minichallenge">Mini Challenge</Link>
          </button>

          {username === null ? (
            <button className={`${css.navbarItem}`}>
              <Link href="#">Register</Link>
            </button>
          ) : (
            <div className={css.relative}>
              <div className={css.topleftusername}>
                <p className={`${css.hiUsername}`}>
                  Hi, <span>{username}!</span>
                </p>
                <div className={css.personAndDropdown}>
                  <button onClick={() => handleDropdownToggle()}>
                    <svg
                      className={css.BsPersonCircle}
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 16 16"
                      color="#379392"
                      height="1.8rem"
                      width="1.8rem"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"></path>
                      <path
                        fillRule="evenodd"
                        d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                      ></path>
                    </svg>
                  </button>

                  <button onClick={() => handleDropdownToggle()}>
                    <svg
                      className={css.dropdownIcon}
                      width="15"
                      height="15"
                      viewBox="0 0 17 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.50002 10.6251L11.3334 7.79175H5.66669L8.50002 10.6251ZM8.50002 15.5834C7.52016 15.5834 6.59933 15.3974 5.73752 15.0252C4.87572 14.6531 4.12606 14.1486 3.48856 13.5115C2.85106 12.874 2.34649 12.1244 1.97485 11.2626C1.60321 10.4008 1.41716 9.47994 1.41669 8.50008C1.41669 7.52022 1.60274 6.59939 1.97485 5.73758C2.34696 4.87578 2.85153 4.12612 3.48856 3.48862C4.12606 2.85112 4.87572 2.34655 5.73752 1.97491C6.59933 1.60328 7.52016 1.41722 8.50002 1.41675C9.47988 1.41675 10.4007 1.6028 11.2625 1.97491C12.1243 2.34703 12.874 2.8516 13.5115 3.48862C14.149 4.12612 14.6538 4.87578 15.0259 5.73758C15.398 6.59939 15.5838 7.52022 15.5834 8.50008C15.5834 9.47994 15.3973 10.4008 15.0252 11.2626C14.6531 12.1244 14.1485 12.874 13.5115 13.5115C12.874 14.149 12.1243 14.6538 11.2625 15.026C10.4007 15.3981 9.47988 15.5839 8.50002 15.5834Z"
                        fill="#40A89F"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              <div
                className={`${css.dropdown} ${
                  dropdownToggleClicked ? css.dropDownActive : ""
                }`}
              >
                <ul className={css.ulDropDown}>
                  <li className={`${css.liDropDown} ${css.dashboardDropDown}`}>
                    <Link href="/dashboarduser">Dashboard</Link>
                  </li>
                  <li className={`${css.liDropDown} ${css.signOutDropDown}`}>
                    <Link href="/login">Sign Out</Link>
                  </li>
                </ul>
              </div>
            </div>
          )}

          {/* Navbar Burger */}
          <img
            src="/images/landingpage/navbarToggle.svg"
            alt="navbarToggle"
            className={css.navbarToggle}
            onClick={() => handleNavbarToggle()}
          />
        </div>
      </div>

      {/* Overlay */}
      <div
        className={`${css.overlay} ${navbarToggleClicked ? css.show : ""}`}
        id="overlay"
      >
        <ul>
          <li className={css.backButtonSection}>
            <button>
              <img
                src="./images/landingpage/back-arrow.svg"
                alt=""
                className={css.backButton}
                onClick={() => handleBackButton()}
              />
              <Link
                href="#"
                className={css.backText}
                onClick={() => handleBackButton()}
              >
                Back
              </Link>
            </button>
          </li>

          <li className={`${props.page === "Home" ? css.activeLi : ""}`}>
            <Link href="/">Home</Link>
          </li>

          <li className={props.page === "Competition" ? css.activeLi : ""}>
            <Link href="/competition">Competition</Link>
          </li>

          <li className={props.page === "Bootcamp" ? css.activeLi : ""}>
            <Link href="/bootcamp">Bootcamp</Link>
          </li>

          <li className={props.page === "Webinar" ? css.activeLi : ""}>
            <Link href="/webinar">Webinar</Link>
          </li>

          <li className={props.page === "Mini Challenge" ? css.activeLi : ""}>
            <Link href="/minichallenge">Mini Challenge</Link>
          </li>

          {username === null ? (
            <li className="flex justify-center">
              <button className={`${css.registerButton}`}>
                <Link href="/register">Register</Link>
              </button>
            </li>
          ) : (
            <li>
              <h1 className="inline-block">
                Hi, <span>{username}!</span>
              </h1>
              <button onClick={() => handleDropdownLiToggle()}>
                <svg
                  className="inline-block ml-2"
                  width="24"
                  height="23"
                  viewBox="0 0 24 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19 9L12 16L5 9"
                    stroke="#4F4F4F"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </li>
          )}
          <div>
            <li
              className={`${css.profileLi} ${
                dropdownLiToggleClicked ? css.show : ""
              }`}
            >
              <button>Dashboard</button>
            </li>

            <li
              className={`${css.profileLi} ${
                dropdownLiToggleClicked ? css.show : ""
              }`}
            >
              <button>Sign Out</button>
            </li>
          </div>
        </ul>
      </div>
    </section>
  );
};

export default Header;
