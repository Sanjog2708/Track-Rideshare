
# User Registration Endpoint

## Endpoint: `/users/register`

### Method: POST

### Description:
This endpoint is used to register a new user. It requires the user's first name, last name, email, and password.

### Request Body:
The request body should be in JSON format and include the following fields:
- `firstname` (string, required): The first name of the user. Must be at least 3 characters long.
- `lastname` (string, optional): The last name of the user.
- `email` (string, required): The email address of the user. Must be a valid email format.
- `password` (string, required): The password for the user. Must be at least 3 characters long.

### Example Request:
```json
{
  "firstname": "John",
  "lastname": "Doe",
  "email": "john.doe@example.com",
  "password": "password123"
}
```

### Responses:

#### Success:
- **Status Code: 201**
- **Description:** User registered successfully.
- **Response Body:**
  ```json
  {
    "status": 200,
    "data": {
      "createdUser": {
        "_id": "user_id",
        "fullname": {
          "firstname": "John",
          "lastname": "Doe"
        },
        "email": "john.doe@example.com",
        "createdAt": "timestamp",
        "updatedAt": "timestamp"
      },
      "token": "refresh_token"
    },
    "message": "User register Successfully"
  }
  ```

#### Validation Errors:
- **Status Code: 400**
- **Description:** Validation errors for missing or invalid fields.
- **Response Body:**
  ```json
  {
    "status": 400,
    "message": "All fields are required"
  }
  ```

#### Conflict:
- **Status Code: 409**
- **Description:** User with the provided email or username already exists.
- **Response Body:**
  ```json
  {
    "status": 409,
    "message": "User with email or username already exists"
  }
  ```

#### Internal Server Error:
- **Status Code: 500**
- **Description:** Something went wrong while creating the user.
- **Response Body:**
  ```json
  {
    "status": 500,
    "message": "Something went wrong while creating the user"
  }
  ```
