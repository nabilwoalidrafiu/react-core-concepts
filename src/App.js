import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  var student1 = {
    name: "Sakib",
    class:10,
    roll: 1,
    home: "Afghanistan"
  }
  var student2 = {
    name: "Rakib",
    class:9 ,
    roll: 2,
    home:"Syria"
  }
  var style = {
    backgroundColor : 'blue',
    color: 'white',
    padding : "20px",
    borderRadius: "10px"
  }
  const players = ['Sakib', 'Morgan', 'Smith', 'Guptil', 'Russell']
  const country = ['Bangladesh', 'England', 'Australia', 'New Zealand', 'WIndies']
  const products = [
    {name: 'Bag', price:'$70'},
    {name: 'Money Bag', price:'$10'},
    {name: 'Watch', price:'$100'}
  ]
  // const cricketer = players.map(player => player);
  // console.log(cricketer);
  // const mapProduct = products.map(product => product.name);
  // console.log(mapProduct);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* 32-10 */}
        <Counter></Counter>
        {/* 32-12 */}
        <Users></Users>
        {/* 32-9 */}
        <ul>
          {
            players.map(player => <li>{player}</li>)
          }
          {
            products.map(product => <li>{product.name}</li>)
          }
          {
            products.map(prod => <Products product={prod}></Products>)
          }
        </ul>
        <p>
          Edited react <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>React App</p>
        <h3>You can do math!</h3>
        <p>Sum: {50+40}, Sub: {50-40}, Complex: {(20+30)*10}</p>
        <h4 style={style}>Student1: {student1.name +" "+student1.home}, {student1.roll}</h4>
        <h4 style={{backgroundColor:"lightblue", color: "black", padding: 20, borderRadius:20}}>Student2: {student2.name +" "+student2.home}, {student1.roll}</h4>
      </header>
      {/* components not dynamic 32-6 */}
      <Person></Person>
      <Person></Person>

      {/*components dynamic 32-7 */}
      <DynamicComponents name="Rashid" country="Afghansistan"></DynamicComponents>
      <DynamicComponents name="Virat" country="India"></DynamicComponents>
      <DynamicComponents name="Adil Rashid" country="England"></DynamicComponents>

      {/*components dynamic using array 32-7 */}
      {/* you can take value from array */}
      <DynamicComponents name={players[0]} country={country[0]}></DynamicComponents>
      <DynamicComponents name={players[1]} country={country[1]}></DynamicComponents>
      <DynamicComponents name={players[2]} country={country[2]}></DynamicComponents>

      {/* pass objects 32-8 */}
    
      <Products product={products[0]}></Products>
      <Products product={products[1]}></Products>
      <Products product={products[2]}></Products>
    
      
    </div>
  );
}
var Styled ={
  backgroundColor: "lightgrey",
  color: "black",
  padding : "20px",
  border: "2px solid black",
  borderRadius: "20px",
  width: "300px",
  margin: "10px 30px",
  float:"left"
}

// components not dynamic 32-6

function Person() {
  return (<div style={Styled}>
    <h2 style={{color:"blue"}}>Akib Khan</h2>
    <h4>Iraq</h4>
  </div>)
}
// components dynamic 32-7
function DynamicComponents(props) {
  
  return (<div style={Styled}>
    <h2>Name: {props.name}</h2>
    <h4>Country: {props.country}</h4>
  </div>)
}

// pass objects 32-8
function Products(props) {
  // console.log(props);
  const {name, price}= props.product;
  // console.log(name, price);
  return (
    <div style={Styled}>
      <h2>{name}</h2>
      <h5>{price}</h5>
      <button>Buy Now</button>
    </div>
  )
}
// 32-10 
function Counter() {
  const [count, setCount] = useState(5);
  // const handleIncrease = () =>{setCount(count + 1)}
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() =>{setCount(count + 1)}}>Increase</button>
      <button onClick={() =>{setCount(count - 1)}}>Decrease</button>
      <br/>
      <button onMouseMove={() =>{setCount(count + 1)}}>Increase</button>
      <button onMouseMove={() =>{setCount(count - 1)}}>Decrease</button>
    </div>
  )
}

// 32-12
function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
    // console.log('calling');
  })
  return (
  <div>
    <h2>Users : {users.length} </h2>
    <ul>
      {
        users.map(user => <li>{user.name}</li>)
      }
      <br/>
      <br/>
      {
        
        users.map(user => <li>{user.phone}</li>)
      }
    </ul>
  </div>
  )
}

export default App;
