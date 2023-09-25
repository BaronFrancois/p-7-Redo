import React, {useState} from 'react'
import './App.css';
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Details from './components/Details';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import data from './data'

function App() {

  let arr = [5,10,15,20,30]

  const [count, setCount] = useState(0)
  const [page, setPage] = useState(false)
  const [detailsIndex, setDetailsIndex] = useState(0)

  function handleIncrement(){
    setCount(count + 1)
  }

  function handleDecrement(){
    setCount(count - 1)
  }

  

  console.log(data)

  return (
    <div className="App">
      <Router>


        <Header/>
        <Link to = '/'>Home</Link> 
        <Link to = '/about'>About</Link>

        <Routes>
          <Route path = '/' element = {<Home setDetailsIndex = {setDetailsIndex}/>}/>
          <Route path = '/about' element = {<About/>} />
          <Route path = '/details' element = {<Details detailsIndex = {detailsIndex}/>}/>
          
        </Routes>

      </Router>


      
      
      
      
      
      
      
      {/* <div onClick = {() => {setPage(!page)}} style = {{background: 'red', width: '50px', height: '50px'}}></div>
      

      {
        page ?
        <div>
          PAGE CHANGED
        </div> :

        <div>
          ORIGINAL PAGE
        </div>
      } */}



      {/* <div onClick = {() => {handleIncrement()}} style = {{background: 'red', width: '50px', height: '50px'}}></div>
      <div onClick = {() => {handleDecrement()}} style = {{background: 'blue', width: '50px', height: '50px'}}></div>
      <div>{count}</div> */}
      
      
      {/* {
        arr.map((element) => {
          return <Test text = {element}/>
        })
      } */}
    </div>
  );
}

export default App;
