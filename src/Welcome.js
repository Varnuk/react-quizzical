import React from "react"

export default function Welcome(props){
    function hide() {
        props.firstRun(false);
    }

    return(
        <main className="welcome--container">
            <h1 className="welcome--title">Quizzical</h1>
            <button onClick={hide} className="welcome--button">Start game!</button>
        </main>
    )

}