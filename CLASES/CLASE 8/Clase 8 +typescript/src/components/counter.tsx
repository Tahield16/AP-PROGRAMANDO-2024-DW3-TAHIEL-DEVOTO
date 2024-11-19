import { useState } from "react";
import "../App.css"

function Counter(){
    const [count,setCount]=useState(0)
    function increaseCount(){
        setCount(count+1)
    }
    function decreaseCount(){
        if(count-1<0){
            alert("No se puede restar mas, no aceptamos numeros negativo >:(");
            return
        }
        setCount(count-1);
    }
    return (
      <>
        <main className="count-container">
          <h2>Contador:</h2>
          <span>{count}</span>
          <div className="buttons-container">
          <button onClick={increaseCount} className="buttons-count">+</button>
          <button onClick={decreaseCount} className="buttons-count">-</button>
          </div>
        </main>
      </>
    );

}
export default Counter