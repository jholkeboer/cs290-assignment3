	/**
	* Create an object literal with the following key value pairs:
	* type: {string} 'Goldfish'
	* brand: {string} 'Pepperidge Farm'
	* flavor: {string} 'Cheddar'
	* count: {number} 2000
	* It should be returned directly by the following function
	* @return {object} - the object literal
	*/

	function returnObjectLiteral() {
	  //your code here
	  return { type: 'Goldfish', brand: 'Pepperidge Farm', flavor: 'Cheddar', count: 2000}; //Modify ONLY this line
	  //end your code
	}

	/**
	* Create a constructor function for a `MessageLog` object.
	* @constructor
	* @param {string} user - The user associated to the message log
	* The string indicating the user should be stored in the user property of the
	* object instances.
	*
	* In addition, the following methods should be
	* callable on a MessageLog object:
	* logMessage( {string} messageText, {number} direction) - This should log a
	* message
	* as either being sent or received. A direction of 0 indicates it is a message
	* the user sent. A direction of 1 indicates it is a message the user received.
	* Behavior for other numbers is undefined.
	* getSentMessage({number} n) - returns as a string, the content of the nth most
	* recently sent message. To conserve memory, the object should only keep the
	* last 5 message. n=0 retrieves the most recent n=4 retrieves the least recent
	* of the 5.
	* totalSent() - returns an integer indicating the total number of messages sent
	* totalReceived() - returns an integer indicating the total number of messages
	* received
	*/

	//your code here
	function MessageLog(user){
		this.user = user;
		this.outbox = ['','','','',''];	//array to hold sent messages
		this.mostRecent = 'blah';			//holds most recently received message
		this.numberSent = 0;
		this.numberReceived = 0;
		this.logMessage = function(messageText, direction) {
			if (direction == 1) {
				this.numberReceived = this.numberReceived + 1;	//increment received count
				this.mostRecent = messageText;
			}
			else if (direction === 0) {
				this.numberSent = this.numberSent + 1;	//increment sent count
				var i = 0;
				if (this.outbox.length === 0) {
					this.outbox[0] = messageText;
				}
				else {
					for (i=4; i > 0; i--) {
						this.outbox[i] = this.outbox[i-1];
					}
					this.outbox[0] = messageText;
				}
			}
			else {
				return undefined;
			}
		};
		this.getSentMessage = function(n) {
			return this.outbox[n];	//return nth element of outbox.
		};
		this.totalSent = function() {
			return this.numberSent;
		};
		this.totalReceived = function() {
			return this.numberReceived;
		};
	}
	//end your code

	/**
	* Add a method to the MessageLog prototype:
	* lastReceivedMessage() - returns the message text of the last message the user
	* received.
	*/
	//your code here
	MessageLog.prototype.lastReceivedMessage = function() {
		return this.mostRecent;
	};
	//end your code

	/**
	* Create an instance of a `MessageLog` for the user "BlackHatGuy". Have the
	* instance receive 3 messages: "foo", "bar" and "baz", received in that order.
	* Assign it to the variable myLog.
	*/

	//your code here
	var myLog = new MessageLog("BlackHatGuy");
	myLog.logMessage("foo", 1);
	myLog.logMessage("bar", 1);
	myLog.logMessage("baz", 1);
	//below is for testing.
	var testLog = new MessageLog("tester");
	testLog.logMessage('I 1', 1);
	testLog.logMessage('I 2', 1);
	testLog.logMessage('I 3', 1);
	testLog.logMessage('S 0', 0);
	testLog.logMessage('S 1', 0);
	testLog.logMessage('S 2', 0);
	testLog.logMessage('S 3', 0);
	testLog.logMessage('S 4', 0);
	testLog.logMessage('S 5', 0);
	//end your code
