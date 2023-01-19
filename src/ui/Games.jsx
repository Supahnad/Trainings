import Card from "react-bootstrap/Card";

function Games(props) {
  return (
    <div className="col-md-6 col-lg-4 col-sm-12 mt-2 p-2 col-xl-3">
      <Card className="p-3 card">
        <Card.Img className="images pt-3" variant="top" src={props.image} />
        <Card.Body>
          <Card.Title>{props.gameName}</Card.Title>
          <Card.Text>{props.genre}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Games;
