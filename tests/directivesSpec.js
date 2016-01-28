describe('schedule', function () {

    // Load module that contains the directives
    beforeEach(module('schedule'));

    // Load the templates
    beforeEach(module('views/header.html', 'views/navBar.html'));

    var compile, scope, element;

    describe('header', function () {
        beforeEach(inject(function ($compile, $rootScope) {
            compile = $compile;
            scope = $rootScope.$new();
            scope.schedule = {
                "courseName": "the course name",
                "termNames": ["Fall"],
                "term": 1,
                fiscalYear: 2016,
                "courseDesignation": "designation"
            };

            element = angular.element('<top-header></top-header>');

            compile(element)(scope);
            scope.$digest();
        }));

        it('should have the course title', function () {
            expect(element.html()).toContain(scope.schedule.courseName);
        });

        it('should have the course designation', function () {
            expect(element.html()).toContain(scope.schedule.courseDesignation);
        });

        it('should have the course name', function () {
            expect(element.html()).toContain(scope.schedule.courseName);
        });

        it('should have the course term', function () {
            expect(element.html()).toContain(scope.schedule.termNames[scope.schedule.term - 1]);
        });

        it('should have the course year', function () {
            expect(element.html()).toContain(scope.schedule.fiscalYear);
        });

        it('should have the term identifier', function () {
            expect(element.html()).toContain("" + scope.schedule.fiscalYear + scope.schedule.term + "0");
        });
    });

    describe('navBar', function () {
        beforeEach(inject(function ($compile, $rootScope) {
            compile = $compile;
            scope = $rootScope.$new();
            scope.types = {
                "contentTypes": ["Homework", "Lab"]
            };

            element = angular.element('<nav-bar></nav-bar>');

            compile(element)(scope);
            scope.$digest();
        }));

        it('should have the course header tabs', function () {
            for (var datum in scope.types.contentTypes) {
                expect(element.html()).toContain(datum);
            }
        });

        it('should the course links', function () {
            for (var i=0;i<scope.types.contentTypes.length;i++) {
                var datum = scope.types.contentTypes[i];
                expect(element.html()).toContain("ng-href=\"/" + datum + "\"");
            }
        });
    });

    //TODO schedule.html and contentPanel
});