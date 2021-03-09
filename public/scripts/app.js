$(() => {
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
