/**
 * Created by AB on 9/6/15.
 */

$(function(){

        var num = 0;

        var printNum = function(){
            $('#output').html(num);
        };

        printNum();

        $('#my-button').click(function(){
                printNum();
            }
        );

    }
);

