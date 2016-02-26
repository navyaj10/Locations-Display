README FILE
============

#####Beautiful Locations

This is a small project on listing beautiful locations around the world. All files have been zipped into a folder. I chose MongoDB for NOSql Database
>MongoDB shell version: 3.0.1

For server framework I chose Ruby on Rails since I have become more familiar and comfortable with the environment of Rails.
Versions used: 
>Rails 4.2.0 , Ruby 2.0.0p481

Data:

* the data is in a JSON file and when the home page loads, the data is loaded into the NOSQL database. 

* The Object-Document-Mapper used is MongoID. 


Running the Application: 

* Unzip the folder.
* In the terminal, change the directory link to the project folder.
* Run the rails server 
>>rails server
* In the browser give the url as 
>>http://localhost:3000
* The home page of the project is displayed. 
* Click on the generate button.
* Once the button is clicked, the data from NOSQL Mongodb is fetched. And the data is displayed in the web page in a table format. It prints 10 records at a time and 100 records are being printed.
