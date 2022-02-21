FROM node
WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm ci
COPY . .
ENV REACT_APP_API_HOST=nuweb-api
EXPOSE 3000
CMD ["npm", "start"]