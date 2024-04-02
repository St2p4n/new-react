import { Link } from "react-router-dom"
import "./Clicker.css"
import { useState, useEffect } from "react";

export default function Clicker() {

    //[nazev_promenne, nazev setteru] = useState(vychozi_hodnota);
    const [cookies, setCookies] = useState(0);
    // setter - funkce ktera prenastavuje promennou 
    const increaseCookies = () => {
      setCookies(cookies + 1);
    }
    useEffect(() => {
     document.title = "Cookie cliker loaded"
    }, []); // kdyz [] jsou prazdne - funkce se spusti kdyz se stranka nacte

    useEffect(() => {
     document.title = cookies;
    }, [cookies]); // kdyz se hondoty v [] zmeni, zavola se funkce 

    return(
    <>
        <h1>Clicker</h1>
        <button onClick={increaseCookies} className="clicker-button">Clicker</button>
        <p>Cookies: {cookies}</p>
        <Link to="/">
         <p>Go Home</p>
        </Link>

    </>
    );
}