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
    const NotebookModalStyle = {
      overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(237, 237, 237, 0.75)'
      },
      content: {
        position: 'fixed',
        width: '400px',
        height: '300px',
        top: '40%',
        left: '50%',
        bottom: 'auto',
        right: 'auto',
        borderRadius: '10px',
        transform: 'translate(-50%,-50%)',
        boxShadow: '1px 1px 2px black',
        overflow: 'hidden'
      }
    };

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
            style={NotebookModalStyle}
            contentLabel="Create notebook modal">

            <CreateNotebookContainer
              closeModal={this.closeNotebookModal} />
          </Modal>


        </div>

      </div>

    );
  }

}

export default NotebooksIndex;
