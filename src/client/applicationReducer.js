const initialState = {
    email: "",
    share: false
};

export const UPDATE_SHARE = "UPDATE_SHARE";
export const UPDATE_EMAIL = "UPDATE_EMAIL";
export const UPDATE_USER = "UPDATE_USER";

export const reducer = (state, action) => {
    switch (action.type) {
        case UPDATE_SHARE:
            const { share  } = action.payload;

            return  {
                ...state,
                share,
            };
        case UPDATE_EMAIL:
            const { email  } = action.payload;

            return  {
                ...state,
                email,
            };

        default:
            return initialState;
    }
};