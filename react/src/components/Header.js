import { Link } from "react-router-dom"

const Header =()=> {

    return (
        <header className="header" id="header">
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <h1 className="display-1 text-capitalize text-md-center">
                            <Link to='/'>
                                my album app
                            </Link>
                        </h1>
                    </div>
                    <div className="col-md-7">
                        <nav className="nav justify-content-around text-capitalize">
                            <Link to='/about'>about</Link>
                            <Link to='/artists'>artists</Link>
                            <Link to="/bands">bands</Link>
                            <Link to="/albums">albums</Link>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header