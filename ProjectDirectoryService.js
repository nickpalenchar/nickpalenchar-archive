/* 
* name: the name
* descriptions: the description
* types: Array of enums: npm, web
* href: link to the project.
* 
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
    ]
  }
  
);

nickpal.service('ProjectDirectory', function () {
  
});
