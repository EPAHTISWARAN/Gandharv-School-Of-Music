# Lightweight Node image
FROM node:22-alpine

# Create app directory
WORKDIR /app

# Copy package files first for layer caching
COPY package*.json ./

# Install only production dependencies
RUN npm ci --omit=dev

# Copy application code
COPY . .

# Render provides PORT dynamically
ENV NODE_ENV=production

EXPOSE 5000

CMD ["npm", "start"]