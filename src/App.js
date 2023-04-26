import './App.css';
import Button from '@material-ui/core/Button';

function App() {
  return (
    <div className="App">
        <h1>This is App Component</h1>
        <Button>Meterial ui Button</Button>
        <Button variant="contained">Default</Button>
        <Button variant='outlined' color='primary'>Primary</Button>
    </div>
  );
}

export default App;
