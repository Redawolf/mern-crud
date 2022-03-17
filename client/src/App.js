import React, { useState , useEffect} from "react";
import "./App.css";
import axios from "axios"
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'

function App() {
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [gender, setGender] = useState('');
  const [description, setDescription] = useState('');
  const [listUser,setListUser] = useState([])

  const addUser = () =>{
     axios.post('http://localhost:3001/addUsers', 
       {
        name : name ,
        city : city ,
        gender : gender ,
        description : description,
        })
  }
  useEffect(()=>{
      axios.get('http://localhost:3001/showData').then((response)=>{
        setListUser(response.data)
      });

  },[])

  return (
    <>
      <div className="container-fluid">
        <h1>Crud app with mern</h1>
        <div className="row">
          <div className="col-md-4">
            <div className="">
              <label className="form-label">Name</label>
              <input type="text" className="form-control" onChange={(e) => { setName(e.target.value) }} />
            </div>
            <div className="mt-3">
              <label className="form-label">city</label>
              <input type="text" className="form-control" onChange={(e) => { setCity(e.target.value) }} />
            </div>
            <div className="mt-3">
              <label className="form-label">Gender</label>
              <input type="text" className="form-control" onChange={(e) => { setGender(e.target.value) }} />
            </div>
            <div className="mt-3">
              <label className="form-label">description</label>
              <input type="text" className="form-control" onChange={(e) => { setDescription(e.target.value) }} />
            </div>
            <br />
            <input type="submit" value="valider" className="btn btn-primary" onClick={addUser}  />
          </div>
        </div>
      </div>
      <hr />
      <h1>data</h1>
      <table className="table">
              <thead>
             <th>Name</th>
             <th>city</th>
             <th>Gender</th>
             <th>description</th>
             </thead>
             <tbody>
               {listUser.map((ele,key)=>{
               return(

                 <tr>
                    <td>{ele.name}</td>
                    <td>{ele.city}</td>
                    <td>{ele.gender}</td>
                    <td>{ele.description}</td>
                 </tr>
                )
               })}
             </tbody>
      </table>
    </>
  );
}

export default App;
