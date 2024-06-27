$('.scene').mousemove(function(event) {
  $(document).mousemove(function(e) {
    // $('.moveback1, .moveback1port').css({
    //   left: 10 - e.pageX / 9,
    //   top: 10 - e.pageY / 9
    // })
    $('.layer').css({
      left: 25 - e.pageX / 6,
      top: 25 - e.pageY / 6
    })
    // $('.moveback3').css({
    //   left: 50 - e.pageX - 20 / 3,
    //   top: 50 - e.pageY - 20 / 3
    // })
  })
})