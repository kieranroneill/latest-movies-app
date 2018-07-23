# Latest movies app

A small app that uses the [TMDB](https://www.themoviedb.org/) to get the latest movies. The app provides simple filtering by genre and average rating.

#### Table of contents

* [Getting started](#getting-started)
    * [Prerequisites](#prerequisites)
    * [Installation](#installation)
* [Usage](#usage)
* [Development](#development)
* [Testing](#testing)
* [Notes](#notes)

## Getting started

Before you can run the application, you will need to install a few dependencies.

### Prerequisites

* Install [Node.js v8.11.2+](https://nodejs.org/en/)
* Install [Yarn](https://yarnpkg.com/lang/en/docs/install)

### Installation

* Install dependencies using `yarn install`

## Usage

* Start the application using `yarn start`
* Navigate to [http://localhost:1337](http://localhost:1337)

## Development

* [React](https://reactjs.org/) - provides an efficient way to build components.
* [Redux](https://redux.js.org/) - initially I was not going to use redux, but the TMDB API requires pagination, for which, Redux provides a perfect use case for such asynchronous calls.
* [styled-components](https://www.styled-components.com/) - provides an awesome way to integrate CSS with React.
* [TypeScript](https://www.typescriptlang.org/) - was chosen because I feel having staic typing not only helps iron out potential bugs, but it elminates the need for extesive unit testing.
* [Webpack](https://webpack.js.org/) - for building.

The UI was developed using the fantastic [MaterialUI](https://material-ui.com) library.

## Testing

* [Jest](https://jestjs.io/en/) - for runner, expectations and coverage.
* [Sinon](http://sinonjs.org/) - for stubing and spying.

## Notes

All API calls are closely coupled with the redux store using a custom API middleware that can be accessed using special actions.
