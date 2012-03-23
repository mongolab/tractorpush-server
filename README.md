# Tractor Push: A Real-time Demo with Ruby, Node.js, Socket.io and MongoDB on Heroku Cedar


Learn how to use three rising infrastructure technologies that put
real-time interactivity into Web apps: `socket.io`, `Node.js` and
`MongoDB`. Real-time interactivity examples include chat, large-scale
games, editing collaboration, and low-latency notification.  In a
market with dynamic, mobile, and social applications, a strong Web
interface is still an important component to the entire experience.
To demonstrate cross-app functionality with an existing Ruby
application, the article first walks through using a separate Heroku
app to write to a shared MongoDB acting as a simple queue.
Fortuitously, Heroku’s new Celadon Cedar stack offers several features
that support these techniques: a polyglot stack and flexible worker
dynos that connect to arbitrary queuing systems.

<p class="callout" markdown="1"> Part I code:
<a href="https://github.com/mongolab/tractorpush-writer-ruby">https://github.com/mongolab/tractorpush-writer-ruby</a></p> 
<p class="callout" markdown="1"> Part II code:
<a href="https://github.com/mongolab/tractorpush-server">https://github.com/mongolab/tractorpush-server</a></p>

## Overview

<img src="http://blog.mongolab.com/wp-content/uploads/2012/03/TailableCursorDiagram.png" width="822" height="401" alt="Overview of TractorPush components."/>
 
In the rest of the article, you 

* create the database, 
* connect a writer in Ruby,
* connect a reader in Node.js,
* instruct a browser to connect over socket.io.

First, create a MongoDB collection on MongoLab that serves as a simple
but flexible message queue.  The Ruby application writes documents to
the collection, and a Node.js application reads the documents on
demand.  The read query in Node.js is initiated by a browser request.
The query returns a tailable cursor to read documents as they arrive.
Additionally, the browser negotiates a XHR-long polling process to
simulate a push of documents to the browser.  In effect, the entire
stack, from database to browser presentation works in a push
notification manner.

<p class="callout" markdown="1">As of this writing, Heroku does not
support the newer true push WebSocket protocol.  XHR-long polling works acceptably. </p>

<img src="http://blog.mongolab.com/wp-content/uploads/2012/03/TractorPushScreenshot.png" width="841" height="563" alt="End user screenshot of TractorPush demo."/>

From an end user perspective, a browser window updates as existing
messages are sent.  Once the existing messages are exhausted, the
browser window is static until new messages arrive at the server.  As
they arrive, the browser window continues to update.  For the
impatient: http://tractorpush.herokuapp.com shows the running
application. 

Given MongoDB's schema-free design, our messages can be arbitrarily
complex JSON. In this demonstration to show the flexibility of the
object marshalling and unmarshalling, there are three types of
document-based messages that are pushed through the system:

* simple (name-value), 
* array,
* complex (nested documents).  

To demonstrate filtering of the different types of messages on the
queue, one area of the screen shows all types of messages: with their
sequence number and time of creation.  In a second side of the screen,
only complex-type messages are shown.

# Running instance
A running version of the demo is at: http://tractorpush.herokuapp.com

The server is node.js running socket.io.  It reads from a capped
MongoDB database with a tailable cursor.  A secondary set of servers
(it happens to be in Ruby) writes to the database.

Note: Sequence numbers may not be unique.

In the online demo, the node.js and Ruby components are running on
Heroku's Celedon Cedar stack.  The MongoDB database is hosted at
MongoLab.  See https://github.com/mongolab/tractorpush-server and https://github.com/mongolab/tractorpush-writer-ruby for more information.

# HOWTO

See: (TODO: URL) for detailed instructions on how to run the demo, but succintly:

* Create a mongodb database 'testdatabase' with a capped collection 'messages' on localhost OR use Heroku and create a MONGOLAB database.
* Run tractorpush-writer-ruby to insert files
* Run 'npm install' Run tractorpush-server (this project): 'node app.js'
* Point your browser to http://localhost:2000 and enjoy

# Server REQUIRES 

* Node.js 0.6.9 +
* npm 1.1.0-3
* see package.json for more dependencies (socket.io and mongodb)


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
