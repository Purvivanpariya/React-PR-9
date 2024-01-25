import React, { useEffect, useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { ADD_USER, DELETE_USER, EDIT_USER } from "./Action/action";
import { MdDelete } from "react-icons/md";

function Notes() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [record, setRecord] = useState("");
  const rec = useSelector((state) => state.Crud.user);

  const HandleSubmit = () => {
    let id = Math.floor(Math.random() * 100000);
    let obj = { id, record, title };
    dispatch(ADD_USER(obj));
    console.log(obj);
    setTitle("");
    setRecord("");
  };
 
  const deleteData = (id) => {
    dispatch(DELETE_USER(id))
 }


 



  return (
    <center>
      <h1
        className="text-center pb-2 pt-1 text-white "
        style={{ backgroundColor: "#EA6868" }}
      >
        Google Keep Clone
      </h1>
      <form action="">
        <div className="shadow p-2 mt-4" style={{ width: "300px" }}>
          <input
            type="text"
            className="py-3"
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            style={{ border: "none", position: "absolute", right: "46%" }}
          />
          <br />
          <br />
          <textarea
            placeholder="Note"
            name=""
            id=""
            cols="30"
            rows="5"
            onChange={(e) => setRecord(e.target.value)}
            value={record}
            style={{ border: "none" }}
          ></textarea>
        </div>
        <br></br>
        <button
          className="px-2 mt-3"
          style={{
            border: "none",
            backgroundColor: "#EA6868",
            color: "white",
            fontSize: "20px",
            marginBottom:'30px'
          }}
          type="button"
          onClick={HandleSubmit}
        >
          +
        </button>
      </form>

      <div style={{display:'flex',justifyContent:'center',flexWrap:'wrap'}}>
        {
        rec && rec.map((val) => {
          return (
            <div>
              <div className="shadow p-2 mt-4" style={{ width: "300px" }}>
               <p>{val.title}</p>
                <p>{val.record}</p>
                <button style={{border:'none',backgroundColor:'#EA6868',color:'white',marginRight:'10px'}} onClick={ () => deleteData(val.id) }><MdDelete /></button> 

                

              </div>
            </div>
          );
        })}
      </div>

      <p
        className="text-center text-white"
        style={{
          backgroundColor: "#EA6868",
          marginTop:'300px',
          paddingBottom: "5px",
          marginBottom: "0 ",
          overflowX: "hidden",
        }}
      >
        Copyrights 2024
      </p>
    </center>
  );
}
export default Notes;
