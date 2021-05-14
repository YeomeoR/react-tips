import { Card } from 'react-bootstrap'
import FormSheet from '../FormSheet'

const Cards = () => {
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <FormSheet />
        </Card.Body>
      </Card>
    );
}
 
export default Cards;