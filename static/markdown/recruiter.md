# recruiter api

## POST register

```json
{
  "email": "xxx@starlux-airlines.com",
  "password": "abcd1234"
}
```

## POST validate

```json
{
  "id": "xxxx-xxxx-xxxx",
  "code": "xxxx-xxxx-xxxx"
}
```

## POST login

```json
{
    version: 20180625
    status: true,
    message: "OK",
    result: null
}
```

`400`

```json
{
    version: 20180625
    status: false,
    message: "Bad request",
    result:  null
}
```

`401`

```json
{
    version: 20180625
    status: false,
    message: "Unauthorized",
    result:  null
}
```

`500`

```json
{
    version: 20180625
    status: false,
    message: "Internal server error",
    result: null
}
```

## POST password

```json
{
  "email": "xxx@starlux-airlines.com",
  "password": "abcd1234"
}
```

### Response

`200`

```json
{
    version: 20180625
    status: true,
    message: "OK",
    result: null
}
```

## GET/POST/PUT resume/:jobs

```json
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
