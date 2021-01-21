import axios from "axios";
export const FETCH_CHAMPION_LIST = "FETCH_CHAMPION_LIST";
export const GET_CHAMPION = "GET_CHAMPION";
export const FETCH_CHAMPION_FAIL = "FETCH_CHAMPION_FAIL";

export const getChamp = (name) => dispatch => {
    // dispatch({type: FETCH_CHAMPION});
    axios
    .get(`http://ddragon.leagueoflegends.com/cdn/11.1.1/data/en_US/champion.json`)
    .then((res) => {
        
        // console.log(res)
        // console.log(res.data)
        // console.log(res.data.data)
        // console.log(res.data.data.Akali.name)
        // const newData = {res.data ,[...res.data]}
        // newData.map((element) => {
        //     if(element === name){
        //         return dispatch({ type:FETCH_CHAMPION, payload: res.data.data })
        //     }
        // })
        dispatch({ type:FETCH_CHAMPION_LIST, payload: res.data.data })
        console.log(dispatch({ type:FETCH_CHAMPION_LIST, payload: res.data.data }))

        dispatch({ type:GET_CHAMPION, payload:name })
        console.log(dispatch({ type:GET_CHAMPION, payload:name }))
    })
    .catch((err) => {
        console.log(err)
    })
}

// export const getChampInfo = (name) => dispatch => {
//     dispatch({ type:GET_CHAMPION, payload:name })
//     console.log(dispatch({ type:GET_CHAMPION, payload:name }))
// }
