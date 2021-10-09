import React, { useState, useEffect } from "react";
import "./App.css";
import AuthForm from "./components/Auth/Auth";
import NavBar from "./components/Basic/NavBar";
import ModalUI from "./components/UI/Modal";
import axios from "axios";
// import FrontPage from "./components/Book/FrontPage";
// import ExploreBooks from "./components/Book/ExploreBooks";
// import CreateBook from "./components/Pages/CreateBook";
import Dashboard from "./components/Pages/Dashboard";




const App = () => {
  const [open, setOpen] = useState(false);
  const [isAuthenticated, setisAuthenticated] = useState(false);
  const [username, setUserName] = useState("");
  useEffect(() => {
    const token = localStorage.getItem("access_token");
    const api = `http://127.0.0.1:8000/auth/user/`;

    axios
      .get(api, { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => {
        console.log(res.data);
        setUserName(res.data.username);
        setisAuthenticated(true);
      });
  }, []);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  // const SampleBook = {
  //   BookName: "The simple Success",
  //   Author: "Khaleesi Khan",
  //   Price: "200",
  //   Description:
  //     "Wikipedia Books was first rolled out in 2009. It comprised two main parts:The Book Creator user interface, for designing the book and for selecting an electronic format to render an individual copy as an e-book.The Offline Content Generator (OCG) back-end service, which rendered the book in the chosen format and made it available for download. But Wikipedia does not print books or handle ordering, as that costs money. An agreement was reached with PediaPress, who built their own renderer and publishing website, where a user could upload a Wikipedia book and either download a PDF softcopy for free or order Print on demand copies. PediaPress later withdrew their free softcopy service.2017: On-wiki PDF withdrawal Eventually the OCG service became outdated and unmaintainable. It became unreliable, while bugs and evolving security issues could no longer be fixed. The Wikimedia Foundation turned off the book rendering service on all Wikimedia wikis in October 2017. Since then, Wikipedia books have only been available from third-party providers. 2017 ff: Candidate replacements A candidate replacement, called Electron, was based on the open-source Chrome HTML-to-PDF rendering engine but proved unsuitable for books, although it replaced the OCG for the PDF download of single articles. A second attempt, named Proton, also failed at book rendering but succeeded Electron for article rendering in 2019. During this period Dirk Hünniger independently wrote MediaWiki2LaTeX, which also compiles Wikipedia books in PDF format. However the Wikimedia Foundation were reluctant to adopt it because they could not support the Haskell programming language in which it is written. It has since been improved and offered by the WikiMedia Foundation (WMF) as an online service.",
  //   Pages: "300",
  //   ISBN_NO: "PUB978-606-722-456-6",
  //   BookImage: Book001,
  // };
  return (
    <main>
      <NavBar
        handleOpen={handleOpen}
        handleClose={handleClose}
        username={username}
        isAuthenticated={isAuthenticated}
      />

      <ModalUI open={open} handleOpen={handleOpen} handleClose={handleClose}>
        <AuthForm handleClose={handleClose} />
      </ModalUI>
      {/* <FrontPage Book={SampleBook} />
      <ExploreBooks/> */}
      {/* <CreateBook/> */}
      <Dashboard/>
    </main>
  );
};
export default App;
