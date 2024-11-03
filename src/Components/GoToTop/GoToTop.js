import React from "react";

const GoToTop = ()=>{
    
    const OnGotoTop = () =>{
        window.scrollTo({
            top:0, left: 0, behavior:"smooth"
        })
    }

    return(
        <div className="gototop" onClick={()=>{OnGotoTop()}}>
            <h4>Go to Top</h4>
        </div>
    )
}

export default GoToTop;