import { FETCH_CHAMPION, FETCH_CHAMPION_FAIL } from "../actions";

const initialState = {
    title: "data.title", //.title
    name: "", //.name
    image: "", //.image.full
    story: "", //blurb
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_CHAMPION :
            return{...state,
            title: state.title,
            name: action.payload,
            image: state.image.full,
            story: state.blurb
        }
        case FETCH_CHAMPION_FAIL:
            return{}
        default:
            return state;
    }
}

export default reducer;