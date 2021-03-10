$(() => {
  $.ajax({
    method: "GET",
    url: "/users"
  }).done((users) => {
    for(user of users) {
      $("<div>").text(user.name).appendTo($("body"));
    }
  });
  $.ajax({
    method: "GET",
    url: "/pins"
  }).done((res) => {
    console.log(res);
  })
});

// wow much amazing AJAX magic below

const getPins = function(map_id) {

}
exports.getPins = getPins;
