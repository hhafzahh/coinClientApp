# Use the latest LTS version of Node.js
FROM node:20-alpine
 
# Set the working directory inside the container
WORKDIR /app
 
# Copy package.json and package-lock.json
COPY package*.json ./
 
# Install dependencies
RUN npm install
 
# Copy the rest of your application files
COPY . .

#COPY .env.docker .env
 
# Expose the port your app runs on
EXPOSE 5173
 
# Define the command to run your app
CMD ["npm", "run", "dev"]


#======================FOR CLOUD SINCE PORT NEEDS TO BE 8080 ===================

# # Use the latest LTS version of Node.js
# FROM node:20-alpine AS builder

# # Set the working directory
# WORKDIR /app

# # Copy package files and install dependencies
# COPY package*.json ./
# RUN npm install

# # Copy the rest of the app and build
# COPY . .
# RUN npm run build

# # ---- Production image ----
# FROM node:20-alpine

# # Install 'serve' to serve the built site
# RUN npm install -g serve

# # Set working dir
# WORKDIR /app

# # Copy the build from the previous stage
# COPY --from=builder /app/dist .

# # Expose port 8080 for Cloud Run
# EXPOSE 8080

# # Run the built app on port 8080
# CMD ["serve", "-s", ".", "-l", "8080"]

