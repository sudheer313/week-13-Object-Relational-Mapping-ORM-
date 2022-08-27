# week-13-Object-Relational-Mapping-ORM

## My task
My task is to build the back end for an e-commerce site by modifying starter code. You’ll configure a working Express.js API to use Sequelize to interact with a MySQL database.

## user Story

```md
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
```
## Mock-Up
The following video shows how my application works:

[![video link]https://drive.google.com/file/d/1JJtTSDa7gcBgqWf6JrRTXhcWZ9qXNx1V/view)

The following animation shows the application's GET routes to return all categories, all products, and all tags being tested in Insomnia:

![In Insomnia, the user tests “GET tags,” “GET Categories,” and “GET All Products.”.](./Assets/13-orm-homework-demo-01.gif)

The following animation shows the application's GET routes to return a single category, a single product, and a single tag being tested in Insomnia:
![In Insomnia, the user tests “GET tag by id,” “GET Category by ID,” and “GET One Product.”](./Assets/13-orm-homework-demo-02.gif)

The following animation shows the application's POST, PUT, and DELETE routes for categories being tested in Insomnia:

![In Insomnia, the user tests “DELETE Category by ID,” “CREATE Category,” and “UPDATE Category.”](./Assets/13-orm-homework-demo-03.gif)

### Required Dependencies

#### Install
You’ll need to use the [MySQL2](https://www.npmjs.com/package/mysql2) and [Sequelize](https://www.npmjs.com/package/sequelize) packages to connect your Express.js API to a MySQL database and the [dotenv](https://www.npmjs.com/package/dotenv) package to use environment variables to store sensitive data.

Use the `schema.sql` file in the `db` folder to create your database with MySQL shell commands. Use environment variables to store sensitive data like your MySQL username, password, and database name.
* Intialize node terminal by installing all these dependencies and enter `mysql -u root -p` command to open MYSQL and execute  `source ./db/schema.sql` which will create the database.
* And also seed the database by execoting `source ./db/seeds.sql`
* And then run ` npm start` to exeucute `server.js` file.


### Database Models


* `Category`

  * `id`

    * Integer.
  
    * Doesn't allow null values.
  
    * Set as primary key.
  
    * Uses auto increment.

  * `category_name`
  
    * String.
  
    * Doesn't allow null values.

* `Product`

  * `id`
  
    * Integer.
  
    * Doesn't allow null values.
  
    * Set as primary key.
  
    * Uses auto increment.

  * `product_name`
  
    * String.
  
    * Doesn't allow null values.

  * `price`
  
    * Decimal.
  
    * Doesn't allow null values.
  
    * Validates that the value is a decimal.

  * `stock`
  
    * Integer.
  
    * Doesn't allow null values.
  
    * Set a default value of `10`.
  
    * Validates that the value is numeric.

  * `category_id`
  
    * Integer.
  
    * References the `Category` model's `id`.

* `Tag`

  * `id`
  
    * Integer.
  
    * Doesn't allow null values.
  
    * Set as primary key.
  
    * Uses auto increment.

  * `tag_name`
  
    * String.

* `ProductTag`

  * `id`

    * Integer.

    * Doesn't allow null values.

    * Set as primary key.

    * Uses auto increment.

  * `product_id`

    * Integer.

    * References the `Product` model's `id`.

  * `tag_id`

    * Integer.

    * References the `Tag` model's `id`.

### Associations

* `Product` belongs to `Category`, and `Category` has many `Product` models, as a category can have multiple products but a product can only belong to one category.

* `Product` belongs to many `Tag` models, and `Tag` belongs to many `Product` models. Allow products to have multiple tags and tags to have many products by using the `ProductTag` through model.

## Deployment
[Github repo] sudheer313/week-13-Object-Relational-Mapping-ORM-<br>
[Github URL here]https://github.com/sudheer313/week-13-Object-Relational-Mapping-ORM-<br>


## Credits
ask BCS</br>
referred https://www.w3schools.com/mySQl/default.asp</br>
referred from https://github.com/kunalc156/E-Commerce</br>
referred from https://github.com/ashachakre0906/E-commerce-Backend-Application</br>
## What I learned
This application helped me to understand data base models and and includiing the requiremnets for each model. I also learned to execute assosiation methods on sequalize models and creating relationships between them. I also learnerd to configure routes tp perform CRUD operations. I also learned to Sync Sequlaize to the database on server Start.

## Challenges

At start it took me time to understahnd Models and their assosiations. Later after seeking help from instructor and BCs and also class tasks I was able to fugure out to solve this task.I also asked BCS for assistance and reffered ashachakre0906 and kunal github repos for further understanding and I am also thankful to them.

 ## Author
 @Sudheer kandula