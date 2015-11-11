
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
work.possiotion = "Java Developer";
work.empoyer = "SDL";
work.started = "06/2015";
work.ended = "present";

var education = {};
education["name"] = "Kharkiv National University of Radio and Electronics, Ukraine";
education["degree"] = "Master’s degree on department “Computer engineering";
education["years"] = "2006-2011";