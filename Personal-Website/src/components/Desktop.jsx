import IconContainer from "./IconContainer";
import Taskbar from "./Taskbar";

function Desktop() {
    return ( 
        <>
            <div className="desktop-container">
                <Taskbar />
                <IconContainer />
            </div>
        </>
    );
}

export default Desktop;