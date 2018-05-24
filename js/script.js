$( "#linkOne" ).click( function(e) {
    e.preventDefault();
    if ($( ".technologies" ).hide() == false ) {
      $( ".technologies" ).hide();
    }
    if ($( ".projects" ).hide() == false ) {
      $( ".projects" ).hide()
    }
    if ($( ".contact" ).hide() == false ) {
      $( ".contact" ).hide()
    }
    $( ".main" ).show();
});

$( "#linkTwo" ).click( function(e) {
    e.preventDefault();
    if ($( ".main" ).hide() == false ) {
      $( ".main" ).hide();
    }
    if ($( ".projects" ).hide() == false ) {
      $( ".projects" ).hide()
    }
    if ($( ".contact" ).hide() == false ) {
      $( ".contact" ).hide()
    }
    $( ".technologies" ).show();
});

$( "#linkThree" ).click( function(e) {
    e.preventDefault();
    if ($( ".main" ).hide() == false ) {
      $( ".main" ).hide();
    }
    if ($( ".technologies" ).hide() == false ) {
      $( ".technologies" ).hide()
    }
    if ($( ".contact" ).hide() == false ) {
      $( ".contact" ).hide()
    }
    $( ".projects" ).show();
});

$( "#linkFour" ).click( function(e) {
    e.preventDefault();
    if ($( ".main" ).hide() == false ) {
      $( ".main" ).hide();
    }
    if ($( ".technologies" ).hide() == false ) {
      $( ".technologies" ).hide()
    }
    if ($( ".projects" ).hide() == false ) {
      $( ".projects" ).hide()
    }
    $( ".contact" ).show();
});

