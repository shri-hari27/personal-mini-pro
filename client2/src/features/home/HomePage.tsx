import { Container, Typography, Grid, Button } from "@mui/material";
import { Link } from "react-router-dom";
import eCommImage from "/Users/Lenovo/Desktop/ReStore/client2/public/homepagecart.jpg";

export default function HomePage() {
  return (
    <Container>
      <Typography variant="h2" align="center" gutterBottom>
        Welcome to E-Comm
      </Typography>
      <Typography variant="body1" align="center" paragraph>
        Explore our wide range of products and find exactly what you need.
      </Typography>
      <Grid container spacing={3} justifyContent="center" marginBottom="20px">
        <Grid item>
          <Button
            variant="contained"
            color="secondary"
            component={Link}
            to="/Catalog"
          >
            Shop Now
          </Button>
        </Grid>
      </Grid>
      <Grid container justifyContent="center">
        <Grid item>
          <img
            src={eCommImage}
            alt="E-Comm"
            style={{
              maxWidth: "30%",

              display: "block",
              margin: "auto",
            }}
          />
        </Grid>
      </Grid>
    </Container>
  );
}
