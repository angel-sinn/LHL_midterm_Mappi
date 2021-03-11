$(() => {
  $.ajax({
    method: "GET",
    url: `/pins/${mapId}`
  }).done((res) => {

    addMarkers(res);
  })
});
