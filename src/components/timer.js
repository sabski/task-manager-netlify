import { useEffect, useState } from "react";

function Timer() {

    const [tick, setTick] = useState(0);
    const [updateTick , setUpdateTick] = useState();

    function startTick() {
        setUpdateTick(setInterval(()=> {
            setTick((prevTick) => prevTick + 1000);
        },1000));
    };

    function stopTick() {
        clearInterval(updateTick);
        setUpdateTick(undefined);
    };

    return (
        <div className="timer">
            {tick}
            {updateTick ? <button onClick={()=> {
                stopTick();
            }}>
                Stop timer
            </button> : <button onClick={()=> {
                startTick();
            }}>
                Start timer
            </button>}
        </div>
    );
}

export default Timer;