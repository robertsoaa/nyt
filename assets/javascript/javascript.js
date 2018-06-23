$("form-control").on("click", function () {
    event.preventDefault();
    var input = $(this).attr("data-form-control");
});
