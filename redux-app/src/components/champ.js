import React from "react";
import { connect } from "react-redux";


const Champion = (props) => {
    //  console.log(props)
    return(
        <>
        <p>{}</p>
        <p>{}</p>
        <p>{}</p>
        <p>{}</p>
        </>
    )
}

const mapStateToPros= (state) => {
    return{
        title: state.title,
        name: state.name,
        image: state.image,
        story: state.bulrb,
    }
}

export default connect(mapStateToPros,{})(Champion);