const addNumber = function(options) {
  return function (req, res, next) {
    console.log(1 + options.number);
    next();
  }
};

module.exports = addNumber;
