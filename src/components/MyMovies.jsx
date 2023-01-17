import { useState, useEffect } from "react";
import facade from "../facades/apiFacade";
import Unauthorized from "./Unauthorized";

const MyMovies = ({loggedIn, setLoggedIn}) => {
  const [dataFromServer, setDataFromServer] = useState("Loading...");


  useEffect(() => {
    // her skal jeg tjekke for rollen og køre den rigitge fetch metode alt efter rollen
    let isLoggedIn = facade.loggedIn()
    if(isLoggedIn) {
      setLoggedIn(true)
      facade.fetchData().then((data) => {
        setDataFromServer(data)
        console.log(dataFromServer)
      });
    }
  }, []);

  return (
    <div>
        <>
        {!loggedIn ? <Unauthorized/> : 
        <><h1>List Of My Favourite Movies!</h1>
          <h3>Data Received from server:</h3>
       
          {console.log(dataFromServer)}
          </>
        }
        </>
    </div>
  );
};

export default MyMovies;
