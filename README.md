# EXPRESS TO-Do API SERVER

A REST API server implemented in Express and NodeJS.

### Prerequisites

You need to have node installed in your local machine.

### Getting Started

1. Clone the repository adn run `npm install`
2. In the terminal run `nodemon` to start the server.
3. The server will run on: *http://localhost:3000*
4. Test the endpoints using **POSTMAN**.
5. The server currently has the following endpoints:

- `POST /users/register` - Register a user with username, email password and confirmPassword fields.
- `POST /users/login` - Login a user using username and password fields.

- `GET /items` - For a logged-in user, returns a list of the user's saved to-do items.
- `POST /items` - For a logged-in user, allows one to post an item with *title* as teh only required field. *description* is an optional field.
-`GET /items/:itemId` - For a logged-in user to fetch an id specified by the *id*.
- `PUT /items/:id` - To edit an item specified by the id. One needs to supply either a *title*, *description* or *status* of the item.
- `DELETE /items/:id` - To delete an item.  



### Authors

* **Daniel Kitui**


### License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

### Acknowledgments

* Andela Restacking initiative
