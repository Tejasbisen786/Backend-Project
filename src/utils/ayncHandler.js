const asyncHandler = (requestHandler) => {
  (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
  };
};




export { asyncHandler };







// const ayncHandler =()=>{}
// const ayncHandler =(func)=>()=>{}
// const ayncHandler =(func)=> async()=>{}

// const asyncHandler = (fn) => async (req, res, next) => {
//   try {
//     await fn(req, res, next);
//   } catch (error) {
//     // console.log("Eror", error);
//     res.status(err.code || 500).json({ success: false, message: err.message });
//   }
// };
