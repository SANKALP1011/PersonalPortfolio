// $(document).ready(function(){
   
//     //Init ScrollMagic
//       var controller = new ScrollMagic.Controller();

//     //Scene
//       var ourScene = new ScrollMagic.Scene({
//          triggerElement: '.MidViewDesign'
//       })
//       .setClassToggle('.MidViewDesign','fade-in') // add the class
//       .addTo(controller)
// });
AOS.init({
  duration: 2000,
})
var CuurentDate = new Date();
document.getElementById("date").innerHTML=CuurentDate;