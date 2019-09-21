import React from 'react';
import './App.css';
import {BrowserRouter,Route} from "react-router-dom";
import Header from "./Header/Header";

import Section from "./Section/Section";
import Register from "./Regisetr/Regisetr";


const App = (props)=>{
    return(
      <BrowserRouter>
          <Header />
             <Route path='/register/' render ={()=> <Register />}/>
             <Route path ='/section/' render={()=><Section  state={props.state.profilePage}  deafultElement={props.deafultElement}/>    }/>
      </BrowserRouter>

    );
};

export default App;
