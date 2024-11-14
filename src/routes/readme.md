# REST API for Code Tests

follow the installation instructions in the root of the project to run the server.

When the server is up and running, you can access the following endpoints:
GET: `http://localhost:4444/code-test/arrays`



## Arrays Endpoint
**Run the arrays route:**
To test this endpoint using `curl`, you can use the following command:

```sh
curl -X GET http://localhost:4444/code-test/arrays
```

**Sample Response:**
```json 
{
    "original":[1,2,3,4,5],
    "doubled":[2,4,6,8,10],
    "filtered":[3,4,5],"sum":15
}
``` 