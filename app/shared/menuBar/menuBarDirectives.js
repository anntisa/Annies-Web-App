/**
 * Created by anntisa on 3/9/15.
 */



myAppControllers.directive('menuHeader', function () {
    return function (scope, element, attrs) {
        scope.$watch(attrs.menuHeader, function(v) {
            element.css({
                'background': '#545658',
                'text-align': 'center',
                'padding-top': '15px',
                'padding-bottom': '15px',
                'font-size': '25px',
                'text-shadow': '1px 1px 2px #333639'
            });
        });
    };
});

