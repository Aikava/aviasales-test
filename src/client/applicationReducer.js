const initialState = {
    id: null,
    email: "",
    share: false,
    inputValue: "",
};

export const UPDATE_SHARE = "UPDATE_SHARE";
export const UPDATE_EMAIL = "UPDATE_EMAIL";
export const UPDATE_USER = "UPDATE_USER";
export const PULL_USER_DATA = "PULL_USER_DATA";
export const USER_CREATED = "USER_CREATED";

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

        dispatch(updateUser(result));
    };
}

export function createUser() {
    return async (dispatch) => {
        await fetch("/users/create");
        
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
            console.log(email);
            return  {
                ...state,
                inputValue: email
            };
        default:
            return initialState;
    }
};