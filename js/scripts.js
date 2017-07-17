//Business Logic
function TravelSpot(location, attractions, timeOfYear, notes) {
  this.spot = location;
  this.attractions = attractions;
  this.timeOfYear = timeOfYear;
  this.notes = notes;
}

//User Interface Logic
$(document).ready(function() {
  $('#inputForm').submit(function(event) {
    event.preventDefault();

    var inputLocation = $('#location').val();
    var inputAttraction = $('#majorAttractions').val();
    var inputTimeOfYear = $('#timeOfYear').val();
    var inputNotes = $('#notes').val();
    var newSpot =  new TravelSpot(inputLocation,inputAttraction,inputTimeOfYear,inputNotes);

    $('#destinationList').append('<li><span class="output">' + newSpot.spot + "</span></li>");

    $('.output').last().click(function() {
      $('.outputs').show();
      $('.locationOutput').text(newSpot.spot);
      $('.attractionsOutput').text(newSpot.attractions);
      $('.timeOutput').text(newSpot.timeOfYear);
      $('.notesOutput').text(newSpot.notes);
    });
    $('.form-control').val('');
  });
});
