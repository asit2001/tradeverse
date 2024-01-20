# Tradeverse React App (Vite)

This repository contains a simple React application for Tradeverse, created using Vite. The application is containerized using Docker for easy deployment.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Build and Run](#build-and-run)
- [Accessing the Application](#accessing-the-application)

## Prerequisites

Make sure you have the following installed on your machine:

- [Docker](https://www.docker.com/get-started)
- [Git](https://git-scm.com/)

## Build and Run

1. Clone this repository:

   ```bash
   git clone https://github.com/asit2001/tradeverse.git

2. Navigate to the project directory:

    ```bash
   cd tradeverse
    ```

3. Build the Docker image:

    ```bash
    docker build -t tradeverse .
    ```

4. Build the Docker image:

    ```bash
    docker run -p 8080:80 tradeverse
    ```

## Accessing the Application

Once the Docker container is running, you can access the Tradeverse React App in your web browser at <http://localhost:8080>.

hosted link: <https://tradeverse-liard.vercel.app/>
