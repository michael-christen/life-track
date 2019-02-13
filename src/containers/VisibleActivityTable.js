import { connect } from 'react-redux';

import ActivityTable from '../components/ActivityTable';


const mapStateToProps = state => {
  return {
    activities: state.activities,
  };
}


const mapDispatchToProps = dispatch => {
  return {};
}


const VisibleActivityTable = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ActivityTable);

export default VisibleActivityTable;
