import './App.css';
import Card from './Card';

function App() {
  return (
    <div id="root">
      <h1>Task: Add three Card elements</h1>
      <Card
        h2="the first card is h2"
        h3="the first card is h3"
      />
      <Card
        h2="the second card is h2"
        h3="the second card is h3"
      />
      <Card
        h2="the third card is h2"
        h3="the third card is h3"
      />
    </div>
  );
}

export default App;
