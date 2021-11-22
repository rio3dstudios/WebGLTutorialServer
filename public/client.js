var socket = io() || {};
socket.isReady = false;

window.addEventListener('load', function() {

	var execInUnity = function(method) {
		if (!socket.isReady) return;
		
		var args = Array.prototype.slice.call(arguments, 1);
		
		f(window.unityInstance!=null)
		{
		  //fit formats the message to send to the Unity client game, take a look in NetworkManager.cs in Unity
		  window.unityInstance.SendMessage("NetworkManager", method, args.join(':'));
		
		}
		
	};//END_exe_In_Unity 

	
	socket.on('PONG', function(socket_id,msg) {
				      		
	  var currentUserAtr = socket_id+':'+msg;
	  
	 if(window.unityInstance!=null)
		{
		 
		  window.unityInstance.SendMessage ('NetworkManager', 'OnPrintPongMsg', currentUserAtr);
		
		}
	  
	});//END_SOCKET.ON

					      
	socket.on('LOGIN_SUCCESS', function(id,name,position) {
				      		
	  var currentUserAtr = id+':'+name+':'+position;
	  
	   if(window.unityInstance!=null)
		{
		 
		  window.unityInstance.SendMessage ('NetworkManager', 'OnJoinGame', currentUserAtr);
		
		}
	  
	});//END_SOCKET.ON
	
		
	socket.on('SPAWN_PLAYER', function(id,name,position) {
	
	    var currentUserAtr = id+':'+name+':'+position;
		
		if(window.unityInstance!=null)
		{
	     // sends the package currentUserAtr to the method OnSpawnPlayer in the NetworkManager class on Unity
		  window.unityInstance.SendMessage ('NetworkManager', 'OnSpawnPlayer', currentUserAtr);
		
		}
		
	});//END_SOCKET.ON
	

	
    socket.on('UPDATE_MOVE_AND_ROTATE', function(id,position,rotation) {
	     var currentUserAtr = id+':'+position+':'+rotation;
		 	
		 if(window.unityInstance!=null)
		{
		   window.unityInstance.SendMessage ('NetworkManager', 'OnUpdateMoveAndRotate',currentUserAtr);
		}
		
	});//END_SOCKET.ON
	
		        
	socket.on('USER_DISCONNECTED', function(id) {
	
	     var currentUserAtr = id;
		 
		if(window.unityInstance!=null)
		{
		  
		 window.unityInstance.SendMessage ('NetworkManager', 'OnUserDisconnected', currentUserAtr);
		
		
		}
		 
	
	});//END_SOCKET.ON
	

});//END_window_addEventListener

