import {
  Button,
  ButtonGroup,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../app/store/configureStore";
import { decrement, increment } from "./counterSlice";

export default function ContactPage() {
  const dispatch = useDispatch();
  const { data, title } = useAppSelector((state) => state.counter);

  return (
    <>
      {/* <Typography gutterBottom variant="h3">
        {title}
      </Typography>
      <Typography variant="h4">The data is: {data}</Typography>
      <ButtonGroup>
        <Button
          onClick={() => dispatch(decrement(1))}
          variant="contained"
          color="error"
        >
          Decrement
        </Button>
        <Button
          onClick={() => dispatch(increment(1))}
          variant="contained"
          color="primary"
        >
          Increment
        </Button>
        <Button
          onClick={() => dispatch(increment(5))}
          variant="contained"
          color="secondary"
        >
          Increment by 5
        </Button>
      // contact page from here
      </ButtonGroup> */}
      <Container>
        <Typography variant="h3" gutterBottom>
          Contact Us
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Paper style={{ padding: "20px", background: "#f0f0f0" }}>
              <Typography variant="h4" gutterBottom>
                Contact Information
              </Typography>
              <Typography variant="body1">
                #222 7th main 10th cross ,Becker's Street ,Electronic City
              </Typography>
              <Typography variant="body1">
                Banglore,Karnataka,India-560029
              </Typography>
              <Typography variant="body1">
                Email: info.ecomm@gmail.com
              </Typography>
              <Typography variant="body1">Phone: 123-456-7890</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper style={{ padding: "20px", background: "#f9f9f9" }}>
              <Typography variant="h4" gutterBottom>
                Send Us a Message
              </Typography>
              <form>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="name"
                      label="Your Name"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="email"
                      label="Your Email"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      multiline
                      rows={4}
                      id="message"
                      label="Message"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      fullWidth
                    >
                      Send Message
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
