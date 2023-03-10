import React from 'react'
import { Table } from 'antd';

function Tables() {
    
    const columns = [
     
      {
        title: 'Attribute',
        className: 'scoring-table-data',
        dataIndex: 'attribute',
        align: 'center',
      },
      {
        title: 'Score',
        dataIndex: 'score',
        align: 'center',
      },
    ];
    
    const data = [
      {
    key: '1',
    attribute: 'Outstanding',
    score: '5',
    className:'scoring-table-data',
  },
  {
    key: '2',
    attribute: 'Exceed Requirements',
    score: '4',
    className:'scoring-table-data',
  },
  {
    key: '3',
    attribute: 'Meets Requirements',
    score: '3',
    className:'scoring-table-data',
  },
  {
    key: '4',
    attribute: 'Need Improvement',
    score: '2',
    className:'scoring-table-data',
  },
  {
    key: '5',
    attribute: 'Unsatisfactory',
    score: '1',
    className:'scoring-table-data',
  },
    ];
    return(
      <Table
        columns={columns}
        dataSource={data}
        bordered
        title={() => 'Scoring System'}
        pagination={false}
        style={{margin:"50px"}}
      />
    );
}

export default Tables