const crypto = require('cryptp');
exports.md5 = str => {
    return crypto.createHash('md5').update(str).digest('hex');
}