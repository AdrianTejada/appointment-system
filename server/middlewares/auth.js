const jwt = require('jsonwebtoken');

module.exports = async = (req, res, next) => {
    try {
        const token = req.headers['authorization'].split(" ")[1];
        jwt.verify(token, process.env.JWT_SECRET, (err, decode) => {
            if (err) {
                return res.status(200).send({
                    message: err,
                    success: false
                })
            } else {
                // be careful with this lmao
                req.body.userId = decode.id;
                next();
            }
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({success: false, message: error.message});
    }
};