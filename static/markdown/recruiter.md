# recruiter api

## `POST` /register

### Request

```
{
  "email": "xxx@starlux-airlines.com",
  "password": "abcd1234"
}
```

### Response

`200`

```
{
    version: 20180625
    status: true,
    message: "OK",
    result: null
}
```

`400`

```
{
    version: 20180625
    status: false,
    message: "Bad request",
    result:  null
}
```

`500`

```
{
    version: 20180625
    status: false,
    message: "Internal server error",
    result: null
}
```

## POST /validate

### Request

```
{
  "id": "xxxx-xxxx-xxxx",
  "code": "xxxx-xxxx-xxxx"
}
```

### Response

`200`

```
{
    version: 20180625
    status: true,
    message: "OK",
    result: null
}
```

`400`

```
{
    version: 20180625
    status: false,
    message: "Bad request",
    result:  null
}
```

`401`

```
{
    version: 20180625
    status: false,
    message: "Unauthorized",
    result:  null
}
```

`500`

```
{
    version: 20180625
    status: false,
    message: "Internal server error",
    result: null
}
```

## POST /login

### Request

```
{
"email": "xxx@starlux-airlines.com",
"password": "abcd1234"
}
```

### Response

`200`

```
{
    version: 20180625
    status: true,
    message: "OK",
    result: null
}
```

`400`

```
{
    version: 20180625
    status: false,
    message: "Bad request",
    result:  null
}
```

`401`

```
{
    version: 20180625
    status: false,
    message: "Unauthorized",
    result:  null
}
```

`500`

```
{
    version: 20180625
    status: false,
    message: "Internal server error",
    result:  null
}
```

## POST /password

### Request

```
{
"password": "abcd1234",
"newPassword": "123456"
}
```

### Response

`200`

```
{
    version: 20180625
    status: true,
    message: "OK",
    result: null
}
```

`400`

```
{
    version: 20180625
    status: false,
    message: "Bad request",
    result:  null
}
```

`401`

```
{
    version: 20180625
    status: false,
    message: "Unauthorized",
    result:  null
}
```

`500`

```
{
    version: 20180625
    status: false,
    message: "Internal server error",
    result: null
}
```

## GET /jobs

## GET /jobs/:jobsName

## GET /interview

## GET/POST/PUT /resume/:jobs

`200`

```
{
    version: 20180625
    status: false,
    message: "OK",
    result:
    {
        count: 1,
        page: 1,
        rowPerPage: 10,
        data: [
          {
            "lastName": "小明",
            "firstName": "王"
          }
        ]
    }
}
```
