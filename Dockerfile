# Use the official Node.js 18 image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies (including dev dependencies for build)
RUN npm ci

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Expose port (Railway will set PORT dynamically)
EXPOSE 1337

# Start the application with dynamic port
CMD ["sh", "-c", "npm start -- --port ${PORT:-1337}"]