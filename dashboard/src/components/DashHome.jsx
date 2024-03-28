import { Container, Box, Typography } from "@mui/material";

import React from "react";


const Homepage = () => {
  return (
    <div>

<Container maxWidth="sm">
  <Typography 
  sx={{display: "flex", justifyContent: "center", fontSize: "100px", width: "max-content", fontFamily: "Didot", mt: "20px"}}
  >Blind People</Typography>
</Container>
<Container> 
  <Box sx={{display: "flex", justifyContent: "center", fontSize: "50px", width: "max-content", fontFamily: "Didot", mt: "20px"}}>Blind peopplez</Box>
</Container>

</div>



  );
};

export default Homepage;
