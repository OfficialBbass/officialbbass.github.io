 
  $(document).ready(function() {
    $('#sizePicker').submit(function makeGrid(grid) {
     $('table tr').remove();
      var  rows = $('#inputHeight').val();
      var cols = $('#inputWeight').val();
      for (var i = 1; i <= rows; i++) {
          $('table').append('<tr></tr>');
          for (var k = 1; k <= cols; k++) {
            $('tr:last').append('<td></td>');
            $('td').attr("class", 'cells');
          }
      }
       grid.preventDefault();

       $('.cells').click(function(event) {
         var paint = $('#colorPicker').val();
         $(event.target).css('background-color', paint)
       });
    });
  });
