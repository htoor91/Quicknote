import React from 'react';
import Modal from 'react-modal';
import NotebookIndexItemContainer from './notebooks_index_item/notebooks_index_item_container';
import CreateNotebookContainer from './create_notebook/create_notebook_container';


class NotebooksIndex extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      notebookModalOpen: false
    };

    this.openNotebookModal = this.openNotebookModal.bind(this);
    this.closeNotebookModal = this.closeNotebookModal.bind(this);
  }

  openNotebookModal() {
    this.setState({ notebookModalOpen: true });
  }

  closeNotebookModal() {
    this.setState({ notebookModalOpen: false });
  }

  renderNotebooks() {
    return(
      <ul className="notebook-item-list">
        {this.props.notebooks.map((notebook) => (
          <NotebookIndexItemContainer
            key={`notebook-${notebook.title}`}
            notebook={ notebook }
            closeDrawer={ this.props.closeNotebookDrawer } />
        ))}
      </ul>
    );
	}

  render() {

    return(
      <div className="drawer-index-container">
        <div className="drawer-index-header">
          <div className="drawer-index-title">
            NOTEBOOKS
          </div>

          <div className="notebook-add-container">
            <button
              className="notebook-add-button"
              onClick={ this.openNotebookModal }
            />
          </div>

          <div className="notebook-index-list">
            { this.renderNotebooks() }
          </div>

          <Modal
            isOpen={this.state.notebookModalOpen}
            onRequestClose={this.closeNotebookModal}
            overlayClassName="notebook-modals-overlay"
            className="notebook-modals"
            shouldCloseOnOverlayClick={false}
            contentLabel="Create notebook modal">

            <CreateNotebookContainer
              closeModal={this.closeNotebookModal}
              closeDrawer={this.props.closeNotebookDrawer}/>
          </Modal>


        </div>

      </div>

    );
  }

}

export default NotebooksIndex;
