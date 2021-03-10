$(() => {
  $.ajax({
    method: "GET",
    url: "/pins"
  }).done((res) => {
    console.log(res);
  })
});
