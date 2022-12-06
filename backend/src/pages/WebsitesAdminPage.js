import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";   // LIBRARY TO TRANSFER DATA BETWEEN PAGES
import { toast } from 'react-toastify';   // LIBRARY TO CREATE MESSAGE POP-UP
import "./WebsitesAdminPage.css";
import axios from "axios";

const initialState = {
  websiteName: "",
  score: "",
  nbVisites: "",
};

const WebsitesAdminPage = () => {
  const [state, setState] = useState(initialState);
  const { websiteName, score, nbVisites } = initialState;

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getSingleWebsite(id);
    }
  }, [id]);

  const [data, setData] = useState([]);

  useEffect(() => {
    getWebsites();
  }, []);

  // FONCTION : WHEN THE BUTTON ADD/UPDATE IS SELECTED
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!id) {
      addNewWebsite(state);
    } else {
      updateWebsite(state, id);
    }
    getWebsites()
  };

  // FONCTION : WHEN THE INPUT VALUE CHANGE
  const handleInputChange = (e) => {
    let { name } = e.target;
    setState({ ...state, [name]: e.target.value });
  };

  // THIS IS THE REQUEST TO FIND ALL THE WEBSITES
  const getWebsites = async () => {
    const response = await axios.get(
      "http://localhost:4000/api/websites/getAll"
    );
    if (response.status === 200) {
      setData(response.data);
    }
  };

  // THIS IS THE REQUEST TO DELETE ONE WEBSITE BY THE 'ID'
  const onDeleteWebsite = async (id) => {
    if (window.confirm("Are you sure that you want to delete that website ?")) {
      const response = await axios.delete(
        `http://localhost:4000/api/websites/delete/${id}`
      );
      if (response.status === 200) {
        toast.success("Website Deleted Successfully !");
        getWebsites();
      } else {
        toast.error("Impossible to delete the website !");
      }
    }
  };

  // THIS IS THE REQUEST TO FIND ONE WEBSITE BY THE 'ID'
  const getSingleWebsite = async (id) => {
    const response = await axios.get(
      `http://localhost:4000/api/websites/getOne/${id.toString()}`
    );
    if (response.status === 200) {
      setState({ ...response.data[0] });
    }
  };

  // THIS IS THE REQUEST TO INSERT A NEW WEBSITE_DATAS INTHE DATABASE
  const addNewWebsite = async (data) => {
    const response = await axios.post(
      "http://localhost:4000/api/websites/Add",
      data
    );
    if (response.status === 200) {
      toast.success("The Website has been add successfully");
    }
  };

  // THIS IS THE REQUEST TO UPDATE ONE WEBSITE BY THE 'ID'
  const updateWebsite = async (data, id) => {
    const response = await axios.patch(
      `http://localhost:4000/api/websites/update/${id}`,
      data
    );
    if (response.status === 200) {
      toast.success("The Website has been add successfully");
    }
  };

  return (
    <div>
      <div>
        <table className="styled-table">
          <thead>
            <tr>
              <th>No.</th>
              <th>Website Name</th>
              <th>Note</th>
              <th>Nb Visits</th>
              <th style={{ textAlign: "center" }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((item, index) => {
                return (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{item.websiteName}</td>
                    <td>{item.score}</td>
                    <td>{item.nbVisites}</td>
                    <td>
                      <button
                        className="btn btn-delete"
                        onClick={() => onDeleteWebsite(item._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
      <div style={{ marginTop: "100px" }}>
        <form
          style={{
            margin: "auto",
            padding: "15px",
            maxWidth: "400px",
            alignContent: "center",
          }}
          onSubmit={handleSubmit}
        >
          <label htmlFor="WebsiteName">Website Name</label>
          <input
            type="text"
            required="required"
            id="websiteName"
            name="websiteName"
            placeholder="Enter the name of the website"
            onChange={handleInputChange}
            defaultValue={websiteName}
          />

          <label htmlFor="score">Note</label>
          <input
            type="number"
            required="required"
            id="score"
            name="score"
            placeholder="Enter the Score for the website (/5)"
            onChange={handleInputChange}
            defaultValue={score}
          />

          <label htmlFor="nbVisites">Nb Visits</label>
          <input
            type="number"
            required="required"
            id="nbVisites"
            name="nbVisites"
            placeholder="Enter the Number of visits on the website"
            onChange={handleInputChange}
            defaultValue={nbVisites}
          />

          <input type="submit" value={id ? "Update" : "Add"} />
        </form>
      </div>
    </div>
  );
};

export default WebsitesAdminPage;
