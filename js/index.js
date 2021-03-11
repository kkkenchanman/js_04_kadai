$(function(){

  let option = `<option value='' selected></option>`
  $('.setCount').prepend(option)
  for(let i = 0; i <= 10; i++){
    if(i <= 7){
      let option = `<option value=${i}>${i}</option>`
      $('.setCount').prepend(option)
    }
    else if(i === 10){
      let option = `<option value=${i}>${i}</option>`
      $('.setCount').prepend(option)
    }
  }

  $('.setCount').change(function(){
    let team1Sum = Number($('#team1FirstSet option:selected').val()) + 
                   Number($('#team1SecondSet option:selected').val()) +
                   Number($('#team1ThirdSet option:selected').val())
    
    let team2Sum = Number($('#team2FirstSet option:selected').val()) + 
                   Number($('#team2SecondSet option:selected').val()) +
                   Number($('#team2ThirdSet option:selected').val())               
  
    $('#team1Result').text(team1Sum)
    $('#team2Result').text(team2Sum)
  })
  

  $('#dropArea').on('click', function(){
    $('#submitFile').click()
  })

  $('#dropArea').on('dragenter dragover', function(event){
    event.stopPropagation();
    event.preventDefault();
    $('#dropArea').css('border','3px solid gray')
  })

  $('#dropArea').on('drop', function(event){
    event.preventDefault();
    $('#submitFile')[0].files = event.originalEvent.dataTransfer.files;
  })

  $('#dropArea').on('dragleave', function(event){
    event.preventDefault();
    $('#dropArea').css('border','3px dotted gray')
  })

  $(document).on('drop dragover dragenter', function(event){
    event.stopPropagation();
    event.preventDefault();
  })

})

