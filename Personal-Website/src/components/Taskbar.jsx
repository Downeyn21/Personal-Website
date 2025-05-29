import Clock from "./Clock";
import StartButton from "./StartButton";

function Taskbar() {
    return ( 
        <>
            <div className="taskbar-container">
                <StartButton />
                <Clock />
            </div>
        </>
     );
}

export default Taskbar;