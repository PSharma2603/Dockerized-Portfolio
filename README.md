# Dockerized Portfolio Website - Assignment 14

This project is a React-based Portfolio Website highlighting the coursework completed throughout the program. It is styled with a custom component library and Dockerized to run on port 5575 as a production-ready build.

---

## **📌 Prerequisites**

Before setting up the application, ensure you have the following installed:

- **Docker**: Download and install Docker
- **Git** (Optional): Used for cloning the repository

### **Verify Installations**

Run the following commands to verify installation:

```bash
docker --version    # Should return Docker version
git --version       # Should return Git version

Initializing the app

npx create-react-app assignment14-portfolio-site
cd assignment14-portfolio-site

Installing the new dependencies by running the following commands

npm install react-router-dom react-icons

Modifications
Make modifications to the code and adding necessary folders and images to the project.

checking if the react app is running without errors

npm start #running app port 3000 on the local machine

Docker Environment
Building Docker image using this command in the terminal
'docker build -t sharma_pranav_coding_assignment14 .'

then running the container at port 8018
'docker run -p 5575:3000 --name sharma_pranav_coding_assignment14 sharma_pranav_coding_assignment14' using this command.

Stopping the container:
'docker stop sharma_pranav_coding_assignment14
by using this command
```