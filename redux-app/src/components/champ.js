import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";


const Champion = (props) => {
    //  console.log(props[0].title)
    const {championInfo, image} = props
    //  console.log(props)
    //  console.log("hello",championInfo)
    //  console.log("here",image)

    return(
        <>
        {championInfo[0]? 
        <ChampInfoDiv>
            <h1>{championInfo[0].name}</h1>
            <h3>{championInfo[0].title}</h3>
            <img src={image} alt={championInfo[0].name}></img>
            <p>{championInfo[0].blurb}</p>
        </ChampInfoDiv> : ""}
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


const ChampInfoDiv = styled.div`
/* border:solid red; */
display:flex;
flex-direction:column;
align-items:center;
margin-top: -43%;
color:white;


p {
    /* border:solid green; */
    width: 12%;
    text-align:center;
    font-size: 120%;
    margin-right:-30%;
    margin-top:-15%;
    margin-bottom:5.5%;
    /* color:whitesmoke; */
}
`