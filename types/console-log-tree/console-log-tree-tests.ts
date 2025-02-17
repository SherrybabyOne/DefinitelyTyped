import logTree = require('console-log-tree');

// $ExpectType string
const treeString = logTree.parse([{
  name: 'Planets',
  children: [{
    name: 'Earth',
    children: [{
      name: 'Moon'
    }]
  }, {
    name: 'Venus'
  }]
}, {
  name: 'Empty Tree'
}]);

// $ExpectType void
logTree.log({
  name: 'My Tree'
});

// $ExpectError
logTree.log({});

// $ExpectError
logTree({ name: 'Hello' });
