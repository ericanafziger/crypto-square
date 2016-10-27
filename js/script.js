var coder = function(input) {
	debugger;
	var removed = [];
	var removed2 = [];
	input = input.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
	var length = input.length;
	if (length <= 4) {
		var input = input.split("");
		removed = input.splice(0, 2);
		removed2 = input.splice(0, 2);
		return removed2;
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
