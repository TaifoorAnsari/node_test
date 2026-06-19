# Use Node.js base image
FROM node:18

# Create working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy application source code
COPY . .

# Expose application port
EXPOSE 3000

# Start the application
CMD ["node", "app.js"]
