import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from "./components/navbar.component";
import ExercisesList from "./components/exercises-list.component";
import EditExercise from "./components/edit-exercise.component";
import CreateUser from "./components/create-user.component";
import CreateExercise from "./components/create-exercise.component";

function App() {
  return (
   <Router>
     <Navbar/>
     <br/>
     <Route path="/" exact component={ExercisesList}/>
     <Route path="/edit/:id" component={EditExercise}/>
     <Route path="/add/" component={CreateExercise} />
     <Route path="/user/add" component={CreateUser} />
   </Router>
  );
}

export default App;
