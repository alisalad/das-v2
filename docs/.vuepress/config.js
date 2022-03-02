module.exports = {
    // site config
    lang: 'en-US',
    title: 'Dastuurka',
    description: 'Jamhuuriyadda Federaalka ee Soomaaliya',

      // theme and its config
    theme: '@vuepress/theme-default',
    themeConfig: {

      navbar: [
        // NavbarItem
        {
          text: 'Home',
          link: '/README.md/',
    
        },
        
        {
          text: 'Dastuurka',
          link: '/pages/dastuurka.md/',
    
        },
        
        {
          text: 'Laws',
          link: '/Joo/',
    
        },
      ],

      logo: '/logo.svg',
    },
  }

  