import { Dispatch, SetStateAction } from "react";

interface HomePageProps {
  setExploreAction: Dispatch<SetStateAction<string>>;
}

const HomePage: React.FC<HomePageProps> = ({ setExploreAction }) => {
  return (
    <div id="HomePage">
      <div className="container">
        <div className="grid-container explore-text-content">
          <div className="grid-item">
            <p className="text-preset-5 blue-300">SO,YOU WANT TO TRAVEL TO</p>
            <p className="text-preset-1">SPACE</p>
            <p className="text-preset-9 blue-300 pad-inline">
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>
          <div className="grid-item explore-btn-box">
            <div
              className="explore-btn"
              onClick={() => setExploreAction("Destination")}
            >
              <p className="text-preset-4">EXPLORE</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
