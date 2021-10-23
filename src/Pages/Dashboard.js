import { Fragment } from "react";
import ProfileDetails from "../components/Profile/ProfileDetails";
import TogglePosts from "../components/Profile/TogglePosts";
import { useSelector } from "react-redux";

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
  //dispatch(authActions.setAccount( data ));
  //console.log(data)
  //console.log(data);
  const Userdata = useSelector((state) => state.auth.account);
  ///console
  return (
    <Fragment>
      <ProfileDetails userName={Userdata ? Userdata.username : ""} />
      <TogglePosts userId={Userdata?Userdata.id:""}/>
    </Fragment>
  );
};
export default Dashboard;
