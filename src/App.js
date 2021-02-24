import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const names = [
    { nayok: "Razzak", nayika: "Shabana" },
    { nayok: "Alamgir", nayika: "Diti" },
    { nayok: "Shakib", nayika: "Bubli" },
  ];
  const products = [
    { name: "photoShop", price: 99.99 },
    { name: "Illustrator", price: 60.99 },
    { name: "PDF Reader", price: 5.99 },
  ];
  return (
    <div className="App">
      <header className="App-header">
        <p>Hey this is raju</p>
        <Counter></Counter>
        <Users></Users>
        <ul>
          {products.map((product) => (
            <li>{product.name}</li>
          ))}
        </ul>
        {products.map((product) => (
          <Product product={product}></Product>
        ))}
        {names.map((nm) => (
          <Person name={nm}></Person>
        ))}
      </header>
    </div>
  );
}

function Product(props) {
  const productStyle = {
    border: "1px solid gray",
    margin: "10px",
    borderRadius: "8px",
    backgroundColor: "lightgrey",
    height: "400px",
    width: "500px",
    float: "left",
  };
  const { name, price } = props.product;
  return (
    <div style={productStyle}>
      <h3>{name}</h3>
      <h1>{price}</h1>
      <button>Buy Now</button>
    </div>
  );
}
function Person(props) {
  const personStyle = {
    border: "2px solid lightsalmon",
    margin: "10px",
  };
  const { nayok, nayika } = props.name;
  return (
    <div style={personStyle}>
      <h1>Nayok: {nayok}</h1>
      <h3>Hero of {nayika}</h3>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const handleIncrease = () => setCount(count + 1);
  return (
    <div>
      <h1>Count: {count} </h1>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  );
}

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <h1>Dynamic Users {users.length} </h1>
      <ul>
        {console.log({ users })}
        {users.map((user) => (
          <li>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
export default App;
