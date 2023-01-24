import React from "react";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import "./App.css";

const Form = () => {
  // useState is a function that except one dataType of original value and the another one is a function which hold the updated value.
  const [uname, setUname] = useState("");
  const [uemail, setUemail] = useState("");
  const [data, setData] = useState([]);

  const add = () => {
    // spread operator is used to store old + new data on object,array and string
    setData([...data, { uname, uemail }]);
    // wapis s DOM m new entry k liye input field ko blank krne k liye
    setUname("");
    setUemail("");
  };

  const remove = (index) =>{
    let arr = data
    arr.splice(index,1)
    setData([...arr])
  }
  return (
    <>
      <div className="form-container">
        {/*  value={uname}  means jo value uname m h wo value ko point kr rha (uname)=useState("") wali ko onChange par change hogi value  */}
        {/* onChage ek event h jaise onClick 
          onChange m hmesha ek event pass krna hota h jo arrow function k throw ho jata h */}
        {/* <input type="text" value={uname} onChange={(event)=>{setUname(event.target.value)}} placeholder="Type Your Name"/> */}
        {/* event.target.value hmesha ek object return krta h => hmne us object ko array m change kra add function m */}
        <Stack spacing={2} direction="row">
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            value={uname}
            onChange={(event) => {
              setUname(event.target.value);
            }}
          />
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            value={uemail}
            onChange={(event) => {
              setUemail(event.target.value);
            }}
          />
          <Button variant="contained" onClick={add}>
            <AddIcon />
          </Button>
        </Stack>
      </div>

      <div className="data">
        <div className="data-val">
          <h4>Name {}</h4>
          <h4>Email {}</h4>
          <h4>Remove</h4>
        </div>

        {/* user ka data map k throw display component ko send kr denge */}
        {data.map((element, index) => {
          return (
            <div className="data-val" key={index}>
              <h4>{element.uname}</h4>
              <h4>{element.uemail}</h4>
              <Stack>
                <Button variant="contained" color="error" onClick={() => remove(index)}>
                  <DeleteForeverIcon />
                </Button>
              </Stack>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Form;
