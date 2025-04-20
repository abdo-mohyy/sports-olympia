import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { typeOfSports } from "../data/sportsData";

export default function SportsButton() {
  const [selectedSport, setSelectedSport] = useState(null);

  const handleClose = () => setSelectedSport(null);

  return (
    <>
      {typeOfSports.map((sport, index) => (
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Button
              key={index}
              onClick={() => setSelectedSport(sport)}
              className="m-2"
            >
              {sport.name}
            </Button>
          </Card.Body>
        </Card>
      ))}

      <Modal
        size="lg"
        show={!!selectedSport}
        onHide={handleClose}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            {selectedSport?.name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>{selectedSport?.description}</div>
        </Modal.Body>
      </Modal>
    </>
  );
}

/*

import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { typeOfSports } from "../data/sportsData";

export default function SportsButton() {
  const [selectedSport, setSelectedSport] = useState(null);

  const handleClose = () => setSelectedSport(null);

  return (
    <>
      {typeOfSports.map((sport, index) => (
        <Button
          key={index}
          onClick={() => setSelectedSport(sport)}
          className="m-2"
        >
          {sport.name}
        </Button>
      ))}

      <Modal
        size="lg"
        show={!!selectedSport}
        onHide={handleClose}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            {selectedSport?.name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>{selectedSport?.description}</div>
        </Modal.Body>
      </Modal>
    </>
  );
}

*/
