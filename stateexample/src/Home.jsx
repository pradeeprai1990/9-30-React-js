import React, { useState } from 'react'

export default function Home() {
    let [count, setCount] = useState(0)
    let [passwordstatus, setPasswordstatus] = useState(false)
    let [paraStatus,setParaStatus]=useState(true)
    let changeCounter = () => {
        setCount(count + 1)
    }

    //   function addData(num1,num2){
    //     alert(num1+num2)
    //   }
    return (
        <div>
            //10 to 7
            <div style={{border:"1px solid black",padding:"20px"}}>
                <button  onClick={()=>setParaStatus(true)}>Show</button>  
                 <button onClick={()=>setParaStatus(false)}>Hide</button>

                { paraStatus &&   <p>Welcome to ws</p> }
               
            </div>
            <div>
                <input type={passwordstatus ? "text" : "password"} />
                <button onClick={() => setPasswordstatus(!passwordstatus)}>

                    {passwordstatus ? "hide" : "show"}
                </button>


            </div>
            <h1>{count}</h1>

            <button onClick={changeCounter}>Save</button>

            {/* <button onClick={()=> addData(10,20) }>Add Data</button> */}
            <p>Welcome to WS</p>
        </div>
    )
}
