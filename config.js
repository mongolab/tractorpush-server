platform = process.env.PLATFORM ? process.env.PLATFORM : 'safe'

config = {
  // Platform capabilities
  safe : {
    transports : ["xhr-polling"]
  },
  heroku : {
    transports : ["xhr-polling"]
  },
  joyent : {
    transports : ["websocket", "xhr-polling"]
  }
}

exports.config = config
