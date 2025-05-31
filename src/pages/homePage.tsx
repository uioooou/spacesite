const HomePage: React.FC = () => {
  return (
    <div className="Home">
      <div className="container">
        <div className="grid-container">
          <div className="grid-item">
            <p className="text-preset-5 blue-300">SO,YOU WANT TO TRAVEL TO</p>
            <p className="text-preset-1">SPACE</p>
            <p className="text-preset-9 blue-300">
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>
          <div className="grid-item explore-btn-box">
            <div className="explore-btn">
              <p className="text-preset-4">EXPLORE</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
