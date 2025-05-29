function IconContainer() {
    const icons = []
    for(let i = 0; i < 50; i++) {
        icons.push(i + 1)
    }
    
    console.log(icons)

    return ( 
        <>
            <div className="icon-container">
                {icons.map((num, index) => (
                    <div key={index} className="icon">{num}</div>
                ))}
            </div>
        </>
     );
}

export default IconContainer;