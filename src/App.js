import "./App.css";
import { Button } from "react-bootstrap";
import { getZombiesList, mapNftToZombies, fetchNFTs } from "./helper";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import Nft from './nft';

function App() {
  const [zombies, setZombies] = useState([]);
  useEffect(() => {
    mapNftToZombies().then(setZombies);
  }, []);
  return (
    <div className="App">
      <div className="container">
        <h3
          className="d-flex justify-content-center mb-4 mt-2"
          style={{ margin: "0 auto", textShadow: "0px 1px 3px #555" }}
        >
          Top Zombies
        </h3>
        <div className="row">
        {zombies.map((object, i) => <Nft nft={object} key={i}></Nft>)}
{/* 
        <Nft nft={zombies}></Nft> */}
        </div>
      </div>
    </div>
  );
}

export default App;
