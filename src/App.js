// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
        <div className='container'></div>
        <div className='row'></div>

      <Card />
    </div>
  );
}
function Card(){
  return(
  <div className='col-lg-4'>
    <div className="card border-success mb-3" >
  <div className="card-header bg-transparent border-success">Header</div>
  <div className="card-body text-success">
    <h5 className="card-title">Success card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <div className="card-footer bg-transparent border-success">Footer</div>
</div>
  </div>

  )

}

export default App;
