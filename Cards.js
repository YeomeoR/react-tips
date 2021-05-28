import { Card } from 'react-bootstrap';
import FormSheet from './FormSheet';

const Cards = () => {
  return (
    <Card className='card' style={{ width: '21rem' }}>
      <Card.Body>
        <FormSheet  />
      </Card.Body>
    </Card>
  );
};

export default Cards;
