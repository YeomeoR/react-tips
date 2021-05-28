import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import Modal from '../components/modal.component';

const FormSheet = () => {
  const [totalBill, setTotalBill] = useState('');
  const [diners, setDiners] = useState('');
  const [tip, setTip] = useState('');
  const [tipAmount, setTipAmount] = useState('');

  const [modalIsOpen, setModalIsOpen] = useState(false);


  const submitHandler = () => {
    setModalIsOpen(true)
  };


  const  calculator = () => {
    let bill = totalBill;
    let numDiners = diners;
    let tipAmount = setTipAmount(((totalBill / diners) * (tip / 100)).toFixed(2));
    let totalTip = (tipAmount * numDiners).toFixed(2);
    let totalIndividualBill = (totalBill / diners) + tipAmount
    
    console.log(
      `Bill: ${bill}; Individual tip: ${tipAmount}; Total Tip: ${totalTip}; Total individual bill = ${totalIndividualBill} `,
    );
    setModalIsOpen(true);
    
    
  }
  function closeModalHandler() {
    setModalIsOpen(true)
  }




  return (
    <>
      <Form
        className="form"
        onSubmit={() => {
          submitHandler();
        }}
      >
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label style={{ color: 'white', background: 'rgba(0,0,0,0.4)' }}>
            Bill Total in £ (GBP)
          </Form.Label>
          <Form.Control
            style={{ textAlign: 'center' }}
            type="number"
            placeholder="Total Bill £-GBP"
            value={totalBill}
            onChange={(e) => {
              setTotalBill(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label style={{ color: 'white', background: 'rgba(0,0,0,0.4)' }}>
            Number of Diners
          </Form.Label>
          <Form.Control
            style={{ textAlign: 'center' }}
            type="number"
            placeholder="Number of Diners"
            value={diners}
            onChange={(e) => {
              setDiners(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label style={{ color: 'white', background: 'rgba(0,0,0,0.4)' }}>
            Tip Percentage %
          </Form.Label>
          <Form.Control
            style={{ textAlign: 'center' }}
            type="number"
            placeholder="How good was the service?"
            value={tip}
            onChange={(e) => {
              setTip(e.target.value);
            }}
          />
        </Form.Group>

        <Button
          style={{ width: '100%', marginLeft: '0', marginTop: '15px' }}
          onClick={calculator}
        >
          Calculate
        </Button>
      </Form>
      {modalIsOpen && (
        <Modal
          bill={totalBill}
          tip={tip}
          diners={diners}
          tipAmount={tipAmount}
          submitHandler={submitHandler}
          onCancel={closeModalHandler}
        />
      )}
    </>
  );
};
export default FormSheet;
