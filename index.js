// angular.module("swankyChat", [])
          
// // Set Up Chat Controller
// .controller("chatCtrl", function ($scope, $timeout, $rootScope) {
//   $scope.chats = [{
//     id: 0,
//     username: "Leela",
//     avatar: "https://imgflip.com/s/meme/Futurama-Leela.jpg",
//     messages: [
//     "I can explain. It's very valuable. You won't have time for sleeping, soldier, not with all the bed making you'll be doing",
//     "Who am I making this out to? We'll go deliver this crate like professionals, and then we'll go home",
//     "No! The cat shelter's on to me. I never loved you",
//     "Oh Leela! You're the only person I could turn to",
//     "Um, is this the boring, peaceful kind of taking to the streets",
//     "That's right, baby. I ain't your loverboy Flexo, the guy you love so much. You even love anyone pretending to be him!"] },

//   {
//     id: 1,
//     username: "Bender",
//     avatar: "http://orig02.deviantart.net/9689/f/2012/027/9/c/mr_bender______classy__by_sgtconker1r-d4nqpzu.png",
//     messages: [
//     "Stop! Don't shoot fire stick in space canoe! Cause explosive decompression!",
//     "Fry! Stay back! He's too powerful! You guys aren't Santa!",
//     "Hi, I'm a naughty nurse, and I really need someone to talk to. $9.95 a minute",
//     "Who are you, my warranty?!",
//     "I will destroy you"] },

//   {
//     id: 2,
//     username: "Fry",
//     avatar: "http://www.wallpaperno.com/thumbnails/detail/20121027/futurama%20fry%201920x1080%20wallpaper_www.wallpaperno.com_68.jpg",
//     messages: [
//     "Ooh, name it after me! But I've never been to the moon!",
//     "You don't know how to do any of those",
//     "The key to victory is discipline, and that means a well made bed",
//     "Stop bickering or I'm going to come back there and change your opinions manually",
//     "Can we have Bender Burgers again"] },

//   {
//     id: 3,
//     username: 'Zoidberg',
//     avatar: "http://images2.fanpop.com/images/photos/3300000/Zoidberg-futurama-3305418-1024-768.jpg",
//     messages: [
//     "All I want is to be a monkey of moderate intelligence who wears a suit",
//     "Oh, I don't have time for this",
//     "No! The kind with looting and maybe starting a few fires!",
//     "Now, now. Perfectly symmetrical violence never solved anything",
//     "Dissect its brain"] }];



//   // Assign Pushed Messages To A User
//   $scope.text;
//   $scope.add = function () {
//     var vlu = $scope.value;
//     if ($scope.text) {
//       $scope.chats[vlu].messages.push(this.text);
//       $scope.text = '';
//       console.log(vlu);
//     }
//   };

//   // Setting The Value Scope Equal To The Chat.id Which Is Retrieved Via Ng Click - We Pass The Chat.id Through The Function
//   $scope.value;
//   $scope.uid = function (ix) {
//     console.log(ix);

//     function ixy() {
//       $rootScope.value = ix;
//     }
//     // Delay Our Scope Change To Create A Smoother Transition
//     $timeout(ixy, 750);
//   };

// });

// // Animation Styles
// $(function () {

//   var index = 0;

//   function initScroll() {
//     $(".message-wrap").animate({
//       scrollTop: $("main").height() },
//     1000);
//   }

//   function scroll() {
//     $(".message-wrap").animate({
//       scrollTop: 9000 },
//     1000);
//   }

//   $("input[type='submit']").click(function () {
//     scroll();
//   });

//   $("aside").find("li").click(function () {
//     initScroll();
//     $(".init").animate({
//       'opacity': '0' },
//     500);
//   });

//   $("aside").find("li").click(function () {
//     if (index == 1) {
//       index = 0;
//       $(".message-wrap").find(".message").css({
//         'opacity': '1' });

//     } else {
//       index = 0;
//       $(".message-wrap").find(".message").css({
//         'opacity': '0' });

//       $(".loader").delay(500).animate({
//         'opacity': '1' });

//       setTimeout(function () {
//         index = 0;
//         $(".message-wrap").find(".message").css({
//           'opacity': '1' });

//         $(".loader").animate({
//           'opacity': '0' });

//       }, 3000);
//     }
//   });
// });
//# sourceURL=pen.js
    




// function Chat() {
//   this.update = updateChat;
//   this.send = sendChat;
//   this.getState = getStateOfChat;
// }
//   //gets the state of the chat
// function getStateOfChat() {
// 	if(!instanse){
// 		instanse = true;
// 		$.ajax({
// 			type: "POST",
// 			url: "process.php",
// 			data: {'function': 'getState', 'file': file},
// 			dataType: "json",	
// 			success: function(data) {state = data.state;instanse = false;}
// 		});
// 	}	
// }

// //Updates the chat
// function updateChat() {
// 	if(!instanse){
// 		instanse = true;
// 		$.ajax({
// 			type: "POST",
// 			url: "process.php",
// 			data: {'function': 'update','state': state,'file': file},
// 			dataType: "json",
// 			success: function(data) {
// 				if(data.text){
// 					for (var i = 0; i < data.text.length; i++) {
// 						$('#chat-area').append($("

// 						"+ data.text[i] +"

// 						"));
// 					}	
// 				}
// 				document.getElementById('chat-area').scrollTop = document.getElementById('chat-area').scrollHeight;
// 				instanse = false;
// 				state = data.state;
// 			}
// 		});
// 	}
// 	else {
// 		setTimeout(updateChat, 1500);
// 	}
// }

// //send the message
// function sendChat(message, nickname) { 
// 	updateChat();
// 	$.ajax({
// 		type: "POST",
// 		url: "process.php",
// 		data: {'function': 'send','message': message,'nickname': nickname,'file': file},
// 		dataType: "json",
// 		success: function(data){
// 			updateChat();
// 		}
// 	});
// }


  // // ask user for name with popup prompt    
  // var name = prompt("Enter your chat name:", "Guest");
 
  // // default name is 'Guest'
  // if (!name || name === ' ') {
  //   name = "Guest";  
  // }
  
  // // strip tags
  // name = name.replace(/(<([^>]+)>)/ig,"");
  
  // // display name on page
  // $("#name-area").html("You are: <span>" + name + "</span>");
  
  // // kick off chat
  // var chat =  new Chat();

  // $(function() {
  
  //    chat.getState(); 
     
     // watch textarea for key presses
    //  $("#sendie").keydown(function(event) {  
     
    //      var key = event.which;  
   
    //      //all keys including return.  
    //      if (key >= 33) {
           
    //          var maxLength = $(this).attr("maxlength");  
    //          var length = this.value.length;  
             
    //          // don't allow new content if length is maxed out
    //          if (length >= maxLength) {  
    //              event.preventDefault();  
    //          }  
    //      }  
                                                                                                    
     // watch textarea for release of key press
  //    $('#sendie').keyup(function(e) {  
                
  //       if (e.keyCode == 13) { 
        
  //             var text = $(this).val();
  //             var maxLength = $(this).attr("maxlength");  
  //             var length = text.length; 
               
  //             // send 
  //             if (length <= maxLength + 1) { 
  //               chat.send(text, name);  
  //               $(this).val("");
  //             } else {
  //               $(this).val(text.substring(0, maxLength));
  //             }  
  //       }
  //    });
  // });
/* <body onload="setInterval('chat.update()', 1000)"></body> */
 // <![CDATA[

  (function () {
    var chat = {
      messageToSend: "",
      messageResponses: [
        "Why did the web developer leave the restaurant? Because of the table layout.",
        "How do you comfort a JavaScript bug? You console it.",
        'An SQL query enters a bar, approaches two tables and asks: "May I join you?"',
        "What is the most used language in programming? Profanity.",
        "What is the object-oriented way to become wealthy? Inheritance.",
        "An SEO expert walks into a bar, bars, pub, tavern, public house, Irish pub, drinks, beer, alcohol"
      ],
      init: function () {
        this.cacheDOM();
        this.bindEvents();
        this.render();
      },
      cacheDOM: function () {
        this.$chatHistory = $(".chat-history");
        this.$button = $("button");
        this.$textarea = $("#message-to-send");
        this.$chatHistoryList = this.$chatHistory.find("ul");
      },
      bindEvents: function () {
        this.$button.on("click", this.addMessage.bind(this));
        this.$textarea.on("keyup", this.addMessageEnter.bind(this));
      },
      render: function () {
        this.scrollToBottom();
        if (this.messageToSend.trim() !== "") {
          var template = Handlebars.compile($("#message-template").html());
          var context = {
            messageOutput: this.messageToSend,
            time: this.getCurrentTime()
          };
  
          this.$chatHistoryList.append(template(context));
          this.scrollToBottom();
          this.$textarea.val("");
  
          // responses
          var templateResponse = Handlebars.compile(
            $("#message-response-template").html()
          );
          var contextResponse = {
            response: this.getRandomItem(this.messageResponses),
            time: this.getCurrentTime()
          };
  
          setTimeout(
            function () {
              this.$chatHistoryList.append(templateResponse(contextResponse));
              this.scrollToBottom();
            }.bind(this),
            1500
          );
        }
      },
  
      addMessage: function () {
        this.messageToSend = this.$textarea.val();
        this.render();
      },
      addMessageEnter: function (event) {
        // enter was pressed
        if (event.keyCode === 13) {
          this.addMessage();
        }
      },
      scrollToBottom: function () {
        this.$chatHistory.scrollTop(this.$chatHistory[0].scrollHeight);
      },
      getCurrentTime: function () {
        return new Date()
          .toLocaleTimeString()
          .replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)/, "$1$3");
      },
      getRandomItem: function (arr) {
        return arr[Math.floor(Math.random() * arr.length)];
      }
    };
  
    chat.init();
  
    var searchFilter = {
      options: { valueNames: ["name"] },
      init: function () {
        var userList = new List("people-list", this.options);
        var noItems = $('<li id="no-items-found">No items found</li>');
  
        userList.on("updated", function (list) {
          if (list.matchingItems.length === 0) {
            $(list.list).append(noItems);
          } else {
            noItems.detach();
          }
        });
      }
    };
  
    searchFilter.init();
  })();
  
$(function() {

    $("body").mousewheel(function(event, delta) {
 
       this.scrollLeft -= (delta * 30);
     
       event.preventDefault();
 
    });
 
 });









