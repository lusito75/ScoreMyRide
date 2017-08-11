//THE SCORE
var theScore = 0.0;
reset();

//default score profile (shifting beachie)
var beachies             = {supertube:  8.5,  superturn:  6.0, superhuman: 8.5,
                            mediumtube: 6.0,  mediumturn: 4.0,
                            smalltube:  4.0,  smallturn:  2.0};
var longHollowPoint      = {supertube:  7.0,  superturn:  5.0, superhuman: 6.5,
                            mediumtube: 4.0,  mediumturn: 3.0,
                            smalltube:  3.0,  smallturn:  2.0};
var longPerformancePoint = {supertube:  8.5,  superturn:  4.0, superhuman: 6.5,
                            mediumtube: 5.0,  mediumturn: 3.0,
                            smalltube:  4.0,  smallturn:  2.0};
var shortHollowSlab      = {supertube:  7.5,  superturn:  4.0, superhuman: 7.5,
                            mediumtube: 4.0,  mediumturn: 2.0,
                            smalltube:  2.0,  smallturn:  1.0};

var scoringProfiles = [beachies, longHollowPoint, longPerformancePoint, shortHollowSlab];
var scoreProfile = beachies;

//assign a score profile
$(".wavetype").on("click", function(){
    $(".wavetype").removeClass("active");
    $(this).toggleClass("active");
    if ($(this).text() === "Shifting Beachie") {
        scoreProfile = beachies;
    } else if ($(this).text() === "Long Hollow Point") {
        scoreProfile = longHollowPoint;
    } else if ($(this).text() === "Long Performance Point") {
        scoreProfile = longPerformancePoint;
    } else if ($(this).text() === "Short Hollow Slab") {
        scoreProfile = shortHollowSlab;
    }
    reset();
});

//scoring button functions
$("#smturn").on("click", function(){
    updateScore(scoreProfile.smallturn);
});

$("#qktube").on("click", function(){
    updateScore(scoreProfile.smalltube);
});

$("#mdturn").on("click", function(){
    updateScore(scoreProfile.mediumturn);
});

$("#mdtube").on("click", function(){
    updateScore(scoreProfile.mediumtube);
});

$("#superhmn").on("click", function(){
    updateScore(scoreProfile.superhuman);
});

$("#superturn").on("click", function(){
    updateScore(scoreProfile.superturn);
});

$("#supertube").on("click", function(){
    updateScore(scoreProfile.supertube);
});

$("#reset").click(function(){
    reset();
});

function updateScore(num) {
    theScore += num;
    if (theScore >= 10) {
        $("#thescore").css("color", "green");
        theScore = 10.0;
    }
    $("#thescore").html(theScore);
}

function reset() {
    theScore = 0;
    $("#thescore").html(theScore);
    $("#thescore").css("color", "black");
}

