
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

var work = {
    "jobs" : [
        {
           "employer": "SDL",
            "title" : "Senior Software Engineer",
            "dates" : "06/2015 – present",
            "project" : "SDL LiveContent Reach",
            "description" : "SDL LiveContent Reach is a dynamic delivery application that enables intelligent searching, rendering \
                             and personalizing of content. SDL LiveContent Reach enables end users to interact with the content, and \
                             track (passively) their activity for analytical purposes.",
            "environment" : "Java SE, Spring MVC, exist-db, XSL, XQL, JS, Tomcat, GIT, Agile"
        },
        {
            "employer": "Ciklum",
            "title" : "Senior Software Engineer",
            "dates" : "08/2013 – 06/2015",
            "project" : "Buildings Project Management System",
            "description" : "A large system for serving buildings project from a scratch to full completion.",
            "environment" : "Java SE, Spring, Versant, JSF + Primefaces, JS, CSS, Glassfish, Perforce"
        },
        {
            "employer": "DataArt Solutions, Inc",
            "title" : "Software Engineer",
            "dates" : "03/2011 – 08/2013",
            "project" : "Rich Web Application Middleware",
            "description" : "The project was aimed at creating an efficient and developer-friendly middleware to facilitate development \
                             of rich web applications with Oracle Siebel CRM backend.",
            "environment" : "Siebel, Java SE, Spring, JSF + RichFaces, JUnit, CSS, jQuery, SVN"
        }
    ]
}