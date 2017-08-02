/**
 * Created by Andrew on 13/10/2016.
 */

//Add plus for url use
var addPlus = function(test) {
 return test.split(" ").join("+");
 };

var getWikiSearch = function() {
    ////Need to put callback on end for cross site/////
    //var callback = "callback=?";
    $.ajax({
        url: "https://en.wikipedia.org/w/api.php?action=query&format=json&prop=&list=search&titles=1&srsearch=" + query + "&srinfo=totalhits%7Csuggestion%7Crewrittenquery&callback=?",
        type: 'GET',
        dataType: 'json',
        success: function(data) {
            console.log(JSON.stringify(data));
            console.log(query);
            for (var i=0; i < 9; i++ ) {
                $('#results' + i).html('<a href="http://en.wikipedia.org/wiki/' + data.query.search[i].title + '">' +
                 data.query.search[i].title + "<p>" + data.query.search[i].snippet + "</p>" +
                 '</a>');
            }
        },
        error: function() {
            alert('error');
        }
    });
};

$('#search').keypress(function(event){
    var $search = $('#search');
    var key = event.which;
    if (key == 13) { //keycode for enter
        window.query = $search.val();
        window.query = addPlus(query);
        getWikiSearch();
        $search.val("");

    }
});

/*Bouncy!*/
/*$(document).ready(function() {
 $('#center').click(function() {
 $(this).effect('bounce', {times: 3}, 500);
 });
 });*/



