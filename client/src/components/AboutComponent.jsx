import React from "react";

const AboutComponent = (props)=> {
    const {companyName} = props;

    return (
        <div>
            <h1>About Page {companyName} </h1>
        </div>

    )

}

export default AboutComponent ;