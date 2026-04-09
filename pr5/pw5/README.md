# Pw5

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.2.6.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## Deploy to Netlify

This project is ready for Netlify deployment as an Angular single-page app.

### Fastest option

1. Run `npm run build`.
2. Open Netlify and create a new site.
3. Connect this folder or drag-and-drop the project after build.
4. Use `dist/pw5/browser` as the publish directory.

### Git-based option

1. Push the project to GitHub.
2. Import the repository in Netlify.
3. Set the build command to `npm run build`.
4. Set the publish directory to `dist/pw5/browser`.

The included `netlify.toml` already sets the build command, publish directory, and SPA redirect rule.
