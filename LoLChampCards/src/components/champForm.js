import React, {useState} from "react";
import {connect} from "react-redux";
import styled from "styled-components";
import { getChamp } from "../actions";


const ChampForm = (props) => {
    const [value, setValue] = useState({inputValue:""});

    const handleChanges = (evt) => {
        setValue({inputValue:evt.target.value})
        
    }

    const onClick = (evt) => {
        evt.preventDefault()
        //make first letter of value Uppercase to match the name in the api
        const newName = value.inputValue[0].toUpperCase() + value.inputValue.substring(1)
        props.getChamp(newName)
        setValue({inputValue:""})
    }
    // console.log(props)
    

    return(
        <>
        <H1>League Of Legends Champion Card</H1>
        <Form onSubmit={onClick}>
            <label htmlFor="id">
                <input 
                type="text"
                placeholder="Champion"
                onChange={handleChanges}
                value={value.inputValue}
                />
            </label>
            <button>Enter</button>
        </Form>
        </>
    )
}




export default connect(null,{getChamp}) (ChampForm);


const Form = styled.form`
border: solid black;
margin-top: 20%;
margin-bottom: 44.5%;


`

const H1 = styled.h1`
margin-bottom: -20%;
margin-top: -20;
color:white;
`