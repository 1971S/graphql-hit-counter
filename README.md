> React + GraphQL Persistent Visit Counter

## Getting started

1. Clone the repo

```
$ git clone https://github.com/1971S/qub.git
```

2. Run the redis docker image (should also work with local redis installation)

```
$ docker run -p 6379:6379 --name redis -e ALLOW_EMPTY_PASSWORD=yes bitnami/redis:latest
```

3. Initialize the server

```
$ cd server -> npm install -> npm start
```

4. Initialize the client

```
$ cd client -> npm install -> npm start
```