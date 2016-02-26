// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
		$count = 0;
         $(document).on('click', '#button1', function(){
    
        $("#button1").hide();
        $count = 0;
        var callfun = setInterval(function() {
            $.ajax({
                url: "/location/home",
                type: "GET",
                datatype: "text/html",
                data: $.param({ dataset: $count}),
                success: function(result){
                	$id = "#" + (($count % 20));
                    $($id).slideUp();
                    //console.log("result : " + result);
                    $s = "<tr>" + result + "</tr>";
                    //$("div").append(result)
                    $($id).html($s).slideDown();
                    $count = $count + 1;
                    if($count == 200){

                		clearInterval(callfun);

            		}
                },
                error: function(error){
                    console.log(error);
                }
            });

            $count = $count + 1;
            if($count == 100){

                clearInterval(callfun);

            }
        }, 500);
        
});