var workshop_style = document.getElementById("workshop");
var event_style = document.getElementById("event");
var club_style = document.getElementById("club");
var newsletter_style = document.getElementById("newsletter");

var workshop_link = document.getElementById("workshop-active");
var event_link = document.getElementById("event-active");
var club_link = document.getElementById("club-active");
var newsletter_link = document.getElementById("newsletter-active");

function show_workshop(){
    workshop_style.style.display = "block";
    club_style.style.display = "none";
    event_style.style.display = "none";
    newsletter_style.style.display = "none";


    workshop_link.style.backgroundColor = "#f5f5f5c4";
    workshop_link.style.color = "#272833";
    workshop_link.style.border = "1px solid #dee2e6";
    event_link.style.backgroundColor = "#FFF";
    event_link.style.color = "#CC0000";
    event_link.style.border = "none";
    club_link.style.backgroundColor = "#FFF";
    club_link.style.color = "#CC0000";
    club_link.style.border = "none";
    newsletter_link.style.backgroundColor = "#FFF";
    newsletter_link.style.color = "#CC0000";
    newsletter_link.style.border = "none";
}
function show_event() {
    workshop_style.style.display = "none";
    event_style.style.display = "block";
    club_style.style.display = "none";
    newsletter_style.style.display = "none";


    event_link.style.backgroundColor = "#f5f5f5c4";
    event_link.style.color = "#495057";
    event_link.style.border = "1px solid #dee2e6";
    workshop_link.style.backgroundColor = "#FFF";
    workshop_link.style.color = "#CC0000";
    workshop_link.style.border = "none";
    club_link.style.backgroundColor = "#FFF";
    club_link.style.color = "#CC0000";
    club_link.style.border = "none";
    newsletter_link.style.backgroundColor = "#FFF";
    newsletter_link.style.color = "#CC0000";
    newsletter_link.style.border = "none";

}
function show_club() {
    workshop_style.style.display = "none";
    event_style.style.display = "none";
    club_style.style.display = "block";
    newsletter_style.style.display = "none";

    club_link.style.backgroundColor = "#f5f5f5c4";
    club_link.style.color = "#495057";
    club_link.style.border = "1px solid #dee2e6";
    workshop_link.style.backgroundColor = "#FFF";
    workshop_link.style.color = "#CC0000";
    workshop_link.style.border = "none";
    event_link.style.backgroundColor = "#FFF";
    event_link.style.color = "#CC0000";
    event_link.style.border = "none";
    newsletter_link.style.backgroundColor = "#FFF";
    newsletter_link.style.color = "#CC0000";
    newsletter_link.style.border = "none";

}
function show_newsletter() {
    workshop_style.style.display = "none";
    event_style.style.display = "none";
    club_style.style.display = "none";
    newsletter_style.style.display = "block";

    club_link.style.backgroundColor = "#FFF";
    club_link.style.color = "#CC0000";
    club_link.style.border = "none";
    workshop_link.style.backgroundColor = "#FFF";
    workshop_link.style.color = "#CC0000";
    workshop_link.style.border = "none";
    event_link.style.backgroundColor = "#FFF";
    event_link.style.color = "#CC0000";
    event_link.style.border = "none";
    newsletter_link.style.backgroundColor = "#f5f5f5c4";
    newsletter_link.style.color = "#495057";
    newsletter_link.style.border = "1px solid #dee2e6";

}