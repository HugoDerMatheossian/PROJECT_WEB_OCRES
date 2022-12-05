import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from "react-router-dom";
import "./AddWebsite.css";
import axios from "axios";
import { toast } from 'react-toastify';

const initialState = {
  websiteName:"",
  score:"",
  nbVisites:""
};

const AddWebsite = () => {

  const [state, setState] = useState(initialState);
  const {websiteName, score, nbVisites} = initialState;

  const history = useHistory();


  
  const {id} = useParams();

  useEffect(() => {
    if(id) {
      getSingleWebsite(id);
    }
  }, [id])

  // THIS IS THE REQUEST TO FIND ONE WEBSITE BY THE 'ID'
  const getSingleWebsite = async (id) => {
    const response = await axios.get(`http://localhost:4000/api/websites/getOne/${id}`);
      if(response.status === 200) {
        setState({...response.data[0] });
      }
  };



  // THIS IS THE REQUEST TO INSERT A NEW WEBSITE_DATAS INTHE DATABASE  
  const addNewWebsite = async (data) => {
    const response = await axios.post("http://localhost:4000/api/websites/Add", data);
    if(response.status === 200) {
      toast.success("The Website has been add successfully");
    }
  }



  // THIS IS THE REQUEST TO UPDATE ONE WEBSITE BY THE 'ID'
  const updateWebsite = async (data, id) => {
    const response = await axios.patch(`http://localhost:4000/api/websites/update/${id}`, data);
    if(response.status === 200) {
      toast.success("The Website has been add successfully");
    }
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    if(!id){
      addNewWebsite(state);
    } else {
      updateWebsite(state, id);
    }
    setTimeout(() => history.push("/AllWebsite"), 500);
  };

  const handleInputChange = (e) => {
    let {name} = e.target;
    setState({ ...state, [name]:e.target.value});
  };

  return (
    <div style={{ marginTop:"100px"}}>
      <form style={{ margin:"auto", padding:"15px", maxWidth:"400px", alignContent:"center" }} onSubmit={handleSubmit}>

        <label htmlFor='WebsiteName'>Website Name</label>
        <input type="text" required="required" id="websiteName" name="websiteName" placeholder='Enter the name of the website' onChange={handleInputChange} defaultValue={websiteName}/>

        <label htmlFor='score'>Note</label>
        <input type="number" required="required" id="score" name="score" placeholder='Enter the Score for the website (/5)' onChange={handleInputChange} defaultValue={score}/>

        <label htmlFor='nbVisites'>Nb Visits</label>
        <input type="number" required="required" id="nbVisites" name="nbVisites" placeholder='Enter the Number of visits on the website' onChange={handleInputChange} defaultValue={nbVisites}/>

        <input type="submit" value={id ? "Update" : "Add"}/>

      </form>
    </div>
  )
}

export default AddWebsite