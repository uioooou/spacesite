import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import HomePage from "./homePage";

export default function Home() {
  const [routeSelected, setRouteSelected] = useState("Home");
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
              src="/assets/shared/logo.svg"
              alt="Space Tourism Logo"
              width={40}
              height={40}
              className=""
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
                  <span className="text-preset-8 font-bold">{route.number}</span>
                  <span className="text-preset-8">{route.name}</span>
                </li>
              ))}
            </ul>
          </div>
          <HomePage />
        </section>
      </main>
    </>
  );
}
