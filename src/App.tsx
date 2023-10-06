
import './App.css';
import Button from './components/Button';

function App() {
  return (
    <div className="App">
         {/* <Button text={true}/> */}
           <Button onClick={() => {alert('hello')}} text="click me"/>
    </div>
  );
}

export default App;
