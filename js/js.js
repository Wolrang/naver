$('#main-btn').on('click', function() {
  $('.btn-2').addClass('open');
  $('.btn-1').css('display', 'none')
});

$('#main-btn-2').on('click', function() {
  $('.btn-2').removeClass('open');
  $('.btn-1').css('display', 'block')
});

$('.btn-1').on('click', function() {
  $('.btn-2').addClass('open');
  $('.btn-1').css('display', 'none')
});

$('.btn-2').on('click', function() {
  $('.btn-2').removeClass('open');
  $('.btn-1').css('display', 'block')
});

