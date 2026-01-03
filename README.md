TaskManager

This project was generated using Angular CLI
 version 21.0.4.

A simple Task Manager application built with Angular v21, designed for beginners and project-based learning.
The app fetches tasks from a fake REST API using json-server, displays them, and allows deleting tasks.

Features

Fetch tasks from REST API

Display task list

Delete tasks

Use async pipe

Task model with TypeScript

Fake backend using json-server

Development server
Start the fake API (json-server)

First, make sure json-server is installed:

npm install -g json-server


Start the API server:

json-server --watch db.json --port 3000


The API will be available at:

http://localhost:3000/tasks

Start Angular development server

To start a local development server, run:

ng serve


Once the server is running, open your browser and navigate to:

http://localhost:4200/


The application will automatically reload whenever you modify any of the source files.

Code scaffolding

Angular CLI includes powerful code scaffolding tools.

To generate a new component, run:

ng generate component component-name


To generate a service:

ng generate service service-name


For a complete list of available schematics (such as components, directives, or pipes), run:

ng generate --help

Project Structure (simplified)
src/
 ├── app/
 │   ├── models/
 │   │   └── task.model.ts
 │   ├── services/
 │   │   └── task.service.ts
 │   ├── components/
 │   │   └── task-list/
 │   ├── app.component.ts
 │   └── app.module.ts
 └── assets/
db.json

Task Model
export interface Task {
  id: number;
  title: string;
  completed: boolean;
}

Building

To build the project, run:

ng build


This will compile your project and store the build artifacts in the dist/ directory.
By default, the production build optimizes your application for performance and speed.

Running unit tests

To execute unit tests with the Vitest
 test runner, use the following command:

ng test

Running end-to-end tests

For end-to-end (e2e) testing, run:

ng e2e


Angular CLI does not come with an end-to-end testing framework by default.
You can choose one that suits your needs.

Learning Objectives

Understand Angular components and services

Work with REST APIs using HttpClient

Use Observables and async pipe

Apply CRUD operations

Build real-world Angular projects

Additional Resources

Angular CLI Overview: https://angular.dev/tools/cli

Angular HttpClient: https://angular.dev/guide/http

json-server: https://github.com/typicode/json-server

Author

Abdellah Chatioui
Beginner-friendly Angular project for learning purposes.