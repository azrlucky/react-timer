var React = require('react');
var Nav = require('./Nav');

var Main = (props) => {
  return(
    <div>
      <div className="">
          <Nav/>
          <p>Main component rendered.</p>
          {props.children}
      </div>
    </div>
  );
};

module.exports = Main;
