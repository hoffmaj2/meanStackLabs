(function () {

    var allData = [
     {
        type: 'Lab',
        name: 'quetzalcuatl',
        number: 1,
        sessionDue: 3,
        url: '../Assignments/SchedulerLab.pdf',
        solution: '',
        sample: ''
     },
     {
        type: 'Lab',
        name: 'huitzilopochtli',
        number: 2,
        sessionDue: 3,
        url: '../Assignments/SchedulerLab.pdf',
        solution: '../Assignments/SchedulerLab.pdf',
        sample: '../Assignments/SchedulerLab.pdf'
     },
     {
        type: 'Lab',
        name: 'tlazolteotl',
        number: 3,
        sessionDue: 3,
        url: '../Assignments/SchedulerLab.pdf',
        solution: '../Assignments/SchedulerLab.pdf',
        sample: ''
     },
     {
        type: 'Lab',
        name: 'xochiquetzal',
        number: 4,
        sessionDue: 3,
        url: '../Assignments/SchedulerLab.pdf',
        solution: '',
        sample: '../Assignments/SchedulerLab.pdf'
     },
     {
        type: 'Homework',
        name: 'brahma',
        number: 1,
        sessionDue: 3,
        url: '../Assignments/SchedulerLab.pdf',
        solution: '',
        sample: ''
     },
     {
        type: 'Homework',
        name: 'shiva',
        number: 2,
        sessionDue: 3,
        url: '../Assignments/SchedulerLab.pdf',
        solution: '',
        sample: ''
     },
     {
        type: 'Homework',
        name: 'vishnu',
        number: 3,
        sessionDue: 3,
        url: '../Assignments/SchedulerLab.pdf',
        solution: '',
        sample: ''
     },
     {
        type: 'Exam',
        name: 'shen nong',
        number: 1,
        sessionDue: 3,
        url: '../Assignments/SchedulerLab.pdf',
        solution: '',
        sample: ''
     },
     {
        type: 'Exam',
        name: 'nu wa',
        number: 2,
        sessionDue: 3,
        url: '../Assignments/SchedulerLab.pdf',
        solution: '../Assignments/SchedulerLab.pdf',
        sample: ''
     },
     {
        type: 'Exam',
        name: 'huang di',
        number: 3,
        sessionDue: 3,
        url: '../Assignments/SchedulerLab.pdf',
        solution: '',
        sample: '../Assignments/SchedulerLab.pdf'
     }
    ];

    var segmentedData = [];
    var segmentCount = [];
    var contentTypes = [];
    for(var i = 0; i < allData.length; i++){
        segmentedData[allData[i].type] = [];
        segmentCount[allData[i].type] = 0;
    }
    for(var i = 0; i < allData.length; i++){
        segmentedData[allData[i].type][segmentCount[allData[i].type]] = allData[i];
        segmentCount[allData[i].type]++;
    }

    for (var i = 0; i < allData.length; i++) {
            if (contentTypes.indexOf(allData[i].type) < 0) {
                contentTypes[contentTypes.length] = allData[i].type;
            }

        }


    var app = angular.module('content', []);

    /*for (var i = 0; i < contentTypes.length; i++) {
        app.controller(contentTypes[i] + "Controller", function ($scope, $routeParams) {
            this.selectedContent = segmentedData[contentTypes[i]];
        });
    };*/

    app.controller("contentController", function ($routeParams) {
            this.selectedContent = segmentedData[$routeParams.ctype];
        });
    app.controller("contentTypesController", function () {
        this.contentTypes = contentTypes;
    });


})();