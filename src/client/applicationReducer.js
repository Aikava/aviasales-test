const initialState = {
    id: null,
    email: "",
    share: false,
    inputValue: "",
    loaded: false,
};

export const UPDATE_EMAIL = "UPDATE_EMAIL";
export const UPDATE_USER = "UPDATE_USER";
export const USER_CREATED = "USER_CREATED";
const DATA_LOADED = "DATA_LOADED";

function getCookie() {
    const cookie = document.cookie;
    const splittedCookie = cookie.split("; ");
    const result = {};

    for (const keyValue of splittedCookie) {
        const [key, value] = keyValue.split("=");

        result[key] = value;
    }

    return result;
}

export function pullUserData() {
    const cookie = getCookie();

    if (!cookie.user_id) {

        return createUser();
    }

    return async (dispatch) => {
        const request = await fetch(`/users/${cookie.user_id}`);
        const result = await request.json();

        dispatch(dataLoaded(result));
        dispatch(updateUser(result));
    };
}

export function createUser() {
    return async (dispatch) => {
        await fetch("/users/create");

        dispatch(dataLoaded({}))
        dispatch(userCreated());
    }
}

export function pushUserData(data) {
    return async dispatch => {
        const { user_id: id } = getCookie()

        fetch(`/users/${id}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data),
        });

        dispatch(updateUser(data));
    }
}

function updateUser(data) {
    return { type: UPDATE_USER, payload: { data } };
}

function userCreated() {
    return { type: USER_CREATED };
}

function dataLoaded(data) {
    return { type: DATA_LOADED, payload: { data } };
}

export function updateLocalEmail(data) {
    return { type:  UPDATE_EMAIL, payload: data };
}


export const reducer = (state, action) => {
    switch (action.type) {
        case UPDATE_USER:
            const { data } = action.payload;
            return {
                ...state,
                ...data,
            };
        case UPDATE_EMAIL:
            const { email } = action.payload;
            return  {
                ...state,
                inputValue: email
            };
        case DATA_LOADED: {
            const {data} = action.payload;
            return {
                ...state,
                ...data,
                loaded: true,
            }
        }
        default:
            return initialState;
    }
};