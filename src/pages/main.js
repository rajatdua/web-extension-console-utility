(function () {
  var log = console.log;
  console.log = function () {
    log.call(this, 'My Console!!!', ...arguments);
  };
}());
