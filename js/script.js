$(document).ready(function(){

	$("#list").sortable();

	$('#submit-button').click(function(){
		event.preventDefault();
		var item = $("input#listbuilder").val();
		if(item.trim().length==0){
			$('#error').show();
		}else{
		$('#list').append("<li class='list-group-item'>" + item + '<input type="button" class="btn btn-danger" value="Delete" id="remove-button">' +
			'<input type="button" class="btn btn-success" value="Done" id="done-button"></li>');
			$('#error').hide();
	}

		document.getElementById('listbuilder').value = null;
	});

	$('ul').on('click','#done-button', function(){
		$(this).closest("li").toggleClass("done");
	});

	$('ul').on('click','#remove-button', function(){
		$(this).closest("li").remove();
	});

	$('#reset-button').click(function(){
		$('ul').empty();
		$('#error').hide();
	});


});
