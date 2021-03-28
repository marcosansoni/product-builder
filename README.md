# product-builder
Frontend challenge. <br />
Objective is to clone [this](https://codyhouse.co/demo/product-builder/index.html) project as close as possible.
It is build with *React* and *Redux*. <br />

## Structure of the project
These are the files that compose the project:
```
.
├── README.md
├── package.json
├── package-lock.json
├── .gitignore
├── .eslintrc.json
├── LICENSE
├── public
|    ├── index.html 
|    ├──img
|    |   └── ...
|    └── ...
├── .storybook
|    ├── main.js   
|    └── preview.js   
└── src
    ├── components
    |   └── ...
    ├── constants
    |   └── ...
    ├── hooks
    |   └── ...
    ├── icon
    |   └── ...
    ├── theme
    |   └── ...
    ├── utils
    |   └── ...
    ├── view
    |   ├── Form.js 
    |   ├── Footer
    |   |   └── ...
    |   ├── View
    |   |   ├── ModelsView.js
    |   |   ├── ColorsView.js
    |   |   ├── AccessoriesView.js
    |   |   └── SummaryView.js
    └── index.js
```

I will briefly describe the main directory into the structure:
- ***.storybook*** It contains the configuration file required for storybook execution
- ***public*** It contains the static file of the application. Static images are stored here.
  
Into ***src*** folder it is available the core of the project. Here we can found:
- ***components*** Web components used several times across the application
- ***constants*** Constants definition
- ***hooks*** Custom hooks, like calculation of the final price and the proper image url
- ***theme*** Theming of the application. It stores color definition, breakpoints and media query.
- ***utils*** General utils file, like thousands' notation definition
- ***view*** All the different views of the application. It includes the different content of each tab and the footer
- ***index.js*** Entry point of the project

## Dependencies

Tested with: [node](https://nodejs.org/) >= 12

## How to run

After cloning this repository it can be executed with:
- `npm install`
- `npm run start`

### Components

Storybook has been used during development. It provides an insight of the main components available in this application. <br />
To start storybook run `npm run storybook`. <br />
It executes all *.stories.js files included into the project.
