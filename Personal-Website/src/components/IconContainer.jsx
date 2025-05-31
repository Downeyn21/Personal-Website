function IconContainer() {
    const icons = []
    for(let i = 0; i < 50; i++) {
        icons.push(i + 1)
    }

    return ( 
        <>
            <div className="icon-container">
                {/* {icons.map((num, index) => (
                    <div key={index} className="icon">{num}</div>
                ))} */}
                <div className="icon">
                    <img src="/img/folder-icon.png" alt="folder" />
                    <span>Projects</span>
                </div>
                <div className="icon">
                    <img src="/img/resume-icon.png" alt="resume" />
                    <span>Resume</span>
                </div>
                <div className="icon">
                    <img src="/img/User-info.png" alt="about" />
                    <span>About</span>
                </div>
                <div className="icon">
                    <img src="/img/music-player.png" alt="music-player" />
                    <span>Music</span>
                </div>
            </div>
        </>
     );
}

export default IconContainer;