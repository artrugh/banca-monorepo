const bcrypt = require('bcryptjs');

//compare password
module.exports = compare = async (password, user) => {
    const isMatch = await bcrypt.compare(password, user.password);
    !isMatch && res.status(400).json({ errors: [{ msg: 'Acceso denegado' }] })
}