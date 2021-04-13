FROM node:lts-alpine

# Copy project sources
COPY dist/index.js .

COPY package.json .
COPY package-lock.json .

# Install project dependencies
RUN npm install

# Run package bundle
ENTRYPOINT ["node", "/index.js"]
