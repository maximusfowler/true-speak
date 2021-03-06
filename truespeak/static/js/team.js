var teamData = {
    "swang": {
        "profile": {
            "img": "/static/img/team/stephanie-profile.png",
            "blurb": "'Can I have a bite?'",
            "name": "Stephanie Wang",
            "twitter": "swang_93",
            "github": "stephanie-wang",
            "school": "MIT '15",
            "id": "swang",
        },
        "hover": {
            "img": "/static/img/team/stephanie-hover.png",
            "blurb": "Math. Sleep. Paint.",
            "name": "swangster",
        },
    },
    "josh": {
        "profile": {
            "img": "/static/img/team/josh-profile.jpg",
            "blurb": "Grumpy code monkey.",
            "name": "Joshua Blum",
            "twitter": "blumua",
            "github": "joshblum",
            "school": "MIT '14",
            "id": "josh",
        },
        "hover": {
            "img": "/static/img/team/josh-hover.gif",
            "blurb": "Inline style Nazi.",
            "name": "ua",
        },
    },
    "max": {
        "profile": {
            "img": "/static/img/team/max-profile.png",
            "blurb": "Team motivator and chef.",
            "name": "Max Fowler",
            "twitter": "maxfowler2",
            "github": "mhfowler",
            "school": "Brown '14",
            "id": "max",
        },
        "hover": {
            "img": "/static/img/team/max-hover.png",
            "blurb": "Fuck it, push it.",
            "name": "ladsworth",
        },
    },
};

var swapItems = ['img', 'blurb', 'name'];

function initTemplate() {
    $.each(teamData, function(k, v) {
        var user = ich.user_template(v.profile);
        $('.team').append(user);

    });
}

function hoverHandler(e, d) {
    var $el = $(e.target).closest(".profile-wrap");
    swapData($el, e.type);
}

function swapData($el, eventType) {
    var id = $el.data('id');
    var dataType = eventType == "mouseenter" ? "hover" : "profile";
    $.each(swapItems, function(i, e) {
        var data = teamData[id][dataType][e];
        var $mod = $el.find(".profile-" + e);
        if (e === "img") {
            $mod.attr("src", data);
        } else {
            $mod.text(data);
        }
    });
}

$(document).ready(function() {
    initTemplate();
    $(".profile-img").hover(hoverHandler);
});