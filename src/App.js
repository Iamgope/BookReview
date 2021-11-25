import React, { useState } from "react";
import "./App.css";
import useSWR from "swr";
import AuthForm from "./Pages/Auth";
import NavBar from "./components/Basic/NavBar";
import ModalUI from "./components/UI/Modal";
import Book003 from "./Media/Book003.png";
import Dashboard from "./Pages/Dashboard";
import CreateBook from "./Pages/CreateBook";
import MyBook from "./Pages/MyBook";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BookFrontPage from "./Pages/BookFrontPage";
import { useDispatch } from "react-redux";
import { authActions } from "./store/slices/auth";
import Home from "./Pages/HomePage";
import Footer from "./components/Basic/Footer";
import { fetcher } from "./components/Api/AxiosApi";
import ForReviewPage from "./Pages/ForReviewPage";
//import ReviewForm from "./components/Review/Create/CreateReviewPage";
const App = () => {
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);

  const { data } = useSWR(`/auth/user/`, fetcher);
  dispatch(authActions.setAccount(data));
  console.log(data);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const SampleBook = {
    BookName: "The simple Success",
    Author: "Khaleesi Khan",
    Price: "200",
    Description:
      "Wikipedia Books was first rolled out in 2009. It comprised two main parts:The Book Creator user interface, for designing the book and for selecting an electronic format to render an individual copy as an e-book.The Offline Content Generator (OCG) back-end service, which rendered the book in the chosen format and made it available for download. But Wikipedia does not print books or handle ordering, as that costs money. An agreement was reached with PediaPress, who built their own renderer and publishing website, where a user could upload a Wikipedia book and either download a PDF softcopy for free or order Print on demand copies. PediaPress later withdrew their free softcopy service.2017: On-wiki PDF withdrawal Eventually the OCG service became outdated and unmaintainable. It became unreliable, while bugs and evolving security issues could no longer be fixed. The Wikimedia Foundation turned off the book rendering service on all Wikimedia wikis in October 2017. Since then, Wikipedia books have only been available from third-party providers. 2017 ff: Candidate replacements A candidate replacement, called Electron, was based on the open-source Chrome HTML-to-PDF rendering engine but proved unsuitable for books, although it replaced the OCG for the PDF download of single articles. A second attempt, named Proton, also failed at book rendering but succeeded Electron for article rendering in 2019. During this period Dirk Hünniger independently wrote MediaWiki2LaTeX, which also compiles Wikipedia books in PDF format. However the Wikimedia Foundation were reluctant to adopt it because they could not support the Haskell programming language in which it is written. It has since been improved and offered by the WikiMedia Foundation (WMF) as an online service.",
    Pages: "300",
    ISBN_NO: "PUB978-606-722-456-6",
    BookCoverImage: Book003,
  };

  return (
    <Router>
      <main>
        <NavBar handleOpen={handleOpen} handleClose={handleClose} />
        <ModalUI open={open} handleOpen={handleOpen} handleClose={handleClose}>
          <AuthForm handleClose={handleClose} />
        </ModalUI>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/Create">
            <CreateBook />
          </Route>
          <Route path="/Profile">
            <Dashboard />
          </Route>
          <Route path={`/Post/:PostId`}>
            <BookFrontPage Book={SampleBook} />
          </Route>
          <Route path="/Review/:ReviewId">
            <MyBook/>
          </Route>
          <Route path="/ReviewPost/:ReviewPostId">
            <ForReviewPage />
          </Route>
          <Route path="*"></Route>
        </Switch>
        <Footer />
      </main>
    </Router>
  );
};
export default App;
