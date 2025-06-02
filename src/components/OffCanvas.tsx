import { Dispatch, SetStateAction, useContext } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { AppContext } from "./AppContext";
import { RouteModel } from "@/model/model";

interface OffCanvasProps {
  route: RouteModel[];
  routeSelected: string;
  setRouteSelected: Dispatch<SetStateAction<string>>;
}

const OffCanvas: React.FC<OffCanvasProps> = ({ route,routeSelected,setRouteSelected }) => {
  const { setModalState, modalState } = useContext(AppContext)!;

  return (
    <>
      <Offcanvas
        placement="end"
        show={modalState == "Open"}
        onHide={() => setModalState("Close")}
      >
        <Offcanvas.Header closeButton></Offcanvas.Header>
        <Offcanvas.Body>
          {
            <ul className="navbar-mobile-content">
              {route.map((route) => (
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
          }
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default OffCanvas;
