document.addEventListener('DOMContentLoaded', function() {

    //---Mobile menu
    var burgerButton = document.getElementById('menuTrigger');
    var menu = document.querySelector('.menu');

    burgerButton.addEventListener('click', function() {
        menu.classList.toggle('active-menu');
        this.classList.toggle('active-trigger')
    });

    /**********************************************************************/
    //---Responsive submenu

    timeoutId = undefined;
    //---mouseenter callback function:
    function openSubmenu(event) {
        mainMenuElements.forEach(function(element) {
            //---checking if every menu element has submenu(to prevent error)
            if(element.querySelector('.nav-submenu')) {
                //---if it has submenu - check if it is open
                if(element.querySelector('.nav-submenu').style.display === 'flex') {
                    //---close if it is open
                    element.querySelector('.nav-submenu').style.display = 'none';
                }
            }
        });
        //---check if the element which event was triggered by listener has submenu
        var subList = this.querySelector('.nav-submenu');
        if(subList) {
            //---if it has submenu, clear timeout function set when mouseleft
            clearTimeout(timeoutId);
            //---show the submenu of the element
            subList.style.display = 'flex';
        }
    }

    //---mouseleave and click callback function
    function closeSubmenu(event) {
        //---check if the element which event was triggered by listener has submenu
        var subList = this.querySelector('.nav-submenu');
        if(subList) {
            //---if it has submenu, check if the event was a click
            if(event.type === 'click'/* && event.currentTarget !== subList.parentElement*/) {
                //---if it was a click, close submenu immediately
                subList.style.display = 'none';
                //event.stopImmediatePropagation();
            } else {
                //---if it was a mouseleave then close with timeout
                timeoutId = setTimeout(function() {
                    subList.style.display = 'none';
                }, 700);
            }
        }
    }

    var mainMenuElements = document.querySelectorAll('nav>ul>li');
    mainMenuElements.forEach(function(element) {
        element.addEventListener('mouseenter', openSubmenu);
        element.addEventListener('mouseleave', closeSubmenu);
        element.addEventListener('click', closeSubmenu);
    });
    //document.addEventListener('click', closeSubmenu);

    /******************************************************************/
    //---Slider + transition effect
    var prevPicture = document.getElementById('prevPicture');
    var nextPicture = document.getElementById('nextPicture');
    var sliders = document.querySelectorAll('.slider li');
    var sliderIndex = 0;

    sliders[0].classList.add('visible');
    //sliders[sliderIndex].firstElementChild.style.opacity = 0;
    prevPicture.addEventListener('click', function() {
        sliders[sliderIndex].firstElementChild.style.opacity = 0;
        //---resetting previous element's opacity
        if(sliderIndex<=0) {
            sliders[sliders.length-1].firstElementChild.style.opacity = 0;
        } else {
            sliders[sliderIndex-1].firstElementChild.style.opacity = 0;
        }
        var slidePrevTimeout = setTimeout(function () {
            sliders[sliderIndex].classList.remove('visible');
            sliderIndex--;
            if(sliderIndex<0) {
                sliderIndex = sliders.length - 1;
            }
            sliders[sliderIndex].classList.add('visible');
            sliders[sliderIndex].firstElementChild.style.opacity = 100;
            //---resetting the opacity of the element for mobile media
            if(sliderIndex>=sliders.length-1) {
                sliders[0].firstElementChild.style.opacity = 100;
            } else {
                sliders[sliderIndex+1].firstElementChild.style.opacity = 100;
            }
            clearTimeout(slidePrevTimeout);
        }, 500);
    });

    nextPicture.addEventListener('click', function() {
        sliders[sliderIndex].firstElementChild.style.opacity = 0;
        //---resetting next element's opacity
        if(sliderIndex>=sliders.length-1) {
            sliders[0].firstElementChild.style.opacity = 0;
        } else {
            sliders[sliderIndex+1].firstElementChild.style.opacity = 0;
        }
        var slideNextTimeout = setTimeout(function () {
            sliders[sliderIndex].classList.remove('visible');
            sliderIndex++;
            if(sliderIndex>sliders.length - 1) {
                sliderIndex = 0;
            }
            sliders[sliderIndex].classList.add('visible');
            sliders[sliderIndex].firstElementChild.style.opacity = 100;
            //---resetting the opacity of the element for mobile media
            if(sliderIndex<=0) {
                sliders[sliders.length-1].firstElementChild.style.opacity = 100;
            } else {
                sliders[sliderIndex-1].firstElementChild.style.opacity = 100;
            }
            clearTimeout(slideNextTimeout);
        }, 500);
    });

});
