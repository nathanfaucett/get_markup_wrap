var assert = require("assert"),
    Browser = require("zombie"),
    getMarkupWrap;


describe("getMarkupWrap(nodeName : String)", function() {
    before(function(done) {
        Browser.visit("http://localhost", function(e, browser) {
            global.window = browser.window;
            global.document = browser.window.document;
            getMarkupWrap = require("../src/index");
            done();
        });
    });

    it("should return null if nodeName should not be wraped array helper if needed", function() {
        assert.deepEqual(getMarkupWrap("area"), null);
        assert.deepEqual(getMarkupWrap("circle"), [1, "<svg>", "</svg>"]);
    });
});
