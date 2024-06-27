import React from "react";
import { Clock } from "./Clock";
import { Counter } from "./Counter";

export const Container = () => {
    return (<div className="row container-fluid holder">
        <div className="col-2" style={{background:"black", margin:"10px", border:"1px solid white", borderRadius:"10px"}}>
            {<Clock/>}
        </div>
        <div className="col" style={{background:"black", margin:"10px", border:"1px solid white", borderRadius:"10px"}}>
            {<Counter/>}
        </div>
        <div className="col" style={{background:"black", margin:"10px", border:"1px solid white", borderRadius:"10px"}}>
            {<Counter/>}
        </div>
        <div className="col" style={{background:"black", margin:"10px", border:"1px solid white", borderRadius:"10px"}}>
            {<Counter/>}
        </div>
        <div className="col" style={{background:"black", margin:"10px", border:"1px solid white", borderRadius:"10px"}}>
            {<Counter/>}
        </div>
        <div className="col" style={{background:"black", margin:"10px", border:"1px solid white", borderRadius:"10px"}}>
            {<Counter/>}
        </div>
        
    </div>);
}