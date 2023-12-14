FROM node:18

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install any needed packages
RUN npm install

# Bundle app source
COPY . .

# Make port 4502 available to the world outside this container
EXPOSE 4502

# Define environment variable
ENV NAME World

# Run app when the container launches
CMD ["npm", "run", "start"]

