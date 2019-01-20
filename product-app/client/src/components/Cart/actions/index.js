export const selectUser = (user) => {
    console.log("you clicked on: ", user.name);
    return {
        type: "USER_SELECTED",
        payload: user
    }
};