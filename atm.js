console.log('running')

const depositC = $('.depositCheck')

function depositCash () {
  // console.log($('.inputCheck').val());
  const depositVal = $('.inputCheck').val()
  const depositNum = parseInt(depositVal)
  // console.log(depositNum);

  // console.log($('#checking .balance').text())
  const balC = $('#checking .balance').text()
  const sliceBal = parseInt(balC.slice(1))
  // console.log(sliceBal);
  const newBalCheck = depositNum + sliceBal
  $('#checking .balance').text('$' + newBalCheck)
}
depositC.on('click', depositCash)

const withdrawC = $('.withdrawCheck')

function withdrawCash () {
  const withdrawAmount = $('.inputCheck').val()
  console.log(withdrawAmount);
  const withdrawNum = parseInt(withdrawAmount)
  console.log(withdrawNum);
  const balC = $('#checking .balance').text()
  const sliceBal = parseInt(balC.slice(1))
  console.log(sliceBal);
  const newBalCheck = sliceBal - withdrawNum
  $('#checking .balance').text('$' + newBalCheck)
  if (newBalCheck < 0) {
    $('#checking .balance').css('background-color', 'red')
  }
}

withdrawC.on('click', withdrawCash)

const depositS = $('.depositSave')

function depositSavings () {
  // console.log($('.inputCheck').val());
  const depositVal = $('.inputSave').val()
  const depositNum = parseInt(depositVal)
  console.log(depositNum);

  // console.log($('#checking .balance').text())
  const balS = $('#savings .balance').text()
  const sliceBal = parseInt(balS.slice(1))
  // console.log(sliceBal);
  const newBalSave = depositNum + sliceBal
  $('#savings .balance').text('$' + newBalSave)
}
depositS.on('click', depositSavings)

const withdrawS = $('.withdrawSave')
function withdrawSavings () {
  const withdrawAmount = $('.inputSave').val()
  // console.log(withdrawAmount);
  const withdrawNum = parseInt(withdrawAmount)
  // console.log(withdrawNum);
  const balS = $('#savings .balance').text()
  const sliceBal = parseInt(balS.slice(1))
  // console.log(sliceBal);
  const newBalSave = sliceBal - withdrawNum
  $('#savings .balance').text('$' + newBalSave)
  if (newBalSave < 0) {
    $('#savings .balance').css('background-color', 'red')
  }
}
withdrawS.on('click', withdrawSavings)
