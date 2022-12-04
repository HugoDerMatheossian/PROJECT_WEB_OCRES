import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import "./AllWebsite.css";
import axios from "axios"
import { toast } from 'react-toastify';

const AllWebsite = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getWebsites();
  }, [])

  const getWebsites = async() => {
    const response = await axios.get("http://localhost:4000/api/websites/getAll");
    if(response.status === 200) {
      setData(response.data);
    }
  };

  const onDeleteWebsite = async (id) => {
    if(window.confirm("Are you sure that you want to delete that website ?")) {
      const response = await axios.delete(`http://localhost:4000/api/websites/delete/:${id}`);
      if(response.status === 200) {
        toast.success("Website Deleted Successfully !");
        getWebsites();
      }
      else
      {
        toast.error("Impossible to delete the website !");
      }
    }
  }

  console.log("data=>", data);

  return (
    <div style={{marginTop: "150px"}}>
      <table className="styled-table">
        <thead>
          <tr>
            <th style={{textAlign:"center"}}>No.</th>
            <th style={{textAlign:"center"}}>Website Name</th>
            <th style={{textAlign:"center"}}>Note</th>
            <th style={{textAlign:"center"}}>Nb Visits</th>
            <th style={{textAlign:"center"}}>Action</th>
          </tr>
        </thead>
        <tbody>
          {data && data.map((item, index) => {
            return (
              <tr key={index}>
                <th scope='row'>{index + 1}</th>
                <td>{item.websiteName}</td>
                <td>{item.score}</td>
                <td>{item.nbVisites}</td>
                <td>
                  <Link to={`/UpdateWebsite/${item.id}`}>
                    <button className="btn btn-edit">Edit</button>
                  </Link>
                  <button className='btn btn-delete' onClick={() => onDeleteWebsite(item.id)}>Delete</button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default AllWebsite