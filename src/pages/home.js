import Grid from "@mui/material/Unstable_Grid2";
import BitmojiLaptop from "../assets/Quinn_Laptop2.gif";

export default function () {
  return (
    <Grid
      id="Home"
      className="App-header"
      xs={12}
      sm={12}
      md={7}
      lg={7}
      mdoffset={2.5}
      lgoffset={2.5}
    >
      <p className="large-text center-text">
        Hello, my name is <span className="special-text">Quinn</span> and I am a{" "}
        <span className="special-text">software developer</span>
      </p>
      <img src={BitmojiLaptop} width="60%" />
    </Grid>
  );
}
