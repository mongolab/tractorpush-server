This application is the message-consuming and web component of the system described in [this Heroku Dev Center article](https://devcenter.heroku.com/articles/build-realtime-polyglot-node-ruby-mongodb-socketio-app) and deployed to http://tractorpush.herokuapp.com/.

The Ruby version of the message queuing app can be found at: https://github.com/mongolab/tractorpush-writer-ruby

The Node version can be found at: https://github.com/mongolab/tractorpush-writer-node

### Heroku deploy instructions

#### Writer app in Ruby

Pull from github

```term
$ git clone https://github.com/mongolab/tractorpush-writer-ruby.git
$ cd tractorpush-writer-ruby
```

Create the app on Heroku and add the MongoLab add-on.

```term
$ heroku create tp-writer
$ heroku addons:add mongolab
```

(deprecated) Next, [configure the required MongoDB capped collection](https://devcenter.heroku.com/articles/build-realtime-polyglot-node-ruby-mongodb-socketio-app#configure_mongodb_capped_collection).

Then deploy to Heroku and scale the `worker` process.

```term
$ git push heroku master
$ heroku ps:scale worker=1
$ cd ..
```
#### Web server app in Node.js

Pull from github

```term
$ git clone https://github.com/mongolab/tractorpush-server.git
$ cd tractorpush-server
```

Create the app on Heroku.

```term
$ heroku create tp-web
```

Copy the `MONGOLAB_URI` config var from the message writer app to this one.

```term
$ heroku config:add -a tp-web `heroku config -a tp-writer -s | grep MONGOLAB_URI`
```

Then deploy to Heroku and open in your browser

```term
$ git push heroku master
$ heroku open
```

