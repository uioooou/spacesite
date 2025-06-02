import { DestinationModel } from "@/model/model";
import { Dispatch, SetStateAction } from "react";

interface CustomNavBarProps {
  routeList: DestinationModel[];
  setSelectedRoute: Dispatch<SetStateAction<string>>
  selectedRoute: string;
}

const CustomNavBar: React.FC<CustomNavBarProps> = ({ routeList, setSelectedRoute, selectedRoute }) => {
  return (
    <ul className="navbar-custom">
      {routeList.map((route) => (
        <li
          key={route.name}
          className={`navbar-item ${selectedRoute === route.name ? "active" : ""}`}
          onClick={() => setSelectedRoute(route.name)}
        >
          <span className="text-preset-8">{route.name}</span>
        </li>
      ))}
    </ul>
  );
};

export default CustomNavBar;
