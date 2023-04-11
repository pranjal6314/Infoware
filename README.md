# Infoware

## Running Tests

To run tests, run the following command

```bash
  npm intall
  
```bash
  nodemon app.js

## API Reference

#### Get all Employees Data 


```http
  GET /api/
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Create Employee 

```http
  POST /api/employees
```

#### Update Employee Details 

```http
  PUT /api/employees/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item employee update  


#### Delete Employee Data

```http
  DELETE /api/employee/:id
```

#### Fetch Employee Data

```http
  GET /api/employee/:id
```
