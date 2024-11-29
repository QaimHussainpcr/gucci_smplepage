function Navbar() {
    return (
        <div>
            <nav>
                <div className="logo">
                    <img src="/src/images/gucci-logo-transparent-gucci-logo-images-6.png" />
                </div>
                <ul className="list">
                    <li href="#">Menu</li>
                    <li href="#">Location</li>
                    <li href="#">About</li>
                    <li href="#">Contact</li>
                </ul>

                <button className="btn">Login</button>
            </nav>

        </div>
    )
}

export default Navbar
