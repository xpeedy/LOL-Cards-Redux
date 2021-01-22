import {
  FETCH_CHAMPION_LIST,
  FETCH_CHAMPION_FAIL,
  GET_CHAMPION,
} from "../actions";

const initialState = {
  // title: "d", //.title
  // name: "", //.name
  // image: "", //.image.full
  // story: "", //blurb
  championList: [],
  championInfo: {
    title: "", //.title
    name: "", //.name
    image: "", //.image.full
    story: "", //blurb
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CHAMPION_LIST:
      return { ...state, championList: action.payload };
    case GET_CHAMPION:
    //   console.log(state.championList);
      // return console.log('checking state in get champ',state.championList)
      return {
        ...state,
        championInfo: state.championList.filter((champion) => {
          // console.log(champion.name, action.payload)
          if (champion.name === action.payload) {
            console.log(champion);
            return {
              title: champion.title, //.title
              name: champion.name, //.name
              image: champion.image, //.image.full
              story: champion.blurb,
            };
          } else {
            return ;
          }
        }),
      };

    case FETCH_CHAMPION_FAIL:
      return {};
    default:
      return state;
  }
};

export default reducer;
