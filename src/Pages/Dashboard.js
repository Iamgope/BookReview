import { Fragment } from "react";
import ProfileDetails from "../components/Profile/ProfileDetails";
import TogglePosts from "../components/Profile/TogglePosts";

const Dashboard = () => {
  // useEffect(() => {
  //   const token = localStorage.getItem("access_token");
  //   const api = `http://127.0.0.1:8000/auth/user/`;

  //   axios
  //     .get(api, { headers: { Authorization: `Bearer ${token}` } })
  //     .then((res) => {
  //       console.log(res.data);
  //       setMyName(res.data.username)
  //     });
  // }, []);

  return (
    <Fragment>
      <ProfileDetails />
      <TogglePosts />
    </Fragment>
  );
};
export default Dashboard;
