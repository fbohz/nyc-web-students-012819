## Object Relational Mapper (ORM)

+ Definition:
Object Oriented Programming (Ruby)

Relational (SQL realtional databases)

Mapping back and forth bwtween these two things


## Active Record Pattern

# CRUD REVIEW

Create
INSERT INTO books (....)
Book.new(...)

Read
SELECT * FROM books
Book.all

SELECT * FROM books WHERE id = 5
Book.find_by_id(5)

Update
UPDATE books SET (

  )
book.update({title: 'new title'})

Destroy
DELETE from books where id = 5
book.destroy


What are the four ways we can interact with data?

## Domain Modeling and SQL Review

Draw out what your schema (structure of your tables and columns) would be for the following domains. Consider what tables are needed, what columns belong on which tables, and where the foreign keys belong.

1. Books and Authors where each book has a single author. Books should have a title and authors should have a name

One to Many

Tweet.new('coffe#', user)
books
id |  title                                   | author_id
1   Practical Object Oriented Design in Ruby   1
2   Secrets of the Javascript ninja            2
3   99 Bottles of OOP                          1


authors
id | name         |
1     Sandi Metz            
2   John Resig                 

Q: Write the SQL to find all books written by a certain author given the author's id.
Q: Write the SQL to find all books written by a certain author given the author's name.
SELECT * FROM books WHERE author_id = 1
SELECT * FROM books JOIN authors ON authors.id = books.author_id WHERE authors.name = 'whatever'



2. Books and Authors where each book can have one or multiple authors. Books should have a title and authors should have a name

Many to Many

books
id |  title                                   
1   Practical Object Oriented Design in Ruby  
2   Secrets of the Javascript ninja            
3   99 Bottles of OOP    
4   Ruby & JS together!                     


book_authors
id | book_id | author_id
1       4         1
2       4         2
3       1         1


authors
id | name         |
1     Sandi Metz            
2   John Resig    

Q: Write the SQL to find all books written by a certain author given their name


3. Twitter where Tweets can have Tags (i.e. '#fun', '#hottake', '#tbt'). A tweet can have multiple tags, many tweets can be tagged with the same tag. Tweets have a message and user_id; tags have a name.
Many to Many

tweets
id |  message                                   
1   coffee
2   tea        



tweet_tags
id | tweet_id | tag_id
1       1         1
2       1         2
3       2         2



tags
id | name         |
1     #fun            
2   #tbt   


Q: Write the SQL to find all the tweets tagged '#tbt'


4. After completing the questions above, is there a rule you can determine about which table the foreign key belongs on given two associated tables?

Foreign key lives on the belongs to!


## Lecture Notes
