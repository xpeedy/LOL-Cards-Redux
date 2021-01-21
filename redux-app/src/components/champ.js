import React from "react";
import { connect } from "react-redux";


const Champion = (props) => {
     console.log(props)
    return(
        <>
        <p>{props.title}</p>
        <p>{props.name}</p>
        <p>{props.image}</p>
        <p>{props.story}</p>
        </>
    )
}

const mapStateToPros= (state) => {
    return{
        championList: state.championList,
        championInfo: state.championInfo
        // championInfo: {
        //     title: state.title, //.title
        //     name: state.name, //.name
        //     image: state.image, //.image.full
        //     story: state.story, //blurb
        // }
    }
}

export default connect(mapStateToPros,{})(Champion);