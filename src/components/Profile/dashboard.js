import { useState, useEffect } from "react";
import axios from "axios";

const Dashboard = () => {
  const [MyName, setMyName] = useState("Gope");
  useEffect(() => {
    const token = localStorage.getItem("access_token");
    const api = `http://127.0.0.1:8000/auth/user/`;

    axios
      .get(api, { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => {
        console.log(res.data);
        setMyName(res.data.username)
      });
  }, []);
  return <h1>{MyName}</h1>;
};
export default Dashboard;
