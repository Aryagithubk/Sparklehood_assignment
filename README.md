# AI Safety Incident Log Service

## Introduction
AI Safety Incident Log Service is a backend API designed to log, retrieve, and manage hypothetical AI safety incidents for HumanChain.  
It is built using Node.js, Express.js, and TypeScript, with MongoDB as the database.  
The project emphasizes clean code architecture, proper validation, structured error handling, logging, and scalable API design.

## Features
- RESTful API endpoints for creating, retrieving, and deleting incidents
- Input validation to ensure data integrity
- Centralized error handling and logging
- Environment-based configuration management
- Dockerization support for containerized deployment
- CI/CD readiness with Jenkins pipelines

## Technology Stack
- Node.js with Express.js for server-side development
- TypeScript for type safety and better maintainability
- MongoDB as the NoSQL database
- Mongoose for MongoDB object modeling
- dotenv for environment variable management
- Docker for containerization
- Jenkins for CI/CD pipeline setup

## API Endpoints

### Get all incidents
- Endpoint: `/app/v1/incidents`
- Method: GET
- Description: Retrieve all logged incidents.

### Get an incident by ID
- Endpoint: `/app/v1/incidents/:id`
- Method: GET
- Description: Retrieve a specific incident by its unique ID.

### Create a new incident
- Endpoint: `/app/v1/incidents`
- Method: POST
- Description: Add a new AI safety incident to the database.

### Delete an incident
- Endpoint: `/app/v1/incidents/:id`
- Method: DELETE
- Description: Remove an incident from the database using its ID.

### Environment Variables
Create a `.env` file in the project root with the following environment variables:
- `PORT`: Port number on which the server will run
- `MONGO_URI`: MongoDB connection URI

### Running Locally
- Clone the repository
- Install dependencies using npm or yarn
- Configure environment variables
- Start the server in development mode

### Running with Docker
- Build the Docker image
- Run the container exposing the desired port
- Pass environment variables using an `.env` file or Docker options

## Jenkins Pipeline Overview
The project is designed to work with Jenkins for continuous integration and deployment.  
Typical Jenkins pipeline flow includes:
- Checkout code from repository
- Install dependencies
- Build Docker image
- Run container or deploy image to registry
- Post-deployment notifications

Of course, Nick!  
Here’s the **README.md style script** for your **Setup Instructions** section — properly formatted for a real README:

---
## 🛠️ Setup Instructions

### 1. Normal Setup Without Docker

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd <repository-folder-name>
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up the `.env` file**  
   Create a `.env` file in the root directory and add the required environment variables:
   ```
   PORT=5000
   DATABASE_URL=your_database_connection_string
   ```

4. **Start the server**
   ```bash
   npm run dev
   ```
   The server should now be running at `http://localhost:5000`.

---

### 2. Setup Using Docker

1. **Build the Docker image**
   ```bash
   docker build -t incident-logger .
   ```

2. **Run the Docker container**
   ```bash
   docker run -p 5000:5000 --env-file .env incident-logger
   ```
   The application will be accessible at `http://localhost:5000`.

---

### 3. Build and Run Using Jenkins Pipelines

**Jenkins Pipeline Flow:**
- **Step 1: Clone the Repository**
  - Jenkins pulls the latest code from the repository.

- **Step 2: Install Dependencies**
  - Jenkins runs `npm install` to install all project dependencies.

- **Step 3: Build Docker Image**
  - Jenkins builds a Docker image using the Dockerfile.

- **Step 4: Push Docker Image (Optional)**
  - If configured, Jenkins can push the Docker image to a container registry (like Docker Hub).

- **Step 5: Run Docker Container**
  - Jenkins runs the Docker container using the freshly built image, exposing the necessary ports.

**Example Pipeline Stages:**
```
- Checkout
- Install Dependencies
- Build Docker Image
- (Optional) Push to Registry
- Deploy Container
```
This ensures automatic building, testing, and deployment with every code update.

---

## Design Considerations
- TypeScript was chosen for its type safety benefits
- Mongoose provides schema enforcement over MongoDB
- Joi ensures that invalid data is caught early at the API layer
- Winston centralizes all application logs
- The architecture is modular and easily extendable for future features

## Postman Collection
A Postman collection is provided to easily test the API endpoints.

## License
This project is intended for educational use and evaluation purposes only.

---
