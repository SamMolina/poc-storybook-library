# PocStorybookLibrary

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.2.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

```
ng build --project=poc-storybook-library
```

## Use the library

In the `dist/poc-storybook-library` run:
```
npm link
```

In an Angular project with version 14 run:
```
npm link poc-storybook-library
```

Import button component:
```
import { DesingSystemButton } from './button.component';
```
