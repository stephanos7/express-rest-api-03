const passportJwt = require('passport-jwt');
const ExtractJwt  = passportJwt.ExtractJwt;

let jwtOptions = {};

jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeader();
jwtOptions.secretOrKey = '1r0nhack';

module.exports = jwtOptions;