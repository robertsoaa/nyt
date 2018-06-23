$("btn btn-primary").on("click", function () {
    event.preventDefault();
    var input = $(this).attr("data-form-control");
});
