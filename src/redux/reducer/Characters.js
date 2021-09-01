import * as Actions from "../actions";

const initialState = {
    characters: [],
    list: {
        array: [],
        page: 1,
        count: 0,
    },
    open: false,
    id: "",
};

function Reducer(state = initialState, action) {
    switch (action.type) {
        case Actions.LIST_CHARACTERS:
            return {
                ...state,
                list: {
                    array: action.payload.array,
                    page: action.payload.page,
                    count: action.payload.count,
                },
            };
        case Actions.NEXT_PAGE:
            return {
                ...state,
                list: {
                    ...state.list,
                    array: action.payload.array,
                    page: action.payload.page,
                },
            };
        case Actions.CREATE_CHARATER:
            return {
                ...state,
                characters: action.payload,
            };
        case Actions.GET_INITIAL_CHARACTERS:
            return {
                ...state,
                characters: action.payload,
            };
        case Actions.UPDATE_CHARACTER:
            return {
                ...state,
                characters: action.payload,
            };
        case Actions.SELECT_CHARACTER:
            return {
                ...state,
                id: action.payload,
            };
        case Actions.DELETE_CHARACTER:
            return {
                ...state,
                characters: action.payload,
            };
        case Actions.CHANGE_MODAL_STATE:
            return {
                ...state,
                open: action.payload,
            };
        default:
            return state;
    }
}
export default Reducer;
