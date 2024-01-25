export const ADD_USER = (data) =>{
    return{
        type : "adduser",
        payload : data
    }
}
export const DELETE_USER = (id) =>{
    return{
        type : "deleteuser",
        payload : id
    }
}


