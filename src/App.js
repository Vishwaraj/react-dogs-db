import './App.css';
import { Header } from './Header';
import { DogsList } from './DogsList';
import {useState} from 'react';
import {
  Routes,
  Route,
} from "react-router-dom";
import { SingleDog } from './SingleDog';




function App() {

 const [data, setData] = useState([]);

 const [dogData, setDogData] = useState();

 

  async function getDogs() {
    let url='https://api.thedogapi.com/v1/breeds';
    let result = await fetch(url);
    let data = await result.json();
    console.log(data);
    setData(data);
  }

  async function singleDogInfo(id) {
    console.log(id);
    let singleUrl = `https://api.thedogapi.com/v1/breeds/${id}`;
    let result = await fetch(singleUrl);
    let data = await result.json();
    setDogData(data);
  }

  return (
    <div>
   <Header getDogs={getDogs}/>
   <Routes>
     <Route path='/' element={<h1 id='welcome-message'>Welcome to DogsPedia!</h1>} />
     <Route path='/all-dogs' element={<DogsList data={data} singleDogInfo={singleDogInfo} />}/>
     <Route path='/single-dog' element={ (dogData) ? <SingleDog dogData={dogData} /> : <h1>Data is Loading</h1>} />
   </Routes>
   
   
    </div>
  );
}

export default App;


