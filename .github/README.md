<h1 align="center">📬 Email Comparison</h1>
<p align="center">
  <i>A comparison table of private and / or secure email providers</i>
</p>

## Live App

The app can be accessed at: **[lissy93.github.io/email-comparison](https://lissy93.github.io/email-comparison)**


<p align="center">
  <a href="https://lissy93.github.io/email-comparison/">
    <img src="https://i.ibb.co/FsX2TWR/email-comparison-screenshot-2.png" />
  </a>
</p>

## Modifying Data

All email data is stored in [`/src/data.yml`](https://github.com/Lissy93/email-comparison/blob/master/src/data.yml) (in [YAML format](https://yaml.org/)).

To submit changes, fork the repository, edit the file, commit changes, then submit a pull request back to this repo. If you're new to GitHub, [this guide](https://www.freecodecamp.org/news/how-to-make-your-first-pull-request-on-github/) may help.

Once merged, the app is re-built and deployed to GH pages automatically (using [this workflow](https://github.com/Lissy93/email-comparison/blob/master/.github/workflows/deploy-gh-pages.yml)), so your changes will appear shortly.

## Running Locally

Prerequisites: [Git](https://git-scm.com/), [Node.js](https://nodejs.org/) and either [NPM](https://npmjs.org/) or [Yarn](https://yarnpkg.com/)

1. Get the code: `https://github.com/Lissy93/email-comparison.git`
2. Install dependencies: `yarn`
3. Start the development server: `yarn dev`
4. Build for production: `yarn build`
5. Serve up build app: `yarn start`

## License

Licensed under [MIT](https://github.com/Lissy93/email-comparison/blob/master/LICENSE),
© [Alicia Sykes](https://aliciasykes.com) 2022
