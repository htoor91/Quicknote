import React from 'react';
import { Link, hashHistory } from 'react-router';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        username: "",
        password: "",
        userErrors: "",
        passErrors: "",
        credsErrors: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);

  }

  componentDidUpdate() {
    if (this.props.loggedIn) {
      hashHistory.push("/");
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = { user: { username: this.state.username, password: this.state.password } };
    this.props.processForm(user);

    if (this.state.username === "" && this.props.formType !== "Log In:"){
      this.setState( {
        userErrors: "Username can't be blank"
      });
    } else {
      this.setState( {
        userErrors: ""
      });
    }

    if (this.state.password.length < 6 && this.props.formType !== "Log In:") {
      this.setState( {
        passErrors: "Password must be at least 6 characters long"
      });
    } else {
      this.setState( {
        passErrors: ""
      });
    }

  }

  handleChange(field) {
    return (event) => {
      this.setState({
        [field]: event.currentTarget.value
      });
    };
  }

  renderErrors() {

    const errors = () => {
      return this.props.errors.map((error, i) => {
        return(
          <li key={`error-${i}`}>{error}</li>
        );
      });
    };

    if (this.props.formType === "Log In:"){
      return(
        <ul className="top-errors">
          { errors() }
        </ul>
      );
    } else {
      return;
    }
	}

  clearForm() {
    this.setState( {
      username: "",
      password: ""
    });
  }


  render() {

    return (
      <div className="login-form">

        { this.renderErrors() }
        <form onSubmit={ this.handleSubmit }>

          <li className="top-error">{ this.state.credsError }</li>
          <fieldset>
            <label>
              <input type="text" onChange={ this.handleChange("username") }
                value={ this.state.username }
                placeholder="Username"/>
              <li>{ this.state.userErrors }</li>
            </label>
            <label>
              <input type="password" onChange={ this.handleChange("password") }
                value={ this.state.password }
                placeholder="Password"/>
              <li className="passErrors">{ this.state.passErrors }</li>
            </label>
          </fieldset>
          <br/>
          <br/>
          <input type="submit" value={ this.props.buttonVal } />
        </form>
      </div>
    );
  }

}

export default SessionForm;
