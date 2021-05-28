// import { Button } from 'react-bootstrap';
// import { useState } from 'react'


// need to import the state of the props from the calc
const Modal = (props) => {
    // const [closeModal, setCloseModal] = useState(false)
  return (
    <div style={{ color: 'white', background: 'rgba(0,0,0,0.7)' }}>
      <h6 className="mt-5 mb-4">Break It Down</h6>
      <p>Total Bill before calculations: £ {props.bill}</p>
      <p>Number of diners: {props.diners}</p>
      <p>Service %: {props.tip}</p>
      <p>Each individual's tip amount: £ {props.tipAmount}</p>
      {/* <p>Each individual's total bill plus tip: £ {props.indivTotal}</p>
       */}
      {/* <Button className="btn btn--alt" onCancel={props.closeModalHandler}>
        Close
      </Button> */}
    </div>
  );
};

export default Modal;
