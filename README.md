# E-commerce App

## Overview

This project is an E-commerce application built using the MERN stack (MongoDB, Express.js, React, and Node.js) with state management handled by Redux. The application is containerized using Docker for streamlined deployment and scalability.

## Features

- **User Authentication**: Secure user authentication with JWT, including registration, login, and profile management.
- **Product Management**: Admin capabilities to add, update, and delete products.
- **Shopping Cart**: Users can add products to their cart, update quantities, and remove items.
- **Order Processing**: Users can place orders, view their order history, and receive email notifications.
- **State Management**: Centralized state management using Redux for predictable state updates.
- **Containerization**: Dockerized services for easy setup and deployment.

## Tech Stack

- **Frontend**: React, Redux, Material-UI
- **Backend**: Node.js, Express.js, MongoDB, Mongoose
- **Database**: MongoDB, Mongoose
- **Containerization**: Docker, Docker Compose

## Getting Started

### Prerequisites

- Docker
- Docker Compose

### Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/ecommerce-app.git
    cd ecommerce-app
    ```

2. **Set up environment variables**: Create a `.env` file in the root directory and configure the necessary environment variables (e.g., MongoDB URI, Username, Password, etc.).

3. **Build and run the containers**:
    ```bash
    docker-compose up --build
    ```

4. **Access the application**: Open your browser and go to `http://localhost:3000`.

## Project Structure

- `client/`: Contains the React frontend.
- `server/`: Contains the Express.js backend.
- `docker-compose.yml`: Docker Compose file to set up the application services.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

1. **Fork the repository**
2. **Create a new branch** (`git checkout -b feature/your-feature-name`)
3. **Commit your changes** (`git commit -m 'Add some feature'`)
4. **Push to the branch** (`git push origin feature/your-feature-name`)
5. **Create a pull request**

## Contact

For any inquiries, please contact [achyutagupta888rg@gmail.com].
