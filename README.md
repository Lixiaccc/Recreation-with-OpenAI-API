
README:
This is a Final Project for the course : Full Stack Web Development- COMS W3102 Section 2 in Columbia University.
This is a Simple recreation of Chatgpt using public API from OpenAI websites.
Here are some Functionality:
  1) You can ask questions 
  2) You can refresh the Page with the New Chat on the side bar. 
  3) There is two example questions that can be use on the side bar, GPT will answer it if you click on it. 
      

# **Must-Do Prior to Testing Out the Program**
Once you download the zipfile and unzip, 
1. Set organization&API keys                   
Get your OpenAI API keys from [here](https://platform.openai.com/account/api-keys) and set it as:
```                                     
const openai = new OpenAI({
  organization: '<org KEY>',
  apiKey: '<API KEY>',
  dangerouslyAllowBrowser: true
});
```                                     
within project/clone/**openai.js**

**<org key> can be found on the settings, under Organization ID**

**<API key> can be found on the API keys section, Create New Secrete key**

This will enable the openAI API. 
Then, follow the instructions below      

Here are some Limitaiton of this program:
 1) This program didn't use the newest version of openAI chat model, therefore, it can not handle many complicated orders.
 2) This program will onnly last till Jan 13 2024, because the model will not be valid anymore after this.
 3) Thia program will not work publicitly, can not deploy or use in any browse due to the policy of openAI API Key.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
=======
# final

