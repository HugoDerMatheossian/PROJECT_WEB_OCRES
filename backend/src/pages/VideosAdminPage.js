import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // LIBRARY TO TRANSFER DATA BETWEEN PAGES
import { Link } from "react-router-dom";  // LIBRARY TO CREATE ROUTES BETWEEN PAGES
//import { toast } from "react-toastify"; // LIBRARY TO CREATE MESSAGE POP-UP
import axios from "axios";
import "./Backend.css";

const initialState = {
  NameAnime: "",
  URL: "",
  Titre_video: "",
};

const VideosAdminPage = () => {
  const [state, setState] = useState(initialState);
  const { NameAnime, URL, Titre_video } = initialState;

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getSingleVideo(id);
    }
  }, [id]);

  const [data, setData] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  // FONCTION : WHEN THE BUTTON ADD/UPDATE IS SELECTED
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!id) {
      addNewVideo(state);
    } else {
      updateVideo(state, id);
    }
    getVideos();
  };

  // FONCTION : WHEN THE INPUT VALUE CHANGE
  const handleInputChange = (e) => {
    let { name } = e.target;
    setState({ ...state, [name]: e.target.value });
  };

  // THIS IS THE REQUEST TO FIND ALL THE VIDEOS
  const getVideos = async () => {
    const response = await axios.get(
      "http://localhost:4000/api/videos/getAll"
    );
    if (response.status === 200) {
      setData(response.data);
    }
  };

  // THIS IS THE REQUEST TO DELETE ONE VIDEOS BY THE 'ID'
  const onDeleteVideo = async (id) => {
    if (window.confirm("Are you sure that you want to delete that website ?")) {
      const response = await axios.delete(
        `http://localhost:4000/api/videos/delete/${id}`
      );
      if (response.status === 200) {
        //toast.success("Video Deleted Successfully !");
        getVideos();
      } else {
        //toast.error("Impossible to delete the video !");
      }
    }
  };

  // THIS IS THE REQUEST TO FIND ONE VIDEOS BY THE 'ID'
  const getSingleVideo = async (id) => {
    const response = await axios.get(
      `http://localhost:4000/api/videos/getOne/${id.toString()}`
    );
    if (response.status === 200) {
      setState({ ...response.data[0] });
    }
  };

  // THIS IS THE REQUEST TO INSERT A NEW VIDEOS_DATA IN THE DATABASE
  const addNewVideo = async (data) => {
    const response = await axios.post(
      "http://localhost:4000/api/videos/Add",
      data
    );
    if (response.status === 200) {
      //toast.success("The Video has been add successfully");
      getVideos();
    }
  };

  // THIS IS THE REQUEST TO UPDATE ONE VIDEO BY THE 'ID'
  const updateVideo = async (data, id) => {
    const response = await axios.patch(
      `http://localhost:4000/api/videos/update/${id}`,
      data
    );
    if (response.status === 200) {
      //toast.success("The Video has been add successfully");
    }
  };


  return (
    <div className="InfosGeneral">
      <div className="ListVideo_Container">
        <table className="styled-table">
          <thead>
            <tr>
              <th>ANIME NAME</th>
              <th>URL</th>
              <th>VIDEO NAME</th>
              <th style={{ textAlign: "center" }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.NameAnime}</td>
                    <td><a href={item.URL} target={item.URL}>{item.URL}</a></td>
                    <td>{item.Titre_video}</td>
                    <td>
                      <Link to={`/UpdateWebsite/${item._id}`}>
                        <button className="btn btn-edit">Modify</button>
                      </Link>
                      <button
                        className="btn btn-delete"
                        onClick={() => onDeleteVideo(item._id)}
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
      <div className="InfoVideo_Container">
        <form
          style={{
            margin: "auto",
            padding: "15px",
            maxWidth: "400px",
            alignContent: "center",
          }}
          onSubmit={handleSubmit}
        >
          <label htmlFor="NameAnime">Anime Name</label>
          <input
            type="text"
            required="required"
            id="NameAnime"
            name="NameAnime"
            placeholder="Enter the name of the Anime"
            onChange={handleInputChange}
            defaultValue={NameAnime}
          />
          <label htmlFor="URL">URL Video</label>
          <input
            type="text"
            required="required"
            id="URL"
            name="URL"
            placeholder="Enter the URL of the video (/5)"
            onChange={handleInputChange}
            defaultValue={URL}
          />
          <label htmlFor="Titre_video">Name Video</label>
          <input
            type="text"
            required="required"
            id="Titre_video"
            name="Titre_video"
            placeholder="Enter the Name of the video"
            onChange={handleInputChange}
            defaultValue={Titre_video}
          />

          <input type="submit" value={id ? "Update" : "Add"} />
        </form>
      </div>
    </div>
  );
};

export default VideosAdminPage;
