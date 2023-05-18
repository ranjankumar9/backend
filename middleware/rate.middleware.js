const rateLimit = require('express-rate-limit')

const ipLimit = rateLimit({
    windowMs: 15 * 60 * 1000, 
	max: 10, 
	message: "You can't make any more requests at the moment. Try again later",

})


module.exports = {
    ipLimit
}