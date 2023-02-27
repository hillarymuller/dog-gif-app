# PUPPY PLAYTIME

## Description

This application is my Phase 5 project for Flatiron School. The front end, found in the client folder, is a React app, and the back end uses Ruby on Rails in API mode. The goal off the application is to provide a little brain break with gifs of cute dogs for a quick mood boost throughout the workday.

Check it out here: https://youtu.be/5jx9lfiPz0c

## App Features
- users can sign up to create an account with a secure password
- users can log in & log out
- users can view a list of all dogs, with options to adopt/give the dog back to shelter if they are logged in
- users can view and take care of the dogs they adopt, along with other dogs in their household
- users can add a new dog
- one user, the app creator, can delete and edit existing dogs as well

## Possible Future Features
- this app would be fun to convert to a mobile app
- a point system could make it more of a game 
- notifications when dogs' needs hit certain scores

## Requirements

- Ruby 2.7.4
- NodeJS (v16), and npm
- Render account
- Postgresql

See Environment Setup below for instructions on installing these tools if you
don't already have them.

## Installation
Visit https://dog-gif-app.onrender.com/ to use the application or to run it in development mode: 
1. Fork & clone the repo
2. Run bundle install to install dependencies
3. Run rails db:create db:migrate db:seed
4. You can use the following commands to run the application:
  - `rails s`: run the backend on [http://localhost:3000](http://localhost:3000)
  - `npm start --prefix client`: run the frontend on
  [http://localhost:4000](http://localhost:4000)

## Contributing
1. Fork the repo
2. Create your own branch: git checkout -b my-new-branch
3. Commit your changes: git commit -am "add some feature"
4. Push your branch: git push origin my-new-branch
5. Submit a pull request

## Environment Setup

### Install the Latest Ruby Version

Verify which version of Ruby you're running by entering this in the terminal:

```console
$ ruby -v
```

We recommend version 2.7.4. If you need to upgrade you can install it using rvm:

```console
$ rvm install 2.7.4 --default
```

You should also install the latest versions of `bundler` and `rails`:

```console
$ gem install bundler
$ gem install rails
```

### Install NodeJS

Verify you are running a recent version of Node with:

```sh
node -v
```

If your Node version is not 16.x.x, install it and set it as the current and
default version with:

```sh
nvm install 16
nvm use 16
nvm alias default 16
```

You can also update your npm version with:

```sh
npm i -g npm
```

### Install Postgresql

Render requires that you use PostgreSQL for your database instead of SQLite.
PostgreSQL (or just Postgres for short) is an advanced database management
system with more features than SQLite. If you don't already have it installed,
you'll need to set it up.

#### PostgreSQL Installation for WSL

To install Postgres for WSL, run the following commands from your Ubuntu terminal:

```sh
sudo apt update
sudo apt install postgresql postgresql-contrib libpq-dev
```

Then confirm that Postgres was installed successfully:

```sh
psql --version
```

Run this command to start the Postgres service:

```sh
sudo service postgresql start
```

Finally, you'll also need to create a database user so that you are able to
connect to the database from Rails. First, check what your operating system
username is:

```sh
whoami
```

If your username is "ian", for example, you'd need to create a Postgres user
with that same name. To do so, run this command to open the Postgres CLI:

```sh
sudo -u postgres -i
```

From the Postgres CLI, run this command (replacing "ian" with your username):

```sh
createuser -sr ian
```

Then enter `control + d` or type `logout` to exit.

[This guide][postgresql wsl] has more info on setting up Postgres on WSL if you
get stuck.

[postgresql wsl]: https://docs.microsoft.com/en-us/windows/wsl/tutorials/wsl-database#install-postgresql

#### Postgresql Installation for OSX

To install Postgres for OSX, you can use Homebrew:

```sh
brew install postgresql
```

Once Postgres has been installed, run this command to start the Postgres
service:

```sh
brew services start postgresql
```

### Set Up a Render Account

You can sign up for a free account at
[https://dashboard.render.com/register][Render signup]. We recommend that you
sign up using GitHub as that will make it a little easier for you to connect
Render to your GitHub account. The instructions below assume you've done that.

[Render signup]: https://dashboard.render.com/register

Once you've completed the signup process, you will be taken to the Render
dashboard. In order to connect Render to your GitHub account, you'll need to
click the "New Web Service" button in the "Web Services" box. On the next page,
you will see a GitHub heading on the right side and below that a link labeled
"Connect account". (If you didn't sign up using GitHub, it will say "Connect
account" instead.) Click that link, then in the modal that appears click
"Install." You should then be taken back to the "Create a New Web Service" page,
which should now show a list of your GitHub repos. We won't actually create a
web service just yet so you are free to navigate away from the page at this
point.

Next, we'll set up a PostgreSQL instance. Click the "New +" button at the top of
the page and select "PostgreSQL". Enter a name for your PostgreSQL instance. The
remaining fields can be left as is. Click "Create Database" at the bottom of the
page. You should now be all set to follow the steps in the "Deploying" section.

## Troubleshooting

If you ran into any errors along the way, here are some things you can try to
troubleshoot:

- If you're on a Mac and got a server connection error when you tried to run
  `rails db:create`, one option for solving this problem for Mac users is to
  install the Postgres app. To do this, first uninstall `postgresql` by running
  `brew remove postgresql`. Next, download the app from the
  [Postgres downloads page][] and install it. Launch the app and click
  "Initialize" to create a new server. You should now be able to run
  `rails db:create`.

- If you're using WSL and got the following error running `rails db:create`:

  ```txt
  PG::ConnectionBad: FATAL:  role "yourusername" does not exist
  ```

  The issue is that you did not create a role in Postgres for the default user
  account. Check [this video](https://www.youtube.com/watch?v=bQC5izDzOgE) for
  one possible fix.

- If your app failed to deploy at the build stage, make sure your local
  environment is set up correctly by following the steps at the beginning of
  this lesson. Check that you have the latest versions of Ruby and Bundler, and
  ensure that PostgreSQL was installed successfully.

- If you deployed successfully, but you ran into issues when you visited the
  site, make sure you migrated and seeded the database. Also, make sure that
  your application works locally and try to debug any issues on your local
  machine before re-deploying. You can also check the deployment log on the
  app's page in the Render dashboard.

[postgres downloads page]: https://postgresapp.com/downloads.html

## Resources

- [Getting Started with Ruby on Rails on Render](https://render.com/docs/deploy-rails)
- [Render Databases Guide](https://render.com/docs/databases)

## License
MIT License

Copyright (c) 2023 Hillary Muller

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.