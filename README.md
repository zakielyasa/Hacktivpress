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
| /api/users/signup | POST | sign up |
| /api/users/login | POST | sign in |


## list Blog
| Route | HTTP | Description |
| ------ | ----- | --------- |
|/api/article/create| POST | create article |
| /api/article | GET | get all article |
| /api/article/category | GET | get article by category |
| /api/article/delete/:id | DELETE | delete article user authorization only |
| /api/article/:id | PUT | edit article user authorization only |
| /api/article/:id | GET | get detail article |

`http://localhost:3000/api` .