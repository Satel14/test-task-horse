import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { io } from "socket.io-client";
import Race from "./components/Race";
import { subscribe } from "./store/horseSlice";
import './App.css';

const socket = io("localhost:3002");

function App() {
    const dispatch = useDispatch();
    const horses = useSelector((state) => state.horses.horses);

    const [btnStarted, setbtnStarted] = useState(false);

    const startRace = () => {
        socket.connect();
        socket.emit("start");
        socket.on("ticker", (data) => {
            dispatch(subscribe(data));
            setbtnStarted(true);
        });
    };

    const isFinished = horses.map((el) => el.distance).every((el) => el === 1000);

    useEffect(() => {
        if (isFinished) {
            socket.disconnect();
        }
    }, [isFinished]);

    return (
        <div className="wrapper">
            <div>
                <button disabled={btnStarted} onClick={startRace} data-testid="greeting-btn">
                    Start
                </button>
            </div>
            <Race value={horses.distance} />
        </div>
    );
}

export default App;