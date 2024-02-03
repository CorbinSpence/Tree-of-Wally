import logo from './logo.svg';
import './App.css';
import { useState } from 'react'

function App() {
  const [uName, changeUName] = useState("")
  const [iName, changeIName] = useState("")
  const [aName, changeAName] = useState("")

  const updateUName = (e) => {
    console.log("Update User Value: "+e.target.value)
    changeUName(e.target.value)
    console.log("uName: "+uName)
  }
  const updateIName = (e) => {
    console.log("Update Investor Value: "+e.target.value)
    changeIName(e.target.value)
    console.log("iName: "+iName)
  }
  const updateAName = (e) => {
    console.log("Update Admin Value: "+e.target.value)
    changeAName(e.target.value)
    console.log("aName: "+aName)
  }

  const test = async () => {
    try{
      await fetch("http://localhost:3002/", {
        method: "GET",
        mode: "no-cors",
        credentials: "omit"
      })
    }catch(e){
      console.log(e)
    }
  }
  const createUser = async() => {
    console.log("Creating User with: "+uName)
    const data = {
      "first_last_name": uName
    }
    try{
      await fetch("http://localhost:3002/user", {
        method: "POST",
        mode: "cors",
        //credentials: "omit",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*"
        },
        body: JSON.stringify(data)
      })
    }catch(e){
      console.log(e)
    }
  }
  const createInvestor = async() => {
    const data = {
      "first_last_name": iName
    }
    try{
      await fetch("http://localhost:3002/investor", {
        method: "POST",
        mode: "cors",
        credentials: "omit",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
    }catch(e){
      console.log(e)
    }
  }
  const createAdmin = async() => {
    const data = {
      "first_last_name": aName
    }
    try{
      await fetch("http://localhost:3002/admin", {
        method: "POST",
        mode: "cors",
        credentials: "omit",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
    }catch(e){
      console.log(e)
    }
  }
  return (
    <div className="App">
      <h1>Press this button to test the api</h1>
      <button onClick={test}>Test</button>
      <h1>Create User</h1>
      <form>
        <input type="text" id="user_first&last" onChange={updateUName} />
        <input type="button" id="submit_user" onClick={createUser} value="Create User"/>
      </form>
      <h1>Create Investor</h1>
      <form>
        <input type="text" id="investor_first&last" onChange={updateIName}/>
        <input type="button" id="submit_investor" onClick={createInvestor} value="Create Investor"/>
      </form>
      <h1>Create Admin</h1>
      <form>
        <input type="text" id="admin_first&last" onChange={updateAName}/>
        <input type="button" id="submit_admin" onClick={createAdmin} value="Create Admin"/>
      </form>
    </div>
  );
}

export default App;
