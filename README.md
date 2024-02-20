# ticketing-system

spring boot / mysql backend
React.js / tailwind frontend

different packages and their purposes:

Service:

- Entities: Instances of rows in a table. So far we just have users. need to implement tickets, and whatever else we might need.
- Controllers: The endpoints which can be hit externally. Right now we just have "/users" which returns all users.
- Repository: this makes the actual sql calls to the database. Still need to figure out how we can host this.

Client:

- Landing: Folder containing index.html, script.js, and style.css for the landing page.
- api: Folder for api controllers used throughout the project (landing page/portal functions are split off currently)
- styles: Contains landing page stylesheet and fonts used throughout project
- "my-app": Initial React repository - this will be reworked/reorganized
