/**
 * Created by AB on 9/6/15.
 */

$(function(){

        var num = 15
            , returnVal = 0;

        var printNum = function(){
            $('#output').html(returnVal);
        };

        $('#my-button').click(function(){
                var userNum = $("#userNum").val()
                calcFizzBuzz((userNum || num))
                printNum();
            }
        );

        var calcFizzBuzz = function(num){
            for(var i = 1;i <= num;i++){
                (returnVal == 0)? returnVal = "<br>" + (i) + fizzy(i) : returnVal += "<br>" + (i) + fizzy(i);
            }

        }

        var fizzy = function(aNum){
            return (
                ((aNum % 3)?"":"Fizz") +
                ((aNum % 5)?"":"Buzz")
            )
        }

    }
);

