## Userlist

### Demo
https://codesandbox.io/s/github/nowshad-sust/userlist-challenge

### Features
- Fetches user data from https://jsonplaceholder.typicode.com/users.
- Renders the first 5 users in a list.
- A search input field filters the list real time.
- Clicking on a single user opens up a modal with user details.

### Project Kanban board
https://github.com/nowshad-sust/userlist-challenge/projects/1

## Technical details

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Tooling
- Typescript
- React
- Redux
- TSlint
- Jest
- Enzyme
- SASS/SCSS
- Husky

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run tslint`
Runs a tslint check through the src folder. Can be passed with extra commands like `npm run tslint:check` or `npm run tslint:fix`.

### `npm run prettier`
Runs a prettier check with auto fix through the src folder. Runs automatically by `husky` as well on `git commit`.
