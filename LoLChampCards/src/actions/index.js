import axios from "axios";
export const FETCH_CHAMPION_LIST = "FETCH_CHAMPION_LIST";
export const GET_CHAMPION = "GET_CHAMPION";
export const FETCH_CHAMPION_IMAGE = "FETCH_CHAMPION_IMAGE";
export const FETCH_CHAMPION_SPELLS = "FETCH_CHAMPION_SPELLS"

export const getChamp = (name) => (dispatch) => {
  // dispatch({type: FETCH_CHAMPION});
  // const newName = name[0].toUpperCase() + name.substring(1)
  axios
    .get(
      `https://ddragon.leagueoflegends.com/cdn/11.1.1/data/en_US/champion.json`
    )
    .then((res) => {
      const newArray = [];
      for (let i in res.data.data) {
        newArray.push(res.data.data[i]);
      }

      dispatch({ type: FETCH_CHAMPION_LIST, payload: newArray });
      // console.log(dispatch({ type:FETCH_CHAMPION_LIST, payload: newArray }))

      dispatch({ type: GET_CHAMPION, payload: name });
    //   console.log(dispatch({ type: GET_CHAMPION, payload: name }));
    })
    .catch((err) => {
      console.log(err);
    });

  axios
    .get(
      `https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${name}_0.jpg`
    )
    .then((res) => {
      // console.log(res.config.url)
      dispatch({ type: FETCH_CHAMPION_IMAGE, payload: res.config.url });
    })
    .catch((err) => {
      console.log("error at reducer", err);
    });
};
