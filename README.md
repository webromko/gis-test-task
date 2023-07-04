# GisTestTask

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.1.

Please use `npm i -f` for installing dependencies.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


# TASK DESCRIPTION

## Common requirements:
1. UI Library: one of DevExtreme, Angular Material, NG Bootstrap etc
(Using **DevExtreme** ( [https://js.devexpress.com](https://js.devexpress.com/) ) is preferable)
2. **NgRX** should be used
3. **SCSS** should be used
4. Use best practices
5. Adaptive design: will be a plus
6. GIT: Implementation stages (like core, pages, services, styles) are present as separated
commits (will be plus)

## Task:
Develop 3 pages + NavBar with using public REST service of GitHub

1. **Navbar**
    + On the top side (or on the left side) of page with links to the pages **Users** and **Favorites**

2. **Users Page**
    + Data Source: `https://api.github.com/search/users?q={query}{&page,per_page,sort,order}`
    + Style of displaying: **DataTable**
    + Columns: Login (Display as Link), Id, Url, Type, Score
    + **Requirements**: Filter by Login column; Pagination (lazy loading); Display modal dialog with the Avatar by click on Row; Possibility to open User Repositories page by click on Login link; Add the possibility to add user to Favorites; Favorite users list should be stored in Local Storage.

3. **Repositories page**
    + Data Source: `https://api.github.com/search/users?q={query}{&page,per_page,sort,order}`
    + Style of displaying: **Cards**
    + Info in cards: Project Name, Creation DateTime, Last Update DateTime, Count of stars.

4. **Favorites Page**
    + Data source: **Local Storage** (see the Users Page details)
    + Style of displaying: **List**
    + Info in List: Login (as a link), Url
    + **Requirements**: Possibility to remove a user from Favorites; Possibility to Add Comment to a favorite; Use Angular Form; Use simple validation like `Min Length: 10`, `Max Length: 100`; Possibility to go to the Repositories page by click on Login link
      
