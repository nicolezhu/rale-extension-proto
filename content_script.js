jQuery.fn.css = (function(css2) { 
    return function() {
        if (arguments.length) { return css2.apply(this, arguments); }
        var attr = ['font-family','font-size','font-weight','font-style','color',
            'text-transform','text-decoration','letter-spacing','word-spacing',
            'line-height','text-align','vertical-align','direction','background-color',
            'background-image','background-repeat','background-position',
            'background-attachment','opacity','width','height','top','right','bottom',
            'left','margin-top','margin-right','margin-bottom','margin-left',
            'padding-top','padding-right','padding-bottom','padding-left',
            'border-top-width','border-right-width','border-bottom-width',
            'border-left-width','border-top-color','border-right-color',
            'border-bottom-color','border-left-color','border-top-style',
            'border-right-style','border-bottom-style','border-left-style','position',
            'display','visibility','z-index','overflow-x','overflow-y','white-space',
            'clip','float','clear','cursor','list-style-image','list-style-position',
            'list-style-type','marker-offset'];
        var len = attr.length, obj = {};
        for (var i = 0; i < len; i++) {
            obj[attr[i]] = css2.call(this, attr[i]);
        }
        return obj;
    };
})(jQuery.fn.css);

$(document).ready(function() {
    // tested on Amazon.com and Twitter.com (for now)
	console.log('loaded');

    // use jquery find function to find any divs containing classes or ids that contain 'bar' or 'nav'
    var div_class = $('body').find($('div[class*="bar"'));
    var div_id = $('body').find($('div[id*="nav"'));
    var results = $.merge(div_class, div_id);

    // since navbar is typically one of the first elements in the document, return the first element
    console.log(results[0]);
    console.log($(results[0]).css());
});