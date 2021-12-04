import Avatar from "@mui/material/Avatar";
import { Card, Typography, Box } from "@mui/material";
export const InfoCard = (props) => {
  const A = props.A;
  const B = props.B;
  return (
    <Card
      sx={{
        padding: "2%",
        marginInline: "3%",
        maxWidth: 300,
        textAlign: "center",
      }}
    >
      <h1>{A}</h1>
      <p>{B}</p>
    </Card>
  );
};

const ProfileDetails = (props) => {
  const UserName = props.userName;
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        marginTop: "5%",
      }}
    >
      <Avatar
        sx={{
          width: "14vw",
          height: "14vw",
          marginInline: "2vw",
          marginTop: "1%",
        }}
      >
        <h1>{UserName ? UserName[0] : ""}</h1>
      </Avatar>
      <Box sx={{ marginInline: "5vw" }}>
        <Typography variant="h4">{UserName}</Typography>
        <div style={{ display: "flex", marginTop: "5%" }}>
          <InfoCard A={+props.MyPosts} B={"Books Posted"} />
          <InfoCard A={+props.MySubscribedPosts} B={"To Be Reviewd"} />
          <InfoCard A={+props.MyReviewedPosts} B={"Books Reviewd "} />
        </div>
      </Box>
    </div>
  );
};
export default ProfileDetails;
