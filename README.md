# Online musicShop application

### Live demo: >TBA<

## Technology

#### Backend:
	- Java 11
	- SpringBoot 2.4
	- SpringSecurity
	- SpringData JPA
	- Hibernate
	- MySQL

#### Frontend:
	- Angular 11 CLI
	- Bootstrap

## Features:
	- JWT authentication
	- session storing cart
	- products searching with server side pagination
	- shipping form validation

## Roadmap: 
	- Junit5
	- CSS rebuild to grid layout
	- Live demo
	- Angular testing
	- Moderator panel with mod functions
	- Admin panel with admin functions
	- Product details component
	- Email information about successful order
	- User profile content
	- Captcha confirmation during registration
	- Other minor functionality

## Database Schemaa:

![db schema](/backend/db_schema_diag.png)

## Instalation:
	- Install mySQL "https://dev.mysql.com/downloads/installer/"
	- Configure datasource in "application.properties"
	- Go to backend folder
	- Console: "mvn install"
	- Console: "mvn spring-boot:run"
	- Backend default listening path is "localhost:8080"
	- Instal Node.js with npm "https://nodejs.org/en/download/"
	- Go to frontend folder
	- Console: "npm install"
	- Console: "ng serve"
	- Frontend default listening path is "localhost:4200"