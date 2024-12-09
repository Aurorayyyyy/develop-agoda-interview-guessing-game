# Guessing Game

A simple web application built with **React**, **Go (Gin)**, and **Docker** that includes user authentication (login, logout, signup) and a guessing game. Users guess a number between 1 and 10.

---

## Features

### Frontend
- Built with **React** and styled using **Tailwind CSS**.
- Includes three main pages:
  - `/login`: User login page.
  - `/signup`: User registration page.
  - `/guess`: Number guessing game page.

### Backend
- Implemented in **Golang** using the **Gin** framework.
- **GORM** is used for database interactions.
- Authentication is managed using **JWT tokens**.
- Exposes three API endpoints:
  - `/login`: Authenticates users and generates JWT tokens.
  - `/signup`: Registers new users.
  - `/guess`: Processes the guessing game logic (requires authentication).

### Database
- MySQL

---

## Requirements
- Docker and Docker Compose installed on your system.
- `.env` file configured for the backend (see the example below).

---

## Installation Instructions

**Clone the Repository**:
 ```bash
 git clone git@github.com:Aurorayyyyy/develop-agoda-interview-guessing-game.git
 cd develop-agoda-interview-guessing-game
 ```

**Set Up the Environment Variables**
Before running the application, you need to set up the environment variables.

```bash
cd backend
```

And create `.env` as show in the example `.env.example`

```
DB_HOST=db
DB_PORT=3306
DB_USER=dev
DB_PASSWORD=devpass
DB_NAME=guessgame

JWT_SECRET=<your_jwt_token>
```
  **Noted**: Change env variables based on your setup.

3. **Build and Run the Application with Docker**
```bash
cd ..
docker-compose up -d
```
