import CustomNavBar from "@/components/CustomNavbar";
import Image from "next/image";
import { useState } from "react";
import Data from "../data/data.json";

const DestinationPage: React.FC = () => {
  const [planetSelected, setPlanetSelected] = useState("Moon");
  const selectedPlanet = Data.destinations.find(
    (destination) => destination.name === planetSelected
  );

  return (
    <div id="DestinationPage">
      <div className="container">
        <p className="subtitle">
          <span className="text-preset-5 font-bold white-transparent">01</span>
          <span className="text-preset-5 margin-left white">
            PICK YOUR DESTINATION
          </span>
        </p>
        <div className="planet-grid-container">
          <div className="planet-grid-item">
            <Image
              src={selectedPlanet ? selectedPlanet.images.webp : ""}
              alt="Planet Image"
              key={selectedPlanet?.name}
              width={400}
              height={400}
              className="fade-image planet-image"
            />
          </div>
          <div className="planet-grid-item">
            <CustomNavBar
              routeList={Data.destinations}
              setSelectedRoute={setPlanetSelected}
              selectedRoute={planetSelected}
            />
            <div className="fade-content pad-inline" key={selectedPlanet?.name}>
              <p className="title text-preset-2 white to-uppercase">
                {selectedPlanet?.name}
              </p>
              <p className="desc text-preset-9 blue-300">
                {selectedPlanet?.description}
              </p>
              <br />
              <div className="division"></div>
              <div className="info-grid">
                <div className="info-grid-item">
                  <p className="text-preset-7 blue-300">AVG. DISTANCE</p>
                  <p className="text-preset-6 white to-uppercase">
                    {selectedPlanet?.distance}
                  </p>
                </div>
                <div className="info-grid-item">
                  <p className="text-preset-7 blue-300">EST. TRAVEL TIME</p>
                  <p className="text-preset-6 white to-uppercase">
                    {selectedPlanet?.travel}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationPage;
