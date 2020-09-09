import React from 'react';
const SlotMachine=(props)=>{
    // let x= '🙂';
    // let y='🙂';
    // let z='🙂';
  
   
    

    let {x,y,z}=props; //object destructuring
    if(x===y&&y===z){
      return (
        <>
        <div className="slot_inner">
          <h1> {x}{y}{z}</h1>
          <h4>this is matching</h4>
          <hr/>
        </div>
        </>
      )
    }
    else{
      return (
        <>
        <div className="slot_inner">
          <h1> {x}{y}{z}</h1>
          <h4>this is not matching</h4>
          <hr/>
        </div>
        </>
      )
    }
  }
  export default SlotMachine;