# Use an official Node.js base image
FROM node:18-alpine

# Set working directory inside container
WORKDIR /sharma_pranav_final_site

# Copy only package files first for layer caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Ensure /public exists before build (prevent silent failure)
RUN mkdir -p /sharma_pranav_final_site/public

# Copy /public folder explicitly
COPY public /sharma_pranav_final_site/public

# Copy the rest of the app
COPY . .

# Confirm that public folder is inside the container
RUN ls -la /sharma_pranav_final_site/public || echo "Public directory not found"

# Run the build script to create optimized production files
RUN npm run build

# Install serve to serve the build output
RUN npm install -g serve

# Expose the port required for assignment
EXPOSE 3000

# Start the production server using serve
CMD ["serve", "-s", "build", "-l", "3000"]
