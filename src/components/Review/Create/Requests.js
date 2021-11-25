import { useState } from "react";
import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import axiosInstance from "../../Api/AxiosApi";
import { Colors } from "../../UI/colors";
export default function DataTable(props) {
 /// console.log(props.Requests);
  const [CurrentSelected, setCurrentSelected] = useState([]);
  //const [isLoading, setisLoading] = useState(false);
  const columns = [
    { field: "id", headerName: "id", width: 70 },
    { field: "S_No", headerName: "S.No", width: 70 },
    { field: "Name", headerName: "Name", width: 130 },
    //{ field: "lastName", headerName: "Last name", width: 130 },
    {
      field: "Age",
      headerName: "Age",
      type: "number",
      width: 90,
    },
    {
      field: "Sex",
      headerName: "Sex/gender",

      width: 150,
    },
    {
      field: "BooksReviewed",
      headerName: "BooksReviewed ",
      width: 150,
    },
  ];
  let rows = [];
  //console.log(props.Requests)
  const AproovedSubscription = props.Requests.filter(
    (req) => req.isAprooved === true
  ).length;
  const NotAprooved= props.Requests.filter((req) => req.isAprooved === false)
 NotAprooved.map(
    (Request, ind) =>
      (rows = [
        ...rows,
        {
          id: ind + 1,
          S_No: ind + 1,
          Name: Request.username,
          Sex: Request.Sex,
          BooksReviewed: Request.ReviewedPosts,
          Age: Request.Age,
        },
      ])
  );
  const onClickSelectedHandler = () => {
    ///console.log(CurrentSelected,'jj');
console.log(CurrentSelected)
    CurrentSelected.map((curr) =>
      axiosInstance
        .put(`/singleSubscription/${+curr.id}/`, { ...curr, isAprooved: true })
        .then((response) => console.log(response))
    );
  };
  return (
    <div
      style={{
        height: "60vh",
        width: "80%",
        margin: "auto",
        marginTop: "3%",
        marginBottom: "25ch",
      }}
    >
      <h3 style={{ color: Colors.NotDark }}>
        Aprooved Requests: {`${AproovedSubscription}`}
      </h3>
      <h3 style={{ color: Colors.NotDark }}>
        Current Requests: {`${+props.Requests.length - +AproovedSubscription}`}
      </h3>

      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        onSelectionModelChange={(itm) => {
          setCurrentSelected(
            rows
              .filter((row) => itm.find((it) => it === row.id))
              .map((row) => NotAprooved[row.id - 1])
          );
        }}
      />
      {CurrentSelected.length ? (
        <button onClick={onClickSelectedHandler}>ClickMe</button>
      ) : (
        ""
      )}
    </div>
  );
}
