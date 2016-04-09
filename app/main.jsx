console.log('Hello From JSX!');
var React = require('react/addons');
var GroceryItemList = require('./components/GroceryItemList.jsx');

var initial = [{
                  name : "Ice Cream"
              },
              {
                  name : "Waffles"
              },
              {
                  name : "Candy",
                  purchased : true
              },
              {
                  name : "Snarks",
                  purchased : true
              }
              ];

React.render(<GroceryItemList items = {initial} />, app);
