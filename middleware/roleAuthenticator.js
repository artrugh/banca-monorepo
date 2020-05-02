// set the Administrator which is a middleware function
module.exports = roleAuthenticator = async (req, res, next) => {

  const role = await req.user.role;

  // if the role is not Admin return an error otherwise next()
  if (role !== "Admin") throw new createError(401);
  next();

};