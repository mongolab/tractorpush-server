# Tractor Push
This is a demonstration of a socket.io client that accepts two message streams from a server asynchronously.  The left box updates on the arrival of the 'all messages' stream: simple, array, or complex.  The right box updates from a message stream of only 'complex' type.  The streams are independent but draw from the same source.  

A running version of the demo is at: TODO ADD URL

The server is node.js running socket.io.  It reads from a capped MongoDB database with a tailable cursor.  A secondary set of servers (it happens to be in Ruby) originally wrote to the database.  

Note: Sequence numbers may not be unique.

In the online demo, the node.js and Ruby components are running on Heroku's Celedon Cedar stack.  The MongoDB database is hosted at MongoLab.  See this URL 'TODO: add URL' for more information.

# HOWTO
See: (TODO: URL) for detailed instructions on how to run the demo, but succintly:
* Create a mongodb database 'testdatabase' with a capped collection 'messages' on localhost OR use Heroku and create a MONGOLAB database.
* Run tractorpush-inserter-ruby to insert files TODO NEED URL
* Run 'npm install' Run tractorpush-server (this project): 'node.js app.js'
* Point your browser to http://localhost:2000 and enjoy

# Inserter Ruby
The insertion code is at https://github.com/mongolab/tractorpush-inserter-ruby

# REQUIRES (ok, it may run with something less)
* Node.js 0.6.9 +
* npm 1.1.0-3
* see package.json for more dependencies (socket.io and mongodb)

# TODO
* Make this demo more obvious what to do if a newbie (or a pointer to the blog entry).
* Make this demo server insert one document if it finds a blank database (which means creating a capped collection.) or at least send a reasonable message to the user somehow.

Original Demo: 2012 March by ObjectLabs Corporation, makers of MongoLab.com hosted MongoDB. 

If you have comment or questions please contact us at @mongolab on Twitter or support AT mongolab.com.  Thanks for looking.

## Legal stuff
Copyright 2012 ObjectLabs Corporation.  

Code licensed under the Apache License, Version 2.0 (the "Apache
License"); you may not use this file except in compliance with
the Apache License.  You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the Apache License is distributed on an "AS IS"
BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
implied.  See the Apache License for the specific language governing
permissions and limitations under the Apache License.

Non-code content licensed under Creative Commons
Attribution-ShareAlike 3.0 Unported (CC BY-SA 3.0) at
http://creativecommons.org/licenses/by-sa/3.0/
