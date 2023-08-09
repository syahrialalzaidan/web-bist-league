"use client";

import React, { useState, useLayoutEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import css from "./landing.module.css";
import Countdown from "./component/Countdown/Countdown";

export default function Home() {
  useLayoutEffect(() => {
    console.log("window.innerHeight", window.innerHeight);

    // Function to set the CSS custom property for --vh
    function setVhProperty() {
      // Get the viewport height and convert it to a value for a vh unit
      let vh = window.innerHeight * 0.01;
      // Set the value of --vh custom property
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    }

    // Set the initial value when the app loads
    setVhProperty();

    // Event listener to update the value when the viewport size changes
    window.addEventListener("resize", setVhProperty);

    // Cleanup the event listener on unmount to prevent memory leaks
    return () => {
      window.removeEventListener("resize", setVhProperty);
    };
  }, []);

  const [activities, setActivities] = useState < string > ("competetion"); // Added type annotation

  const changeActivities = (name: string) => {
    // Added type annotation
    setActivities(name);
  };

  // Ubah Registration close in -> Extended Registration
  const registrationClose = new Date("September 17, 2023 22:37:00 ").getTime();

  const [componentReady, setcomponentReady] = useState < boolean > (false);
  const [registrationStatus, setRegistrationStatus] = useState < String > (
    "Closed Registration in"
  );
  useLayoutEffect(() => {
    const now = new Date().getTime();
    if (now > registrationClose) {
      setRegistrationStatus("Extended Registration");
    }
    setcomponentReady(true);
  }, []);

  const seacrhParams = useSearchParams();
  const username = seacrhParams.get("username");

  // STATE USERNAME DISINI

  return (
    <>
      <div
        className={`flex-col justify-center content-center w-full ${componentReady ? "visible" : "invisible"
          }`}
      >
        {/* <Header page="Home" username={username} /> */}
        <Header page="Home" username={username} />
        <div className={`h-20 bg-white`}></div>
        <main className={css.main}>
          {/* Background Image */}
          <div
            className={`${css.backgroundImage} w-full ${activities === "competetion" ? "" : css.hideBG
              }`}
          >
            <img
              src="images/landingPageBackground.svg"
              alt="background"
              className={`w-full`}
            />
          </div>
          <div
            className={`${css.backgroundImage} w-full ${activities === "bootcamp" ? "" : css.hideBG
              }`}
          >
            <img
              src="images/landingPageBackground2.svg"
              alt="background"
              className={`w-full`}
            />
          </div>
          <div
            className={`${css.backgroundImage} w-full ${activities === "miniChallenge" ? "" : css.hideBG
              }`}
          >
            <img
              src="images/landingPageBackground3.svg"
              alt="background"
              className={`w-full`}
            />
          </div>
          <div
            className={`${css.backgroundImage} w-full ${activities === "webinar" ? "" : css.hideBG
              }`}
          >
            <img
              src="images/landingPageBackground4.svg"
              alt="background"
              className={`w-full`}
            />
          </div>
          <div className={`${css.backgroundImageMobile} w-full`}>
            <img
              src="images/landingPageBackgroundMobile.svg"
              alt="background"
              className={`w-full`}
            />
          </div>

          {/* Main Section */}
          <section className={css.body}>
            <h1 className={`${css.bistLeagueHeader}`}>BIST LEAGUE 6.0</h1>
            <p className={`${css.bistLeagueSubHeader}`}>
              Leveraging Technological Opportunities to Achieve <br />
              Sustainable Business Growth
            </p>
            <p className={`${css.openRegistrationText}`}>
              {componentReady && registrationStatus === "Extended Registration"
                ? "Extended Registration"
                : ""}
              {componentReady && registrationStatus === "Closed Registration in"
                ? "Closed Registration in"
                : ""}
            </p>

            {/* Countdown Section */}
            <Countdown />
            <p className={`${css.eventDate}`}>17 September 2023</p>
            <div className={`${css.registerButtonDiv}`}>
              <button className={`${css.registerButton}`}>Register</button>
            </div>
            <div className={`${css.aboutBistLeagueSection}`}>
              <h1 className={`${css.aboutBistLeagueHeading}`}>
                About BIST League 6.0
              </h1>
              <div className={`${css.aboutBistLeagueContainer}`}>
                <p className={`${css.aboutBistLeagueText}`}>
                  <b>
                    Business Information System and Technology (BIST) League 6.0
                  </b>{" "}
                  is a Business - IT Case competition that aims to hone problem
                  solving skills on business problems related to information
                  technology. BIST League 6.0 theme is{" "}
                  <b>
                    “Leveraging technological opportunities to achieve
                    sustainable business growth”.{" "}
                  </b>
                  In addition to the main competition, we also hold a Business
                  Case Bootcamp which in planned to improve the ability of
                  participants in designing and working on business cases.We
                  also invite the public to attend a national Webinar session
                  that broadens their horizons related to business and
                  technology, especially on technology that supports business
                  growth.Last but not least, we also hold a Mini Video Challenge
                  which is planned to be participated by participant and
                  public.This Mini Video Challenge aims to increase public
                  awareness and insight regarding the topics raised by BIST
                  League 6.0
                </p>
              </div>
            </div>
            <div className={`${css.timelineHorizontalDiv}`}>
              <img
                src="./images/timelineHorizontal.svg"
                alt="timeline"
                className={`${css.timelineHorizontal}`}
              />
            </div>
            <div className={`${css.timelineVerticalDiv}`}>
              <h1 className={`${css.timelineHeader}`}>Timeline</h1>
              <img
                src="./images/timelineVertical.svg"
                alt="timeline"
                className={`${css.timelineVertical}`}
              />
            </div>

            {/* Activities Section */}
            <h1 className={`${css.activitiesHeader}`}>Activities</h1>

            {/* Activities for Desktop */}
            <div className={`${css.activitiesSectionForDesktop}`}>
              {/* Left Side Activities */}
              <div className={`${css.activitiesLeftSide}`}>
                {/* Competetion Component Desktop */}
                <div className={`${css.CompetetionDescription}`}>
                  <p
                    className={`${css.activitiesDate} ${activities == "competetion" ? "" : css.hide
                      }`}
                  >
                    14 Agustus - 19 November
                  </p>
                  <button
                    className={`${css.activitiesTitle}`}
                    onClick={() => changeActivities("competetion")}
                  >
                    Competition
                  </button>
                  <p
                    className={`${css.activitiesText} ${activities == "competetion" ? "" : css.hide
                      }`}
                  >
                    Business IT Case Competition is one of the main events of
                    BIST League 6.0 which is a competition to hone the solve a
                    business problems related to information technology by
                    applying problem solving skills in creating creative and
                    effective solutions. This competition is intended for
                    undergraduate/D3 students.
                  </p>
                  <button
                    className={`${css.activitiesButton} ${activities == "competetion" ? "" : css.hide
                      } bg-[#276766]`}
                  >
                    More About Competition
                  </button>
                </div>

                {/* Bootcamp Component Desktop */}
                <div className={`${css.businessCaseDescription}`}>
                  <p
                    className={`${css.activitiesDate} ${activities == "bootcamp" ? "" : css.hide
                      } mt-8`}
                  >
                    Coming Soon
                  </p>
                  <button
                    className={`${css.activitiesTitle}`}
                    onClick={() => changeActivities("bootcamp")}
                  >
                    Business Case Bootcamp
                  </button>
                  <p
                    className={`${css.activitiesText} ${activities == "bootcamp" ? "" : css.hide
                      }`}
                  >
                    (description Here)
                  </p>
                  <button
                    className={`${css.activitiesButton} ${activities == "bootcamp" ? "" : css.hide
                      } bg-[#9E1B1B]`}
                  >
                    More About Bootcamp
                  </button>
                </div>

                {/* Mini Challenge Component Desktop */}
                <div className={`${css.miniChallengeDescription}`}>
                  <p
                    className={`${css.activitiesDate} ${activities == "miniChallenge" ? "" : css.hide
                      } mt-8`}
                  >
                    Coming Soon
                  </p>
                  <button
                    className={`${css.activitiesTitle}`}
                    onClick={() => changeActivities("miniChallenge")}
                  >
                    Mini Challenge
                  </button>
                  <p
                    className={`${css.activitiesText} ${activities == "miniChallenge" ? "" : css.hide
                      }`}
                  >
                    A video challenge that can be joined by participant and
                    public to increase awareness and insight regarding the
                    topics raised by BIST League 6.0
                  </p>
                  <button
                    className={`${css.activitiesButton} ${activities == "miniChallenge" ? "" : css.hide
                      } bg-[#463461]`}
                  >
                    More About Mini Challenge
                  </button>
                </div>

                {/* Webinar Component Desktop */}
                <div className={`${css.webinarDescription}`}>
                  <p
                    className={`${css.activitiesDate} ${activities == "webinar" ? "" : css.hide
                      } mt-8`}
                  >
                    Coming Soon
                  </p>
                  <button
                    className={`${css.activitiesTitle}`}
                    onClick={() => changeActivities("webinar")}
                  >
                    Webinar
                  </button>
                  <p
                    className={`${css.activitiesText} ${activities == "webinar" ? "" : css.hide
                      }`}
                  >
                    A sharing sessions with incredible speakers from the
                    Technology industry with topics aligning with BIST League
                    6.0 theme.
                  </p>
                  <button
                    className={`${css.activitiesButton} ${activities == "webinar" ? "" : css.hide
                      } bg-[#AE7120]`}
                  >
                    More About Webinar
                  </button>
                </div>
              </div>

              {/* Right Side Activites */}
              <div className={`${css.activitiesRightSide}`}>
                <div className={`${css.activitiesImageDiv}`}>
                  <img src="" alt="" className={`${css.competetionImage}`} />
                  <img src="" alt="" className={`${css.bootcampImage}`} />
                  <img src="" alt="" className={`${css.miniChallenge}`} />
                  <img src="" alt="" className={`${css.webinarImage}`} />
                </div>
              </div>
            </div>

            {/* Activites for Mobile */}
            <div className={`${css.activitiesSectionForMobile}`}>
              {/* Competetion Component Mobile */}
              <div className={`${css.competetionImageDiv}`}>
                <img src="" alt="" className={`${css.competetionImage}`} />
              </div>
              <p className={`${css.activitiesDate}`}>
                14 Agustus - 19 November
              </p>
              <h1 className={`${css.activitiesTitle}`}>Competition</h1>
              <p className={`${css.activitiesText}`}>
                Business IT Case Competition is one of the main events of BIST
                League 6.0 which is a competition to hone the solve a business
                problems related to information technology by applying problem
                solving skills in creating creative and effective solutions.
                This competition is intended for undergraduate/D3 students.
              </p>
              <button className={`${css.activitiesButton} bg-[#276766]`}>
                More About Competition
              </button>

              {/* Bootcamp Component Mobile */}
              <div className={`${css.bootcampImageDiv}`}>
                <img src="" alt="" className={`${css.bootcampImage}`} />
              </div>
              <p className={`${css.activitiesDate}`}>Coming Soon</p>
              <h1 className={`${css.activitiesTitle}`}>
                Business Case Bootcamp
              </h1>
              <p className={`${css.activitiesText}`}></p>
              <button className={`${css.bootcampButton} bg-[#943232]`}>
                More About Bootcamp
              </button>

              {/* Mini Challenge Component Mobile */}
              <div className={`${css.miniChallengeImageDiv}`}>
                <img src="" alt="" className={`${css.miniChallenge}`} />
              </div>

              <p className={`${css.activitiesDate}`}>Coming Soon</p>
              <h1 className={`${css.activitiesTitle}`}>Mini Challenge</h1>
              <p className={`${css.activitiesText}`}>
                A video challenge that can be joined by participant and public
                to increase awareness and insight regarding the topics raised by
                BIST League 6.0
              </p>
              <button className={`${css.miniChallengeButton} bg-[#463461]`}>
                More About Mini Challenge
              </button>

              {/* Webinar Component Mobile */}
              <div className={`${css.webinarImageDiv}`}>
                <img src="" alt="" className={`${css.webinarImage}`} />
              </div>

              <p className={`${css.activitiesDate}`}>Coming Soon</p>
              <h1 className={`${css.activitiesTitle}`}>Webinar</h1>
              <p className={`${css.activitiesText}`}>
                A sharing sessions with incredible speakers from the Technology
                industry with topics aligning with BIST League 6.0 theme.
              </p>
              <button className={`${css.webinarButton} bg-[#AE7120]`}>
                More About Webinar
              </button>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}

{
  /* <div className={`${css.background1}`}>
            <img src="images/background1.svg" alt="background 1" />
            
          </div>
          <div className={`${css.background2}`}>
            <img src="images/background2.svg" alt="background 2" />
          </div>
          <div className={`${css.background3}`}>
            <img src="images/background3.svg" alt="background 3" />
          </div>
          <div className={`${css.background4}`}>
            <img src="images/background4.svg" alt="background 4" />
          </div>
          <div className={`${css.background5}`}>
            <img src="images/background5.svg" alt="background 5" />
          </div> */
}
