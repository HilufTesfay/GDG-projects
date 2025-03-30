/*THis function changes function to middleware and handle any possible promise error 
 
*/
const handle_promise_error = async (func) => (req, res, next) => {
  Promise.resolve(func(req, res, next)).catch((error) => next(error));
};

export default handle_promise_error;
