# product-builder
Frontend challenge. <br />
Objective is to clone [this](https://codyhouse.co/demo/product-builder/index.html) project as close as possible.
It is build with *React*. <br />
*Cypress* has been used for testing. <br />
<br />Application has been deployed on Netlify and it is available [here](https://product-builder.netlify.app/).

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
├── cypress
|    ├── integration  
|    |    └── ...  
|    ├── support  
|    |    └── ... 
|    └── utils  
|         └── ... 
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
- ***cypress*** Testing folder.
- ***public*** It contains the static file of the application. Static images are stored here.
- ***src*** Core of the project. Details description below.

Into ***cypress*** folder we contains test for the project written in Cypress. Main folder here are:
- ***integration*** It stores all the test file (*.spec.js)
- ***support*** Custom cypress commands
- ***fixtures*** Constants used into test files.
  
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

### Test

Cypress has been used to provide a suite of e2e testing. 
We can run them by `npm run test`. With this instruction a cypress panel will appear, and it can be used for visual testing.
It is also possible to run all tests on command line (for CI purpose) with `npm run test:cli`.
In this scenario tests will be executed on headless browser (Electron).
