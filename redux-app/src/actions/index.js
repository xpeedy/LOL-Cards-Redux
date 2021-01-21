import axios from "axios";
export const FETCH_CHAMPION = "FETCH_CHAMPION";
export const FETCH_CHAMPION_FAIL = "FETCH_CHAMPION_FAIL";

export const getChamp = (value) => dispatch => {
    // dispatch({type: FETCH_CHAMPION});
    axios
    .get(`http://ddragon.leagueoflegends.com/cdn/11.1.1/data/en_US/champion/${value}.json`)
    .then((res) => {
        console.log(res)
        console.log(res.data.data.Akali.name)
        dispatch({ type:FETCH_CHAMPION, payload: res.data.data.value.name })
        console.log(res.data)
        console.log(res.data.data.value.name)
    })
    .catch((err) => {
        console.log(err)
    })
}