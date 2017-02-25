/* 
* name: the name
* descriptions: the description
* types: Array of enums: npm, web
* href: link to the project.
* preview: Object[]
*   title?:
*   imgSrc?:
*   href:
*
*
*  `_hide` value for when the item is still WOP and should not show up on the site yet.
* 
*/

nickpal.value('directory',
  {
    projects: [
      {
        name: 'T-minus',
        description: 'Lightweight Javascript timer with built in pausing and custom function handling',
        types: ['npm'],
        href: 'https://www.npmjs.com/package/t-minus'
      },
      {
        name: 'SundialJS',
        description: 'Assisting library for easy day-by-day comparison',
        types: ['npm'],
        href: 'https://www.npmjs.com/package/sundial-js',
      },
      {
        name: 'Map My DOM',
        description: 'Parses HTML into an ASCII tree for visualization of DOM elements',
        preview: []
      }
    ],

    recordings: [
      {
        name: 'Modeling the Mongo Way',
        date: new Date('January 20, 2016'),
        link: '#',
        _hide: true
      }
    ]
  }
  
);

nickpal.service('ProjectDirectory', function () {
  
});
