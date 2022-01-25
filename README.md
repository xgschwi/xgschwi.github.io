.markdown-body {
    --md-code-background: #acd7e9;
    --md-code-radius: 5px;
}

Site Readme
===========

## Description
This is a sample web application using React, react-snap, webpack, and tailwind css to build a web application with pre-rendered content and tailwind styling.

Details
-------

## Installations

Dev Dependencies include:
```javascript
    "@babel/core": "^7.16.12",
    "@babel/preset-env": "^7.16.11",
    "@babel/preset-react": "^7.16.7",
    "autoprefixer": "^10.4.2",
    "babel-loader": "^8.2.3",
    "css-loader": "^6.5.1",
    "husky": "^4.3.8",
    "lint-staged": "^12.3.1",
    "mini-css-extract-plugin": "^2.5.2",
    "postcss": "^8.4.5",
    "postcss-cli": "^9.1.0",
    "postcss-loader": "^6.2.1",
    "postcss-preset-env": "^7.2.3",
    "style-loader": "^3.3.1",
    "tailwindcss": "^3.0.16",
    "webpack": "^5.67.0",
    "webpack-cli": "^4.9.2",
    "webpack-dev-server": "^4.7.3"
```

Babel is used for transpiling the javascript; the loaders allow webpack to run and build the project; mini-css, postcss, and tailwind are a part of using tailwind for styling; husky and lint-staged will run formatting code before changes are pushed to the repository.

```
npm install -D @babel/core @babel/present-env @babel/preset-react autoprefixer babel-loader css-loader husky@4 lint-staged mini-css-extract-plugin postcss postcss-cli postcss-loader postcss-preset-env style-loader tailwindcss webpack webpack-cli webpack-dev-server
```

Husky version 4 was used to properly work for the pre-commit formatting

Dependencies Include:
```javascript
    "@babel/polyfill": "^7.12.1",
    "@testing-library/jest-dom": "^5.16.1",
    "@testing-library/react": "^12.1.2",
    "@testing-library/user-event": "^13.5.0",
    "eslint": "^8.7.0",
    "eslint-config-airbnb": "^19.0.4",
    "eslint-config-prettier": "^8.3.0",
    "eslint-plugin-import": "^2.25.4",
    "eslint-plugin-jsx-a11y": "^6.5.1",
    "eslint-plugin-prettier": "^4.0.0",
    "eslint-plugin-react": "^7.28.0",
    "eslint-plugin-react-hooks": "^4.3.0",
    "html-webpack-plugin": "^5.5.0",
    "postcss-import": "^14.0.2",
    "prettier": "^2.5.1",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-snap": "^1.23.0"
```

Testing will be used to test the components; eslint and prettier will detect and format code as necessary when committing the code; react is the base of this web application; react-snap is being used for pre-rendering purposes of the javascript to html.

## Scripts

```javascript
    "start": "webpack serve --mode=development",
    "lint": "./node_modules/.bin/eslint src/**",
    "lintFix": "./node_modules/.bin/eslint src/** --fix",
    "format": "prettier --write \"**/*.{.js,jsx,json,md}\"",
    "build": "webpack --mode=production",
    "postbuild": "react-snap"
```

- ```npm run start``` will serve the development server for the application
- ```npm run lint``` will run lint on any files in the src directory
- ```npm run lintFix``` will find any formatting errors described in .eslintrc.json and attempt to fix the errors
- ```npm run format``` uses prettier to format all code according to .prettierrc
- ```npm run build``` will use webpack to build production files
- ```postbuild: react-snap``` will run react-snap after the build phase and create 200.html with pre-rendered content for SEO purposes.

## Formatting

```javascript
"husky": {
    "hooks": {
        "pre-commit": "lint-staged"
    }
},
"lint-staged": {
    "*.js": [
        "npm run lintFix",
        "npm run format",
        "git add ."
    ]
}
```

As the code is committed, husky will use the pre-commit hook to use the command `lint-staged`.
`lint-staged` will run `lintFix`, `format`, and `git add .` to format all the files before completing a commit.

`git add . && git commit -m "Example"` will cause the pre-commit hook to be triggered.

## Webpack

Webpack is used to run babel for transpiling javascript for usage in most browsers. Here are the details from webpack.config.js:
```javascript
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: ['@babel/polyfill', './src/index.js'],
  output: {
    path:path.resolve(__dirname, "dist"),
  },
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    compress: true,
    port: 3000,
  },
  devtool: 'source-map',
  module: {
    rules: [
        
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader", "postcss-loader",
          ],
      },
        {
            test: /\.(png|jp(e*)g|svg|gif|ico)$/,
            exclude: /node_modules/,
            use: ['file-loader?name=[name].[ext]']
          },
          {
            test: /\.svg$/,
            use: ['@svgr/webpack'],
          },
          {
            test: /\.js$/,
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react']
            }
          },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "styles.css",
      chunkFilename: "styles.css"
    }),
    new HtmlWebpackPlugin({
      template: "./dist/index.html",
      filename: "./index.html",
    })
  ]
}
```

- The entry section will use babel's polyfill as it loads in index.js in the src directory
- The output section will build the files into the dist directory
- The Dev Server will run the code on port 3000 and resolve what it renders from the dist directory
- The plugins will handle the locations of the css and html when processed

Any Questions? Feel free to leave an issue, and I will try and get back to you soon :D

This project is a test for using webpack, react-snap, and tailwind for making a production build of a React Web Application.