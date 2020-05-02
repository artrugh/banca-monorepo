const { body, validationResult } = require('express-validator');

const userValidationRules = () => [
    body('email')
        .notEmpty()
        .withMessage('Ingrese su email')
        .bail()
        .isLowercase()
        .withMessage('Ingrese su email en minúsculas')
        .bail()
        .isEmail()
        .normalizeEmail()
        .withMessage('Ingrese correctamente su email'),

    body('password')
        .isLength({ min: 6 })
        .withMessage('La contraseña debe tener al menos 6 caracteres'),
    body('name')
        .trim()
];

const userValidationEmail = () => [
    body('email')
        .notEmpty()
        .withMessage('Ingrese su email')
        .bail()
        .isLowercase()
        .withMessage('Ingrese su email en minúsculas')
        .bail()
        .isEmail()
        .normalizeEmail()
        .withMessage('Ingrese correctamente su email'),
    body('name')
        .trim()
];

const userValidationNewPassword = () => [
    body('password')
        .exists()
        .notEmpty()
        .withMessage('Ingresa tu contraseña'),
    body('new_password')
        .if(body('new_password').notEmpty())
        .not()
        .custom(value => value.length < 5)
        .withMessage('La nueva contraseña debe tener al menos 6 caracteres'),
];

const userValidationErrorHandling = (req, res, next) => {

    const errors = validationResult(req);

    if (errors.isEmpty()) {
        return next();
    }
    res.status(422).json({ errors: errors.array() });
};

module.exports = {
    userValidationNewPassword,
    userValidationEmail,
    userValidationRules,
    userValidationErrorHandling
};