$( "#linkOne" ).click( function(e) {
    e.preventDefault();
    if ($( ".skills" ).hide() == false ) {
      $( ".skills" ).hide();
    }
    if ($( ".projects" ).hide() == false ) {
      $( ".projects" ).hide()
    }
    if ($( ".contact" ).hide() == false ) {
      $( ".contact" ).hide()
    }
    $( ".main" ).show('eager');
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
    $( ".skills" ).show('eager');
});

$( "#linkThree" ).click( function(e) {
    e.preventDefault();
    if ($( ".main" ).hide() == false ) {
      $( ".main" ).hide();
    }
    if ($( ".skills" ).hide() == false ) {
      $( ".skills" ).hide()
    }
    if ($( ".contact" ).hide() == false ) {
      $( ".contact" ).hide()
    }
    $( ".projects" ).show('eager');
});

$( "#linkFour" ).click( function(e) {
    e.preventDefault();
    if ($( ".main" ).hide() == false ) {
      $( ".main" ).hide();
    }
    if ($( ".skills" ).hide() == false ) {
      $( ".skills" ).hide()
    }
    if ($( ".projects" ).hide() == false ) {
      $( ".projects" ).hide()
    }
    $( ".contact" ).show('eager');
});

