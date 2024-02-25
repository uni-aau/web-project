# WebTechnologien Projekt (WS2023)
[![Lines of Code](https://sonarcloud.io/api/project_badges/measure?project=uni-aau_web-project&metric=ncloc)](https://sonarcloud.io/summary/new_code?id=uni-aau_web-project)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=uni-aau_web-project&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=uni-aau_web-project)
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=uni-aau_web-project&metric=bugs)](https://sonarcloud.io/summary/new_code?id=uni-aau_web-project)
[![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=uni-aau_web-project&metric=reliability_rating)](https://sonarcloud.io/summary/new_code?id=uni-aau_web-project)
## Getting Started
### Required
- **Backend** (npm i for dependencies in /backend)
  - Node >= v20.9.0
  - NPM >= v10.2.3
- **Frontend** (npm i for dependencies in /frontend)
  - Angular > 17
- **Database**
  - Docker Desktop
  - PostgreSQL > 15
  - PgAdmin 4 (Optional - GUI)
### Execution
- Initialize new PostgresSQL Server
  - Database Hostname/address: **localhost**
  - Database Port: **5433**
  - Database Username: **postgres**
  - And then a new PostgresSQL Database in this server
    - Database Name: **postgres**
    - Database Password: **postgres**
- Create and populate database tables with ``docker-compose up -d``
  - You can reset database with ``docker-compose down -v``
- Check out to /backend-folder
  - Start backend with **node server.js**
- Check out to /frontend-folder
  - Start frontend with **ng serve --open**

## Task
As you have mastered web development fundamentals, you are now asked to implement an online system for the local bike rental.
The customers should be able to buy tickets either remotely (e.g., from their smartphones) or locally via special terminals. In both cases, the customer uses the same web service interface.

With this interface, the customer must be able to:
- Browse a list of rental stations currently available and the list of currently available bikes of each category and model
- Book tickets for renting bikes, immediately or in future, tickets may allow to rent tickets for the bikes of the specific category, like e-bikes or children bikes.
- Make a user account to maintain the “wallet” with the money to be spent for rentals, see booked tickets, request QR codes, and write reviews.

After booking the ticket, the customer receives a QR code on the smartphone. Upon entering the respective bike station and attempting to take the bike, the customer is asked to scan the QR code to disconnect the bike from the parking place and start riding it, the whole price is charged at this point.
The bike can be returned to any rental station if it has the free parking place for the bike of this type. Then it can be rented by other customers.

## Teams
Each team consists of up to 3 students responsible for both the frontend and backend of the application.

## Required functionality
The application has to provide the following functionality via its frontend:
From the management view, bike rental management can:
- Create, update, and delete bike stations:
  - Each station has a name, an address (in a specific city e.g. Klagenfurt, with real coordinates within the city), and a set of bike parking places
  - Each parking place has a unique number in a specific station
  - Each parking place can hold the bike of one or several specific categories (the place for electric bikes. the place for children bikes, the universal place holding any bike etc.)
  - Based on that, it should be possible to determine how many bikes of each category can be parked at the specific station (its capacity for this category)
  - Each bike station has a set of customer reviews that must be updated regularly
- Create, update and delete bike categories and bike models
  - Each bike category defines a broad set of bike models (the categories can be mountain bikes, electric bikes, children bikes, city bikes etc.)
  - Each bike model belongs to a specific category and has a name, description, a wheel size, and extra features (e.g. the manufacturer, the type of brakes etc.). Example of bike models can be “Merida Wulf 7.74”, “KTM Ultra fun 2019” etc.
  - Each bike model also has a set of customer reviews that must be updated regularly
- Create, update and delete individual bikes
  - Each individual bike should have an unique ID
  - Individual bikes correspond to the specific bike models
- Assign or reassign individual bikes to stations and parking places
  - The system should allow for each bike to appear at only one place within one station at a specific time, i.e. if the bike is assigned to one parking place, it should be unassigned from the previous one
  - The bike can be assigned to a station only if the station has one or more free parking places holding bikes of its category, in this case, it occupies one of these places.
- Provide booking tickets for bikes of the specific model, category or for the specific value of the model attribute (e.g. size or manufacturer) and the specific interval of time
  - The interval of time can start in future or it can start immediately, in the latter case the bike has to be taken during some period (e.g. an hour) starting from now (immediate renting)
  - The ticket price depends on the factors like time, date, duration, bike model or category (or the values of its attributes), bike station proximity to the city center
  - For the future tickets, it should be possible for a customer to return the bought ticket 1 hour before the renting time starts.
  - If the user orders the ticket for immediate renting, he/she can also specify the station where he/she wants the bike to be taken. If the bike is available at the specific station, it remains booked for the period of allowed renting (e.g. an hour, see above) and cannot be taken by somebody else.
  - In this case, the availability of the bikes of the specific category, size etc. at the specific station has to be taken into account, if there are no bikes available at the specified station, the closest stations which have such bikes can be recommended, or the ticket can be offered without being tied to the station, then the customer may find the bike station on his/her own (as for future rentals).
  - The tickets for children bikes can only be offered together with adult tickets
  - The tickets are just means for booking the bikes, if the bike is not rented during the specific time, a fee of 10% of the ticket price is charged, but the whole amount is paid only if the bike is really taken.

## Customer View
From the customer view, the customer can:
- Register him/herself in the system, specifying the email and the password
- Maintain the user account, put the money to the corresponding “wallet” from e.g. the credit card (may be simulated), check the status of the account and its “wallet”;
- Browse current bike types and bike stations and check the reviews and the rating (the number of stars)
  - Provide a map of the city e.g. Klagenfurt with bike stations, you can e.g. use a free solution like OpenStreetMap and the corresponding Angular library e.g. Leaflet
- Check which bikes of which type and size are available at a specific station
- Book tickets for the bikes of the specific category, model, or the value of bike attributes like size, for immediate or future renting. It should be only possible to book tickets if the user has enough money on his/her “wallet” to pay the whole ticket price.
- Manage booked tickets
  - return future tickets (until some deadline), see above
  - request a QR code for a ticket
  - see the rental history
- Write reviews and give points to contribute to the rating (only for the models of already rented bikes, and the stations where the renting took place)
- Simulate actual renting and returning bikes at renting stations. In reality, it is supposed to be done by using the reader at the station with a QR-code of the ticket, once for taking the bike, and once – for returning it. Instead of that, the system should provide
  - The simulation interface allowing the user to specify the valid ticket (e.g. by providing the ticket ID or the QR-code), and the specific bike parked to a specific place, and make this bike “rented”. This bike is then disconnected from the parking place, and such place can be occupied with another bike. The full price of the ticket is deduced from the user “wallet” at this point.
  - The simulation interface allowing the user to return the bike to the specific station (not necessarily where it was rented), if there is a free parking place on this station which may hold the bike of this category. This parking place become occupied with this bike.

If the bike was not really rented after the renting period started, nothing should happen until the end of the renting period (i.e. the bike can still be rented by the late customer until the end of such period). After that, the ticket expires, the fee of 10% is deduced from the user “wallet”, and the user can book another ticket.

If the bike was not really returned after the renting period expired, it should be marked as overdue. The administrator of the system should allow to see the list of such bikes. These bikes cannot be taken until they are back to the station. The user has to be notified that he/she has an overdue rental. Returning bikes late has to be punished by charging twice the usual renting amount for the extra time (i.e. if the hourly price is 5 EUR for the rented bike of the specific category, the user has to pay an overdue price of 10 EUR for every extra hour).

If the bike is not returned after 24 hours, something nasty should be done to the user (to be defined by the developer team).

It is recommended to make one person responsible for backend, one – for the management view, and one – for the customer view

## Requirements for all Teams
- The application should
  - store the data in the database (the usage of PostgreSQL is recommended)
  - implement backend in Node.js, expose backend functionality via the REST API
  - use Angular for the frontend, access the REST API from the Angular code
  - support user authentication
  - allow the users to see only their own data
  - be responsive and have a coherent UI
  - not be easily hackable (use prepared statements and filter all inputs, details on the lecture session on security).
- The given requirements are just starting points. If additional functionality is required for the successful execution of the entire process, it must also be included. If you propose alternative functionality for the same application, this can be negotiated with the teacher.
- Be sure that the application for customers can be intuitively used on mobile phones.
- Note: the functionality related to drawing stations on a map and using real coordinates of the stations is optional, it can be replaced by some means of defining the proximity of the renting stations e.g. by maintain the map of distances between stations (still, some may prefer using real coordinates in this case).