import './App.css';
import {useEffect, useState} from "react";  
import Axios from "axios"
import {Switch ,  Route} from "react-router-dom"
import Home from './Pages/Home.js';  
import UserDetails from './Pages/UserDetails';
import commentPage from './Pages/CommentPages.js';
function App() {
  const [users, setUsers] = useState([])
  const [loadUsers, setLoadUsers]=useState(true)
  const getUsers =() => {
    Axios.get(`https://jsonplaceholder.typicode.com/users`) 
    .then((res) => {
      setUsers(res.data);
      setLoadUsers(false)
    })
   . catch((err)=>console.log(err))
  }

  useEffect(()=>{
    getUsers()
  },[])
  return (
    <div className="App">
     
<Switch>
<Route exact path="/" render={()=> <Home users= {users}  loadUsers={loadUsers} />} />
<Route path="/users/:id" component={UserDetails}/>
<Route path="/posts/:id" component ={commentPage} />

</Switch>
     
    </div>
  );
}

export default App;
