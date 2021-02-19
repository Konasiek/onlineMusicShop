# Online musicShop application

### Live demo: >TBA<

## Technology

#### Backend:
	Java 11
	SpringBoot 2.4
	SpringSecurity
	SpringData JPA
	Hibernate
	MySQL

#### Frontend:
	Angular 11 CLI
	Bootstrap

## Features:
	JWT authentication
	Session storing cart
	Order management
	Products searching with server side pagination
	Shipping form validation

## Roadmap: 
	Junit5
	CSS rebuild to grid layout
	Live demo
	Angular testing
	Moderator panel with mod functions
	Admin panel with admin functions
	Product details component
	Email information about successful order
	User profile content
	Captcha confirmation during registration
	Other minor functionality

## Database Schemaa:

![db schema](/backend/db_schema_diag.png)

## Instalation:
	1. Install mySQL "https://dev.mysql.com/downloads/installer/"
	2. Configure datasource in "application.properties"
	3. Go to backend folder
	4. Console: "mvn install"
	5. Console: "mvn spring-boot:run"
	6. Backend default listening path is "localhost:8080"
	7. Instal Node.js with npm "https://nodejs.org/en/download/"
	8. Go to frontend folder
	9. Console: "npm install"
	10. Console: "ng serve"
	11. Frontend default listening path is "localhost:4200"