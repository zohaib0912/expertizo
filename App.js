import logo from './logo.svg';
import './App.css';

function App() {
  const name = "Hello World"
  const obj = { name: "Hello World Object" }
  const data = ['We', 'are', 'United']
  const list = [{ name: "Hello World 1" }, { name: "Hello World 2" }, { name: "Hello World 3" }]
  const complex = [{ company: 'XYZ', jobs: ['Javascript' ,'React'] }, { company: 'ABC', jobs: ['AngularJs','Ionic'] }]   
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>{name}</p>
        <p>{obj.name}</p>
        <p>{data.join(" ")}</p>
        <ol>
          {list.map(function(item){
              return <li>{item.name}</li>
          })}
        </ol>
        <table border = "2px">
          <tr>
            <td>Company</td>
            <td>Jobs</td>
          </tr>
          
            {complex.map(function(item){
              return(
              <tr key = {item.company}>
              <td>{item.company}</td>
              <td>{item.jobs.join(", ")}</td>
              
          </tr>
              )
          })}
        </table>
      </header>
    </div>
  );
}

export default App;
