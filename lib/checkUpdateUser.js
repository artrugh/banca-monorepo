// dependencies
const mongodb = require('mongodb');
const binary = mongodb.Binary;

exports.checkUpdateUser = async (req, res, next, user) => {

    try {

        Object.entries(req.body).map(entry => {

            // check if there is any match in the new form field and is not the password's field
            // check if the input field has been completed and 
            // if there isn't any new data, keep the old data
            if (user[entry[0]] && entry[0] !== "password") entry[1].length > 0 ?
                user[entry[0]] = entry[1] :
                user[entry[0]] = user[entry[0]]

            // new password never marchtes because is not part of the user data
            // chech if the length is longer than 0
            if (entry[0] === "new_password" && entry[1].length !== 0) user.password = entry[1]

        });

        // if a profile picture was stored
        if (req.files !== null) user.img = binary(req.files.uploadedFile.data);

        await user.save();

        const data = user.getPublicFields();

        res
            .status(200)
            .send(data);

    } catch (e) {
        next(e)
    }
};