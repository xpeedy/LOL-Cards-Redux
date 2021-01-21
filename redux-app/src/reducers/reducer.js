import { FETCH_CHAMPION_LIST, FETCH_CHAMPION_FAIL,GET_CHAMPION } from "../actions";

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
    }
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_CHAMPION_LIST:
            return{...state,
            championList:[action.payload]
        }
        case GET_CHAMPION:
            return{...state,
            championList: state.championList.map((champion) => {
                if(champion === action.payload) {
                    return {...champion,
                        ...state,championList:{
                            title:champion.title,
                            name:champion.name,
                            image:champion.image.full,
                            story: champion.blurb
                        }
                        
                    }
                }
                else { return champion }
                
            })    
        }
        case FETCH_CHAMPION_FAIL:
            return{}
        default:
            return state;
    }
}

export default reducer;