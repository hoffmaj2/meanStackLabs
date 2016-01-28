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

    var sS = [{
        week: 1, // value comes from a session object
        session: 2, // value comes from a session object
        sessionDate: 'Wednesday Dec 2', // value comes from a session object
        scheduleComponents: [
            {
                name: "Topics",
                values: [
                    "Review of course syllabus",
                    "Brief introduction to Express.js",
                    "MongoDB installation",
                    "Getting started with MongoDB"
                ]
            },
            {
                name: "Resources",
                values: [
                    '<a href="../Slides/Introductions.pdf">Slides</a>',
                    '<a href="http://expressjs.com/starter/installing.html">Express Installation</a>',
                    '<a href="https://docs.mongodb.org/manual/installation/">MongoDB installation</a>'
                ]
            },
            {
                name: "Reading",
                values: [
                    '<a href="../syllabus.html">Course Syllabus</a>',
                    '<a href="https://docs.mongodb.org/manual/">MongoDB Documentation</a>',
                    ' <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript">JavaScript Primer</a>',
                    '<a href="../Assignments/HelloWorldExpressExample.pdf">Hello World Express Exampla</a>',
                    '<a href="../Assignments/GettingStartedWithMongoDB.pdf">Getting Started with MongoDB</a>'
                ]
            }
        ]
    },
        {
            week: 1, // value comes from a session object
            session: 3, // value comes from a session object
            sessionDate: 'Thursday Dec 10', // value comes from a session object
            scheduleComponents: [
                {
                    name: "Topics",
                    values: [
                        "Review of course syllabus",
                        "Brief introduction to Express.js",
                        "MongoDB installation",
                        "Getting started with MongoDB"
                    ]
                },
                {
                    name: "Resources",
                    values: [
                        '<a href="../Slides/Introductions.pdf">Slides</a>',
                        '<a href="http://expressjs.com/starter/installing.html">Express Installation</a>',
                        '<a href="https://docs.mongodb.org/manual/installation/">MongoDB installation</a>'
                    ]
                },
                {
                    name: "Due",
                    values: [
                        "Homework 3; in class"
                    ]
                }
            ]
        },
        {
            week: 1, // value comes from a session object
            session: 4, // value comes from a session object
            sessionDate: 'Thursday Dec 10', // value comes from a session object
            scheduleComponents: [
                {
                    name: "Topics",
                    values: [
                        "Review of course syllabus",
                        "Brief introduction to Express.js",
                        "MongoDB installation",
                        "Getting started with MongoDB"
                    ]
                },
                {
                    name: "Resources",
                    values: [
                        '<a href="../Slides/Introductions.pdf">Slides</a>',
                        '<a href="http://expressjs.com/starter/installing.html">Express Installation</a>',
                        '<a href="https://docs.mongodb.org/manual/installation/">MongoDB installation</a>'
                    ]
                },
                {
                    name: "Due",
                    values: [
                        "Homework 3; in class"
                    ]
                }
            ]
        },
        {
            week: 2, // value comes from a session object
            session: 5, // value comes from a session object
            sessionDate: 'Thursday Dec 10', // value comes from a session object
            scheduleComponents: [
                {
                    name: "Topics",
                    values: [
                        "Review of course syllabus",
                        "Brief introduction to Express.js",
                        "MongoDB installation",
                        "Getting started with MongoDB"
                    ]
                },
                {
                    name: "Resources",
                    values: [
                        '<a href="../Slides/Introductions.pdf">Slides</a>',
                        '<a href="http://expressjs.com/starter/installing.html">Express Installation</a>',
                        '<a href="https://docs.mongodb.org/manual/installation/">MongoDB installation</a>'
                    ]
                },
                {
                    name: "Due",
                    values: [
                        "Homework 3; in class"
                    ]
                }
            ]
        },
        {
            week: 2, // value comes from a session object
            session: 6, // value comes from a session object
            sessionDate: 'Thursday Dec 10', // value comes from a session object
            scheduleComponents: [
                {
                    name: "Topics",
                    values: [
                        "Review of course syllabus",
                        "Brief introduction to Express.js",
                        "MongoDB installation",
                        "Getting started with MongoDB"
                    ]
                },
                {
                    name: "Resources",
                    values: [
                        '<a href="../Slides/Introductions.pdf">Slides</a>',
                        '<a href="http://expressjs.com/starter/installing.html">Express Installation</a>',
                        '<a href="https://docs.mongodb.org/manual/installation/">MongoDB installation</a>'
                    ]
                },
                {
                    name: "Due",
                    values: [
                        "Homework 3; in class"
                    ]
                }
            ]
        },
        {
            week: 2, // value comes from a session object
            session: 7, // value comes from a session object
            sessionDate: 'Thursday Dec 10', // value comes from a session object
            scheduleComponents: [
                {
                    name: "Topics",
                    values: [
                        "Review of course syllabus",
                        "Brief introduction to Express.js",
                        "MongoDB installation",
                        "Getting started with MongoDB"
                    ]
                },
                {
                    name: "Resources",
                    values: [
                        '<a href="../Slides/Introductions.pdf">Slides</a>',
                        '<a href="http://expressjs.com/starter/installing.html">Express Installation</a>',
                        '<a href="https://docs.mongodb.org/manual/installation/">MongoDB installation</a>'
                    ]
                },
                {
                    name: "Due",
                    values: [
                        "Homework 3; in class"
                    ]
                }
            ]
        },
        {
            week: 3, // value comes from a session object
            session: 8, // value comes from a session object
            sessionDate: 'Thursday Dec 10', // value comes from a session object
            scheduleComponents: [
                {
                    name: "Topics",
                    values: [
                        "Review of course syllabus",
                        "Brief introduction to Express.js",
                        "MongoDB installation",
                        "Getting started with MongoDB"
                    ]
                },
                {
                    name: "Resources",
                    values: [
                        '<a href="../Slides/Introductions.pdf">Slides</a>',
                        '<a href="http://expressjs.com/starter/installing.html">Express Installation</a>',
                        '<a href="https://docs.mongodb.org/manual/installation/">MongoDB installation</a>'
                    ]
                },
                {
                    name: "Due",
                    values: [
                        "Homework 3; in class"
                    ]
                }
            ]
        },
        {
            week: 3, // value comes from a session object
            session: 9, // value comes from a session object
            sessionDate: 'Thursday Dec 10', // value comes from a session object
            scheduleComponents: [
                {
                    name: "Topics",
                    values: [
                        "Review of course syllabus",
                        "Brief introduction to Express.js",
                        "MongoDB installation",
                        "Getting started with MongoDB"
                    ]
                },
                {
                    name: "Resources",
                    values: [
                        '<a href="../Slides/Introductions.pdf">Slides</a>',
                        '<a href="http://expressjs.com/starter/installing.html">Express Installation</a>',
                        '<a href="https://docs.mongodb.org/manual/installation/">MongoDB installation</a>'
                    ]
                },
                {
                    name: "Due",
                    values: [
                        "Homework 3; in class"
                    ]
                }
            ]
        },
        {
            week: 3, // value comes from a session object
            session: 10, // value comes from a session object
            sessionDate: 'Thursday Dec 10', // value comes from a session object
            scheduleComponents: [
                {
                    name: "Topics",
                    values: [
                        "Review of course syllabus",
                        "Brief introduction to Express.js",
                        "MongoDB installation",
                        "Getting started with MongoDB"
                    ]
                },
                {
                    name: "Resources",
                    values: [
                        '<a href="../Slides/Introductions.pdf">Slides</a>',
                        '<a href="http://expressjs.com/starter/installing.html">Express Installation</a>',
                        '<a href="https://docs.mongodb.org/manual/installation/">MongoDB installation</a>'
                    ]
                },
                {
                    name: "Due",
                    values: [
                        "Homework 3; in class"
                    ]
                }
            ]
        },
        {
            week: 3, // value comes from a session object
            session: 11, // value comes from a session object
            sessionDate: 'Thursday Dec 10', // value comes from a session object
            scheduleComponents: [
                {
                    name: "Topics",
                    values: [
                        "Review of course syllabus",
                        "Brief introduction to Express.js",
                        "MongoDB installation",
                        "Getting started with MongoDB"
                    ]
                },
                {
                    name: "Resources",
                    values: [
                        '<a href="../Slides/Introductions.pdf">Slides</a>',
                        '<a href="http://expressjs.com/starter/installing.html">Express Installation</a>',
                        '<a href="https://docs.mongodb.org/manual/installation/">MongoDB installation</a>'
                    ]
                },
                {
                    name: "Due",
                    values: [
                        "Homework 3; in class"
                    ]
                }
            ]
        },
        {
            week: 4, // value comes from a session object
            session: 12, // value comes from a session object
            sessionDate: 'Thursday Dec 10', // value comes from a session object
            scheduleComponents: [
                {
                    name: "Topics",
                    values: [
                        "Review of course syllabus",
                        "Brief introduction to Express.js",
                        "MongoDB installation",
                        "Getting started with MongoDB"
                    ]
                },
                {
                    name: "Resources",
                    values: [
                        '<a href="../Slides/Introductions.pdf">Slides</a>',
                        '<a href="http://expressjs.com/starter/installing.html">Express Installation</a>',
                        '<a href="https://docs.mongodb.org/manual/installation/">MongoDB installation</a>'
                    ]
                },
                {
                    name: "Due",
                    values: [
                        "Homework 3; in class"
                    ]
                }
            ]
        },
        {
            week: 4, // value comes from a session object
            session: 13, // value comes from a session object
            sessionDate: 'Thursday Dec 10', // value comes from a session object
            scheduleComponents: [
                {
                    name: "Topics",
                    values: [
                        "Review of course syllabus",
                        "Brief introduction to Express.js",
                        "MongoDB installation",
                        "Getting started with MongoDB"
                    ]
                },
                {
                    name: "Resources",
                    values: [
                        '<a href="../Slides/Introductions.pdf">Slides</a>',
                        '<a href="http://expressjs.com/starter/installing.html">Express Installation</a>',
                        '<a href="https://docs.mongodb.org/manual/installation/">MongoDB installation</a>'
                    ]
                },
                {
                    name: "Due",
                    values: [
                        "Homework 3; in class"
                    ]
                }
            ]
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

    var scheduleComponentNames = ["Due", "Topics", "Resources", "Reading", "Programs"];

    var scheduleComponent = {
        name: "Due",
        values: [''] // list of things to display for this component
    };


    var courseComponent = {
        type: 'Lab',
        name: 'Schedule Object',
        number: 1,
        sessionDue: 3,
        url: '../Assignments/SchedulerLab.pdf',
        solution: '',
        sample: ''
    };


    //var app = angular.module('content', []);
    var app = angular.module('schedule', ['ngRoute', 'content']);


    app.controller("contentController", function ($routeParams) {
            this.selectedContent = segmentedData[$routeParams.ctype];
        });
    app.controller("contentTypesController", function () {
        this.contentTypes = contentTypes;
    });

    app.controller("ScheduleController", function () {

        this.scheduleSession = sS;
        this.courseName = "Introduction to Teapot Analysis";
        this.courseDesignation = "CSSE-418";
        this.term = 2;
        this.termNames = ["Fall", "Winter", "Spring", "Summer"];
        this.fiscalYear = 2016;
        this.updated = new Date();
        this.overview = "<u>[additional information about the course might go here]</u> <br> Due to an unfortunate accident, Dr. Russell has been delayed to recover lab equipment from the asteroid belt. <br> Dr. Wittgenstein will be teaching in his place.";
        this.componentNames = scheduleComponentNames;
        this.displayed = {
            week: -1,
            session: -1
        };

        this.weeks = [];
        this.sessions = [];
        for (var i = 0; i < this.scheduleSession.length; i++) {
            if (this.weeks.indexOf(this.scheduleSession[i].week) < 0) {
                this.weeks[this.weeks.length] = this.scheduleSession[i].week;
            }

        }

        this.weeks.sort();

        this.nums = function (n) {
            var arr = [];
            for (var i = 0; i < n; i++) {
                arr[i] = i;
            }
            return arr;
        };
        this.rowHasName = function (row, name) {
            for (var i = row.scheduleComponents.length - 1; i >= 0; i--) {
                if (row.scheduleComponents[i].name === name) {
                    return true;
                }
            }
            return false;
        };
        this.rowGetByName = function (row, name) {
            for (var i = row.scheduleComponents.length - 1; i >= 0; i--) {
                if (row.scheduleComponents[i].name === name) {
                    return row.scheduleComponents[i];
                }
            }
            return row.scheduleComponents[0];
        };
        this.setDisplayed = function (n, m) {
            this.displayed.week = n;
            this.displayed.session = m;
        }
    });


})();