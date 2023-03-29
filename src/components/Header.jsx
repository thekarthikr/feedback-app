function Header({color, bgColor}){
  
    const headerStyles = {
        color:color,
        backgroundColor:bgColor
    }


    return(
        <header style={headerStyles}>
            <div className="container">
                <h1> Feedback App</h1>
            </div>
        </header>
    )
}

Header.defaultProps = {
    color:"#ff6a95",
    bgColor:'rgba(0,0,0,.4)'
}

export default Header