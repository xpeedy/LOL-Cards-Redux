import React from "react";
import { connect } from "react-redux";


const Champion = (props) => {
    //  console.log(props[0].title)
    //  console.log(props.championInfo.title)
    
    return(
        <>
        {props[0]? 
        <div>
        <p>{props[0].title}</p>
        <p>{props[0].name}</p>
        <p>{props[0].image.full}</p>
        <p>{props[0].blurb}</p>
        </div>
            : ""}
        
        </>
    )
}

const mapStateToProps= (state) => {
    // console.log(state)
    return state.championInfo
       
        // championInfo: {
        //     title: state.title, //.title
        //     name: state.name, //.name
        //     image: state.image, //.image.full
        //     story: state.story, //blurb
        // }
    
}

export default connect(mapStateToProps,{})(Champion);