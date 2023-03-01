const myfunc = function myfunc(params) {
  const response = {
    statusCode: 200,
    body: JSON.stringify('Hello froma live demo!, not lambda! Now we\'re parsing node_modules!'),
  };
  return response;
};

module.exports = myfunc
