$(() => {
  getPins();
  $.ajax({
    method: "GET",
    url: "/users"
  }).done((users) => {
    for(user of users) {
      $("<div>").text(user.name).appendTo($("body"));
    }
  });
});

// wow much amazing AJAX magic below

const getPins = function(map_id) {
  $.ajax({
    method: "GET",
    url: "/pins"
  }).done((res) => {
    console.log(res);
  })
}
exports.getPins = getPins;
