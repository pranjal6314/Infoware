# Infoware

## Running Tests

To run tests, run the following command

```bash
  npm install
```

  
```bash
  nodemon app.js
```


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
  DELETE /api/employees/:id
```

#### Fetch Employee Data

```http
  GET /api/employees/:id
```

## Screenshots

![App Screenshot](https://user-images.githubusercontent.com/77271332/231257989-a6f3ffe7-edb6-47ed-940d-1d620f80dee4.png?text=App+Screenshot+Here)

![App Screenshot](https://user-images.githubusercontent.com/77271332/231258416-17392387-b4ff-4001-933b-dc00b807bb25.png?text=App+Screenshot+Here)

![App Screenshot](https://user-images.githubusercontent.com/77271332/231258527-49b897a6-8e8c-4f13-8c85-5ca0e8f8df9d.png?text=App+Screenshot+Here)

![App Screenshot](https://user-images.githubusercontent.com/77271332/231258852-004f685c-31e6-4d8e-9c1a-ee9ee1aba33e.png?text=App+Screenshot+Here)
