
var skills = ["Java ", "Spring Core, ", "Spring MVC, ", "JS, ", "jQuery "];
var bio = {
    "name" : "Georgi Slavov",
    "role" : "Java Developer",
    "contacts" : {
        "mobile" : "+380636645939",
        "email" : "mr.george.slavov@gmail.com",
        "github" : "slavov",
        "twitter" : "g_slavov",
        "location" : "Ukraine. Kiev"
    },
    "pic" : "images/georgi.png",
    "age" : 29,
    "skills" : skills
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedRole).prepend(formattedName);

var work = {};
work.possition = "Java Developer";
work.empoyer = "SDL";
work.started = "06/2015";
work.ended = "present";

var education = {
    "university" : {
        "name" : "Kharkiv National University of Radio and Electronics, Ukraine",
        "degree" : "Master’s degree on department “Computer engineering",
        "years" : "2006-2011"
    },
    "onlineCourses": [
        {
            "title" : "M101J: MongoDB for Java Developers",
            "school": "MonogoDB University",
            "dates" : 2014,
            "url" : "https://university.mongodb.com/courses/10gen/M101J/2014_May/syllabus"
        },
        {
            "title" : "JavaScript Basics",
            "school": "Udacity",
            "dates" : 2015,
            "url" : "https://www.udacity.com/course/ud804"
        }
    ]
};

//$("#main").append(work["possition"]).append(education.name);