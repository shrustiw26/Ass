# Introduction
 
This project is a Node.js RESTful API using MongoDB, built with Express.js. It includes authentication, user and admin account management, and CRUD operations on products. The admin has special privileges to manage user accounts and approve or reject products for display on the website.
 
## Features
 
- User Authentication: Users can sign up and log in.
- Admin Management: Admin can update and delete users and products.
- Product Management: Users can add products, and admins can approve or reject them for display.
- Role-Based Access Control: User and Admin had different access control.
 
## Technologies Used
 
- Node.js: JavaScript runtime for building the backend server.
- Express.js: Web framework for routing and middleware handling.
- MongoDB: NoSQL database for storing user and product data.
- JWT: For authentication and securing routes.
- Dotenv: For managing environment variables.
 
## Prerequisites
 
- Node.js (v14+ recommended)
- MongoDB (local or cloud instance)