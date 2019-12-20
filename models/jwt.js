const jwt = require('jsonwebtoken');
const secret = 'abc';
function Jwt(data) {
    this.id = data
    this.secretOrPrivateKey = 'suiyikey'
    this.generateToken=function() {
        let content = this.id
        let token = jwt.sign({
            id: content,
        }, this.secretOrPrivateKey, {
            expiresIn: 60 * 60 * 12  // 12小时过期
        });
        return token
    }
}
module.exports = Jwt;
