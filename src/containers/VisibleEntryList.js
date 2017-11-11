import { connect } from 'react-redux';

import EntryList from '../components/EntryList';


const mapStateToProps = state => {
  return {
    entries: state.entries,
  };
}


const mapDispatchToProps = dispatch => {
  return {};
}


const VisibleEntryList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(EntryList);

export default VisibleEntryList;
