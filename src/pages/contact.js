import Grid from "@mui/material/Grid";
import emailjs from "emailjs-com";
import { Form, Input, TextArea, Button } from "semantic-ui-react";
import Swal from "sweetalert2";

const SERVICE_ID = "service_2vv2yi1";
const TEMPLATE_ID = "template_91724ha";
const USER_ID = "ZRbEHWxW8gTx4Z2lj";

export default function () {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID).then(
      (result) => {
        console.log(result.text);
        Swal.fire({
          icon: "success",
          title: "Message Sent Successfully",
        });
      },
      (error) => {
        console.log(error.text);
        Swal.fire({
          icon: "error",
          title: "Ooops, something went wrong",
          text: error.text,
        });
      }
    );
    e.target.reset();
  };
  return (
    <Grid id="Contact" className="work-container">
      <h2 className="special-text header-text">Contact</h2>
      <Grid container columnGap={6}>
        <Grid item xs={11} sm={11} md={7} lg={7}>
          <Form onSubmit={handleOnSubmit}>
            <Form.Field
              id="form-input-control-email"
              control={Input}
              label="Email"
              name="from_email"
              placeholder="Email…"
              required
              icon="mail"
              iconPosition="left"
            />
            <Form.Field
              id="form-input-control-last-name"
              control={Input}
              label="Name"
              name="from_name"
              placeholder="Name…"
              required
              icon="user circle"
              iconPosition="left"
            />
            <Form.Field
              id="form-textarea-control-opinion"
              control={TextArea}
              label="Message"
              name="message"
              placeholder="Message…"
              required
            />
            <Button type="submit">Submit</Button>
          </Form>
        </Grid>
        <Grid item xs={11} sm={11} md={4} lg={4} className="special-text text">
          Email: quinnhipp1@gmail.com
        </Grid>
      </Grid>
    </Grid>
  );
}
