var coder = function(input) {
	debugger;
	var removed = [];
	var removed2 = [];
	// var removed3 = [];
	input = input.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
	var length = input.length;
	if (length <= 4) {
		var input = input.split("");
		removed = input.splice(0, 2);
		removed2 = input.splice(0, 2);
		var output = removed[0] + removed2[0] + removed[1] + removed2[1];
		output = output.replace(/[^A-Za-z0-9]/g, '');
		return output;
	} else if (length <= 6) {
		var input = input.split("");
		removed = input.splice(0, 3);
		removed2 = input.splice(0, 3);
		return removed[0] + removed2[0] + removed[1] + removed2[1] + removed[2] + removed2[2];
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
