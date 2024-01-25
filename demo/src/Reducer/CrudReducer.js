const Initial = {
  user: JSON.parse(localStorage.getItem("users"))
    ? JSON.parse(localStorage.getItem("users"))
    : [],
    usered : {}
};


const CrudReducer = (state = Initial, action) => {
  switch (action.type) {
    case "adduser":
      let all = [...state.user, action.payload];
      localStorage.setItem("users", JSON.stringify(all));
      return {
        ...state,
        user: all,
      };
    case "deleteuser":
      let id = action.payload;
      let del = state.user.filter((val) => {
        return val.id !== id;
      });
      localStorage.setItem("users", JSON.stringify(del));
      return {
        ...state,
        user: del,
      }

    default:
      return state;
  }
};

export default CrudReducer;
