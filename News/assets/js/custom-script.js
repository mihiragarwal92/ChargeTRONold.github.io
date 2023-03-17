// Marckenley Celestin | Electric Zone 2022 | cybershelter.be
// Doing some funky stuff here.

var ElectricZone = {

  init : function() {
    ElectricZone.initScreenResolution();
    ElectricZone.initEventFilter();
    ElectricZone.initCookies();
    ElectricZone.initScroller();
    ElectricZone.initSeparator();
    ElectricZone.initSidebar();
    ElectricZone.initPostLimit();
    if (document.querySelector('#map')) { 
      ElectricZone.inittheMAP();
    }

  },

  initScroller : function() {

    const scrollTopWrapper = document.querySelector('.scroll-top-wrapper');
    let isScrolling;

    scrollTopWrapper.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    });

    function checkScrollTop() {
      if (window.scrollY === 0) {
        scrollTopWrapper.classList.add('hidden');
      } else {
        scrollTopWrapper.classList.remove('hidden');
      }
      isScrolling = false;
    };

    window.addEventListener('scroll', () => {
      if (isScrolling) return;
      isScrolling = true;
      window.requestAnimationFrame(checkScrollTop);
    });
  },

  initCookies : function() {
    //cookies JS
    // Check if the "cookieAccepted" cookie exists
    if (document.cookie.indexOf("cookieAccepted=true") >= 0) {
      document.querySelector('.cck-container').style.display = 'none';
    } else {

      var acceptButton = document.querySelector('.cck-actions-button[href="#accept"]');

      acceptButton.addEventListener('click', function() {
        document.cookie = "cookieAccepted=true; path=/; expires=Fri, 31 Dec 9999 23:59:59 GMT; SameSite=None; Priority=High; Secure";

        // Hide the cookie consent banner
        document.querySelector('.cck-container').style.display = 'none';
      });
    }
  },

  initSeparator : function() {
    var separator = $("#separator");
    var leftPanel = $("#left-panel");
    var rightPanel = $("#right-panel");
    var container = $("#panel-container");
    // var separatorPosition = separator.position().left;
  
    var isResizing = false;
    var animationFrameRequested = false;

    // Get the panel sizes from local storage
    var leftPanelWidth = parseInt(localStorage.getItem("leftPanelWidth"));
    if (isNaN(leftPanelWidth)) {
      leftPanelWidth = 600;
    };

    leftPanel.css("flex-basis", leftPanelWidth);
    var rightPanelWidth = container.width() - leftPanelWidth - separator.width();
    rightPanelWidth = Math.min(rightPanelWidth, 400);
    rightPanel.css("flex-basis", rightPanelWidth);
  
    separator.on("mousedown", function(e) {
      isResizing = true;
    });

    $(document).on("mouseup", function(e) {
      isResizing = false;
    });

    $(document).on("mousemove", function(e) {
      if (isResizing) {
        if (!animationFrameRequested) {
          requestAnimationFrame(function() {
            var x = e.pageX - container.offset().left;
  
            if (x <= 560) {
              x = 560;
              isResizing = false;
            }
  
            var newLeftPanelWidth = x;
            var newRightPanelWidth = container.width() - newLeftPanelWidth - separator.width();
  
            if (newRightPanelWidth > 400 && newLeftPanelWidth >= 560) {
              leftPanel.css("flex-basis", newLeftPanelWidth);
              rightPanel.css("flex-basis", newRightPanelWidth);
  
              // Save the panel sizes to local storage
              localStorage.setItem("leftPanelWidth", newLeftPanelWidth);
            } else {
              isResizing = false;
            }
  
            animationFrameRequested = false;
          });
  
          animationFrameRequested = true;
        }
      }
    });

    $(window).on("resize", function() {
      var containerWidth = container.width();
      var separatorWidth = separator.width();
  
      leftPanelWidth = parseInt(localStorage.getItem("leftPanelWidth"));
      if (isNaN(leftPanelWidth)) {
        leftPanelWidth = 600;
      }
  
      var rightPanelWidth = containerWidth - leftPanelWidth - separatorWidth;
      rightPanelWidth = Math.min(rightPanelWidth, 400);
  
      // Only change the left panel width if it's larger than the minimum allowed width
      if (leftPanelWidth > containerWidth - 400 - separatorWidth) {
        leftPanelWidth = containerWidth - 400 - separatorWidth;
        localStorage.setItem("leftPanelWidth", leftPanelWidth);
      }
  
      leftPanel.css("flex-basis", leftPanelWidth);
      rightPanel.css("flex-basis", rightPanelWidth);
    });
  },

  initSidebar : function() {
    //Sidebar
    const sections = document.querySelectorAll('.blog-post h2');
    const navItems = document.querySelectorAll('.sidebar li a');

    window.addEventListener('scroll', () => {
      let current = '';

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop - sectionHeight / 3) {
          current = section.getAttribute('id');
        }
      });

      navItems.forEach((navItem) => {
        navItem.parentNode.classList.remove('active');

        if (navItem.getAttribute('href').slice(1) === current) {
          navItem.parentNode.classList.add('active');
          navItem.nextElementSibling.classList.add('active'); // Highlight the icon
        } else {
          navItem.nextElementSibling.classList.remove('active'); // Remove the highlight from the icon
        }
      });
    });
  },

  initPostLimit : function() {
    const featuredPostsContainer = document.getElementById("featured-posts-container");
    if (!featuredPostsContainer) {
        return;
    }
    let postlimit = 10;
    const featuredPosts = featuredPostsContainer.children;

    const screenPostLimitMap = new Map([
      [720, 3],
      [768, 4],
      [800, 4],
      [820, 4],
      [1024, 4],
      [1920, 5],
      [1280, 6],
      [1366, 3],
      [1440, 4],
      [1536, 4],
      [1600, 4],
      [1680, 4],
      [1792, 5],
      [2560, 7],
      [3440, 9],
      [3840, 11],
      [5120, 14],
    ]);

    function updatePostLimit() {
      const browserWidth = window.innerWidth;
      postlimit = screenPostLimitMap.get(browserWidth) || 5;

      for (let i = 0; i < featuredPosts.length; i++) {
        if (i >= postlimit) {
          featuredPosts[i].classList.add("d-none");
        } else {
          featuredPosts[i].classList.remove("d-none");
        }
      }
    }
    
    window.addEventListener("resize", updatePostLimit);
    updatePostLimit();
  },

  initEventFilter: function() {
    console.log("initEventFilter called");
    const countryFilter = document.getElementById('country-select');
    if (!countryFilter) return console.warn('Could not find country filter.');

    let selected_country = '';

    function updateEventList() {
      const eventCards = document.querySelectorAll('#event-cards li.event');
      eventCards.forEach(card => {
        const cardCountry = card.dataset.country.toLowerCase();
        if (selected_country === '' || selected_country === 'all europe' || cardCountry.includes(selected_country)) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    }
    

    countryFilter.addEventListener('change', (event) => {
      selected_country = event.target.value.trim().toLowerCase();
      console.log(selected_country);
      updateEventList();
    });

    const clearButton = document.getElementById('clear-button');
    clearButton.addEventListener('click', () => {
      selected_country = '';
      countryFilter.value = '';
      updateEventList();
    });
  },


  initScreenResolution : function() {
    const resolution = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    // save the resolution to local storage
    localStorage.setItem("screenWidth", resolution);
  },

  inittheMAP: function() {
    var self = this;
  
    var firstEventElement = document.querySelector('.event');
  
    var lat = parseFloat(firstEventElement.dataset.lat);
    var lon = parseFloat(firstEventElement.dataset.lon);
  
    var map = L.map('map').setView([lat, lon], 13);
  
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
      maxZoom: 18,
    }).addTo(map);
  
    var circle = L.circle([lat, lon], {
      color: '#0085A1',
      fillColor: '#0085A1',
      fillOpacity: 0.2,
      radius: 1000 // not kilometers
    }).addTo(map);
  
    var clickedEvents = {};
    var circles = {};
  
    // Adding the circle to the circles object
    circles[lat + ',' + lon] = circle;
  

    var eventElements = document.querySelectorAll('.event');
    for (var i = 0; i < eventElements.length; i++) {
      eventElements[i].addEventListener('click', function(e) {
        var lat = parseFloat(this.dataset.lat);
        var lon = parseFloat(this.dataset.lon);
  
        if (clickedEvents[lat + ',' + lon]) {
          if (circles[lat + ',' + lon]) {
            map.setView([lat, lon], 13);
          } else {
            console.log("Circle already exists for this event but was not found on the map");
          }
          return;
        }
  
        // Creating a circle layer with the coordinates
        if (!isNaN(lat) && !isNaN(lon)) {
          var circle = L.circle([lat, lon], {
            color: '#0085A1',
            fillColor: '#0085A1',
            fillOpacity: 0.2,
            radius: 1000 // meters
          }).addTo(map);
  
          circles[lat + ',' + lon] = circle;
  
          map.setView([lat, lon], 13);
  
          clickedEvents[lat + ',' + lon] = true;
        } else {
          console.log("Invalid latitude or longitude");
        }
      });
    }
  
    window.addEventListener('resize', function() {
      map.setView(map.getCenter());
    });
  }
  
};

document.addEventListener('DOMContentLoaded', ElectricZone.init);



