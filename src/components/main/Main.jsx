import React from "react";
import "./main.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Main = () => {
  return (
    <div className="main">
      <div className="mainLeft">
        <div className="item">
          <h1>Jotform Secure Online Forms</h1>
        </div>
        <div className="item">
          <h3>
            At Jotform, our reputation rests on our ability to provide all of
            our users with the highest form security.
          </h3>
        </div>
        <div className="item">
          <button>Go to My Forms</button>
        </div>
      </div>

      <div className="mainRight">
        <div>
          <Form>
            <Form.Group className="mb-3">
              <h1>Jotform Form Validation</h1>
              <Form.Label className="label">Form ID</Form.Label>
              <Form.Control placeholder="Please enter form ID" />

            </Form.Group>

            <Button type="submit" className="btn">
              Safe Jotform
            </Button>
          </Form>

        </div>
      </div>
    </div>
  );
};

export default Main;
