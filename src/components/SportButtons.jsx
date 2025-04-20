// import { useState } from "react";
// import Button from "react-bootstrap/Button";
// import Modal from "react-bootstrap/Modal";
// import { typeOfSports } from "../data/sportsData";
// import { Card, Container, Row, Col } from "react-bootstrap";

// export default function SportsButton() {
//   const [selectedSport, setSelectedSport] = useState(null);

//   const handleClose = () => setSelectedSport(null);

//   return (
//     <Container className="my-4">
//       <Row className="gy-4">
//         {typeOfSports.map((sport, index) => (
//           <div className="col-12 col-md-6" key={index}>
//             <Card className="border-0 rounded-3 shadow-sm h-100">
//               <div className="">
//                 <div className="d-flex align-items-center justify-content-center">
//                   <Card.Img
//                     variant="top"
//                     // src="../../public/Assets/sports images/winter-sports.jpeg"
//                     src={`/Assets/sports images/${sport.image}`}
//                     className="w-100 "
//                     alt={sport.name}
//                   />
//                 </div>
//                 <Card.Body className="d-flex flex-column align-items-center bg-light">
//                   <Card.Title className="text-primary">{sport.name}</Card.Title>
//                   <Button
//                     onClick={() => setSelectedSport(sport)}
//                     className="mt-2 bg-primary"
//                   >
//                     Show Details
//                   </Button>
//                 </Card.Body>
//               </div>
//             </Card>
//           </div>
//         ))}
//       </Row>

//       <Modal
//         size="lg"
//         show={!!selectedSport}
//         onHide={handleClose}
//         centered
//         aria-labelledby="sport-details-modal"
//       >
//         <Modal.Header closeButton>
//           <Modal.Title id="sport-details-modal">
//             {selectedSport?.name}
//           </Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <p>{selectedSport?.description}</p>
//         </Modal.Body>
//       </Modal>
//     </Container>
//   );
// }
//
//
//
//
// import { useState } from "react";
// import Button from "react-bootstrap/Button";
// import Modal from "react-bootstrap/Modal";
// import { typeOfSports } from "../data/sportsData";
// import { Card, Container, Row } from "react-bootstrap";

// export default function SportsButton() {
//   const [selectedCategory, setSelectedCategory] = useState(null); // نوع الرياضة
//   const [selectedSport, setSelectedSport] = useState(null); // الرياضة اللي هتظهر في المودال

//   const handleClose = () => setSelectedSport(null);

//   return (
//     <Container className="my-4">
//       <Row className="gy-4">
//         {typeOfSports.map((category, index) => (
//           <div className="col-12 col-md-6" key={index}>
//             <Card className="border-0 rounded-3 shadow-sm h-100">
//               <div>
//                 <div className="d-flex align-items-center justify-content-center">
//                   <Card.Img
//                     variant="top"
//                     src={`/Assets/sports images/${category.image}`}
//                     className="w-100"
//                     alt={category.name}
//                   />
//                 </div>
//                 <Card.Body className="d-flex flex-column align-items-center bg-light">
//                   <Card.Title className="text-primary">
//                     {category.name}
//                   </Card.Title>
//                   <Button
//                     onClick={() => setSelectedCategory(category)}
//                     className="mt-2 bg-primary"
//                   >
//                     Show Details
//                   </Button>
//                 </Card.Body>
//               </div>
//             </Card>
//           </div>
//         ))}
//       </Row>

//       {/* Modal for sports under selected category */}
//       <Modal
//         size="lg"
//         show={!!selectedCategory && !selectedSport}
//         onHide={() => setSelectedCategory(null)}
//         centered
//       >
//         <Modal.Header closeButton>
//           <Modal.Title>{selectedCategory?.name} Sports</Modal.Title>
//         </Modal.Header>
//         <Modal.Body className="d-flex flex-wrap gap-2 justify-content-center">
//           {selectedCategory?.sports?.map((sport, idx) => (
//             <Button
//               key={idx}
//               onClick={() => setSelectedSport(sport)}
//               variant="outline-primary"
//             >
//               {sport.name}
//             </Button>
//           ))}
//         </Modal.Body>
//       </Modal>

//       {/* Modal for individual sport description */}
//       <Modal
//         size="lg"
//         show={!!selectedSport}
//         onHide={() => setSelectedSport(null)}
//         centered
//       >
//         <Modal.Header closeButton>
//           <Modal.Title>{selectedSport?.name}</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <p>{selectedSport?.description}</p>
//         </Modal.Body>
//       </Modal>
//     </Container>
//   );
// }

import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { typeOfSports } from "../data/sportsData";
import { Card, Container, Row, Form } from "react-bootstrap";

export default function SportsButton() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSport, setSelectedSport] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const handleClose = () => {
    setSelectedSport(null);
    setSearchTerm("");
  };

  const filteredSports = selectedCategory?.sports?.filter((sport) =>
    sport.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container className="my-4">
      <Row className="gy-4">
        {typeOfSports.map((category, index) => (
          <div className="col-12 col-md-6" key={index}>
            <Card className="border-0 rounded-3 shadow-sm h-100">
              <div>
                <div className="d-flex align-items-center justify-content-center">
                  <Card.Img
                    variant="top"
                    src={`/Assets/sports images/${category.image}`}
                    className="w-100"
                    alt={category.name}
                  />
                </div>
                <Card.Body className="d-flex flex-column align-items-center bg-light">
                  <Card.Title className="text-primary">
                    {category.name}
                  </Card.Title>
                  <Button
                    onClick={() => {
                      setSelectedCategory(category);
                      setSearchTerm(""); // Reset search input
                    }}
                    className="mt-2 bg-primary"
                  >
                    Show Details
                  </Button>
                </Card.Body>
              </div>
            </Card>
          </div>
        ))}
      </Row>

      {/* Modal for sports under selected category with Search */}
      <Modal
        size="lg"
        show={!!selectedCategory && !selectedSport}
        onHide={() => {
          setSelectedCategory(null);
          setSearchTerm("");
        }}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>{selectedCategory?.name} Sports</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Search Input */}
          <Form.Control
            type="text"
            placeholder="Search for a sport..."
            className="mb-3"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          {/* Filtered Sport Buttons */}
          <div className="d-flex flex-wrap gap-2 justify-content-center">
            {filteredSports?.length > 0 ? (
              filteredSports.map((sport, idx) => (
                <Button
                  key={idx}
                  onClick={() => setSelectedSport(sport)}
                  variant="outline-primary"
                >
                  {sport.name}
                </Button>
              ))
            ) : (
              <div className="text-muted">No sports found.</div>
            )}
          </div>
        </Modal.Body>
      </Modal>

      {/* Modal for individual sport description */}
      <Modal size="lg" show={!!selectedSport} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>{selectedSport?.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{selectedSport?.description}</p>
        </Modal.Body>
      </Modal>
    </Container>
  );
}
