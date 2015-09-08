/**
 * Created by AB on 9/6/15.
 */

$(function(){

        $scope.numbers = [1,2,3,4];
        $scope.fizzNum = 1;


        $scope.calcFizzBuzz = function(num){

            return (
                (num%15)?
                    (
                        !(num%3)?"Fizz":
                            (
                                !(num%5)?"Buzz":num
                            )
                    )
                    :"FizzBuzz"
            );

        };

        $("#btnExecute").click(function(){
                //calcFizzBuzz(10);
                $('#fizzBuzz').html(10);
            }
        );

        var btnGo = function(){
            $('#fizzBuzz').html(10);
        }

    }
);

