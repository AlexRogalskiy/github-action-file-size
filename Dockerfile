FROM node:lts-alpine

LABEL version="0.0.0-dev"
LABEL repository="https://github.com/AlexRogalskiy/github-action-file-size"
LABEL homepage="https://github.com/AlexRogalskiy/github-action-file-size"
LABEL maintainer="Nullables, Inc. <hello@nullables.io> (https://nullables.io)"

LABEL "com.github.actions.name"="GitHub action for file size reports"
LABEL "com.github.actions.description"="Automatically generates file size reports by provided parameters"
LABEL "com.github.actions.icon"="package"
LABEL "com.github.actions.color"="green"

# Copy project sources
COPY dist/index.js .

COPY package.json .
COPY package-lock.json .

# Install project dependencies
RUN npm install

# Run package bundle
ENTRYPOINT ["node", "/index.js"]
