import './App.css';
import FeedbackForm from './FeedbackForm';
/* this lab is not completed and it will be worked on later */

function App() {
  const handleSubmit = () => {
    console.log('Form submitted!');
  };

  return (
    <div className="App">
      <FeedbackForm onSubmit={handleSubmit} />
    </div>
  );
}

export default App;
