import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import WebsitesAdminPage from "./pages/WebsitesAdminPage";
import VideosAdminPage from "./pages/VideosAdminPage";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <ToastContainer position="top-center" />
        <div className="AdminDatasInfos">
          <Switch>
            <Route exact path="/WebsitesAdminPage" component={WebsitesAdminPage} />
            <Route path="/VideosAdminPage" component={VideosAdminPage} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
