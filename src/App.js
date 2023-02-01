import React,{useState,useEffect,useRef} from 'react';
import "./App.css";


function App(){
    const [result,setResult] = useState("");

    return (
        <div className="calc-app">
            <form>
                <input type="text"></input>
            </form>
            <div className="keypad">
                <button id="clear"></button>
                <button id="backspace"></button>
                <button></button>
                <button></button>
                <button></button>
                <button></button>
                <button></button>
                <button></button>
                <button></button>
                <button></button>
                <button></button>
                <button></button>
                <button></button>
                <button></button>
                <button id="result"></button>

            </div>
        </div>
    )

}
export default App;