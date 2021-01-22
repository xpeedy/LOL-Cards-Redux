import React from "react";
import { connect } from "react-redux";


const Champion = (props) => {
    //  console.log(props[0].title)
    const {championInfo, image} = props
    //  console.log(props)
    //  console.log("hello",championInfo)
    //  console.log("here",image)

    return(
        <>
        {championInfo[0]? 
        <div>
            <p>{championInfo[0].title}</p>
            <p>{championInfo[0].name}</p>
            <img src={image} alt={championInfo[0].name}></img>
            <p>{championInfo[0].blurb}</p>
        </div> : ""}
        </>
    )
    
}

const mapStateToProps= (state) => {

    return state
    
    // const {championInfo, image} = state
    // console.log(championInfo,image,state)
    // return championInfo

    // return state.championInfo
       
        // championInfo: {
        //     title: state.title, //.title
        //     name: state.name, //.name
        //     image: state.image, //.image.full
        //     story: state.story, //blurb
        // }
    
}

export default connect(mapStateToProps)(Champion);