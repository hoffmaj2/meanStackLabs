describe('filter', function () {

    // Load module containing filter
    beforeEach(module('schedule'));

    // Test suite for carmelCase filter
    describe('camelCase', function () {
        var rawHtmlFilter;

        // Inject $filter service and and use it to load carmelCase filter
        beforeEach(inject(function ($filter) {
            rawHtmlFilter = $filter('rawHtml');
        }));

        // Writes specs for testing functionality of ca for 
        it('should leave non html strings unchanged', function () {
            expect(rawHtmlFilter('camelCase').$$unwrapTrustedValue()).toEqual('camelCase');
            expect(rawHtmlFilter('PowerPoint').$$unwrapTrustedValue()).toEqual('PowerPoint');
            expect(rawHtmlFilter('Hello World!').$$unwrapTrustedValue()).toEqual('Hello World!');
        });

        it('should not convert strings containing html to its escaped version ', function () {
            expect(rawHtmlFilter('<p>hello World!</p>').$$unwrapTrustedValue()).toEqual('<p>hello World!</p>');
            expect(rawHtmlFilter("<li><strong>Backspace</strong> is replaced with <strong>\b</strong></li>")
                .$$unwrapTrustedValue())
                .toEqual("<li><strong>Backspace</strong> is replaced with <strong>\b</strong></li>");
        });
    });
});