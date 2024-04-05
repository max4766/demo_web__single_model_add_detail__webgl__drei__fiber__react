# Introduction

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This is a web page that shows a 3D model in a circle.

It has an HTML component named Tooltip, which is used as a kind of label of the model above it.

You can control the model's orbit and see the model since it provides you with a light effect.

Used `React`, `drei`, `fiber` for showing 3D models on a website.

For your record, you can check the FPS of the 3D model on the top left side of the website.

## Getting Started

First, copy this project's URL and clone this project into your local with git :

```bash
git clone [project URL]
```

FYI, No need to make a new folder for this project. 

it is already packed in the folder with it's project name when you clone.

Then, recover packages. update node_modules with the command below :

```bash
npm install
```

Next, run the development server with one of the commands below (npm recommended) :

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Congratulations! you can now see the view of this project! 

## About the source

- `src/App.js` : all the components are here.

Used ambientLight, directionalLight, pointLight and fog.

So it would seem much more natural than a model with a sole light effect. 

Used plane for the model's ground.

Also, loaded glb extention was directly used without converting into jsx extention,

which is why you can't find any jsx files in the directory.

## Goal

The goal of this project was.. ofc it's already proved that React and drei/fiber has a great performance.

Here, the main purpose was `To enhance the view by using multiple light effects and check FPS`.

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


