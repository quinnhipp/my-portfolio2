import Grid from "@mui/material/Unstable_Grid2";
import BitmojiLaptop from "../assets/Quinn_Laptop_High.png";

export default function () {
  return (
    <Grid id="Home" className="App-header">
      <p className="large-text">
        Hello, my name is <span className="special-text">Quinn</span>
      </p>
      <img src={BitmojiLaptop} width="60%" />
    </Grid>
  );
}
