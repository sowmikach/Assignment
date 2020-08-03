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
    let popDiv = '<div id="noteModal" class="noteModal">' +
      '<h1 class="noteModalTitle">New Note</h1>' +
      '<input type="text" name="note_title" class="noteTitle" id="noteTitle" placeholder="Note Title" required/>' +
      '<textarea rows="8" cols="80" name="note_content" class="noteContent" id="noteContent" required placeholder="Say Something"></textarea>' +
      '<div class="noteBgColor"><span>Notes Background</span><div class="colors"><div class="green"><i class="fa fa-check" aria-hidden="true"></i></div><div class="blue"></div><div class="grey"></div><div class="pink"></div></div></div>' +
      '<div class="modalBtns"><input type="submit" name="cancel" value="Cancel" id="cancelBtn" class="noteModalBtn cancelBtn"><input type="submit" name="add" value="Add" id="addBtn" class="noteModalBtn addBtn"></div></div>';
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

    $(".addBtn").click(function() {
      let notes = JSON.parse(localStorage.getItem("noteList"));
      let noteTitle = $(".noteTitle").val();
      let noteContent = $("#noteContent").val();
      let newDate = new Date();
      if (noteTitle === '') {
        alert('Note title is required');
        return false;
      }
      if (noteContent === '') {
        alert('Please enter some data');
        return false;
      }
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

  $('.dropdown').click(function() {
    let format = $('#view option:selected').text();
    layoutFormat(format);
  });

});

/**
 * @function layoutFormat
 * @param {number} format
 * DESCRIPTION - configures the layout in specified format
 */
function layoutFormat(format) {
  if (format == '2 Column Format') {
    $(".noteItem").css({
      "height": "200px",
      "width": "calc((100% - 40px)/2)"
    });
    // $(".notesWrapper>div").addClass(".noteItem:nth-child(2n)");
    // $(".notesWrapper>div").removeClass(".noteItem:nth-child(5n)");
    // $(".noteItem:nth-child(2n)").css("margin-right", "0");
    // $(".noteItem:nth-child(5n)").css("margin-right", "20px");
    $(".noteHeader div").css("width", "95%");
    $(".addNotesIcon").css({
      "top": "28%",
      "left": "45%"
    });
    $(".notesContent").css("height", "59%");
  } else if (format == '5 Column Format') {
    $(".noteItem").css({
      "height": "330px",
      "width": "calc((100% - 100px)/5)"
    });
    // $(".notesWrapper>div").addClass(".noteItem:nth-child(5n)");
    // $(".notesWrapper>div").removeClass(".noteItem:nth-child(2n)");
    // $(".noteItem:nth-child(5n)").css("margin-right", "0");
    // $(".noteItem:nth-child(2n)").css("margin-right", "20px");
    $(".noteHeader div").css("width", "87%");
    $(".addNotesIcon").css({
      "top": "35%",
      "left": "40%"
    });
    $(".notesContent").css("height", "74%");
  }
}

/**
 * @function displayLayout
 * DESCRIPTION - displays notes in specified format
 */
function displayLayout() {
  let format = $('#view option:selected').text();
  let notes = JSON.parse(localStorage.getItem("noteList"));
  $(".noteWrapper").remove();
  for (let i = 0; i < notes.length; i++) {
    let note = '';
    // if ((format == "5 Column Format") && (notes[i].content.length > 354)) {
    //   notes[i].content = notes[i].content.slice(0, 353) + "...";
    // }
    // else if ((format == "2 Column Format") && (notes[i].content.length > 600)) {
    //   notes[i].content = notes[i].content.slice(0, 599) + "...";
    // }
    note += '<div class="noteWrapper noteItem left" style="background-color:' + notes[i].contentBg + '">' +
      '<h1 class="noteHeader" style="background-color:' + notes[i].titleBg + '"><div>' + notes[i].title + '</div></h1>' +
      '<p class="notesContent">' + notes[i].content + '</p>' +
      '<div class="noteFooter">' +
      '<span>' + notes[i].timestamp + '</span><i class="fa fa-trash-o deleteIcon" onclick="deleteNotes(' + i + ')" aria-hidden="true"></i>' +
      '</div></div>';
    $(".notesWrapper").append(note);
    layoutFormat(format);
  }
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
