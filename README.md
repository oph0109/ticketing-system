# ticketing-system

spring boot / mysql backend
definitely uses angular.js / tailwind frontend

different packages and their purposes:

- Entities: Instances of rows in a table. So far we just have users. need to implement tickets, and whatever else we might need.
- Controllers: The endpoints which can be hit externally. Right now we just have "/users" which returns all users.
- Repository: this makes the actual sql calls to the database. Still need to figure out how we can host this.
