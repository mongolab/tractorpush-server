This application is the message-consuming and web component of the system described in [this Heroku Dev Center article](https://devcenter.heroku.com/articles/build-realtime-polyglot-node-ruby-mongodb-socketio-app) and deployed to http://tractorpush.herokuapp.com/.

The Ruby message queuing app can be found at: https://github.com/mongolab/tractorpush-writer-ruby

#### Deploy

Create the app on Heroku.

```term
$ heroku create -s cedar tp-web
```

Copy the `MONGOLAB_URI` config var from the message queuing app to this one.

```term
$ heroku config:add -a tp-web `heroku config -a tp-writer -s | grep MONGOLAB_URI`
```

Then deploy to Heroku and open in your browser

```term
$ git push heroku master
$ heroku open
```