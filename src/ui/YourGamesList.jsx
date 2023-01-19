function YourGamesList(props) {
  const style = props.isDownloaded ? "no-border" : "border-btn";
  const classes = `download-btn ${style}`;

  return (
    <div className="item">
      <ul>
        <li>
          <img src={props.image} alt="" />
        </li>
        <li>
          <h4>{props.gameName}</h4>
          <span>{props.genre}</span>
        </li>
        <li>
          <h4>Date Added</h4>
          <span>{props.dateAdded}</span>
        </li>
        <li>
          <h4>Hours Played</h4>
          <span>{props.hrsPlayed}</span>
        </li>
        <li>
          <h4>Currently</h4>
          <span>{props.isDownloaded ? "Downloaded" : "Download"}</span>
        </li>
        <li>
          <div className={classes}>
            <a href="#home">{props.isDownloaded ? "Downloaded" : "Download"}</a>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default YourGamesList;
