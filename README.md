# DevFest Sweden 2020 Website 🇸🇪

![Deploy to Firebase](https://github.com/gdgsweden/devfestsweden/workflows/Deploy%20to%20Firebase/badge.svg)  [![License](https://img.shields.io/badge/license-MIT%20License-brightgreen.svg)](https://opensource.org/licenses/MIT)

<p align="center">
  <img src="https://i.imgur.com/cdz6ARK.png" alt="readme screenshot"/>
</p>

:zap: [Live Website](https://devfest-sweden.web.app/)
🤝 based on [Project Hoverboard](https://github.com/gdg-x/hoverboard)

### Deploying

To contribute to the website, you just need to send a pull request. The repository is integrated with Github Actions to make sure that the website is re-deployed **whenever there is a new commit**.

The following branches are deployed:

| Branch | Destination | Status |
| ------ | ----------- | ------ |
| `main` | https://devfest-sweden.web.app/ | ![Deploy to Firebase](https://github.com/gdgsweden/devfestsweden/workflows/Deploy%20to%20Firebase/badge.svg) |

### Setup the project
:book: [Full documentation](/docs/).

Install Node.JS dependencies with:
```
npm install
```

Then start the development server with
```
npm start
```

This command serves the app at `http://localhost:5000` and provides basic URL routing for the app:

:book: Read more in [setup docs](/docs/tutorials/set-up.md).

### Build Locally

This command performs HTML, CSS, and JS minification on the application
dependencies, and generates a service-worker.js file with code to pre-cache the
dependencies based on the entrypoint and fragments specified in `polymer.json`.
The minified files are output to the `build`.

```
npm run build
```

:book: Read more in [deploy docs](/docs/tutorials/deploy.md).   

### Acknowledgment

Website based on [Project Hoverboard](https://github.com/gdg-x/hoverboard), template brought by [Oleh Zasadnyy](https://plus.google.com/+OlehZasadnyy)
from [GDG Lviv](http://lviv.gdg.org.ua/).

> *Do you :heart: it?* Show your support - please, [star](https://github.com/gdg-x/hoverboard) the project.

### License

Project is published under the [MIT license](https://github.com/gdg-x/hoverboard/blob/master/LICENSE.md).  
