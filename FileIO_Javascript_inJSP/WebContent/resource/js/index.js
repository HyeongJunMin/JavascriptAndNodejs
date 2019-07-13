function chkLink(){
	alert('Connected');
	
    var jbBtn = document.createElement( 'a' );
    var jbBtnText = document.createTextNode( 'Click' );
    jbBtn.appendChild( jbBtnText );
    document.getElementById("divRead").appendChild( jbBtn );
}
var lst = 1;
function addString(str){
	
    var brTag = document.createElement( 'br' );
    document.getElementById("divRead").appendChild( brTag );
	
    var tagType = document.createElement( 'a' );
    var inputText = document.createTextNode( lst + ': ' + str );
    tagType.appendChild( inputText );
    document.getElementById("divRead").appendChild( tagType );
    

    lst += 1;
}

function jspString(){
	
}

function logSave(){
	
}