# Hacktivpres 
 * blogging app with express, vue, mongoose and mongodb

# How to run
## npm install
## npm run dev
## npm start

## list User routes
| Route | HTTP | Description |
| ------| ----- | ---------- |
| /api/users| GET | get all user |
| /api/users/register | POST | sign up |
| /api/users/login | POST | sign in |


## list Blog
| Route | HTTP | Description |
| ------ | ----- | --------- |
| /api/blogs | GET | get all blogs |
| /api/blogs/category | GET | get article by category |
| /api/blogs/delete | DELETE | delete blog user authorization only |
| /api/blogs/:id | PUT | edit blog user authorization only |
| /api/blogs/:id | GET | get detail blogs |

`http://localhost:3000/api` .