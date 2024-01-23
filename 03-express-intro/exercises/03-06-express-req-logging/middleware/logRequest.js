export function logRequest() {
  // return as a callback function with req,res,next inside
  return (req, res, next) => {
    res.on("finish", () => {
      console.log(new Date(), req.method, req.url, res.statusCode);
    });
    next();
  };
}
