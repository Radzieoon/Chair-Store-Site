document.addEventListener('DOMContentLoaded', function() {

    var button = document.getElementById('menuTrigger');
    var menu = document.querySelector('.menu');

    button.addEventListener('click', function() {
        menu.classList.toggle('active-menu');
        this.classList.toggle('active-trigger')
    });

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
});
