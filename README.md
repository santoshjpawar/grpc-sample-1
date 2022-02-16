# grpc-sample-1

1. Create a empty folder in VSCode say *'grpc-sample-1'*.
2. Go to that folder and run - *'grpc init -y'* command. It will create *package.json* file.
3. Create *todo.proto* file by taking the code from this repo.
4. Create *server.js* file by taking the code from this repo.
5. Create *client.js* file by taking the code from this repo.
6. Open *server.js* and start the server from menu *Run -> Run Without Debugging*. You should see the message 'grpc server started' in *DEBUG CONSOLE* at the bottom.
7. Open *client.js* and run the client by typing command *node client.js* in the *TERMINAL* at the bottom. You will see the response from server with *id* field increasing every time.