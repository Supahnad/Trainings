import Banner from "../ui/Banner";
import MostPopular from "../ui/MostPopular";
import YourGames from "../ui/YourGames";
import "./pages.css";

function HomePage() {
  return (
    <div id="home" className="container contents">
      <Banner />
      <MostPopular />
      <YourGames />
    </div>
  );
}

export default HomePage;
