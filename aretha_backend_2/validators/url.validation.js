const { param, body } = require('express-validator');
const { validator } = require('./validator');


const getUrlByName  = [
    param('nama').isLength({min: 8}),
    validator
]
const getUrlByPhoneEmail = [
    param('telepon').isLength({min: 12}),
    param('email').isLength({min: 8}),
    validator
]
const insertUrl =  [
    body('nama').isLength({min: 8}),
    body('jenis_kelamin').isIn(['L','P']),
    body('angkatan').isNumeric({gt : 2018}),
    body('email').isEmail(),
    body('telepon').isLength({min: 12}),
    body('deskripsi').not().isEmpty(),
    validator
]

const deleteUrl = [
    body('email').isEmail(),
    validator
]

const updateUrl = [
    body('deskripsi').isLength({min: 5}),
    body('nama').isLength({min: 5}),
    validator
]

module.exports = {
    getUrlByName,
    getUrlByPhoneEmail,
    insertUrl,
    deleteUrl,
    updateUrl
}
