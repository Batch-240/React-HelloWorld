import React from "react";
import "./style/style.css"
import ButtonDisplay from "./Button/ButtonDisplay"

const App = ()=>{
    return(
        <div> 
           <h1 style={{textAlign:"center"}}>Hello world!!!</h1>
           <ButtonDisplay />
        </div>
    )
}
// export function Hello1(){
//     return(
//         <div> 
//            <h1 style={{textAlign:"center"}}>Hello world!!!</h1>
//            <button className="button"> Apple </button>
//            <button className="button"> Banana </button>
//            <button className="button"> Mango </button>
//         </div>
//     )
// }
// export function Hello2(){
//     return(
//         <div> 
//            <h1 style={{textAlign:"center"}}>Hello world!!!</h1>
//            <button className="button"> Apple </button>
//            <button className="button"> Banana </button>
//            <button className="button"> Mango </button>
//         </div>
//     )
// }
export default App 

// default export, named export 
