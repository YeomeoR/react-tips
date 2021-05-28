import Card from './components/Cards';
import './app.styles.css'


function App() {
  return (
    <>
      <h4 style={{ color: 'white', background: 'rgba(0,0,0,0.4)', fontSize: '2rem', padding: '0.5rem' }}>
        Tip Calculator
      </h4>
      <Card />
    </>
  );
}

export default App;
