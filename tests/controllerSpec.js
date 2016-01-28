describe('Schedule Controller', function () {

    // Load module containing the service
    beforeEach(module('schedule'));

    var rootScope, scope, schedule, location, scheduleComponentNames;

    beforeEach(inject(function ($controller, $rootScope, $location) {

        scheduleComponentNames = ["Due", "Topics", "Resources", "Reading", "Programs"];
        schedule = [{
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

        rootScope = $rootScope;
        scope = $rootScope.$new();
        location = $location;

        ctrl = $controller('ScheduleController', {
            $scope: scope
        });
    }));

    describe('ScheduleController', function () {
        describe('initial values', function () {

            it ('should start with the right values', function() {
                expect(ctrl.scheduleSession).toEqual(schedule);
                expect(ctrl.courseName).toEqual("Introduction to Teapot Analysis");
                expect(ctrl.courseDesignation).toEqual("CSSE-418");
                expect(ctrl.term).toEqual(2);
                expect(ctrl.termNames).toEqual(["Fall", "Winter", "Spring", "Summer"]);
                expect(ctrl.fiscalYear).toEqual(2016);
                expect(ctrl.overview).toEqual("<u>[additional information about the course might go here]</u> <br> Due to an unfortunate accident, Dr. Russell has been delayed to recover lab equipment from the asteroid belt. <br> Dr. Wittgenstein will be teaching in his place.");
                expect(ctrl.componentNames).toEqual(scheduleComponentNames);
                expect(ctrl.displayed).toEqual({
                    week: -1,
                    session: -1
                });
                expect(ctrl.weeks).toEqual([1, 2, 3, 4]);
                expect(ctrl.sessions).toEqual([]);
            });

        });
        describe('functions', function () {

            it ('nums should generate the right array', function() {
                expect(ctrl.nums(3)).toEqual([0, 1, 2]);
                expect(ctrl.nums(0)).toEqual([]);
            });
            it('setDisplayed should work right', function () {
                ctrl.setDisplayed(1, {});
                expect(ctrl.displayed.week).toEqual(1);
                expect(ctrl.displayed.session).toEqual({});

                ctrl.setDisplayed(1, {"prop": "value"});
                expect(ctrl.displayed.week).toEqual(1);
                expect(ctrl.displayed.session).toEqual({"prop": "value"});
            });

            it ('rowHasName should work right', function() {
                expect(ctrl.rowHasName(schedule[0], "Due")).toBeFalsy();
                expect(ctrl.rowHasName(schedule[0], "Reading")).toBeTruthy();
                expect(ctrl.rowHasName(schedule[0], "Topics")).toBeTruthy();
                expect(ctrl.rowHasName(schedule[0], "Resources")).toBeTruthy();
                expect(ctrl.rowHasName(schedule[0], "Topiadsfacs")).toBeFalsy();
            });

            it ('rowGetByName should work right', function() {

                expect(ctrl.rowGetByName(schedule[0], "Due")).toEqual(schedule[0].scheduleComponents[0]);
                expect(ctrl.rowGetByName(schedule[0], "Topics")).toEqual(schedule[0].scheduleComponents[0]);
                expect(ctrl.rowGetByName(schedule[0], "Reading")).toEqual(schedule[0].scheduleComponents[2]);
                expect(ctrl.rowGetByName(schedule[0], "Resources")).toEqual(schedule[0].scheduleComponents[1]);
            });
        });

    });

});