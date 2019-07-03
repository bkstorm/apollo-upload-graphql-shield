# apollo-upload-graphql-shield

## How to install

- Install the server: `cd api && npm install`
- Install the client:
  - `npm install -g @angular/cli`
  - `cd client && npm install`

## How to run

- Start the server: `cd api && npm start`
- Start the client: `cd client && npm run generate && ng serve --open`

## How to reproduce the error

- Acess [http://localhost:4200](http://localhost:4200)
- Fill the email and avatar file, then click the `Update` button, the error will be printed in the console.
- If change the rule `isAuthenticated` to `allow`, everything will be fine.
- This error happens when using graphql-shield 6.0.2, 5.7.1. Downgrading graphql-shield to 5.3.1 will fix it.
