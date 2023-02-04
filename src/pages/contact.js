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
    <Grid
      id="Contact"
      className="Work-container"
      xs={12}
      sm={12}
      md={7}
      lg={7}
      mdoffset={2.5}
      lgoffset={2.5}
    >
      <h2 className="special-text header-text hidden">Contact</h2>
      <br />
      <Grid id="contactForm" className="preview-list" columnGap={6} rowGap={2}>
        <a href="mailto:quinnhipp1@gmail.com">Send email</a>
        {/* <Form onSubmit={handleOnSubmit}>
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
        </Form> */}
        {/* <Grid className="special-text text">Email: quinnhipp1@gmail.com</Grid> */}
      </Grid>
    </Grid>
  );
}
