import React, {useState} from "react";
import {connect} from "react-redux";
import { getChamp } from "../actions";


const ChampForm = (props) => {
    const [value, setValue] = useState({inputValue:""});

    const handleChanges = (evt) => {
        setValue({inputValue:evt.target.value})
        
    }

    const onClick = (evt) => {
        evt.preventDefault()
        props.getChamp(value.inputValue)
        setValue({inputValue:""})
    }
    // console.log(props)
    

    return(
        <>
        <form onSubmit={onClick}>
            <label htmlFor="id">
                <input 
                type="text"
                placeholder="Champion"
                onChange={handleChanges}
                value={value.inputValue}
                />
            </label>
            <button>Enter</button>
        </form>
        </>
    )
}


const mapStateToPros= (state) => {
    return{
        title: state.title,
        name: state.name,
        image: state.image,
        story: state.story,
    }
}

export default connect(mapStateToPros,{getChamp}) (ChampForm);