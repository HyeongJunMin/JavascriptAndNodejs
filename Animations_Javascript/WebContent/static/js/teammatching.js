/**
 * 
 */
$(function(){
	$("#btnReset").hide();
	$("#btnConfirm").click(function(){
		var numLeader = parseInt(spinner.spinner( "value" ));

		for(i = 0 ; i < numLeader ; i++){
			
			$("#content2").append('<p>팀리더'+(i+1)+' : <input type="text" size="12"/></p>');
		}
		
		//alert(numLeader);
		spinner.spinner( "disable" );
		$(this).hide();
		$("#btnReset").show();
	});
	
	
	
	//jQuery UI functions
	var spinner = $( "#spinner" ).spinner();
	 
    $( "#disable" ).on( "click", function() {
      if ( spinner.spinner( "option", "disabled" ) ) {
        spinner.spinner( "enable" );
      } else {
        spinner.spinner( "disable" );
      }
    });
    $( "#destroy" ).on( "click", function() {
      if ( spinner.spinner( "instance" ) ) {
        spinner.spinner( "destroy" );
      } else {
        spinner.spinner();
      }
    });
    $( "#getvalue" ).on( "click", function() {
      alert( spinner.spinner( "value" ) );
    });
    $( "#setvalue" ).on( "click", function() {
      spinner.spinner( "value", 5 );
    });
 
    $( "button" ).button();
});