export default function MainContent(props) {
    return (
        <main className={props.lightMode ? "light" : ""}>
            <div>
                <h1>Fun facts about React</h1>
                <ul>
                    <li>Was first released in 2013</li>
                    <li>Was originally created by Jordan Walke</li>
                    <li>Has well over 100K stars on GitHub</li>
                    <li>Is maintained by Facebook</li>
                    <li>Powers thousands of enterprise apps, including mobile apps</li>
                </ul>
            </div>
            <img className="logo" src="./images/react-logo.png" alt="react"/>
        </main>
    )
}