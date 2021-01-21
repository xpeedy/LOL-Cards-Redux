import React from "react";
import Champion from "./champ";
import { connect } from "react-redux"

const ChampList = (props) => {

    return(
        <>
        {/* {props.ChampionList.map((Champion) => {
            return <div>{Champion}</div>
        })} */}
        </>
    )
}

const mapStateToPros= (state) => {
    return{
        championList: state.championList,
        // championInfo: state.championInfo
        // championInfo: {
        //     title: state.title, //.title
        //     name: state.name, //.name
        //     image: state.image, //.image.full
        //     story: state.story, //blurb
        // }
    }
}

export default connect(mapStateToPros,{})(ChampList);