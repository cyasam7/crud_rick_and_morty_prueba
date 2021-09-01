import axios from "axios";

export const GET_INITIAL_CHARACTERS = "GET_INITIAL_CHARACTERS";
export const getInitialCharacters = () => (dispatch) => {
    const local = localStorage.getItem("characters");
    const characters = JSON.parse(local);
    const existProducts = characters?.length;

    if (existProducts) {
        dispatch({ type: GET_INITIAL_CHARACTERS, payload: characters });
    } else {
        localStorage.setItem("characters", JSON.stringify([]));
        dispatch({ type: GET_INITIAL_CHARACTERS, payload: [] });
    }
};

export const LIST_CHARACTERS = "LIST_CHARACTERS";
export const listCharacters = () => async (dispatch) => {
    try {
        const { data } = await axios.get("https://rickandmortyapi.com/api/character");
        dispatch({
            type: LIST_CHARACTERS,
            payload: { array: data.results, page: 1, count: data.info.count },
        });
    } catch (error) {
        console.log(error);
    }
};

export const NEXT_PAGE = "NEXT_PAGE";
export const nextPageCharacters = (nextPage) => async (dispatch) => {
    try {
        const { data } = await axios.get(
            `https://rickandmortyapi.com/api/character/?page=${nextPage}`
        );

        dispatch({
            type: NEXT_PAGE,
            payload: {
                page: nextPage,
                array: data.results,
            },
        });
    } catch (error) {
        console.log(error);
    }
};

export const CREATE_CHARATER = "CREATE_CHARATER";
export const createCharacter = (values, setErrors) => async (dispatch, state) => {
    const { characters } = state().characters;
    const { name, status, species, type, gender } = values;

    const { data } = await axios.get(
        `https://rickandmortyapi.com/api/character/?name=${name}&status=${status}&species=${species}&type=${type}&gender=${gender}`
    );
    const existCharacter = data.info.count > 0;
    if (existCharacter) {
        const payload = [...characters, data.results[0]];
        localStorage.setItem("characters", JSON.stringify(payload));
        dispatch({ type: CREATE_CHARATER, payload });
    }
};

export const UPDATE_CHARACTER = "UPDATE_CHARACTER";
export const updateCharacter = (id, values) => async (dispatch, state) => {
    const { characters } = state().characters;

    const index = characters.findIndex((i) => i.id === parseInt(id));

    characters[index] = { ...characters[index], ...values };

    localStorage.setItem("characters", JSON.stringify([...characters]));

    dispatch({ type: UPDATE_CHARACTER, payload: [...characters] });
};

export const SELECT_CHARACTER = "SELECT_CHARACTER";
export const selectCharacter = (value) => {
    return {
        type: SELECT_CHARACTER,
        payload: value,
    };
};

export const DELETE_CHARACTER = "DELETE_CHARACTER";
export const deleteCharacter = () => async (dispatch, state) => {
    const { characters, id } = state().characters;

    const newCharacters = characters.filter((character) => character.id !== id);

    localStorage.setItem("characters", JSON.stringify(newCharacters));
    dispatch({ type: DELETE_CHARACTER, payload: newCharacters });
};

export const CHANGE_MODAL_STATE = "CHANGE_MODAL_STATE";
export const changeModalState = (value) => {
    return {
        type: CHANGE_MODAL_STATE,
        payload: value,
    };
};
