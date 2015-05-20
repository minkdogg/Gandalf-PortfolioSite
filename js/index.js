//when video plays within each individual modal, script turns video off on close. Without
//script, video will continue to play even after the modal has been stopped.	

$(document).ready(function(){
	//friend modal
	$("#mymodalfriends").on('hidden.bs.modal', function (e) {
    $("#mymodalfriends iframe").attr("src", $("#mymodalfriends iframe").attr("src"));
	});
	
	//emmet and lucy modal
	$("#my-modal-love").on('hidden.bs.modal', function (e) {
    $("#mymodallove iframe").attr("src", $("#mymodallove iframe").attr("src"));
	});
	
	//enemy modal
	$("#mymodalbad").on('hidden.bs.modal', function (e) {
    $("#mymodalbad iframe").attr("src", $("#mymodalbad iframe").attr("src"));
	});
	
});
	
	