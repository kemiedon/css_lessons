
  // Hide all tab contents except the first one
  $('.tabcontent:not(:first)').hide();
  $('.tabcontent:first').show();
  // Add active class to the first tablink
  $('.tablinks li a').eq(0).addClass('active');

  // On click of a tablink, switch active class and show corresponding tab content
  $('.tablinks li a').click(function(e) {
    e.preventDefault();
    
    $('.tabcontent').hide();
    $('.tablinks li a').removeClass('active');
    $(this).addClass('active');
    $($(this).attr('href')).show();
  });
