import { connect } from 'react-redux';
import CreateNotebookModal from './create_notebook';
import { createNotebook } from '../../../actions/notebook_actions';


const mapDispatchToProps = ( dispatch, ownProps ) => {
  return ({
    closeModal: ownProps.closeModal,
    createNotebook: (notebook) => dispatch(createNotebook(notebook))
  });
};


export default connect(
  null,
  mapDispatchToProps
)(CreateNotebookModal);
