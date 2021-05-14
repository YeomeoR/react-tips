import React, { useState } from 'react';
import { Form, Button, Modal } from 'react-bootstrap';


const FormSheet = () => {
  const [totalBill, setTotalBill] = useState('');
  const [diners, setDiners] = useState('');
  const [tip, setTip] = useState('');
   const [show, setShow] = useState(false);

   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);
 
  

   const submitHandler = () => {
    let bill = totalBill;
    let numDiners = diners;
    let tipAmount = ((totalBill / diners) * (tip/100)).toFixed(2);
    let totalTip = (tipAmount * numDiners).toFixed(2);
      console.log(`Bill: ${bill}; Individual tip: ${tipAmount}; Total Tip: ${totalTip} `)
    setTotalBill('');
    setDiners('');
    setTip('');
      //call the modal with vars as params
    handleShow(bill, numDiners, tipAmount, totalTip);
  }

  

  return (
    <>
      <Form
        onSubmit={() => {
          submitHandler();
        }}
      >
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Bill Total</Form.Label>
          <Form.Control
            type="number"
            placeholder="Total Bill £-GBP"
            value={totalBill}
            onChange={(e) => {
              setTotalBill(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Number of Diners</Form.Label>
          <Form.Control
            type="number"
            placeholder="Number of Diners"
            value={diners}
            onChange={(e) => {
              setDiners(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Tip Percentage %</Form.Label>
          <Form.Control
            type="number"
            placeholder="How good was the service?"
            value={tip}
            onChange={(e) => {
              setTip(e.target.value);
            }}
          />
        </Form.Group>

        <Button onClick={submitHandler}>Calculate</Button>
      </Form>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Break-It-Down!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* need to put the variables in here */}
          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default FormSheet;
