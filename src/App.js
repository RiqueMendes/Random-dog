
import "./App.css";

function getRandom() {
 const random = (num) => Math.floor(Math.random() * num);

document.getElementById('imgDog').src = "./dog" + random(10) + ".jpg";

}


function App() {
  return (
    <div>
      <div className="align">
        <button onClick={getRandom} className="button1"> Clique aqui</button>
      </div>
      <div className="dogImage">
        <img id='imgDog' src={''} alt="Minha Figura"></img>
      </div>
    </div>
  );
}

export default App;
