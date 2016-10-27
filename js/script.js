var coder = function(input) {
	var shifted = [];
	input = input.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
	var length = input.length;
	if (length <= 4) {
		var input = input.split("");
		return input;
	}
}


	$(document).ready(function() {

			$("form").submit(function(event) {
				var message = $("input#sentence").val();
				var result = coder(message);
				$("#finished").text(result);
				event.preventDefault();
			});
		});
