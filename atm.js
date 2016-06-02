//initial balance
var CcurrentBalance = 0;
var ScurrentBalance = 0;

//saving deposit button function
$('#savings input.deposit').on('click', function(){
        //retreiving deposit value
        var depositAmt = $('#savings input.input').val();
        console.log(depositAmt);

        //changing deposit to Number
        depositAmt = parseInt(depositAmt);
        console.log(depositAmt);

        //adding to the current balance
        ScurrentBalance = ScurrentBalance + depositAmt;
        console.log(ScurrentBalance);

        //display the currentBalance
        $('#savings div.balance').html(ScurrentBalance);
})


//saving withdraw button function
$('#savings input.withdraw').on('click', function(){
        //retreiving deposit value
        var withdrawAmt = $('#savings input.input').val();
        console.log(withdrawAmt);

        //changing deposit to Number
        withdrawAmt = parseInt(withdrawAmt);
        console.log(withdrawAmt);

        //adding to the current balance
        ScurrentBalance = ScurrentBalance - withdrawAmt;
        console.log(ScurrentBalance);

        //display the currentBalance
        $('#savings div.balance').html(ScurrentBalance);
})


//checking deposit button function
$('#checking input.deposit').on('click', function(){
        //retreiving deposit value
        var depositAmt = $('#checking input.input').val();
        console.log(depositAmt);

        //changing deposit to Number
        depositAmt = parseInt(depositAmt);
        console.log(depositAmt);

        //adding to the current balance
        CcurrentBalance = CcurrentBalance + depositAmt;
        console.log(CcurrentBalance);

        //display the currentBalance
        $('#checking div.balance').html(CcurrentBalance);
})


//checking withdraw button function
$('#checking input.withdraw').on('click', function(){
        //retreiving deposit value
        var withdrawAmt = $('#checking input.input').val();
        // console.log(withdrawAmt);

        //changing deposit to Number
        withdrawAmt = parseInt(withdrawAmt);
        // console.log(withdrawAmt);

        var totalBalance = CcurrentBalance + ScurrentBalance;
        console.log(totalBalance);

        if (CcurrentBalance > withdrawAmt) {
        //adding to the current balance
          CcurrentBalance = CcurrentBalance - withdrawAmt;
        // console.log(CcurrentBalance);
        }
        //overdraftprotection
        else if (CcurrentBalance < withdrawAmt) {
              if (withdrawAmt > totalBalance){
                alert("you're broke!")
              } else {
              ScurrentBalance = ScurrentBalance - (withdrawAmt - CcurrentBalance);
              CcurrentBalance = 0;
          }
        }



        //display the currentBalance
        $('#checking div.balance').html(CcurrentBalance);
        $('#savings div.balance').html(ScurrentBalance);

})
