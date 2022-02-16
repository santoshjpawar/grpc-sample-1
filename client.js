const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");
const packageDef = protoLoader.loadSync("C:\\cygwin64\\home\\C-RGT0897\\gRPC\\grpc-2\\todo.proto", {});
const grpcObject = grpc.loadPackageDefinition(packageDef);
const todoPackage = grpcObject.todoPackage;

const client = new todoPackage.Todo("localhost:40000", grpc.credentials.createInsecure());

client.createTodo({
    "id": 10,
    "text": "Santosh"
}, (err, response) => {
        console.log("Received from server " + JSON.stringify(response))
});
