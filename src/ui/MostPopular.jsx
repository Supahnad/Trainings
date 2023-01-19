import "./ui.css";
import Games from "./Games";

function MostPopular() {
  return (
    <div className="card-container mt-5 p-5">
      <div className="row">
        <div className="col-lg-12">
          <div className="heading-section">
            <h4>Most Popular <em>Right Now!</em></h4>
            <div className="row">
              <Games
                image={require(`../assets/fortnite.jpg`)}
                gameName={"Fortnite"}
                genre={"Battle Royale"}
              />
              <Games
                image={require(`../assets/fortnite.jpg`)}
                gameName={"Fortnite"}
                genre={"Battle Royale"}
              />
              <Games
                image={require(`../assets/fortnite.jpg`)}
                gameName={"Fortnite"}
                genre={"Battle Royale"}
              />
              <Games
                image={require(`../assets/fortnite.jpg`)}
                gameName={"Fortnite"}
                genre={"Battle Royale"}
              />
              <Games
                image={require(`../assets/fortnite.jpg`)}
                gameName={"Fortnite"}
                genre={"Battle Royale"}
              />
              <Games
                image={require(`../assets/fortnite.jpg`)}
                gameName={"Fortnite"}
                genre={"Battle Royale"}
              />
              <Games
                image={require(`../assets/fortnite.jpg`)}
                gameName={"Fortnite"}
                genre={"Battle Royale"}
              />
              <Games
                image={require(`../assets/fortnite.jpg`)}
                gameName={"Fortnite"}
                genre={"Battle Royale"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MostPopular;
