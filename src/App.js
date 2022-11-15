import axios from "axios";
import {useEffect , useState} from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';


function App() {

const [inputCity , setInputCity] = useState("")
const [data, setData] = useState({})
const apikey="5f5a7d72d5504dd2ccf233bfac3f175b"

const getweatherdetail = (Entercity)=>{
  if(!Entercity) return 
  const apiurl="https://api.openweathermap.org/data/2.5/weather?q=" + Entercity + "&appid=" + apikey
  axios.get(apiurl).then((res)=>{
    console.log("responce", res.data)
    setData(res.data)
  }).catch((err)=>{
    console.log("err",err)
  })
}
const citynamechanged =(e)=>{
  setInputCity(e.target.value)
}
const citynamesendtoapi = () =>{
  getweatherdetail(inputCity)
}


return (
 
 <div className="col-md-12 body">
      <div className="wetherbg">
        <h1 className="heading">Weather App 45</h1>
        <div className="d-grid gap-3 col-4 mt-4">
         <input type="text" className="form-control" 
          value={inputCity}
          onChange={citynamechanged}
         />
        <button type="button" className="btn btn-primary"
        onClick={citynamesendtoapi}
        >Search</button>
        </div>

      </div>
      {Object.keys(data).length>0 &&
      <div className="col-md-12 text-center mt-4">
         <div className="shadow rounded weatherBox">
          <h5 className="weathercity">
          {data?.name}
          </h5>
          <h6 className="weathertemp">{((data?.main?.temp)-273.15).toFixed(2)}°C</h6>
         </div>
      </div>
      }
      
  
    </div>
  );
}

export default App;