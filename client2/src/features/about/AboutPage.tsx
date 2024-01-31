import {
  Alert,
  AlertTitle,
  Button,
  ButtonGroup,
  Card,
  CardContent,
  Container,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import agent from "../../app/api/agent";
import { useState } from "react";

export default function AboutPage() {
  const [validationError, setValidationErrors] = useState<string[]>([]);

  function getValidationError() {
    agent.TestErrors.getValidationError()
      .then(() => console.log("should not see this"))
      .catch((error) => setValidationErrors(error));
  }

  return (
    <Container>
      {/* <Typography gutterBottom variant="h2">
        Errors for testing purposes
      </Typography>
      <ButtonGroup fullWidth>
        <Button
          variant="contained"
          onClick={() =>
            agent.TestErrors.get400Error().catch((error) => console.log(error))
          }
        >
          Test 400 error
        </Button>
        <Button
          variant="contained"
          onClick={() =>
            agent.TestErrors.get401Error().catch((error) => console.log(error))
          }
        >
          Test 401 error
        </Button>
        <Button
          variant="contained"
          onClick={() =>
            agent.TestErrors.get404Error().catch((error) => console.log(error))
          }
        >
          Test 404 error
        </Button>
        <Button
          variant="contained"
          onClick={() =>
            agent.TestErrors.get500Error().catch((error) => console.log(error))
          }
        >
          Test 500 error
        </Button>

        <Button variant="contained" onClick={getValidationError}>
          Test Validation error
        </Button>
      </ButtonGroup>
      {validationError.length > 0 && (
        <Alert severity="error">
          <AlertTitle>Validation Error</AlertTitle>

          <List>
            {validationError.map((error) => (
              <ListItem key={error}>
                <ListItemText>{error}</ListItemText>
              </ListItem>
            ))}
          </List>
        </Alert>
      )} */}
      <Typography variant="h2" gutterBottom>
        About Us
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Card>
            <CardContent>
              <Typography variant="h4" gutterBottom>
                Our Mission
              </Typography>
              <Typography variant="body1">
                Our mission at E-comm is to redefine online shopping, providing
                a curated selection of premium products that enhance our
                customers' lives. We strive to be more than just a marketplace;
                we aspire to be a trusted partner in our customers' journey
                towards a better lifestyle. With a relentless focus on quality,
                innovation, and customer satisfaction, we aim to exceed
                expectations at every turn. Our commitment to excellence extends
                beyond the products we offer; it encompasses every aspect of the
                shopping experience, from intuitive navigation to personalized
                support.<br></br> By fostering a community built on trust,
                transparency, and mutual respect, we endeavor to create a
                shopping destination where every interaction leaves a lasting
                impression. Join us on our mission to elevate the online
                shopping experience and empower individuals to discover,
                indulge, and thrive in a world of endless possibilities.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card>
            <CardContent>
              <Typography variant="h4" gutterBottom>
                Our Vision
              </Typography>
              <Typography variant="body1">
                Our vision at E-comm is to be the premier destination for online
                shopping, setting new standards of excellence and innovation in
                the digital marketplace. We envision a future where every
                customer interaction is infused with seamless convenience,
                unparalleled choice, and unmatched value. With a relentless
                pursuit of perfection, we strive to anticipate and exceed the
                evolving needs and desires of our diverse customer base. Our
                vision extends beyond transactional excellence.<br></br> we
                aspire to build meaningful connections, foster community
                engagement, and inspire positive change in the lives of our
                customers and beyond. By harnessing the power of technology,
                data-driven insights, and human-centric design, we aim to create
                a dynamic and inclusive platform that empowers individuals to
                explore, discover, and indulge in a world of limitless
                possibilities. Join us as we embark on a journey to shape the
                future of e-commerce, one visionary step at a time..
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
