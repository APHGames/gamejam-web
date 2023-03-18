# GameJam FIT Web

<p align="center">
    <img alt="GameJam FIT" src="./logo.jpg" width="500">
</p>

- 📦 built on top of [docusaurus library](https://docusaurus.io/)


## Project Structure

```
project
│   │   blog                // place for a blog... not used right now
│   │   docs                // markdown documents with instructions, tutorials, guides etc.
│   │   plugins             // some plugins
│   │   src                 // React sources with custom components and themes
│   │   static              // static files (slides and examples are downloaded into this folder) 
│   │   types               // additional Typescript declarations
│
│   CHANGELOG.md            // changelog
│   package.json            // npm scripts and dependencies
│   README.md               // README file
│   tsconfig.json           // typescript config (only for pre-build)
```

## How to build this project
- clone it
- install [nodeJS](https://nodejs.org/en/download/), LTS version if possible 
- execute `npm install`
- run `npm start_en` to run the English version, or `npm start_cs` to run the Czech version
- navigate to `localhost:3000`


Changelog is available [here](./CHANGELOG.md)

## Deployment

- the current EN version is deployed on [gamejam.aphgames.io](https://gamejam.aphgames.io)
- the current CZ version is deployed on [gamejam.aphgames.cz](https://gamejam.aphgames.cz)