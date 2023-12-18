import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);

  const fetchData = () => {
    return fetch("http://localhost:5000/form")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main>
      {data.map((item) => (
        <div>
          <div className="item">
            <span>Category: </span> <span>{item.itemCategory}</span>
          </div>

          <div className="item">
            <span>Age: </span> <span>{item.itemAge}</span>
          </div>

          <div className="item">
            <span>Description: </span> <span>{item.itemTypeDesc}</span>
          </div>

          <div className="item">
            <span>Phone Number: </span> <span>{item.phone}</span>
          </div>

          <div className="item">
            <span>Email: </span> <span>{item.email}</span>
          </div>

          <div className="item">
            <span>Message: </span> <span>{item.shortMessage}</span>
          </div>

          <div className="item images">
            <div className="img-container">
              <img src={`http://localhost:5000/${item.photos[0]}`} alt="" />
              <img src={`http://localhost:5000/${item.photos[1]}`} alt="" />
              <img src={`http://localhost:5000/${item.photos[2]}`} alt="" />
            </div>
          </div>
        </div>
      ))}
    </main>
  );
}

export default App;
