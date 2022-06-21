import reactLogo from "../images/react-logo.png"

export default function Navbar(props) {
    return (
            <nav className={props.lightMode ? "light" : ""}>
                <div>
                    <img className="nav-logo" src={reactLogo} alt="React Logo"/>
                    <h3>React Facts</h3>
                </div>
                <div className="toggler">
                    <p className="toggler--light">Light</p>
                    <div className="toggler--slider" onClick={props.toggleLightMode}>
                        <div className="toggler--slider--circle"></div>
                    </div>
                    <p className="toggler--dark">Dark</p>
                </div>
            </nav>
    )
}