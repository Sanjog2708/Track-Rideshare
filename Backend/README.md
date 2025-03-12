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

# User Login Endpoint

## Endpoint: `/users/login`

### Method: POST

### Description:
This endpoint is used to log in an existing user. It requires the user's email and password.

### Request Body:
The request body should be in JSON format and include the following fields:
- `email` (string, required): The email address of the user. Must be a valid email format.
- `password` (string, required): The password for the user. Must be at least 3 characters long.

### Example Request:
```json
{
  "email": "john.doe@example.com",
  "password": "password123"
}
```

### Responses:

#### Success:
- **Status Code: 201**
- **Description:** User logged in successfully.
- **Response Body:**
  ```json
  {
    "status": 200,
    "data": {
      "user": {
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
    "message": "User login Successfully"
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

#### Unauthorized:
- **Status Code: 401**
- **Description:** Invalid email or password.
- **Response Body:**
  ```json
  {
    "status": 401,
    "message": "Invalid email or password"
  }
  ```

#### Internal Server Error:
- **Status Code: 500**
- **Description:** Something went wrong while logging in the user.
- **Response Body:**
  ```json
  {
    "status": 500,
    "message": "Something went wrong while logging in the user"
  }
  ```

# User Profile Endpoint

## Endpoint: `/users/profile`

### Method: GET

### Description:
This endpoint is used to fetch the profile details of the authenticated user.

### Headers:
- `Authorization` (string, required): The Bearer token for the authenticated user.

### Example Request:
```
GET /users/profile
Authorization: Bearer <token>
```

### Responses:

#### Success:
- **Status Code: 201**
- **Description:** User details fetched successfully.
- **Response Body:**
  ```json
  {
    "status": 200,
    "data": {
      "user": {
        "_id": "user_id",
        "fullname": {
          "firstname": "John",
          "lastname": "Doe"
        },
        "email": "john.doe@example.com",
        "createdAt": "timestamp",
        "updatedAt": "timestamp"
      }
    },
    "message": "User details fetch Successfully"
  }
  ```

#### Unauthorized:
- **Status Code: 401**
- **Description:** Unauthorized access.
- **Response Body:**
  ```json
  {
    "status": 401,
    "message": "Unauthorized Access"
  }
  ```

#### Internal Server Error:
- **Status Code: 500**
- **Description:** Something went wrong while fetching the user details.
- **Response Body:**
  ```json
  {
    "status": 500,
    "message": "Something went wrong while fetching the user details"
  }
  ```

# User Logout Endpoint

## Endpoint: `/users/logout`

### Method: GET

### Description:
This endpoint is used to log out the authenticated user.

### Headers:
- `Authorization` (string, required): The Bearer token for the authenticated user.

### Example Request:
```
GET /users/logout
Authorization: Bearer <token>
```

### Responses:

#### Success:
- **Status Code: 201**
- **Description:** User logged out successfully.
- **Response Body:**
  ```json
  {
    "status": 200,
    "message": "User logout Successfully"
  }
  ```

#### Unauthorized:
- **Status Code: 401**
- **Description:** Unauthorized access.
- **Response Body:**
  ```json
  {
    "status": 401,
    "message": "Unauthorized Access"
  }
  ```

#### Internal Server Error:
- **Status Code: 500**
- **Description:** Something went wrong while logging out the user.
- **Response Body:**
  ```json
  {
    "status": 500,
    "message": "Something went wrong while logging out the user"
  }
  ```

# Captain Registration Endpoint

## Endpoint: `/captains/register`

### Method: POST

### Description:
This endpoint is used to register a new captain. It requires the captain's first name, last name, email, password, and vehicle details.

### Request Body:
The request body should be in JSON format and include the following fields:
- `firstname` (string, required): The first name of the captain. Must be at least 3 characters long.
- `lastname` (string, required): The last name of the captain. Must be at least 3 characters long.
- `email` (string, required): The email address of the captain. Must be a valid email format.
- `password` (string, required): The password for the captain. Must be at least 3 characters long.
- `vehicle` (object, required): The vehicle details of the captain.
  - `color` (string, required): The color of the vehicle. Must be at least 3 characters long.
  - `plate` (string, required): The plate number of the vehicle. Must be at least 4 characters long.
  - `capacity` (number, required): The capacity of the vehicle. Must be at least 1.
  - `vehicleType` (string, required): The type of the vehicle. Must be one of `car`, `motorcycle`, or `auto`.

### Example Request:
```json
{
  "firstname": "Jane",
  "lastname": "Doe",
  "email": "jane.doe@example.com",
  "password": "password123",
  "vehicle": {
    "color": "Red",
    "plate": "ABC1234",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

### Responses:

#### Success:
- **Status Code: 201**
- **Description:** Captain registered successfully.
- **Response Body:**
  ```json
  {
    "status": 201,
    "data": {
      "captain": {
        "_id": "captain_id",
        "fullname": {
          "firstname": "Jane",
          "lastname": "Doe"
        },
        "email": "jane.doe@example.com",
        "vehicle": {
          "color": "Red",
          "plate": "ABC1234",
          "capacity": 4,
          "vehicleType": "car"
        },
        "createdAt": "timestamp",
        "updatedAt": "timestamp"
      },
      "token": "refresh_token"
    },
    "message": "Captain Created Successfully"
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
- **Description:** Captain with the provided email or username already exists.
- **Response Body:**
  ```json
  {
    "status": 409,
    "message": "User with firstname or password already exists"
  }
  ```

#### Internal Server Error:
- **Status Code: 500**
- **Description:** Something went wrong while creating the captain.
- **Response Body:**
  ```json
  {
    "status": 500,
    "message": "Something went wrong while creating the captain"
  }
  ```

# Captain Profile Endpoint

## Endpoint: `/captains/profile`

### Method: GET

### Description:
This endpoint is used to fetch the profile details of the authenticated captain.

### Headers:
- `Authorization` (string, required): The Bearer token for the authenticated captain.

### Example Request:
```
GET /captains/profile
Authorization: Bearer <token>
```

### Responses:

#### Success:
- **Status Code: 201**
- **Description:** Captain details fetched successfully.
- **Response Body:**
  ```json
  {
    "status": 200,
    "data": {
      "captain": {
        "_id": "captain_id",
        "fullname": {
          "firstname": "Jane",
          "lastname": "Doe"
        },
        "email": "jane.doe@example.com",
        "vehicle": {
          "color": "Red",
          "plate": "ABC1234",
          "capacity": 4,
          "vehicleType": "car"
        },
        "createdAt": "timestamp",
        "updatedAt": "timestamp"
      }
    },
    "message": "Captain details fetch Successfully"
  }
  ```

#### Unauthorized:
- **Status Code: 401**
- **Description:** Unauthorized access.
- **Response Body:**
  ```json
  {
    "status": 401,
    "message": "Unauthorized Access"
  }
  ```

#### Internal Server Error:
- **Status Code: 500**
- **Description:** Something went wrong while fetching the captain details.
- **Response Body:**
  ```json
  {
    "status": 500,
    "message": "Something went wrong while fetching the captain details"
  }
  ```

# Captain Logout Endpoint

## Endpoint: `/captains/logout`

### Method: GET

### Description:
This endpoint is used to log out the authenticated captain.

### Headers:
- `Authorization` (string, required): The Bearer token for the authenticated captain.

### Example Request:
```
GET /captains/logout
Authorization: Bearer <token>
```

### Responses:

#### Success:
- **Status Code: 201**
- **Description:** Captain logged out successfully.
- **Response Body:**
  ```json
  {
    "status": 200,
    "message": "Captain logout Successfully"
  }
  ```

#### Unauthorized:
- **Status Code: 401**
- **Description:** Unauthorized access.
- **Response Body:**
  ```json
  {
    "status": 401,
    "message": "Unauthorized Access"
  }
  ```

#### Internal Server Error:
- **Status Code: 500**
- **Description:** Something went wrong while logging out the captain.
- **Response Body:**
  ```json
  {
    "status": 500,
    "message": "Something went wrong while logging out the captain"
  }
  ```

