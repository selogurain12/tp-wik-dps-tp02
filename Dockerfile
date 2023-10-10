FROM node:20-alpine3.17 as build
COPY . /app
WORKDIR /app
RUN npm install
RUN npm install typescript -g
RUN tsc

FROM node:20-alpine3.17 AS execution
RUN adduser -D appuser
COPY --from=build /app /app
WORKDIR /app
USER appuser
EXPOSE 3000
CMD ["npm", "run", "dev"]
