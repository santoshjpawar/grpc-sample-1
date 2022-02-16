const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");
const packageDef = protoLoader.loadSync("C:\\cygwin64\\home\\C-RGT0897\\gRPC\\grpc-2\\todo.proto", {});
const grpcObject = grpc.loadPackageDefinition(packageDef);
const todoPackage = grpcObject.todoPackage;
const todos = [];
const server = new grpc.Server();

server.addService(todoPackage.Todo.service,
    {
        createTodo: createTodo,
        readTodos: readTodos
    });
server.bindAsync('0.0.0.0:50051', grpc.ServerCredentials.createInsecure(), () => {
    server.start();
    console.log('grpc server started');  
});

function createTodo(call, callback) {
    const todoItem = {
        "id": todos.length + 1,
        "text": call.request.text
    }
    todos.push(todoItem);
    console.log(call);
    callback(null, todoItem);
}

function readTodos(call, callback) {

}