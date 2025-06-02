import Head from "next/head";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import DestinationPage from "./destination";
import { List } from "react-bootstrap-icons";
import HomePage from "./homePage";
import { AppContext } from "@/components/AppContext";
import OffCanvas from "@/components/OffCanvas";

export default function Home() {
  const [routeSelected, setRouteSelected] = useState("Home");
  const { setModalState} = useContext(AppContext)!;
  const routeList = [
    {
      name: "Home",
      number: "00",
      bgImg: "/assets/home/background-home-desktop.jpg",
    },
    {
      name: "Destination",
      number: "01",
      bgImg: "/assets/destination/background-destination-desktop.jpg",
    },
    {
      name: "Crew",
      number: "02",
      bgImg: "/assets/crew/background-crew-desktop.jpg",
    },
    {
      name: "Technology",
      number: "03",
      bgImg: "/assets/technology/background-technology-desktop.jpg",
    },
  ];

  const renderPage = () => {
    switch (routeSelected) {
      case "Home":
        return <HomePage setExploreAction={setRouteSelected} />;
      case "Destination":
        return <DestinationPage />;
      // case "Crew":
      //   return <CrewPage />;
      // case "Technology":
      //   return <TechnologyPage />;
      default:
        return null;
    }
  };

  useEffect(() => {
    const selectedRoute = routeList.find(
      (route) => route.name === routeSelected
    );

    if (selectedRoute) {
      const img = new window.Image();
      img.src = selectedRoute.bgImg;

      img.onload = () => {
        document.body.style.backgroundImage = `url(${selectedRoute.bgImg})`;
      };
    }
  }, [routeSelected]);

  return (
    <>
      <Head>
        <title>Space Tourism</title>
        <meta name="description" content="Space Tourism" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section className="main-container">
          <div className="navbar">
            <Image
              src="./assets/shared/logo.svg"
              alt="Space Tourism Logo"
              width={50}
              height={50}
              className="navbar-icon"
            />
            <div className="navbar-center">
              <div className="line"></div>
            </div>
            <ul className="navbar-content">
              {routeList.map((route) => (
                <li
                  key={route.name}
                  className={`navbar-item ${
                    routeSelected == route.name && "active"
                  }`}
                  onClick={() => setRouteSelected(route.name)}
                >
                  <span className="text-preset-8 font-bold">
                    {route.number}
                  </span>
                  <span className="text-preset-8">{route.name}</span>
                </li>
              ))}
            </ul>
            <div className="mobile-menu">
              <List size={40} color="white" onClick={()=>setModalState("Open")} />
            </div>
          </div>

          {renderPage()}
        </section>
      </main>
      <OffCanvas route={routeList} routeSelected={routeSelected} setRouteSelected={setRouteSelected}/>
    </>
  );
}
