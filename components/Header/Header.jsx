'use client'
import React, { useState} from 'react'
import classes from './Header.module.css'
import Link from 'next/link'


const Header = (props) => {


    const [navbarToggleClicked, setNavbarToggleClicked] = useState(false);
    const [dropdownToggleClicked, setDropdownToggleClicked] = useState(false);
    const [dropdownLiToggleClicked, setDropdownLiToggleClicked] = useState(false);

    const menu = [
        { id: 1, name: 'Home' },
        { id: 2, name: 'Competition' },
        { id: 3, name: 'Bootcamp' },
        { id: 4, name: 'Webinar' },
        { id: 5, name: 'Mini Challenge' },
        { id: 6, name: 'Register' },
    ];

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

    return (
        <section>
            <div className={classes.outer}>

                {/* Logo Bist League */}
                <button >
                   <Link href='/'><img src="/images/logo.png" alt="logo" className={classes.logo} /></Link>
                </button>
                

                {/* Button */}
                <button className={`${classes.button} ${props.page === 'Home' ? classes.buttonActive : ''}`} ><Link href='/'>Home</Link></button>
                <button className={`${classes.button} ${props.page === 'Competition' ? classes.buttonActive : ''}`} ><Link href='/competition'>Competition</Link></button>
                <button className={`${classes.button} ${props.page === 'Bootcamp' ? classes.buttonActive : ''}`} ><Link href='/bootcamp'>Bootcamp</Link></button>
                <button className={`${classes.button} ${props.page === 'Webinar' ? classes.buttonActive : ''}`} ><Link href='/webinar'>Webinar</Link></button>
                <button className={`${classes.button} ${props.page === 'Mini Challenge' ? classes.buttonActive : ''}`} ><Link href='/minichallenge'>Mini Challenge</Link></button>

                {props.username === null ?
                    <button className={`${classes.button}`} ><Link href='#'>Register</Link></button>
                    :

                    <div className={classes.relative}>
                        <div className={classes.topleftusername}>
                            <p>Hi, <span>{props.username}!</span></p>
                            <div className={classes.personAndDropdown}>
                                <button onClick={() => handleDropdownToggle()}>
                                    <svg className={classes.BsPersonCircle} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" color="#379392" height="1.8rem" width="1.8rem" xmlns="http://www.w3.org/2000/svg"><path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"></path><path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"></path></svg>
                                </button>

                                <button onClick={() => handleDropdownToggle()}>
                                    <svg className={classes.dropdownIcon} width="15" height="15" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.50002 10.6251L11.3334 7.79175H5.66669L8.50002 10.6251ZM8.50002 15.5834C7.52016 15.5834 6.59933 15.3974 5.73752 15.0252C4.87572 14.6531 4.12606 14.1486 3.48856 13.5115C2.85106 12.874 2.34649 12.1244 1.97485 11.2626C1.60321 10.4008 1.41716 9.47994 1.41669 8.50008C1.41669 7.52022 1.60274 6.59939 1.97485 5.73758C2.34696 4.87578 2.85153 4.12612 3.48856 3.48862C4.12606 2.85112 4.87572 2.34655 5.73752 1.97491C6.59933 1.60328 7.52016 1.41722 8.50002 1.41675C9.47988 1.41675 10.4007 1.6028 11.2625 1.97491C12.1243 2.34703 12.874 2.8516 13.5115 3.48862C14.149 4.12612 14.6538 4.87578 15.0259 5.73758C15.398 6.59939 15.5838 7.52022 15.5834 8.50008C15.5834 9.47994 15.3973 10.4008 15.0252 11.2626C14.6531 12.1244 14.1485 12.874 13.5115 13.5115C12.874 14.149 12.1243 14.6538 11.2625 15.026C10.4007 15.3981 9.47988 15.5839 8.50002 15.5834Z" fill="#40A89F" />
                                    </svg>
                                </button>

                            </div>
                        </div>

                        <div className={`${classes.dropdown} ${dropdownToggleClicked ? classes.dropDownActive : ''}`}>
                            <ul className={classes.ulDropDown}>
                                <li className={`${classes.liDropDown} ${classes.dashboardDropDown}`}>
                                    <Link href='#'>Dashboard</Link>
                                </li>
                                <li className={`${classes.liDropDown} ${classes.signOutDropDown}`}>
                                    <Link href='#'>Sign Out</Link>
                                </li>
                            </ul>
                        </div>
                    </div>



                }

                {/* Navbar Burger */}
                <img src="/images/navbarToggle.png" alt="navbarToggle" className={classes.navbarToggle} onClick={() => handleNavbarToggle()} />
            </div>

            {/* Overlay */}
            <div className={`${classes.overlay} ${navbarToggleClicked ? classes.show : ''}`} id="overlay">
                <ul>
                    <li className={classes.backButtonSection}>
                        <button><img src="./images/back-arrow.png" alt="" className={classes.backButton} onClick={() => handleBackButton()} /><Link href="#" className={classes.backText} onClick={() => handleBackButton()}>Back</Link></button>
                    </li>

                    <li className={`${ props.page === 'Home' ? classes.activeLi : '' }`}>
                        <Link href='/'>Home</Link>
                    </li>

                    <li className={props.page === 'Competition' ? classes.activeLi : ''}>
                        <Link href='/competition'>Competition</Link>
                    </li>

                    <li className={props.page === 'Bootcamp' ? classes.activeLi : ''}>
                        <Link href='/bootcamp'>Bootcamp</Link>
                    </li>

                    <li className={props.page === 'Webinar' ? classes.activeLi : ''}>
                        <Link href='/webinar'>Webinar</Link>
                    </li>

                    <li className={props.page === 'Mini Challenge' ? classes.activeLi : ''}>
                        <Link href='/minichallenge'>Mini Challenge</Link>
                    </li>


                    {props.username === null ?
                        <li className="flex justify-center"><button className={`${classes.registerButton}`} ><Link href='#'>Register</Link></button></li>
                        :
                        <li>
                            <h1 className="inline-block">Hi, <span>{props.username}!</span></h1>
                            <button onClick={() => handleDropdownLiToggle()}>
                                <svg className="inline-block ml-2" width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19 9L12 16L5 9" stroke="#4F4F4F" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </li>
                    }
                    <div>

                        <li className={`${classes.profileLi} ${dropdownLiToggleClicked ? classes.show : ''}`}>
                            <button>
                                Dashboard
                            </button>
                        </li>


                        <li className={`${classes.profileLi} ${dropdownLiToggleClicked ? classes.show : ''}`} >
                            <button>
                                Sign Out
                            </button>
                        </li>
                    </div>

                </ul>
            </div>
        </section>
    )
}

export default Header