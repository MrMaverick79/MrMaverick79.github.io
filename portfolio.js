/* JavaScript for portfolio landing page */

/*burger menu*/

const burgerMenu = document.getElementById("burger_menu_image");
const portfolio_item_one = document.getElementById("portfolio__item_one");




function myFunction()
        { 
           
            document.getElementById("socials").classList.toggle("show");

        }

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
        if (!event.target.matches('.dropbtn')) {
          var dropdowns = document.getElementsByClassName("dropdown-content");
          var i;
          for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
              openDropdown.classList.remove('show');
            }
          }
        }
      } 



/* Make hidden text on portfolio visible

*/
$('.container').on('mouseenter', function() {
        $(this).toggleClass('show-description');
    });

    $('.container').on('mouseleave', function() {
        $(this).toggleClass('show-description');
    });