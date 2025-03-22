
import React from 'react';
import '../css/LayoutCSS.css';
import '../css/cover.css';
import { Link } from 'react-router-dom';

const HomeComponent = (props) => {
    const {companyName} = props;
    const {onSendData} = props;

    const handleSumit =()=>{
        onSendData("Test Test")

    }

    return (
        <div>
            <h1>Welcome to {companyName}</h1>
            <p className="lead">Cover is a one-page template for building simple and beautiful home pages. Download, edit the text, and add your own fullscreen background photo to make it your own.</p>
            <p className="lead">
                <Link to="#" onClick={ handleSumit} className="btn btn-lg btn-secondary fw-bold border-white bg-white">Learn more</Link>
            </p>
        </div>
    )

}

export default HomeComponent;