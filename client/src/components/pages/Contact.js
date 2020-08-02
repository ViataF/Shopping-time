import React from "react";
import "./Contact.css";

export default class ContactUs extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: "",
    };
  }

  render() {
    const { status } = this.state;
    return (
      <div className="contactForm">
        <section className="contactus">
          <h2 className="contact">Talk to us</h2>
          <form
            onSubmit={this.submitForm}
            action="https://formspree.io/mzbjyweq"
            method="POST"
          >
            <label>Name:</label>
            <input type="text" name="name" required />
            <label>Email:</label>
            <input type="email" name="email" required />
            <label>Message:</label>
            <input type="text" name="message" required />
            {status === "SUCCESS" ? (
              <p>Thanks! Message has been sent.</p>
            ) : (
              <button className="btn">Submit</button>
            )}
            {status === "ERROR" && (
              <p>Ooops! There was an error. Try again later.</p>
            )}
          </form>
          <h3>Find us </h3>
          <span>
            <a
              target="__blank"
              href="https://github.com/ViataF"
              className="waves-effect waves-light btn-large  grey darken-3"
            >
              <i className="fa fa-github" /> Github account
            </a>
            <a
              target="__blank"
              href="https://za.linkedin.com/in/viata-fredericks-2580151ab"
              className="waves-effect waves-light btn-large  light-blue darken-4 "
            >
              <i className="fa fa-linkedin" /> Linkedin account
            </a>
            <a
              target="__blank"
              href="mailto:viataruth@gmail.com"
              className="waves-effect waves-light btn-large  deep-orange darken-3"
            >
              <i className="fa fa-google" /> Gmail account
            </a>
          </span>
        </section>
      </div>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}
