describe('filter', function(){

    // Load module containing filter
    beforeEach(module('ContactsApp'));

    // Test suite for carmelCase filter
    describe('camelCase', function(){
        var carmelCaseFilter;

        // Inject $filter service and and use it to load carmelCase filter
        beforeEach(inject(function($filter) {
            carmelCaseFilter =  $filter('camelCase');
        }));

        // Writes specs for testing functionality of ca for 
        it('should leave camelCase strings unchanged', function(){
            expect(carmelCaseFilter('camelCase')).toEqual('camelCase');
            expect(carmelCaseFilter('PowerPoint')).toEqual('PowerPoint');
        });

        it('should convert multiple strings to carmelCase', function(){
            expect(carmelCaseFilter('Camel Case')).toEqual('camelCase');
        });

        it('should convert snake_case string to camelCase', function(){
            expect(carmelCaseFilter('snake_case')).toEqual('snakeCase');
        });
    });

    describe('labelCase', function(){
        var labelCaseFilter;

        beforeEach(inject(function($filter){
            labelCaseFilter = $filter('labelCase');
        }));

        it('should convert camelCase string to Label Case', function(){
            expect(labelCaseFilter('camelCase')).toEqual('Camel Case');
        });

        it('should keep label case string unchanged', function(){
            expect(labelCaseFilter('Camel Case')).toEqual('Camel Case');
        });
    });

    describe('keyFilter', function(){
        var filterOutKey;

        beforeEach(inject(function($filter){
            filterOutKey = $filter('keyFilter');
        }));

        it('should filter out queried key', function(){
            var obj = {"first": "val1", "second": "val2"};
            expect(filterOutKey(obj, "first")).toEqual({"second": "val2"});
        });
        it('should return unchanged object if requested key is not property of object', function(){
            var obj = {"first": "val1", "second": "val2"};
            expect(filterOutKey(obj, "third")).toEqual(obj);
        });
    });
});