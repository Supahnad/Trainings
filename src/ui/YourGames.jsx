import YourGamesList from "./YourGamesList";

function YourGames() {
  return (
    <div className="card-container mt-5 p-5 library">
      <div className="row"></div>
      <div className="col-lg-12">
        <div className="heading-section pb-5">
          <h4>
            Your Gaming <em>Library</em>
          </h4>
        </div>
        <YourGamesList
          image={require(`../assets/fortnite.jpg`)}
          gameName={"Fortnite"}
          genre={"Battle Royale"}
          dateAdded={"06/14/2086"}
          hrsPlayed={"230 H 52 Mins"}
          isDownloaded={true}
        />
         <YourGamesList
          image={require(`../assets/fortnite.jpg`)}
          gameName={"Fortnite"}
          genre={"Battle Royale"}
          dateAdded={"06/14/2086"}
          hrsPlayed={"230 H 52 Mins"}
          isDownloaded={false}
        />
         <YourGamesList
          image={require(`../assets/fortnite.jpg`)}
          gameName={"Fortnite"}
          genre={"Battle Royale"}
          dateAdded={"06/14/2086"}
          hrsPlayed={"230 H 52 Mins"}
          isDownloaded={false}
        />
      </div>
    </div>
  );
}

export default YourGames;
