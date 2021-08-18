import {
  FETCH_CHAMPION_LIST,
  FETCH_CHAMPION_IMAGE,
  GET_CHAMPION,
  FETCH_CHAMPION_SPELLS
} from "../actions";

const initialState = {
    championList: [],
    championInfo: {
        title: "", //.title
        name: "", //.name
        // image: "", //.image.full
        story: "", //blurb
    },
    image:"",
    spells:[]
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
          //const champName = champion.name[0].toUpperCase() + champion.name.substring(1)
          if (champion.name === action.payload) {
            // console.log(champion);
            return {
              title: champion.title, //.title
              name: champion.name, //.name
            //   image: champion.image, //.image.full
              story: champion.blurb,
            };
          } else {
            return
          }
        }),
      };
      
    case FETCH_CHAMPION_IMAGE:
        // console.log(...state,state.image)
      return {...state,
        image: action.payload,
      };

    case FETCH_CHAMPION_SPELLS:
      return {
        ...state,
        spells: action.payload,
      }
    default:
      return state;
  }
};

export default reducer;
