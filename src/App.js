import "./App.css";
import BIKE from "./images/bike.webp";
import posts from "./posts.js";
import users from "./users.js";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";

let obj = { name: "hello world object" };
let arr1 = ["we", "are", "united"];
let list = [
  { name: "Hello World1" },
  { name: "Hello World2" },
  { name: "Hello World3" },
];
// const complex = [{company: 'XYZ', jobs: ['Javascript,' 'React']}, {company: 'ABC', jobs: ['AngularJs' 'Ionic']}]
let complex = [
  { company: "xyz", jobs: ["javascript", "react"] },
  { company: "ABC", jobs: ["AngularJs", "Ionic"] },
];

function App() {
  let name1 = "Hello World";

  return (
    <div className="App">
      <h1>{name1}</h1>

      <h2>MAJID HUSSAIN</h2>

      <img src={BIKE} alt=""></img>
      <br></br>
      <br></br>

      <ul>
        {arr1.map((v, i) => (
          <b>
            <li key={i}>{v}</li>
          </b>
        ))}
      </ul>
      <br></br>

      <p>{obj.name}</p>
      <br></br>

      <ul>
        {list.map((v, i) => (
          <li key={i}>{v.name}</li>
        ))}
      </ul>
      <br></br>

      <ul>
        {complex.map((v, i) => (
          <li key={i}>
            {"Company Name"} {v.company} {"Jobs"}: {v.jobs + ","}
          </li>
        ))}
      </ul>
      <br></br>

      <div>
        <ul>
          
            <div className="cards">
              {posts.map((v, i) => (
                <li className="card card-posts" key={i}>
                  {" "}
                  {"id :"} {v.id}
                  <br></br>
                  {"title :"} {v.title}
                  <br></br> {"body :"} {v.body.slice(0, 20)}
                </li>
              ))}
            </div>
          

          <div className="card-2">
            {users.map((v, i) => (
              <li className="card card-users" key={i}>
               {"name :"} {v.name} <br></br> {"user name :"} {v.username} <br></br> {"email :"} {v.email}
              </li>
            ))}
          </div>
        </ul>
      </div>
    </div>
  );
}

export default App;
