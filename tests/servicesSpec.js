describe('Contact service', function(){

    // Load module containing the service
    beforeEach(module('DataManager'));

    var httpBackend, Contact;

    // inject the Contact service, $http service, and $httpBackend service
    beforeEach(inject(function($httpBackend, $http, _Contact_){
        // AngularJS drops the _ in _Contact_
        // $http service uses $httpBackend service to send HTTP messages
        httpBackend = $httpBackend;

        // Mock behavior of httpBackend
        httpBackend.when("GET", "data.json").respond([
            {"id":3,"firstName":"Maria","lastName":"Quinn"},
            {"id":1,"firstName":"John","lastName":"Doe"},
            {"id":2,"firstName":"Susan","lastName":"Tom"}]);
        Contact = _Contact_;
    }));

    describe('query', function(){
        it('should fetch 3 contacts', function(){
            Contact.query();
            httpBackend.flush();
            expect(Contact.data.length).toBe(3);
        });

        it('should invoke callback', function(){
            var results;
            expect(results).toBeFalsy();
            Contact.query(function(data){
                results = data;
            });
            httpBackend.flush();
            expect(results.length).toBe(3);
        });
    });

    describe('get', function(){
        beforeEach(function(){
            Contact.data = [
                {"id":3,"firstName":"Maria","lastName":"Quinn"},
                {"id":1,"firstName":"John","lastName":"Doe"},
                {"id":2,"firstName":"Susan","lastName":"Tom"}];
        });

        it('should fetch the requested contact', function(){
            var param = {"id": 1};
            var actual = Contact.get(param);
            expect(actual.firstName).toEqual('John');
            expect(actual.lastName).toEqual('Doe');
        });

        it('should return empty object if contact is not found', function(){
            var param = {"id": 4};
            var actual = Contact.get(param);
            expect(actual).toEqual({});
        });
    });

    describe('delete', function(){
        beforeEach(function(){
            Contact.data = [
                {"id":3,"firstName":"Maria","lastName":"Quinn"},
                {"id":1,"firstName":"John","lastName":"Doe"},
                {"id":2,"firstName":"Susan","lastName":"Tom"}];
        });

        it('should leave Contct data uinchanged if requested contact is not found', function(){
            var param = {"id": 4};
            var actual = Contact.delete(param);
            expect(Contact.data.length).toBe(3);
        });

        it('should delete the requested contact', function(){
            var param = {"id": 1};
            var actual = Contact.delete(param);
            expect(Contact.data.length).toBe(2);
        });
    });

});