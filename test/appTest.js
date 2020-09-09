const assert = require('chai').assert;
const app = require('../app');

describe('App', function() {
    it('app should return hello', function() {
        assert.equal(app.sayHello(), 'hello');
    });

    it('app sayhello should return string', function() {
        assert.typeOf(app.sayHello(), 'string');
    });

    it('app should return 6', function() {
        assert.equal(app.addNumbers(2, 4), 6)
    });
    it('app should return 5', function() {
        assert.isAbove(app.addNumbers(3, 7), 5)
    });
});



