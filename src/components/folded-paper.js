import React from 'react';
import ReactDOM from 'react-dom';
import SortableTree from 'react-sortable-tree';

export default class Tree extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      treeData: [{ title: 'Chicken', children: [ { title: 'Egg' } ] }],
    };
  }

  render() {
    return (
      <div style={{ height: 200 }}>
        <SortableTree
          treeData={this.state.treeData}
          onChange={treeData => this.setState({ treeData })}
        />
      </div>
    );
  }
}