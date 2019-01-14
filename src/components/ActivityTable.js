import React from 'react';
import PropTypes from 'prop-types';
import ReactTable from 'react-table';
import moment from 'moment';

import "react-table/react-table.css";

const ActivityTable = (props) => {
  return (
    <div>
      <ReactTable
        data={props.activities}
        columns={[
          {
            Header: "Type",
            accessor: "type",
          },
          {
            Header: "Start",
            accessor: "start",
            Cell: props => <span>{moment(props.value).format("YYYY-MM-DD HH:mm:ss")}</span>
          },
          {
            Header: "End",
            accessor: "end",
            Cell: props => <span>{moment(props.value).format("YYYY-MM-DD HH:mm:ss")}</span>
          },
        ]}
        defaultPageSize={10}
        className="-stripped -highlight"
      />
    </div>
  );
};


ActivityTable.propTypes = {
  activities: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.string,
    start: PropTypes.instanceOf(Date),
    end: PropTypes.instanceOf(Date),
  })).isRequired,
};

export default ActivityTable;
