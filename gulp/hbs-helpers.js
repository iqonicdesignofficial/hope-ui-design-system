const handlebars = require('handlebars')

handlebars.registerHelper('compare', function (lvalue, operator, rvalue, options) {
    
    if (arguments.length < 3) {
        throw new Error("Handlerbars Helper 'compare' needs 2 parameters");
    }
    
    if (options === undefined) {
        options = rvalue;
        rvalue = operator;
        operator = "===";
    }
    
    let operators = {
        '==': function (l, r) { return l == r; },
        '===': function (l, r) { return l === r; },
        '!=': function (l, r) { return l != r; },
        '!==': function (l, r) { return l !== r; },
        '<': function (l, r) { return l < r; },
        '>': function (l, r) { return l > r; },
        '<=': function (l, r) { return l <= r; },
        '>=': function (l, r) { return l >= r; },
        'typeof': function (l, r) { return typeof l == r; }
    };
    
    if (!operators[operator]) {
        throw new Error("Handlerbars Helper 'compare' doesn't know the operator " + operator);
    }
    
    const result = operators[operator](lvalue, rvalue);
    
    if (result) {
        return options.fn(this);
    } else {
        return options.inverse(this);
    }
});

handlebars.registerHelper('inArray', function (val, arr, options) {
    arr = arr || [];
    var len = arr.length;
    var i;
    for (i = 0; i < len; i++) {
        if (arr[i] === val) {
            return options.fn(this);
        }
    }
    return options.inverse(this);
});

handlebars.registerHelper('outArray', function (val, arr, options) {
    arr = arr || [];
    var len = arr.length;
    var i;
    for (i = 0; i < len; i++) {
        if (arr[i] === val) {
            return options.inverse(this);       
        }
    }
    return options.fn(this);
});
