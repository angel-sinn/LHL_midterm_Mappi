$(() => {
  $.ajax({
    method: "GET",
    url: `/pins/${mapId}`
  }).done((res) => {
    console.log('response received');
    console.log(res);
    addMarkers(res);
  })


});
