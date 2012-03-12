#Tractor Push
      This is a demonstration of a socket.io client that accepts two message streams from a server asynchronously.  The left box updates on the arrival of the 'all messages' stream: simple, array, or complex.  The right box updates from a message stream of only 'complex' type.  The streams are independent but draw from the same source.  

The server is node.js running socket.io.  It reads from a capped MongoDB database with a tailable cursor.  A secondary set of servers (it happens to be in Ruby) originally wrote to the database. 

Note: Sequence numbers may not be unique.

The node.js and Ruby components are running on Heroku's Celedon Cedar stack.  The MongoDB database is hosted at MongoLab.  See this URL 'TODO: add URL' for more information.

Original Demo: 2012 March

## Legal stuff
Copyright 2012 ObjectLabs Corporation.  

Code licensed underthe Apache License, Version 2.0 (the "Apache
License"); you may not use this file except in compliance with
the Apache License.  You may obtain a copy of the License at

	   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the Apache License is distributed on an "AS IS"
BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
implied.  See the Apache License for the specific language governing
permissions and limitations under the Apache License.

Non-code content licensed underCreative Commons
Attribution-ShareAlike 3.0 Unported (CC BY-SA 3.0) at
http://creativecommons.org/licenses/by-sa/3.0/
