# ticketing-system

spring boot / mysql backend



different packages and their purposes:
- Entities: Instances of rows in a table. So far we just have users. need to implement tickets, and whatever else we might need.
- Controllers: The endpoints which can be hit externally. Right now we just have "/users" which returns all users.
- Services: another layer which contains the function calls to the repository
- Repository: this makes the actual sql calls to the database. Still need to figure out how we can host this.
