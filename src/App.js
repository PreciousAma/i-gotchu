import './App.css';
import './App.css';
import Input from './components/Input';
import Button from './components/Button';

// import '../images/anshu-a-wi9Oi8Og7sc-unsplash.jpg';

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("submitted");
}

function App() {
  return (
    <>
      <Input />
      <Button buttonText="Submit" buttonAction={handleSubmit} />
    </>
  );
}

export default App;
