import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { typeOfSports } from "../../data/sportsData";
import { Card, Container, Row, Form } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import "./sports-btn.css";

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
    <Container className="my-4" dir="rtl">
      <Row className="gy-4 my-5">
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
                      setSearchTerm("");
                    }}
                    className="mt-2 bg-primary"
                  >
                    عرض التفاصيل
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
        dir="rtl"
      >
        <Modal.Header closeButton dir="rtl">
          <Modal.Title>رياضات {selectedCategory?.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control
            type="text"
            placeholder="ابحث عن رياضة..."
            className="mb-3 text-end"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

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
              <div className="text-muted">لا توجد رياضات مطابقة</div>
            )}
          </div>
        </Modal.Body>
      </Modal>

      {/* Modal for each sport description */}
      <Modal
        size="lg"
        show={!!selectedSport}
        onHide={handleClose}
        centered
        dir="rtl"
      >
        <Modal.Header closeButton>
          <Modal.Title>{selectedSport?.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="mb-4">{selectedSport?.description}</p>

          <Accordion className="custom-scroll" style={{ maxHeight: "300px" }}>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <p className="w-100 text-end m-0">الفرص التريبية</p>
              </Accordion.Header>
              <Accordion.Body className="d-flex flex-column">
                <Button
                  variant="outline-info"
                  className="p-2 text-primary mb-2 rounded"
                >
                  التنس - فردي (رجال) - كبار
                </Button>
                <Button
                  variant="outline-info"
                  className="p-2 text-primary mb-2 rounded"
                >
                  التنس - فردي (سيدات) - كبار
                </Button>
                <Button
                  variant="outline-info"
                  className="p-2 text-primary mb-2 rounded"
                >
                  التنس - فردي (اطفال) - كبار
                </Button>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Modal.Body>
      </Modal>
    </Container>
  );
}
