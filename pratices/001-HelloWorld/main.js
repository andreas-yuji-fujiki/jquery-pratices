import $ from 'jquery'

$('body').css({
  'height':'98vh',

  'display':'flex',
  'align-items':'center',
  'justify-content':'center',
  
  'font-family':'helvetica',

  'background-color':'#000',
  'color':'#fff',
})

$('h1').css({
  'text-transform':'uppercase',
  'letter-spacing':'7px'
})

$('#main-btn').css({
  'background-color':'transparent',
  'color':'#fff',
  'border':'none',
  'padding':'15px 30px',
  'border-radius':'15px',
  'font-size':'22px',
  'text-transform':'uppercase',
  'cursor':'pointer',
  'border':'1px solid #fff',
  'margin':'7px 0 0 -4px',
  'letter-spacing':'7px'
})

let counter = 0
$('#main-btn').on('click', function() {
  counter++
  $(this).text(`Clicked! ${counter}x`)
})