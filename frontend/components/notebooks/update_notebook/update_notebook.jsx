import React from 'react';

class UpdateNotebookModal extends React.Component {
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
        description: this.state.description,
        id: this.props.currentNotebook.id
      };
      debugger
      this.props.updateNotebook(notebook);
      this.props.closeModal();
      this.props.fetchNotebooks();

    }
  }

  render() {
    return(
      <div className="notebook-form-container">
        <form onSubmit={this.submitHandler} className="notebook-form">
          <div className="notebook-form-label">UPDATE NOTEBOOK</div>
          <div className="notebook-form-error">{ this.state.error }</div>

          <input type="text"
            placeholder={this.props.notebookTitle}
            value={this.state.title}
            onChange={this.update("title")}
            className="notebook-form-title" />
          <br/>

          <button
            className="create-cancel-button"
            onClick={ this.props.closeModal }>Cancel
          </button>
          <input className="notebook-form-submit" type="submit" value="Update notebook"/>
        </form>
      </div>
    );
  }
}

export default UpdateNotebookModal;
