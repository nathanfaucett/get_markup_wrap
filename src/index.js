var has = require("@nathanfaucett/has"),
    supports = require("@nathanfaucett/supports"),
    environment = require("@nathanfaucett/environment");


var dummyNode = supports.dom ? environment.document.createElement("div") : null,

    shouldWrap = {
        "circle": true,
        "defs": true,
        "ellipse": true,
        "g": true,
        "line": true,
        "linearGradient": true,
        "path": true,
        "polygon": true,
        "polyline": true,
        "radialGradient": true,
        "rect": true,
        "stop": true,
        "text": true
    },

    selectWrap = [1, "<select multiple=\"true\">", "</select>"],
    tableWrap = [1, "<table>", "</table>"],
    trWrap = [3, "<table><tbody><tr>", "</tr></tbody></table>"],

    svgWrap = [1, "<svg>", "</svg>"],

    markupWrap = {
        "*": [1, "?<div>", "</div>"],

        "area": [1, "<map>", "</map>"],
        "col": [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        "legend": [1, "<fieldset>", "</fieldset>"],
        "param": [1, "<object>", "</object>"],
        "tr": [2, "<table><tbody>", "</tbody></table>"],

        "optgroup": selectWrap,
        "option": selectWrap,

        "caption": tableWrap,
        "colgroup": tableWrap,
        "tbody": tableWrap,
        "tfoot": tableWrap,
        "thead": tableWrap,

        "td": trWrap,
        "th": trWrap,

        "circle": svgWrap,
        "defs": svgWrap,
        "ellipse": svgWrap,
        "g": svgWrap,
        "line": svgWrap,
        "linearGradient": svgWrap,
        "path": svgWrap,
        "polygon": svgWrap,
        "polyline": svgWrap,
        "radialGradient": svgWrap,
        "rect": svgWrap,
        "stop": svgWrap,
        "text": svgWrap
    };


module.exports = getMarkupWrap;


function getMarkupWrap(nodeName) {
    if (dummyNode) {
        if (!has(markupWrap, nodeName)) {
            nodeName = "*";
        }

        if (!has(shouldWrap, nodeName)) {
            if (nodeName === "*") {
                dummyNode.innerHTML = "<link />";
            } else {
                dummyNode.innerHTML = "<" + nodeName + "></" + nodeName + ">";
            }
            shouldWrap[nodeName] = !dummyNode.firstChild;
        }

        return shouldWrap[nodeName] ? markupWrap[nodeName] : null;
    } else {
        throw new Error("Markup wrapping node not initialized");
    }
}
