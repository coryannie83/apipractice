(function() {

  $(function() {

    var episode = $("#episode");
    var season = $("#season");
    var awesome = $("#whyawesome");
    var rate = $("#rateit");
    var line = $("#favoriteline");
    var removeButton = $("#remove")
    var tabledata = $("#table table-bordered");
    var newButton = $("#new");
    var record = $("#tr");
    var manage = $("#manage");

    //calls api
    let result = $.get("http://localhost:1337/user");

    //once call returns data, this code loops through each recrod and then builds a row in dom
    result.done(function(data) {
      $.each(data, function(index, episode) {
        $("#mash tbody").append('\
             <tr> \
                 <td id="#episode">' + episode.episode + '</td> \
                 <td id="#season">' + episode.season + '</td> \
                 <td id="#whyawesome">' + episode.whyawesome + '</td> \
                 <td id="#rateit">' + episode.rateit + '</td> \
                 <td id="#favoriteline">' + episode.favoriteline + '</td> \
                 <td id="#manage">' + '<button class="remove" data-eid="' + episode.id +' ">' + 'Remove' + '</button>' + '</td> \
               </tr>')
             });

     $(".remove").click(function() {
      //console.log("remove clicked");
      //console.log( $(this).data("eid"));
      let episodeId = $(this).data("eid"); //CB NOTES this.data is pulling the record that is associated with button click

      $.ajax({
        url: "http://localhost:1337/user" + "/" + episodeId,
        type: 'DELETE'
        });
        //how to clear record off DOM?? .done? add success and failure
      });


    });




  });
})();
