
import './App.css';
import Countries from './component/Countries/Countries';
// import { useEffect, useState } from 'react';


function App() {
  return (
    <div className="App">

      <Countries></Countries>
    </div>
  );
};

/* 
function LoadCountries() {
  const [country, setCountry] = useState([]);
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => setCountry(data))
  }, [])
  return (
    <div>
      <h2>showing all the country names</h2>
      {
        country.map(countryy => <ShowData name={countryy.name.common} flag={countryy.flags.png}></ShowData>)
      }
    </div>
  )
}


function ShowData(props) {
  return (
    <div className='style'>
      <h2>Countries Name : {props.name}</h2>
      <img src={props.flag}></img>
    </div>
  )
}
 */
export default App;
