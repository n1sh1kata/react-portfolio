import Animation from './animations.js';

window.onload = async function () {


  async function loadHtmlContent() {
    const response = await fetch('src/content.html');
    const htmlContent = await response.text();
    return htmlContent;
  }
  async function loadHtmlContent1() {
    const response = await fetch('src/content1.html');
    const htmlContent1 = await response.text();
    return htmlContent1;
  }
  async function loadHtmlContent2() {
    const response = await fetch('src/content2.html');
    const htmlContent2 = await response.text();
    return htmlContent2;
  }
  async function loadHtmlContent3() {
    const response = await fetch('src/content3.html');
    const htmlContent3 = await response.text();
    return htmlContent3;
  }
  async function loadHtmlContent4() {
    const response = await fetch('src/content4.html');
    const htmlContent4 = await response.text();
    return htmlContent4;
  }
  const htmlContent = await loadHtmlContent();
  const htmlContent1 = await loadHtmlContent1();
  const htmlContent2 = await loadHtmlContent2();
  const htmlContent3 = await loadHtmlContent3();
  const htmlContent4 = await loadHtmlContent4();

  const container2Contents = htmlContent;
  const container2Contents1 = htmlContent1;
  const container2Contents2 = htmlContent2;
  const container2Contents3 = htmlContent3;
  const container2Contents4 = htmlContent4;

  // Define the icons, titles, and descriptions in an array
  const navItems = [
    {
      class: 'about-me',
      icon: 'fas fa-user',
      title: 'About Me',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      class: 'services',
      icon: 'fas fa-gears',
      title: 'Services',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      class: 'experience',
      icon: 'fas fa-briefcase',
      title: 'Experience',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      class: 'education',
      icon: 'fas fa-school',
      title: 'Education',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      class: 'others',
      icon: 'fas fa-info',
      title: 'Others',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }
  ];
  const searchInput = document.querySelector('.search');
  const container = document.querySelector('.container-1-1-3');



  function animateCards() {
    const cardElements = document.querySelectorAll('.animate-cards');
    cardElements.forEach((element) => {
      const animate = new Animation(element, 'slideInBottom', { duration: 500, easing: 'ease-in-out' });
      animate.animate();
    });
  }

  function animateCards1() {
    const cardElements = document.querySelectorAll('.animate-cards-1');
    cardElements.forEach((element) => {
      const animate = new Animation(element, 'slideInLeft', { duration: 500, easing: 'ease-in-out' });
      animate.animate();
    });
  }

  function animateContainer1() {
    const cardElements = document.querySelectorAll('.animate-container-1');
    cardElements.forEach((element) => {
      const animate = new Animation(element, 'slideInLeft', { duration: 500, easing: 'ease-in-out' });
      animate.animate();
    });
  }

  function animateCards4() {
    const cardElements = document.querySelectorAll('.animate-cards-4');
    cardElements.forEach((element) => {
      const animate = new Animation(element, 'slideInRight', { duration: 500, easing: 'ease-in-out' });
      animate.animate();
    });
  }

  function animateContainer2() {
    const cardElements = document.querySelectorAll('.animate-container-2');
    cardElements.forEach((element) => {
      const animate = new Animation(element, 'slideInRight', { duration: 500, easing: 'ease-in-out' });
      animate.animate();
    });
  }

  function animateCards2() {
    const cardElements = document.querySelectorAll('.animate-cards-2');
    cardElements.forEach((element) => {
      const animate = new Animation(element, 'slideInTop', { duration: 500, easing: 'ease-in-out' });
      animate.animate();
    });
  }

  function animateCards3() {
    const cardElements = document.querySelectorAll('.animate-cards-3');
    cardElements.forEach((element) => {
      const animate = new Animation(element, 'blurIn', { duration: 1000, easing: 'ease-in-out' });
      animate.animate();
    });
  }

  function animateCards5() {
    const cardElements = document.querySelectorAll('.animate-cards-5');
    cardElements.forEach((element) => {
      const animate = new Animation(element, 'typewrite', {
        typingSpeed: 100,
        loop: true,
        typeBy: 'char',
        loopDelay: 1000,
      });
      animate.animate();
    });
  }

  function insertContainer2Contents() {
    const container2 = document.querySelector('.container-2 .with-buttons');
    container2.innerHTML = container2Contents;
  }

  function insertContainer2Contents1() {
    const container2 = document.querySelector('.container-2 .with-buttons');
    container2.innerHTML = container2Contents1;
  }

  function insertContainer2Contents2() {
    const container2 = document.querySelector('.container-2 .with-buttons');
    container2.innerHTML = container2Contents2;
  }

  function insertContainer2Contents3() {
    const container2 = document.querySelector('.container-2 .with-buttons');
    container2.innerHTML = container2Contents3;
  }

  function insertContainer2Contents4() {
    const container2 = document.querySelector('.container-2 .with-buttons');
    container2.innerHTML = container2Contents4;
  }

  function resetSearchInput() {
    document.querySelector('.search').value = '';
  }

  // Function to populate the container with nav items
  function populateContainer(navItems) {
    container.innerHTML = ''; // clear the container

    navItems.forEach((item) => {
      const navItem = document.createElement('div');

      navItem.classList.add('container-nav', 'w-max', 'b-rad', 'hover-1', item.class);

      const group1 = document.createElement('div');
      group1.classList.add('group-1');
      const icon = document.createElement('i');
      const iconClasses = item.icon.split(' '); // Split the icon string into an array of classes
      iconClasses.forEach((cls) => {
        icon.classList.add(cls); // Add each class individually
      });
      icon.classList.add('icons');
      group1.appendChild(icon);

      const group2 = document.createElement('div');
      group2.classList.add('group-2', 'remove');
      const title = document.createElement('p');
      title.classList.add('title', 'f-weight');
      title.textContent = item.title;
      const description = document.createElement('p');
      description.textContent = item.description;
      group2.appendChild(title);
      group2.appendChild(description);

      navItem.appendChild(group1);
      navItem.appendChild(group2);

      container.appendChild(navItem);

      // Get the elements with the class you want to click
      const clickableElements = document.querySelectorAll('.about-me');

      // Add an event listener to each element
      clickableElements.forEach((element) => {
        element.addEventListener('click', () => {
          // Insert the container2Contents into the .container-2 element
          insertContainer2Contents();

          // Animate the insertion of the contents
          animateCards();
          animateCards1();
          animateCards2();
          animateCards3();
          animateCards4();
          animateCards5();
        });
      });

      // Get the elements with the class you want to click
      const clickableElements2 = document.querySelectorAll('.experience');

      // Add an event listener to each element
      clickableElements2.forEach((element) => {
        element.addEventListener('click', () => {
          // Insert the container2Contents into the .container-2 element
          insertContainer2Contents2();

          // Animate the insertion of the contents
          animateCards();
          animateCards1();
          animateCards2();
          animateCards3();
          animateCards4();
          animateCards5();
        });
      });

      // Get the elements with the class you want to click
      const clickableElements3 = document.querySelectorAll('.education');

      // Add an event listener to each element
      clickableElements3.forEach((element) => {
        element.addEventListener('click', () => {
          // Insert the container2Contents into the .container-2 element
          insertContainer2Contents3();

          // Animate the insertion of the contents
          animateCards();
          animateCards1();
          animateCards2();
          animateCards3();
          animateCards4();
          animateCards5();
        });
      });

      // Get the elements with the class you want to click
      const clickableElements4 = document.querySelectorAll('.others');

      // Add an event listener to each element
      clickableElements4.forEach((element) => {
        element.addEventListener('click', () => {
          // Insert the container2Contents into the .container-2 element
          insertContainer2Contents4();

          // Animate the insertion of the contents
          animateCards();
          animateCards1();
          animateCards2();
          animateCards3();
          animateCards4();
          animateCards5();
        });
      });

      const clickableElements1 = document.querySelectorAll('.services');
      // Add an event listener to each element
      clickableElements1.forEach((element) => {
        element.addEventListener('click', () => {
          // Insert the container2Contents into the .container-2 element
          insertContainer2Contents1();
          // Animate the insertion of the contents
          animateCards();
          animateCards1();
          animateCards2();
          animateCards3();
          animateCards4();
          animateCards5();
        });
      });

      const animateGroup1 = new Animation(group1, 'flip', { duration: 500, easing: 'ease-in-out' });
      animateGroup1.animate();

      const animateTitle = new Animation(title, 'typewrite', {
        typingSpeed: 150,
        loop: false,
        typeBy: 'char',
        loopDelay: 2000
      });
      animateTitle.animate();

      const animateDesc = new Animation(description, 'typewrite', {
        typingSpeed: 150,
        loop: false,
        typeBy: 'word',
        loopDelay: 2000
      });
      animateDesc.animate();
    });
  }
  const minimizeButton = document.querySelectorAll('.minimize-button');
  const iconsContainer = document.querySelector('.container-1');
  const container3 = document.querySelector('.container-3');
  let isMinimized = false;
  // Add event listener to hover-2 elements
  const hover2Elements = iconsContainer.querySelectorAll('.hover-1');
  hover2Elements.forEach((element) => {
    element.addEventListener('mouseover', (event) => {
      const siblings = Array.prototype.filter.call(element.parentNode.children, (child) => {
        return child !== element;
      });
      siblings.forEach((sibling) => {
        sibling.classList.add('hover-2-hovered');
      });
    });
    element.addEventListener('mouseout', (event) => {
      const siblings = Array.prototype.filter.call(element.parentNode.children, (child) => {
        return child !== element;
      });
      siblings.forEach((sibling) => {
        sibling.classList.remove('hover-2-hovered');
      });
    });
  });

  minimizeButton.forEach((button) => {
    button.addEventListener('click', () => {
      populateContainer(navItems);
      resetSearchInput();
      if (!isMinimized) {
        iconsContainer.classList.add('minimized');
        isMinimized = true;
        // Hide elements with class "remove"
        const removeElements = iconsContainer.querySelectorAll('.remove');
        removeElements.forEach((element) => {
          element.classList.add('hidden');
        });
        // Add class to container-nav elements to override hover styles
        const navItems = iconsContainer.querySelectorAll('.hover-1');
        navItems.forEach((item) => {
          item.classList.add('hover-2');
          item.classList.remove('hover-1');
        });
        // Add center-icon class to elements with f-c class
        const fCElements = iconsContainer.querySelectorAll('.f-c');
        fCElements.forEach((element) => {
          element.classList.add('center-icon');
        });
        const iconElements = iconsContainer.querySelectorAll('.fa-square-minus');
        iconElements.forEach((element) => {
          element.classList.add('fa-expand');
          element.classList.remove('fa-square-minus');
        });
      } else {
        iconsContainer.classList.remove('minimized', 'hover-2-hovered');
        isMinimized = false;
        // Show elements with class "remove"
        const removeElements = iconsContainer.querySelectorAll('.remove');
        removeElements.forEach((element) => {
          element.classList.remove('hidden');
        });
        // Remove class from container-nav elements to restore hover styles
        const navItems = iconsContainer.querySelectorAll('.hover-2');
        navItems.forEach((item) => {
          item.classList.add('hover-1');
          item.classList.remove('hover-2');
        });
        // Remove center-icon class from elements with f-c class
        const fCElements = iconsContainer.querySelectorAll('.f-c');
        fCElements.forEach((element) => {
          element.classList.remove('center-icon');
        });
        const iconElements = iconsContainer.querySelectorAll('.fa-expand');
        iconElements.forEach((element) => {
          element.classList.add('fa-square-minus');
          element.classList.remove('fa-expand');
        });
      }
    });
  });

  searchInput.addEventListener('input', (e) => {
    const searchQuery = e.target.value.toLowerCase();
    const filteredNavItems = navItems.filter((item) => {
      return item.title.toLowerCase().includes(searchQuery);
    });
    populateContainer(filteredNavItems);
  });
  insertContainer2Contents();
  populateContainer(navItems);
  let isContainer3Minimized = false;

  function removeButtons() {
    const elements = document.querySelectorAll('.no-view-button');
    elements.forEach(function (element) {
      element.classList.add('no-view');
    });
  }

  function addButtons() {
    const elements = document.querySelectorAll('.no-view-button');
    elements.forEach(function (element) {
      element.classList.remove('no-view');
    });
  }

  function removeButtons1() {
    const elements = document.querySelectorAll('.no-view-button-1');
    elements.forEach(function (element) {
      element.classList.add('no-view');
    });
  }

  function addButtons1() {
    const elements = document.querySelectorAll('.no-view-button-1');
    elements.forEach(function (element) {
      element.classList.remove('no-view');
    });
  }

  function removeContainers() {
    const elements = document.querySelectorAll('.container-1, .container-3');
    elements.forEach(function (element) {
      element.classList.add('no-view');

    });
  }

  function addContainers() {
    const elements = document.querySelectorAll('.container-1, .container-3');
    elements.forEach(function (element) {
      element.classList.remove('no-view');

    });
  }

  function toggleMinimize() {
    if (window.innerWidth <= 1024 && window.innerWidth > 768) {
      addContainers();
      removeButtons();
      removeButtons1();
      openNav1();

      iconsContainer.classList.add('minimized');
      isMinimized = true;
      // Hide elements with class "remove"
      const removeElements = iconsContainer.querySelectorAll('.remove');
      removeElements.forEach((element) => {
        element.classList.add('hidden');
      });
      // Add class to container-nav elements to override hover styles
      const navItems = iconsContainer.querySelectorAll('.hover-1');
      navItems.forEach((item) => {
        item.classList.add('hover-2');
        item.classList.remove('hover-1');
      });

      console.log('Hello');
    } else if (window.innerWidth <= 768) {
      removeContainers();
      removeButtons1();
      addButtons();

      iconsContainer.classList.add('minimized');
      isMinimized = true;
      // Hide elements with class "remove"
      const removeElements = iconsContainer.querySelectorAll('.remove');
      removeElements.forEach((element) => {
        element.classList.add('hidden');
      });
      // Add class to container-nav elements to override hover styles
      const navItems = iconsContainer.querySelectorAll('.hover-1');
      navItems.forEach((item) => {
        item.classList.add('hover-2');
        item.classList.remove('hover-1');
      });
    } else {
      addContainers();
      removeButtons();
      addButtons1();
      openNav1();

      iconsContainer.classList.remove('minimized', 'hover-2-hovered');
      isMinimized = false;
      // Show elements with class "remove"
      const removeElements = iconsContainer.querySelectorAll('.remove');
      removeElements.forEach((element) => {
        element.classList.remove('hidden');
      });
      // Remove class from container-nav elements to restore hover styles
      const navItems = iconsContainer.querySelectorAll('.hover-2');
      navItems.forEach((item) => {
        item.classList.add('hover-1');
        item.classList.remove('hover-2');
      });
    }
  }

  window.addEventListener('resize', toggleMinimize);

  // Get the elements with the class you want to click

  // Call the function to insert the contents
  // insertContainer2Contents();
  // Populate the container with all nav items initially
  animateContainer1();
  animateContainer2();
  animateCards();
  animateCards1();
  animateCards2();
  animateCards3();
  animateCards4();
  animateCards5();
  toggleMinimize();
};