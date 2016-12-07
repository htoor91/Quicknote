import React from 'react';
import { Link, hashHistory } from 'react-router';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        username: "",
        password: ""
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
    const user = { user: this.state };
    this.props.processForm(user);
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

		return(
			<ul>
        { errors() }
			</ul>
		);
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

        <h2>{ this.props.formType }</h2>
        { this.renderErrors() }
        <form onSubmit={ this.handleSubmit }>
          <label>Username:
            <input type="text" onChange={ this.handleChange("username") }
              value={ this.state.username } />
          </label>
          <br/>
          <br/>
          <label>Password:
            <input type="text" onChange={ this.handleChange("password") }
              value={ this.state.password } />
          </label>
          <br/>
          <br/>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }

}

export default SessionForm;
