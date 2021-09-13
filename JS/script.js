// $(document).ready(function () {
//   // Add minus icon for collapse element which is open by default
//   $(".collapse.show").each(function () {
//     $(this)
//       .prev(".card-header")
//       .find(".fa")
//       .addClass("fa fa-minus")
//       .removeClass("fa fa-plus");
//   });

//   // Toggle plus minus icon on show hide of collapse element
//   $(".collapse")
//     .on("show.bs.collapse", function () {
//       $(this)
//         .prev(".card-header")
//         .find(".fa")
//         .removeClass("fa fa-plus")
//         .addClass("fa fa-minus");
//     })
//     .on("hide.bs.collapse", function () {
//       $(this)
//         .prev(".card-header")
//         .find(".fa")
//         .removeClass("fa fa-minus")
//         .addClass("fa fa-plus");
//     });
// });
$(".card-header").click(function () {
  $(this).find("i").toggleClass("fas fa-plus fas fa-minus");
});
