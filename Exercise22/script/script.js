//jshint esversion:6
$(document).ready(function() {
  var noteTitleBg, noteContentBg;
  let notes = JSON.parse(localStorage.getItem("noteList"));
  if (notes == null) {
    localStorage.setItem("noteList", JSON.stringify([]));
  }
  displayLayout();
  $("#addNotesIcon").click(function() {
    let addNoteModal = $("<div class='addNoteModal'></div>");
    let popDiv = '<form id="noteModal" class="noteModal">' +
      '<h1 class="noteModalTitle">New Note</h1>' +
      '<input type="text" name="noteTitle" class="noteTitle" id="noteTitle" placeholder="Note Title" required/>' +
      '<textarea rows="8" cols="80" name="noteContent" class="noteContent" id="noteContent" required placeholder="Say Something"></textarea>' +
      '<div class="noteBgColor"><span>Notes Background</span><div class="colors"><div class="green"><i class="fa fa-check" aria-hidden="true"></i></div><div class="blue"></div><div class="grey"></div><div class="pink"></div></div></div>' +
      '<div class="modalBtns"><button type="button" id="cancelBtn" class="noteModalBtn cancelBtn">Cancel</button><input type="submit" name="add" value="Add" id="addBtn" class="noteModalBtn addBtn"></div></form>';
    addNoteModal.append(popDiv);
    addNoteModal.appendTo(document.body);
    $(".green").click(function() {
      $(".blue,.grey,.pink").html("");
      $(".green").html('<i class="fa fa-check" aria-hidden="true"></i>');
      noteTitleBg = "rgb(165, 209, 120)";
      noteContentBg = "rgb(184, 233, 134)";
    });
    $(".blue").click(function() {
      $(".green,.grey,.pink").html("");
      $(".blue").html('<i class="fa fa-check" aria-hidden="true"></i>');
      noteTitleBg = "rgb(188, 204, 225)";
      noteContentBg = "rgb(210, 227, 248)";
    });
    $(".grey").click(function() {
      $(".green,.blue,.pink").html("");
      $(".grey").html('<i class="fa fa-check" aria-hidden="true"></i>');
      noteTitleBg = "rgb(203, 203, 209)";
      noteContentBg = "rgb(222, 222, 223)";
    });
    $(".pink").click(function() {
      $(".green,.grey,.blue").html("");
      $(".pink").html('<i class="fa fa-check" aria-hidden="true"></i>');
      noteTitleBg = "rgb(206, 191, 193)";
      noteContentBg = "rgb(220, 205, 207)";
    });
//     jQuery.validator.setDefaults({
//   debug: true,
//   success: "valid"
// });
// $( "#noteModal" ).validate({
//   rules: {
//     noteTitle: {
//       required: true,
//     },
//     noteContent: {
//       required: true,
//     }
//   }
// });
    $(".addBtn").click(function() {
      // debugger;
      let notes = JSON.parse(localStorage.getItem("noteList"));
      let noteTitle = $(".noteTitle").val();
      let noteContent = $("#noteContent").val();
      let newDate = new Date();
      // $(".error").remove();
      //
      // if (noteTitle==undefined) {
      //   $('.noteTitle').before('<div class="error">This field is required</div>');
      //   return false;
      // }
      // if (noteContent==undefined) {
      //   $('#noteContent').before('<div class="error">This field is required</div>');
      // }
      if (noteTitle != "" && noteContent != "") {
        let noteObj = {
          title: noteTitle,
          content: noteContent,
          titleBg: noteTitleBg,
          contentBg: noteContentBg,
          timestamp: newDate.getDate() + " " + MONTHS[newDate.getMonth()]
        };
        notes.unshift(noteObj);
        localStorage.setItem("noteList", JSON.stringify(notes));
        noteTitleBg = "rgb(165, 209, 120)";
        noteContentBg = "rgb(184, 233, 134)";
      }

      $(".addNoteModal").remove();
      displayLayout();
    });

    $("#cancelBtn").click(function() {
      $(".addNoteModal").remove();
    });

    $('body').click(function(event) {
      if ($(event.target).is(".addNoteModal")) {
        $(".addNoteModal").remove();
      }
    });

  });

  $('#view').change(function(){
          let format = $(this).val();
          localStorage.setItem("Layout", format);
          displayLayout();
  });
});

$(window).on('load', function() {
  var layout = localStorage.getItem("Layout");
    $('#view').val(layout);
});

/**
 * @function layoutFormat
 * @param {number} format
 * DESCRIPTION - configures the layout in specified format
 */
function layoutFormat(format) {
  if (format == '2 Column Format') {
    $(".addNotesIcon").css({
      "top": "28%",
      "left": "45%"
    });
    $(".noteItem").css({
      "height": "200px",
      "width": "calc((100% - 22px)/2)"
    });
    $(".noteHeader div").css("width", "95%");
    $(".notesContent").css("max-height", "59%");
    $(".noteItem:nth-child(2n)").css("margin-right", "0");
  } else if (format == '5 Column Format') {
    $(".addNotesIcon").css({
      "top": "35%",
      "left": "40%"
    });
    $(".noteItem").css({
      "height": "330px",
      "width": "calc((100% - 82px)/5)"
    });
    $(".noteHeader div").css("width", "87%");
    $(".notesContent").css("max-height", "74%");
    $(".noteItem:nth-child(5n)").css("margin-right", "0");
  }
}

/**
 * @function displayLayout
 * DESCRIPTION - displays notes in specified format
 */
function displayLayout() {
  let format = $('#view').val();
  let notes = JSON.parse(localStorage.getItem("noteList"));
  $(".noteWrapper").remove();
  for (let i = 0; i < notes.length; i++) {
    let note = '';
    note += '<div class="noteWrapper noteItem left" style="background-color:' + notes[i].contentBg + '">' +
      '<h1 class="noteHeader" style="background-color:' + notes[i].titleBg + '"><div>' + notes[i].title + '</div></h1>' +
      '<p class="notesContent">' + notes[i].content + '</p>' +
      '<div class="noteFooter">' +
      '<span>' + notes[i].timestamp + '</span><i class="fa fa-trash-o deleteIcon" onclick="deleteNotes(' + i + ')" aria-hidden="true"></i>' +
      '</div></div>';
    $(".notesWrapper").append(note);
  }
  layoutFormat(format);
}

/**
 * @function deleteNotes
 * @param {number} index
 * DESCRIPTION - Deletes the specific note
 */
function deleteNotes(index) {
  let noteList = JSON.parse(localStorage.getItem("noteList"));
  let deleteNoteModal = $('<div class="deleteNoteModal"></div>');
  let popDeleteDiv = '<div class="deleteNote">' +
    '<h1 class="noteModalTitle">Confirm Delete</h1>' +
    '<p>Deleting this note will remove all its traces from the system and cannot be rolled back. Do you really wish to delete this note?</p>' +
    '<input type="submit" value="No" class="noteModalBtn noBtn" id="noBtn"><input type="submit" value="Yes" class="noteModalBtn yesBtn" id="yesBtn">' +
    '</div>';
  deleteNoteModal.append(popDeleteDiv);
  deleteNoteModal.appendTo(document.body);
  $("#yesBtn").click(function() {
    $(".noteWrapper")[index].remove();
    $(".deleteNoteModal").remove();
    noteList.splice(index, 1);
    localStorage.setItem("noteList", JSON.stringify(noteList));
    displayLayout();
  });
  $("#noBtn").click(function() {
    $(".deleteNoteModal").remove();
  });
  $('body').click(function(event) {
    if ($(event.target).is(".deleteNoteModal")) {
      $(".deleteNoteModal").remove();
    }
  });
}
