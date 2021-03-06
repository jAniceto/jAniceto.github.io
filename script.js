// Content
var context = { 
  "sitename" : "Projects", 
  "intro" : "Hi! My name is José Aniceto. Below is a list of my public projects. Fell free to <a href='//joseaniceto.com'>contact me</a> if you have any question." ,
  "projects": [
    {
      "name": "Murus",
      "description": 'A beautiful new tab page replacement for Google Chrome Extension developed in pure Javascript. Possibility to select wallpaper from several sources including any image subreddit.',
      "imageURL": "murus.png",
      "linkText": "",
      "URL": "",
      "githubURL": "//github.com/jAniceto/murus/",
      "tags": ["Chrome Extension", "Javascript", "API"]
    },
    {
      "name": "Pauper Deck Library v2",
      "description": 'A curated webpage of Magic: The Gathering decks, with card price information obtained from an external API. Built with <a href="https://reactjs.org/" target="_blank">ReactJS</a>.',
      "imageURL": "pauper-library-v2.png",
      "linkText": "See it live!",
      "URL": "//janiceto.github.io/pauper-library-react/",
      "githubURL": "//github.com/jAniceto/pauper-library-react",
      "tags": ["ReactJS", "Python", "APIs"]
    },
    {
      "name": "Spell Guesser",
      "description": 'An Harry Potter Spell Guessing game built with <a href="https://reactjs.org/" target="_blank">ReactJS</a>.',
      "imageURL": "spell-guesser.png",
      "linkText": "Play with it!",
      "URL": "https://janiceto.github.io/spell-guesser/",
      "githubURL": "//github.com/jAniceto/spell-guesser",
      "tags": ["ReactJS", "Javascript"]
    },
    {
      "name": "Ipso facto",
      "description": 'A collection of articles on math, data and code. Data vis mostly done with Python and <a href="https://jupyter.org/index.html" target="_blank">Jupyter Notebooks</a>, using <a href="https://matplotlib.org/" target="_blank">Matplotlib</a>, <a href="https://matplotlib.org/basemap/index.html" target="_blank">Basemap</a> and <a href="https://seaborn.pydata.org/" target="_blank">Seaborn</a>.',
      "imageURL": "ipso-facto.png",
      "linkText": "See it live!",
      "URL": "https://ipso-facto.joseaniceto.com/",
      "githubURL": "github.com/jAniceto/data-viz",
      "tags": ["Python", "Pandas", "SciPy", "Matplotlib", "Pelican"]
    },
    {
      "name": "EgiChem Group Website",
      "description": 'Website for the EgiChem Chemical Engineering Research Group. Built with Python <a href="https://www.djangoproject.com/">Django</a> and <a href="https://www.postgresql.org/">PostgreSQL</a>. Runs on <a href="https://www.heroku.com/">Heroku</a> and <a href="https://aws.amazon.com/pt/s3/">AWS S3</a>.',
      "imageURL": "egichem.png",
      "linkText": "See it live!",
      "URL": "https://www.egichem.com",
      "githubURL": "",
      "tags": ["Python", "Django", "Heroku", "AWS S3", "Bootstrap"]
    },
    {
      "name": "Pauper Deck Library v1",
      "description": 'A webpage dedicated to browse Magic: The Gathering decks, with updated card price information obtained from an API. A completely static website built with Python and the <a href="http://jinja.pocoo.org/docs/2.10/">Jinja2</a> templating language.',
      "imageURL": "pauper-library.jpg",
      "linkText": "See it live!",
      "URL": "//janiceto.github.io/pauper-library/",
      "githubURL": "//github.com/jAniceto/pauper-library",
      "tags": ["Python", "HTML/CSS", "Javascript", "Jinja", "APIs", "Bootstrap"]
    },
    {
      "name": "Annotatio",
      "description": 'A personal programming blog that gathers codding notes and snippets from my journey to self taught programming. Built with <a href="https://blog.getpelican.com/">Pelican</a> and a customized version of the <a href="https://github.com/jvanz/pelican-hyde">Hyde</a> theme.',
      "imageURL": "programming-notes-blog.jpg",
      "linkText": "See it live!",
      "URL": "//janiceto.github.io/programming-notes-blog",
      "githubURL": "//github.com/jAniceto/programming-notes",
      "tags": ["Python", "Pelican", "Markdown"]
    },
    {
      "name": "Chromatography Suite",
      "description": 'A <a href="https://www.mathworks.com/products/matlab.html">MATLAB</a> suite of chromatography programs including breakthrough curve modelling, isotherm determination, parameters fitting, chromatographic peak fitting and peak deconvolution, and more.',
      "imageURL": "chromatography.png",
      "linkText": "",
      "URL": "",
      "githubURL": "//github.com/jAniceto/chromatography",
      "tags": ["Matlab", "Optimization", "Numerical Methods"]
    },
    {
      "name": "Portugal on Reddit",
      "description": "/r/PortugalOnReddit is a subreddit dedicated to collecting mentions of Portugal throughout Reddit. It uses a Python bot that monitors the site for mentions to certain keywords and re-posts those topics to /r/PortugalOnReddit. Runs continuously from a Ubuntu VPS.",
      "imageURL": "portugalonreddit.png",
      "linkText": "See it live!",
      "URL": "https://www.reddit.com/r/PortugalOnReddit/",
      "githubURL": "",
      "tags": ["Python", "APIs", "Linux"]
    },
    {
      "name": "Text formatter",
      "description": 'A collection of text formatting tools useful for programming. Built with the <a href="http://getskeleton.com" target="_blank">Skeleton</a> CSS framework and pure Javascript.',
      "imageURL": "formatter.png",
      "linkText": "See it live!",
      "URL": "//janiceto.github.io/text-formatter",
      "githubURL": "//github.com/jAniceto/text-formatter",
      "tags": ["HTML/CSS", "Javascript", "SkeletonCSS"]
    },
  ]
};



// Retrieve the template data from the HTML
var template = document.querySelector('#handlebars-demo').innerHTML;

//Compile the template data into a function
var templateScript = Handlebars.compile(template);

var html = templateScript(context);

document.querySelector('body').innerHTML += html;