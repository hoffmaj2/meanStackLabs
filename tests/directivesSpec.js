describe('ContactsApp', function(){

    // Load module that contains the directives
    beforeEach(module('ContactsApp'));

    // Load the templates
    beforeEach(module('views/nav.html', 'views/form-field.html'));

    var compile, scope, element, Contact;

    describe('navMenu', function(){

        beforeEach(inject(function($compile, $rootScope){
            compile = $compile;
            scope = $rootScope.$new();

            element = angular.element('<div><nav-menu></nav-menu></div>');

            compile(element)(scope);
            scope.$digest();
        }));

        it('should create a clickable list of links', function(){
            var menus = element.find('ul.navbar-nav');
            var items = menus.eq(0).find('li');
            var logout = menus.eq(1).find('li');

            expect(menus.length).toBe(2);

            expect(items.length).toBe(2);
            expect(items.eq(0).text()).toEqual('All Contacts');

            expect(logout.length).toBe(1);
            expect(logout.eq(0).text()).toEqual('Log Out');
        });

        it('should set active class on menu item', function(){
            var menus = element.find('ul.navbar-nav li');
            expect(menus.eq(0).hasClass('active')).toBe(false);
            scope.$apply(function(){
                scope.PAGE = 'all';
            });

            expect(menus.eq(0).hasClass('active')).toBe(true);
        });

    });
});