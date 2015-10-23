var tape = require("tape"),
    getMarkupWrap = require("..");


tape("getMarkupWrap(nodeName : String) should return null if nodeName should not be wraped array helper if needed", function(assert) {
    assert.deepEqual(getMarkupWrap("area"), null);
    assert.deepEqual(getMarkupWrap("circle"), [1, "<svg>", "</svg>"]);
    assert.end();
});
