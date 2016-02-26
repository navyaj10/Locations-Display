README FILE
============

Navya Jagadish (1001123169)
---------------------------

#####Beautiful Locations

This is a small project on listing beautiful locations around the world. All files have been zipped into a folder. I chose MongoDB for NOSql Database, because I felt it was more compatible than my other option, Couchbase.
>MongoDB shell version: 3.0.1

For server framework I chose Ruby on Rails since I have become more familiar and comfortable with the environment of Rails since project phase 1 and 2 and hence wanted to continue with the same. Versions used: 
>Rails 4.2.0 , Ruby 2.0.0p481

Answers to Questions in Requirements:

* In this phase, I have the data in a JSON file and when the home page loads, the data is loaded into the NOSQL database. This was easier part of the project since in the first phase I had imported the JSON file from localhost. This time I had to just insert it into the database initially.

* The Object-Document-Mapper I have used is MongoID. I had many issues during querying the database. There was data in the database but my web page was drawing blanks. I had to change the way I accessed the database when querying. 

* If I were to use these technologies professionally, my biggest concern would be querying. Mongodb does not have flexibility when it comes to querying for data. There is no 'JOIN' options available in Mongodb. NOSQL is an alternative to SQL and it all depends on making the call based on the given situation. 


Running the Application: 

* Unzip the folder.
* In the terminal, change the directory link to the project folder. (' cd projphase2 ')
* Run the rails server 
>>rails server
* In the browser give the url as 
>>http://localhost:3000
* The home page of the project is displayed. 
* Click on the generate button.
* Once the button is clicked, the data from NOSQL Mongodb is fetched. And the data is displayed in the web page in a table format. It prints 10 records at a time and 100 records are being printed (Somehow couldnt make it to print 20 records).