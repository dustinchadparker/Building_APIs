function getData() {
  $.ajax({
    method: "GET",
    url: "http://localhost:3000/api/chirps/",
    dataType: "json",
    success: function(res) {
      $.each(res, (idNum, obj) => {
        if (obj.text) {
          $(".chirping-container").append(
            `<div class="chirp border media-body border-primary" id="${idNum}"><h4 class="media-heading name">${
              obj.name
            }: </h4><p> ${obj.text}</p></div>`
          );

          $(`#${idNum}`).append(
            `<button class="btn btn-outline-success" id="editor" type="button" onclick="editChirp(${idNum})">Edit</button>`
          );
          $(`#${idNum}`).append(
            `<button class="btn btn-outline-danger" id="delete" type="button" onclick="deleteChirp(${idNum})">X<span class="deletetooltip">Delete</span></button>`
          );
        }
      });
    }
  });
}

function deleteChirp(idNum) {
  $.ajax({
    method: "DELETE",
    url: `http://localhost:3000/api/chirps/${idNum}`
  });

  location.reload();
}

function saveNewChirp(value, text) {
  $.ajax({
    method: "PUT",
    url: `http://localhost:3000/api/chirps/${value}`,
    data: JSON.stringify(text),
    contentType: "application/json; charset=utf-8"
  });
}

$("#submit-chirp").click(function(e) {
  let value = $("#create-chirp").val();
  let valueName = $("#create-name").val();

  let text = { name: valueName, text: value };

  $.ajax({
    method: "POST",
    url: "http://localhost:3000/api/chirps/",
    data: JSON.stringify(text),
    contentType: "application/json; charset=utf-8"
  });

  $("#create-chirp").val("");

  location.reload();
});

function editChirp(idNum) {
  $.ajax({
    method: "GET",
    url: `http://localhost:3000/api/chirps/${idNum}`,
    dataType: "json",
    success: function(res) {
      let valueName = res.name;
      $("#exampleModal").modal("show");
      $("button#save-chirp").click(function(e) {
        let value = $("#edit-chirps").val();
        let text = { name: valueName, text: value };
        saveNewChirp(idNum, text);

        location.reload();
      });
    }
  });
}

getData();
