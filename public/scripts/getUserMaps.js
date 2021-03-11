$(() => {
  $.ajax({
    method: "GET",
    url: `/users/${currentUser.id}/contributed_maps`
  }).done((res) => {
    console.log(res);
    for (let map of res) {
      let mapLine = `<a href="/maps/${map.map_id}"><div>${map.title}</div></a>`;
      $('#contributed-maps').append(mapLine);
    }
  })

  $.ajax({
    method: "GET",
    url: `/users/${currentUser.id}/favourite_maps`
  }).done((res) => {
    console.log(res);
    for (let map of res) {
      let mapLine = `<a href="/maps/${map.map_id}"><div>${map.map_title}</div></a>`;
      $('#favourite-maps').append(mapLine);
    }
  })

});


