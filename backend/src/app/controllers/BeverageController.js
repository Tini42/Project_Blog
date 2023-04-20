const Beverage = require('../models/beverage');
const { mongooseToObject} = require('../../utils/mongoose.util');


class BeverageController {
 

// [POST] / admin insert beverage/
    menu(req, res, next) {
        const formData = req.body;
        const beverage = new Beverage(formData);
        beverage.save()
            .then(() => res.json({
                status: 200
            }))
            .catch(() => res.json({
                status: 500
            }));
    }

// [GET] /get in4 beverage to edit/
    edit(req, res, next) {      
        Beverage.findById(req.params.ID)
            .then(Beverages => {
                res.send(mongooseToObject (Beverages) )
            })
            .catch(next);
    }

 // [PUT] /books/:id
    update(req, res, next) {
        Beverage.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.json({
                status: 201
            }))
            .catch(() => res.json({
                status: 501
            }));
    }

    // [DELETE] /books/:id
    destroy(req, res, next) {
        Beverage.deleteOne({ _id: req.params.id })
            .then(() => res.send('DELETE SUCCESS!'))
            .catch(() => res.send('DELETE FAIL!'));
    }
}

module.exports = new BeverageController;