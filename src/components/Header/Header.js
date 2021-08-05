import react from 'react';
import '../../assets/Css/header.scss';

let Header = () => {
    return(
        <>
            <div className="header fixed-top">
                <nav className="navbar navbar-expand-lg navbar-light bg-header">
                    <div className="container col-12">
                        <a className="navbar-brand col-4 animated-text" href="#" data-text="Pizza Parcel">Pizza Parcel</a>
                        <div className="collapse navbar-collapse col-8" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 col-12 d-flex justify-content-start">
                                <li className="nav-item col-3 d-flex justify-content-center">
                                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item col-3 d-flex justify-content-center">
                                    <a className="nav-link" href="#">Blogs</a>
                                </li>
                                <li className="nav-item col-3 d-flex justify-content-center">
                                    <a className="nav-link" href="#">About Us</a>
                                </li>
                                <li className="nav-item col-3 d-flex justify-content-center">
                                    <a className="nav-link" href="#">Contact Us</a>
                                </li>
                            </ul>
                        
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
    
}
export default Header;