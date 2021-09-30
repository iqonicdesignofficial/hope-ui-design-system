/*
* Version: 1.0.3
* Template: Hope-Ui - Responsive Bootstrap 5 Admin Dashboard Template
* Author: iqonic.design
* Design and Developed by: iqonic.design
* NOTE: This file contains the script for initialize & listener Template.
*/

/*----------------------------------------------
Index Of Script
------------------------------------------------

------- Plugin Init --------

:: Tooltip
:: Popover
:: NoUiSlider
:: Vanila Datepicker
:: SliderTab

------ Functions --------

:: Loader Init
:: Resize Plugins
:: Sidebar Toggle
:: Back To Top

------- Listners ---------

:: DOMContentLoaded
:: Window Resize
------------------------------------------------
Index Of Script
----------------------------------------------*/
"use strict";
/*---------------------------------------------------------------------
              Popover
-----------------------------------------------------------------------*/

var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
if(typeof bootstrap !== typeof undefined) {
  var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl)
  })
}

/*---------------------------------------------------------------------
                Tooltip
-----------------------------------------------------------------------*/
if(typeof bootstrap !== typeof undefined) {
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
  })

  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-sidebar-toggle="tooltip"]'))
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
  })
}




/*---------------------------------------------------------------------
Progress Bar
-----------------------------------------------------------------------*/
const progressBarInit = (elem) => {
  const currentValue = elem.getAttribute('aria-valuenow')
  elem.style.width = '0%'
  elem.style.transition = 'width 2s'
  if (typeof Waypoint !== typeof undefined) {
    new Waypoint( {
      element: elem,
      handler: function() { 
        setTimeout(() => {
          elem.style.width = currentValue + '%'
        }, 100);
      },
      offset: 'bottom-in-view',
    })
  }
}

const customProgressBar = document.querySelectorAll('[data-toggle="progress-bar"]')
Array.from(customProgressBar, (elem) => {
  progressBarInit(elem)
})

/*---------------------------------------------------------------------
                 noUiSlider
-----------------------------------------------------------------------*/

const rangeSlider = document.querySelectorAll('.range-slider');

Array.from(rangeSlider, (elem) => {
  if(typeof noUiSlider !== typeof undefined) {
    noUiSlider.create(elem, {
      start: [20, 80],
      connect: true,
      range: {
          'min': 0,
          'max': 100
      }
    })
  }
})

const slider = document.querySelectorAll('.slider');

Array.from(slider, (elem) => {
  if(typeof noUiSlider !== typeof undefined) {
    noUiSlider.create(elem, {
      start: 50,
      connect: [true, false],
      range: {
          'min': 0,
          'max': 100
      }
    })
  }
})


/*---------------------------------------------------------------------
              Vanila Datepicker
-----------------------------------------------------------------------*/
const datepickers = document.querySelectorAll('.vanila-datepicker')
Array.from(datepickers, (elem) => {
  if(typeof Datepicker !== typeof undefined) {
    new Datepicker(elem)
  }
})
const daterangePickers = document.querySelectorAll('.vanila-daterangepicker')
Array.from(daterangePickers, (elem) => {
  if(typeof Datepicker !== typeof undefined) {
    new DateRangePicker(elem)
  }
})

/*---------------------------------------------------------------------
              CounterUp 2
-----------------------------------------------------------------------*/
if (window.counterUp !== undefined) {
  const counterUp = window.counterUp["default"];
  const counterUp2 = document.querySelectorAll( '.counter' )
  Array.from(counterUp2, (el) => {
    if (typeof Waypoint !== typeof undefined) {
      const waypoint = new Waypoint({
        element: el,
        handler: function () {
          counterUp(el, {
            duration: 1000,
            delay: 10,
          });
          this.destroy();
        },
        offset: "bottom-in-view",
      });
    }
  })
}

/*---------------------------------------------------------------------
              SliderTab
-----------------------------------------------------------------------*/

Array.from(document.querySelectorAll('[data-toggle="slider-tab"]'), (elem) => {
  if (typeof SliderTab !== typeof undefined) {
    new SliderTab(elem)
    elem.classList.add('nav-slider')
  }
})


/*---------------------------------------------------------------------
              Resize Plugins
-----------------------------------------------------------------------*/

const resizePlugins = () => {
  // sidebar-mini
  const tabs = document.querySelectorAll('.nav')
  const sidebarResponsive = document.querySelector('.sidebar-default')
  if (window.innerWidth < 1025) {
    Array.from(tabs, (elem) => {
      if (!elem.classList.contains('flex-column') && elem.classList.contains('nav-tabs') && elem.classList.contains('nav-pills')) {
        elem.classList.add('flex-column', 'on-resize');
      }
    })
    if(sidebarResponsive !== null) {
      if (!sidebarResponsive.classList.contains('sidebar-mini')) {
        sidebarResponsive.classList.add('sidebar-mini','on-resize')
      }
    }
  } else {
    Array.from(tabs, (elem) => {
      if (elem.classList.contains('on-resize')) {
        elem.classList.remove('flex-column', 'on-resize');
      }
    })
    if(sidebarResponsive !== null) {
      if (sidebarResponsive.classList.contains('sidebar-mini') && sidebarResponsive.classList.contains('on-resize')) {
        sidebarResponsive.classList.remove('sidebar-mini','on-resize')
      }
    }
  }
}


/*---------------------------------------------------------------------
              LoaderInit
-----------------------------------------------------------------------*/

const loaderInit = () => {
  const loader = document.querySelector('.loader')
  setTimeout(() => {
    loader.classList.add('animate__animated', 'animate__fadeOut')
    setTimeout(() => {
      loader.classList.add('d-none')
    }, 500)
  }, 500)
}

/*---------------------------------------------------------------------
              Sidebar Toggle
-----------------------------------------------------------------------*/
const sidebarToggle = (elem) => {
  elem.addEventListener('click', (e) => {
    const sidebar = document.querySelector('.sidebar')
    if (sidebar.classList.contains('sidebar-mini')) {
      sidebar.classList.remove('sidebar-mini')
    } else {
      sidebar.classList.add('sidebar-mini')
    }
  })
}

const sidebarToggleBtn = document.querySelectorAll('[data-toggle="sidebar"]')
const sidebar = document.querySelector('.sidebar-default')
if (sidebar !== null) {
  const sidebarActiveItem = sidebar.querySelectorAll('.active')
  Array.from(sidebarActiveItem, (elem) => {
    if (!elem.closest('ul').classList.contains('iq-main-menu')) {
      const childMenu = elem.closest('ul')
      childMenu.classList.add('show')
      const parentMenu = childMenu.closest('li').querySelector('.nav-link')
      parentMenu.classList.add('collapsed')
      parentMenu.setAttribute('aria-expanded', true)
    }
  })
}
Array.from(sidebarToggleBtn, (sidebarBtn) => {
  sidebarToggle(sidebarBtn)
})

/*------------------------
Back To Top
--------------------------*/
const backToTop = document.querySelector('#back-to-top')

backToTop.classList.add('animate__animated','animate__fadeOut')

window.addEventListener('scroll', (e) => {
  if (document.documentElement.scrollTop > 250) {
    backToTop.classList.remove('animate__fadeOut')
    backToTop.classList.add('animate__fadeIn')
  }else {
    backToTop.classList.remove('animate__fadeIn')
    backToTop.classList.add('animate__fadeOut')
  }
})

// scroll body to 0px on click
document.querySelector('#top').addEventListener('click', (e) => {
  e.preventDefault()
  window.scrollTo({top: 0, behavior: 'smooth'});
})

/*---------------------------------------------------------------------
              DOMContentLoaded
-----------------------------------------------------------------------*/
document.addEventListener('DOMContentLoaded', (event) => {
  resizePlugins()
  loaderInit()
});

/*---------------------------------------------------------------------
              Window Resize
-----------------------------------------------------------------------*/

window.addEventListener('resize', function(event) {
  resizePlugins()
});

/*-------------------------------
| | | | | DropDown
--------------------------------*/

function darken_screen(yesno){
  if( yesno == true ){
    if (document.querySelector('.screen-darken') !== null) {
      document.querySelector('.screen-darken').classList.add('active');
    }
  }
  else if(yesno == false){
    if (document.querySelector('.screen-darken') !== null) {
      document.querySelector('.screen-darken').classList.remove('active');
    }
  }
}
	
function close_offcanvas(){
  darken_screen(false);
  if (document.querySelector('.mobile-offcanvas.show') !== null) {
    document.querySelector('.mobile-offcanvas.show').classList.remove('show');
    document.body.classList.remove('offcanvas-active');
  }
}

function show_offcanvas(offcanvas_id){
  darken_screen(true);
  if(document.getElementById(offcanvas_id) !== null) {
    document.getElementById(offcanvas_id).classList.add('show');
    document.body.classList.add('offcanvas-active');
  }
}

document.addEventListener("DOMContentLoaded", function(){
  document.querySelectorAll('[data-trigger]').forEach(function(everyelement){
    let offcanvas_id = everyelement.getAttribute('data-trigger');
    everyelement.addEventListener('click', function (e) {
      e.preventDefault();
          show_offcanvas(offcanvas_id);
    });
  });
  if(document.querySelectorAll('.btn-close')) {
    document.querySelectorAll('.btn-close').forEach(function(everybutton){
      everybutton.addEventListener('click', function (e) { 
            close_offcanvas();
        });
    });
  }
  if(document.querySelector('.screen-darken')) {
    document.querySelector('.screen-darken').addEventListener('click', function(event){
      close_offcanvas();
    });
  }
});
if (document.querySelector('#navbarSideCollapse'))  {
  document.querySelector('#navbarSideCollapse').addEventListener('click', function () {
    document.querySelector('.offcanvas-collapse').classList.toggle('open')
  })
}