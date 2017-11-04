import { connect } from 'react-redux';

import EventList from '../components/EventList';


const mapStateToProps = state => {
  return {
    events: state.events,
  };
}


const mapDispatchToProps = dispatch => {
  return {};
}


const VisibleEventList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(EventList);

export default VisibleEventList;
