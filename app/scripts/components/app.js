import React from 'react';

import Header from './header.js';
import Nav from './nav.js';
import Record from './record.js';

export default React.createClass({
  render() {
    let main = <Record/>
    return (
      <div>
        <Header />
        <Nav />
        {main}
      </div>
    )
  }
});
