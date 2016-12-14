import React from 'react';

class CreateNotebookModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: ""
    };

    this.update = this.update.bind(this);
    this.submitHandler = this.submitHandler.bind(this);

  }

  update(field) {
    return (e) => {
      this.setState({ error: "" });
      this.setState({ [field]: e.currentTarget.value });
    };
  }

  submitHandler(e) {
    e.preventDefault();
    if(this.state.title === "") {
      this.setState({ error: "Please enter a title"});
    } else {
      const notebook = {
        title: this.state.title,
        description: this.state.description
      };
      this.props.createNotebook(notebook);
      this.props.closeModal();
      this.props.closeDrawer();
      
    }
  }

  render() {
    return(
      <div className="notebook-form-container">
        <form onSubmit={this.submitHandler} className="notebook-form">
          <div className="notebook-form-label">CREATE NOTEBOOK</div>
          <div className="notebook-form-error">{ this.state.error }</div>

          <input type="text"
            placeholder="Title your notebook"
            value={this.state.title}
            onChange={this.update("title")}
            className="notebook-form-title" />

          <input className="notebook-form-submit" type="submit" value="Create notebook"/>
        </form>
      </div>
    );
  }
}

export default CreateNotebookModal;
