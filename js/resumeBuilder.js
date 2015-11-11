var name = "Georgi Slavov";
var formattedName = HTMLheaderName.replace("%data%", name);

var role = "Java Developer";
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole).prepend(formattedName);


