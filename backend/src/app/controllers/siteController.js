const Beverage = require('../models/beverage');
const { multipleMongooseToObject} = require('../../utils/mongoose.util');

class SiteController {
    // [GET] /
    index(req, res, next) {
        Beverage.find({})
            .then(books => {
                res.send({Beverages: multipleMongooseToObject(Beverages)});
            })
            .catch(next)
    }
}

module.exports = new SiteController;