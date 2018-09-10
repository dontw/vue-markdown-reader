# Recruiter API

## `POST` /register

### Request

> header

```json
{
  "Accept": "application/json",
  "Content-Type": "application/json",
  "Accept-Language": "zh_TW" //or en
}
```

```json
{
  "email": "xxx@starlux-airlines.com",
  "password": "abcd1234"
}
```

### Response

`201`

```json
{
  "version": "20180831",
  "status": true,
  "message": "註冊成功",
  "result": {
    "count": 1,
    "page": 1,
    "rowPerPage": 10,
    "data": [
      {
        "id": "e13d2a40-b4bf-11e8-8310-0d3197c3f8bb",
        "email": "achihung@starlux-airlines.com",
        "updatedAt": "2018-09-10 06:08:04",
        "createdAt": "2018-09-10 06:08:04"
      }
    ]
  }
}
```

`400`

```json
{
  "version": "20180831",
  "status": false,
  "message": "The given data was invalid.",
  "result": null,
  "error": {
    "password": ["The password field is required."]
  }
}
```

`500`

```json
{
  "version": 20180831,
  "status": false,
  "message": "Internal server error",
  "result": null
}
```

## POST /validate/mail

> send validate mail again

### Request

> header

```json
{
  "Accept": "application/json",
  "Content-Type": "application/json",
  "Accept-Language": "zh_TW" //or en
}
```

```json
{
  "email": "achihung@starlux-airlines.com"
}
```

### Response

`200`

```json
{
  "version": "20180831",
  "status": true,
  "message": "寄出成功",
  "result": null
}
```

`400`

```json
{
  "version": 20180831,
  "status": false,
  "message": "Bad request",
  "result": null,
  "error": {
    "email": ["The email must be a valid email address."]
  }
}
```

`500`

```json
{
  "version": 20180831,
  "status": false,
  "message": "Internal server error",
  "result": null
}
```

## POST /validate

> validate email

### Request

> header

```json
{
  "Accept": "application/json",
  "Content-Type": "application/json",
  "Accept-Language": "zh_TW" //or en
}
```

```json
{
  "id": "xxxx-xxxx-xxxx",
  "code": "xxxx-xxxx-xxxx"
}
```

### Response

`200`

```json
{
  "version": "20180831",
  "status": true,
  "message": "寄出成功",
  "result": null
}
```

`400`

```json
{
  "version": 20180831,
  "status": false,
  "message": "Bad request",
  "result": null,
  "error": {
    "email": ["The email must be a valid email address."]
  }
}
```

`500`

```json
{
  "version": 20180831,
  "status": false,
  "message": "Internal server error",
  "result": null
}
```

## POST /login

### Request

> header

```json
{
  "Accept": "application/json",
  "Content-Type": "application/json",
  "Accept-Language": "zh_TW" //or en
}
```

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
  "version": "20180831",
  "status": true,
  "message": "OK",
  "result": {
    "count": 1,
    "page": 1,
    "rowPerPage": 10,
    "data": [
      {
        "access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xMC4yMC40My4xMjE6ODAwMFwvYXBpXC92MVwvbG9naW4iLCJpYXQiOjE1MzY1NjAxMTgsImV4cCI6MTUzNjU2MzcxOCwibmJmIjoxNTM2NTYwMTE4LCJqdGkiOiJMZ1FkY09reDdiYXB2M0h2Iiwic3ViIjoiZGUyZTM0MTAtYjRjMC0xMWU4LTg3MzItNjk2NTY1Yzk2N2VkIiwicHJ2IjoiZTJhZGRhNTMyZGQ1OTcyMDY5ZDIwMGVhZWQxZGFkNDgyYjE1MmQ4NiJ9.NhN3B3BFKhwFWXbCAT80LSWP36ZSBaJUXVHMvbo7XpM",
        "token_type": "Bearer",
        "expires_in": 3600
      }
    ]
  }
}
```

`400`

```json
{
  "version": 20180831,
  "status": false,
  "message": "Bad request",
  "result": null,
  "error": {
    "email": ["The email must be a valid email address."]
  }
}
```

`401`

```json
{
  "version": 20180831,
  "status": false,
  "message": "Unauthorized",
  "result": null
}
```

`500`

```json
{
  "version": 20180831,
  "status": false,
  "message": "Internal server error",
  "result": null
}
```

## GET /me

### Request

> header

```json
{
  "Accept": "application/json",
  "Content-Type": "application/json",
  "Accept-Language": "zh_TW", //or en
  "Authorization": "Bearer [Token]"
}
```

### Response

`200`

```json
{
  "version": "20180831",
  "status": true,
  "message": "OK",
  "result": {
    "count": 1,
    "page": 1,
    "rowPerPage": 10,
    "data": [
      {
        "id": "de2e3410-b4c0-11e8-8732-696565c967ed",
        "email": "achihung@starlux-airlines.com",
        "isEnabled": 1,
        "isTalentPool": 0,
        "isBlackList": 0,
        "memo": null,
        "createdAt": "2018-09-10 06:15:08",
        "updatedAt": "2018-09-10 06:15:08"
      }
    ]
  }
}
```

`401`

```json
{
  "version": 20180831,
  "status": false,
  "message": "Unauthorized",
  "result": null
}
```

`500`

```json
{
  "version": 20180831,
  "status": false,
  "message": "Internal server error",
  "result": null
}
```

## POST /password

### Request

> header

```json
{
  "Accept": "application/json",
  "Content-Type": "application/json",
  "Accept-Language": "zh_TW", //or en
  "Authorization": "Bearer [Token]"
}
```

```json
{
  "email": "achihung@starlux-airlines.com",
  "password": "abcd1234",
  "newPassword": "abcd1234"
}
```

### Response

`200`

```json
{
  "version": "20180831",
  "status": true,
  "message": "修改密碼成功",
  "result": {
    "count": 1,
    "page": 1,
    "rowPerPage": 10,
    "data": [
      {
        "id": "de2e3410-b4c0-11e8-8732-696565c967ed",
        "email": "achihung@starlux-airlines.com",
        "isEnabled": 1,
        "isTalentPool": 0,
        "isBlackList": 0,
        "memo": null,
        "createdAt": "2018-09-10 06:15:08",
        "updatedAt": "2018-09-10 06:19:38"
      }
    ]
  }
}
```

`400`

```json
{
  "version": 20180831,
  "status": false,
  "message": "Bad request",
  "result": null,
  "error": {
    "email": ["The email must be a valid email address."]
  }
}
```

`401`

```json
{
  "version": 20180831,
  "status": false,
  "message": "Unauthorized",
  "result": null
}
```

`500`

```json
{
  "version": 20180831,
  "status": false,
  "message": "Internal server error",
  "result": null
}
```

## POST /password/forgot

### Request

> header

```json
{
  "Accept": "application/json",
  "Content-Type": "application/json",
  "Accept-Language": "zh_TW" //or en
}
```

```json
{
  "email": "achihung@starlux-airlines.com"
}
```

### Response

`200`

```json
{
  "version": "20180831",
  "status": true,
  "message": "OK",
  "result": {
    "count": 1,
    "page": 1,
    "rowPerPage": 10,
    "data": [
      {
        "token": "e12a09cef3705d3509e85c0d19894a8d7b9f278410f459c208b7b94a87ce5e6e"
      }
    ]
  }
}
```

`400`

```json
{
  "version": 20180831,
  "status": false,
  "message": "Bad request",
  "result": null,
  "error": {
    "email": ["The email must be a valid email address."]
  }
}
```

`500`

```json
{
  "version": 20180831,
  "status": false,
  "message": "Internal server error",
  "result": null
}
```

## POST /password/reset

### Request

> header

```json
{
  "Accept": "application/json",
  "Content-Type": "application/json",
  "Accept-Language": "zh_TW" //or en
}
```

```json
{
  "token": "270eb5653f3d4473da4510eae8d00bbe57267be20d82501b0397547be3eeaaa2",
  "email": "achihung@starlux-airlines.com",
  "password": "abcd1234",
  "password_confirmation": "abcd1234"
}
```

### Response

`200`

```json
{
  "version": "20180831",
  "status": true,
  "message": "您的密碼已重置！",
  "result": null
}
```

`400`

```json
{
  "version": 20180831,
  "status": false,
  "message": "Bad request",
  "result": null,
  "error": {
    "email": ["The email must be a valid email address."]
  }
}
```

`500`

```json
{
  "version": 20180831,
  "status": false,
  "message": "Internal server error",
  "result": null
}
```

## GET /jobs

## GET /jobs/:jobsName

## GET /interview

### Request

```
null
```

### Response

`200`

```json
{
  "version": 20180831,
  "status": true,
  "message": "OK",
  "result": {
    "count": 1,
    "page": 1,
    "rowPerPage": 10,
    "data": [
      {
        "date": "2018/09/03 12:00:00",
        "status": "Application", //應徵中
        "job": "工程師"
      }
    ]
  }
}
```

## GET/POST /resume/:jobs

### Request [POST]

```json
{
    "jobId": 1,
    "lastName": "王",
    "firstName": "小明",
    ...
    ..
    .
}
```

### Response [GET]

`200`

```json
{
  "version": "20180831",
  "status": true,
  "message": "OK",
  "result": {
    "count": 1,
    "page": 1,
    "rowPerPage": 10,
    "data": [
      {
        "lastName": "小明",
        "firstName": "王"
      }
    ]
  }
}
```

# Flow

<iframe frameborder="0" style="width:100%;height:1593px;" src="https://www.draw.io/?lightbox=1&highlight=0000ff&edit=_blank&layers=1&nav=1#R5V1Zk6O2Fv41PLqLRQLxaNzuJFXJvVPpW8nMIzayzQw2Dsa95NdfCQRGi93YrO7pmao2stjO%2Bc5%2BpNas2fbtl8Tfb%2F6IAxxpph68adajZpIfCMkvOvKejyDTzgfWSRjkQ8Zp4Dn8F7NBnY0ewwAfuIlpHEdpuOcHl%2FFuh5cpN%2BYnSfzKT1vFEX%2FXvb%2FG0sDz0o%2Fk0b%2FDIN0Ub%2BGcxn%2FF4XpT3Nmw3fybhb%2F8sU7i447dTzOtVfaTf731i2uxFz1s%2FCB%2BrQxZc82aJXGc5p%2B2bzMcUdoWZMvPezrzbfncCd6ltU5A7JVe%2FOiIi2fOnix9L6hBX2jPpuEkxW8qHviLYrouP4RRvhqBDI63OE3eyRR2oYljsXMYXAzgsIHXE%2FVdxMY2VcoXd%2FMZx9fl1U9vTT6wF1cToWDeJRpkPMX0BF2zvNdNmOLnvb%2Bk374SGSBjm3RLbvBokI%2BrMIpmcRQn2bmWC20EPDJ%2BSJP4B658Y1oAQHJRT0GykjMiyWU69kKlgiUcleyI3MILwpfTRPufI0Wvl75OUj9Z43RCHj%2BdEJikfrjDyWkG%2BbRmv%2BteRj55ut9HlAbf48WhuBB5lexa%2FOXF0UYcJm%2Fz5G%2FDiCL2L5wE%2Fs6XGb%2BC9J%2BK8Xb205jxxbe8%2BFiy8JQIqMLCbgMVxihRccBpGu7WPysgBkWE%2BbE2xQExt%2BwwTtJNvI53fjQ%2FjXo88SuE%2Fk44%2B848Bv%2BYxmTodIXf43jP5l2g4yE%2BJkvMa7UcTTym6VNepHaCIz8NX3inoRHt0F3RDrZNJ3bqlzgkNy7RbAtoFlGa846dJBC7fIp69IcS%2Ff854kMaxjv67oVS%2BTyKAgypKOy7AnsRh1QVResCUJt2Kpc1t2qHvb8rbJq%2F3yfxC6XOU8XoVWfIYN7E28Xx8DGQW8GfKNqmjD%2BVQ4tagB9S2anhPRf%2B5CBMuLOjlLvfrRffAHEkx0QFCMWpVF9NXhntp2QK0HX5wn%2Fi71kc%2FnQJaeWwfPt6Dlpvblsr2EYD6lakcsvHq1tdWbcW4tm1c%2BE4fTkXrmzv%2FhNLXMkElyN2gg%2Fhvyy9Qvmwp8%2BSPR30NPhI1XwUrndkYEnITBSS5VGQhks%2FmrIvtmEQZByN%2FAWOvDJJVfU48jSVimclmOomf86KhP5AHBjA0Xti5Ye3srGYEq9WxD9ryCIDyA6gNkcaoYDnaHNH82aaN6UfpnNtatAPrq4huwYXqaZhEmO4F%2FxAMlzhylP203aeoKqBdIUGAi1oIEMHY1VBsgKCCufO0HvSQJYOOYkw3M5UkDna%2BFLmiQllnhQJ%2BP4dbmscBpUQLHn%2Fys7PDr7RgwcaKuK3MP3KHX1jE2%2Bnt92PCEygzlthR8xYtygDsoontiNchj6ZZftb6iHuFgf66xUvDsR9lBh9lYt5lvj19fYE2jx5kN6jL2lZo4B%2BPRA7Moit1vV4XcqZcnEtL1MMjSdrUDwpfKyx4qnADocnMJgRklMWBE%2FDw8kYEk4ql320cAIynMBg1QZL9tC9Y5rSXHeeaVkkZZZlbmsIaa5Bo6GpTQMiOuJoyNXmUPPmmgeb4VBMgPuBGygT4D4GBhEEFlGxuykaH5rD2Lb7hHGNJoSxwLhwC8fhmkNVY8IdUW44e2LKGakoXoe74S2K6KD0K4p35PAW1mOQqE1sM4BOZ1EbkG3VfSRPSzA1Tp5O9AcdAZuneH40iuQpqNFKOHCK5GaRgq07aWqRMnmBsvTuBEpOBX7Dcmg6Rok6l%2Fe%2BRaJMjt7miMTJHknGkWUVi8%2BVfGMpaKfDqzKOqqw77KmnaGIIGUcD1hO1aZL475VpDP5nb2SU1RS%2BwHgCRn7Fm%2BVYhknuw9FCvOjGNejtOCNzF6Ip4b1V9e%2BuejvccQRTFQkxbxQRVcKg8LI6L41DvjAFjW5E5Nx9ns4ZSfvi%2FMYiZRiyTD3jXXAPxrFEfivG0R6RPYRyBDAPQnqb2V%2Bypus5YLVdHpJWn80%2BUM6A%2BmxVxCH10%2BPwBQfDQIJjC3ukjz2ORtPm1sAe0hqc07rtO0y68j5DWQNbDpTuxRiUwG%2FDGEBgOxyhJ0Xismn%2Fi9gQZvJXaCeakq3HLME%2BLe6Pwn4I6lGx%2FrG7XtFxNGo1bF8pekg7V4NCv6gh8SB%2FKkkPyiGoJYSgqGbv6bUadSIYX6OAUu0nE89orFSR7LLcSfaplJY2dCqyihVfo3CxDX0cnlItgS%2F7M6veUKHmu9YCBuKdDqlltr1EraHLefX7KH2c4NSK%2F4GKdfojkZXR5ZhuCyqUcgR7kiNg9idHRbxyfzbnhLU2BMmGgsM9piJiicZqmueFrrLT5a4kmuUI2epG0YHvMdUtRqCmwnvvKtNtGDVa%2BisbuNR50atBJW7fIr8%2BhIr3N8Tq5k3JrxplsqbRXEnjq7Zi6e6dTVlGaBeeO9M8nX5AnjYFQ1JBvS%2BJYnFvZ0Gtqejhocu23Gz9lk1phR4zoll0IdfwtBqUWIoMAKERIZb7lLV3Im3acKFtKzQSdyvok0agzi5RXe%2BUJShaUFR7qgQo666cqWljSR9QbgHVBBXX73pxccG2guZc40jOQpm6FyrUroqaVhuWGyi3ThpXAHGR2kJsoKS10Fml2m0HoDNcaRpaCMsqnZq9VNdm14DB38dGl5NrhribDT%2B%2FeUPISDZgGh5XqBNcuUJ9CnRUB7sWV8jsGlcql0paBDIHmbvwKEdrUxatyYtLmtmQLiyC2t6WgV4vDoej8sqQRtiKrIzwkO5CcJ7eX%2FAuqOyBdw%2F0Ni3rQYilbeehJtGLNohmRB%2FHarLWFaSlUJA5wBooyPpUVdQV5q6GTIrmeRZdkJiVjLiP2jRDOYk9prYM3d92L9mCbP03mmh7CfHrPcEbOGdMRz%2F6ZPz9%2BeoacH8CYXfjMQjpMTF6uNphaLRIYxxbgJzn9CV8tI4CZUNVUxTUl0hFSkFWgvPMzqNZsQZXkQgvteF9uVe2mM%2FoVR%2BiGtmMezT1iiWmDGl9YFq181zuo7J8q05BTLOLOt1NS0Lrkx9GrWNYSDOhJV4uVWmmBYIAfhigNkQ9EpprYK9pTOW2lz%2BtF%2BAqZAV1tJpCZHuHi2WRuvrhEjm0Kv42OfTo%2F%2FyrKZLl7r%2BrVbbD6d2YFFG4ejYpI2mlrCFc8nq%2BfoTL6kS4oBhZdZTsdYRWSgAuJ%2BU%2BmN88KadopPwMTkzhRbSLnfpyrMpX2JprZwV2l2YtPFNWi7%2BGSQcOOO%2B8BD5GK6XzYi8RXqw61q%2BGfi793Y%2BCHX8Oo3VRUGUqUDeZCkMsToGaq6JvUl2KTAR1SaasRQO5LGQgh1NPJVbyhvf%2F8yOcvdCXOC7DCE29Efk9uDOOsDDE6XNhCKvMSvkJ4jHSjcDyWC4P6myaoqjFIS%2Fylz%2FINX8PD%2BknYBAU%2BIP65I9bw93MW1KuJ0KdZpUP890CdRTlM0tFnFY6I4FbwzVqYomxEUDsqCyxazuW37hbxT1TnumJeioXyKGFRvJcp7IvojVfD2R7owONxj%2BKsi%2B1FttML3fqGg3FEPXePWavm2C6CseImk6HOqo0g0w81kxnE6vrKTLIJAwJXzp3XgfmkLgKvWcWqSovsoFk3anTacYth%2F29AfRE%2ByvOWljBgtL1QfrzJm6%2FOjpqfhpGn%2F0Zyk1m1PxExGPK1CdRltQsiUxhfz6nLns%2FEw8lrdkfB8tN5z%2FkIKTyRywiYaWXFeEkTs383RIrCxefnoOyVu2Thaom2g%2BUqkukcV5sZKxoMsm0558420HlJ%2BSnOaBShYrlXxJth9yr5fJOBb3UcvO4pmnup5PuEqiPY%2BvcE4ecrkuIRZTZbrn9TJVDWC076e6vpEDFn2%2Bq9NwJLJXXzPKqaxfvsKDn2FD9lbMqHcoDpdM8j9DEBWQjp1opIjKohk4kh0lM%2F7jiiXPkZTd%2FxAGmM%2F4P"></iframe>

# apply job flow

<iframe frameborder="0" style="width:100%;height:653px;" src="https://www.draw.io/?lightbox=1&highlight=0000ff&edit=_blank&layers=1&nav=1#R3VrRcps4FP0aPyYDSID92KRpd3Z2O51JZ9o8ykY2tGAxQo7tfn0FSIAkHDu2cEjzErgIEEf33HO4eALus91nivL4fxLhdOI50W4CPk48z4XelP8rI3sRmcFZHVnRJBKxNvCY%2FMYi6IjoJolwoQxkhKQsydXggqzXeMGUGKKUbNVhS5Kqd83RChuBxwVKzej3JGJxHZ16YRv%2FByerWN7ZDcTzzdHi14qSzVrcb%2BKBZfVXH86QvJZ40CJGEdl2QuBhAu4pIazeynb3OC3BlbDV5306cLSZN8VrdsoJ0K%2FPeEbpBsspVxNjewkGjjg2YpdQFpMVWaP0oY3eVQ%2BMy0s6fC9mWco3Xb75EzO2F8uLNozwUHuF%2FwjJxThz2uJJCrKhCzEPMbNyOp0x4rk%2BY5JhRvd8AMUpYsmzupRIZMSqGdec%2BpUk%2FK6eI9IXzMTaiOQFjnoFhugKM3FSCy3f6MyiDVWA94PvGdj%2FS%2BaFgb%2BK7jZOGH7MUYXKlvNPRfwgks%2BYMrx7ETgJAFABuHElLbctF1yZwXGHB4FzGGwFp5dAgaPISA4f3f8Q51c7T%2BXOrV%2Fu7hLWHOLb7ZGT8hiIglblUR0Kr5PaWmbD8LTU%2FkAp2neG5eWA4vBtmnyRDHK1InRkfKAWLb5Rz%2BBcnvnASKkvxEgqzg6m5grFRfIbzasB5VqL5%2Baj%2FbuJ%2F5FHUJqs1jyw4OuNKQ%2BULEu4jnwQB7IkiqqETNEcp3eNOtyTlNDqvlIf%2BpKn4YLO3Ub5xOwU9ejj9I1zG3q%2BRut699yckkPIclngS0uhPyYd0mh4DqF9eCGBTy2XZmonnJlBWqbynPKtFaueq44UOVrLWJ2IjwyV5qQ%2BzG%2FWHdF3HV2bYpLNN8VVdMmDapnwQlOWpj2qNLWgSn44ivw8pjyvzVwfHtAi69IDPU17hrNVgWus1RM2bdVI6v3JtV1dTP%2FAMrX1HgRBqMrwmOr9bBR8ssea6TCscTTWwOFY4xgrMl6TdC5pZsdIY3gk%2FzLSyDmql5W7dillvjihPE%2F3poqDMneTrGywfLKv8T1rY%2FDpZI1vCHAFjTclfomS1ITjNa%2FjyyRNu2mMollUynXBKPmFO0cQhi7w7Bgl11dB9GdXfH%2BfGiguKEYMW8Vx7kbR0unD0XVCMMOWGiFviaNrAvkWCtn0Qdxbxw3VXkgAgAx8xZQXlKq8N%2Bb0R8e0vrJFIsuwobCGWFuXXF9vXgzUJAk0Q%2Bw5LzdJ9PGBAMRWk8Q1Hdl49V9JH0kUK00SKN8eRmiagWnR3rQkiG5oUxAuYTe4DrubnoHGugEMNXhXr6HdJWvyzA6jwkCFfESM8sy2Y4z4nAxTXDvpIeyyVYfiBtezy8AzsMNZn2E2M1x1bWuyxprFE6HT87wParXQWUAbguNowx609VbXWWiPzA721P6mOdl8JHs6lulKFz0wVUHyc3DTN9VWVieIJdOnf1t2j3wZOzL%2BYtMHzc8H70WjbLo%2Bx%2FdUjbqZXiZS4tLT3otaVTA4Nk84sf65vKcuXOl7ue4W%2FWGqgv79O3zbz%2BXQNK7v400QWvWtMwDU2ntZSbD7JhgYS3Sg11ugrMfO%2FiTzb%2Ft8oAawVUcLrmdooWloG5z%2BXk%2BrNdzlDzHsW1q%2B2%2F6usc759tej4OEP"></iframe>

# apply status

<iframe frameborder="0" style="width:100%;height:803px;" src="https://www.draw.io/?lightbox=1&highlight=0000ff&edit=_blank&layers=1&nav=1#R5Vtbc5s4FP41ekzGXATSIzhO05nubqbZ2W4fFZBtGow8mNz21%2B8RCJuLbJPYYKdJMykcCRDfd66SQNZ48fIlZcv5HyLkMTJH4QuyrpBpGrZJ4D8peVUSSnEhmaVRqGQbwV30H1fCkZI%2BRiFf1TpmQsRZtKwLA5EkPMhqMpam4rnebSri%2BlOXbMZbgruAxW3pjyjM5oWUmO5GfsOj2bx8suHQouWeBQ%2BzVDwm6nnItKb5T9G8YOW91Iuu5iwUzxWRNUHWOBUiK44WL2MeS3BL2Irrrre0rsed8iTrdIF6oycWP%2FJyyPnAstcSjPx1uLxghCz%2FeR5l%2FG7JAtn6DPyDbJ4tYjgz4HAaxfFYxCLNr7WmWP4D%2BSpLxQOvtDj5j7xCJNk1W0SxVJZ%2FeBqyhIG4%2FSbq5Z54mvGXiki92RcuFjxLX6GLanUUyGstVOfPG0qprWTzCp0WUUKm1Gi2vvUGSjhQaOqRJc5%2BZHkIWqdORZrNxUwkLJ5spH4d%2BwrOv3iWvSrDYY%2BZANHmDt%2BEWKp%2B%2FCXK%2FpWXX7pYnf4sqdoFvBzaVp1SopV4TAPVi9jKTFk64yWOWE9PymOWRU%2F1%2B%2BuwVpfeigievKYVE1zj9cJp0FWMQV3VYGw9jE4krnXuxCQmMOKCRVye%2FlS3e6v5VEkrrb9KmoG1CnB0Fm2nzqLTkUUvTdlrpdtSdljteI7beI7d8IiN%2FoY72tUfDooRvFulrM%2BnUtYwKkVJnTrLPQ%2BVIqRflbLPQqMO0RpTEzyOrTNdA7eJzwLOjYHWzPMS14L6m2L620koE%2Fm%2BLdfAjVTNPtRyDwn6bf4nDiIuIhRNMPInyMdoYiOfIA9anRjA8u9TOJrJI2%2B5jCNgvtXQ0qK3Jda9pcm0jv3aACppsmFq0uRmwH6XsdHzMLatBrXLDA8xNmsIY%2BvKgiYlmRAEUYtYuepj5E12aPwtT8IomX0cjTepdVkP4abpXnZUe4wPB5x0KLuHTQLNWha43Sb25odvLRxLra9aQlFMHhplegkO5DwcVu8UHFy7d44ARON8KCKm9D%2FghTwfEV9K6BXycr%2FkUeQ5bWfzNXkCdwJ3%2BppkPH2K%2BPPHcUjY2lK5DBKDz80ZbU94jaonOjwG47be02PHYH3C6zQJ72n2g9j159ijPaXq7v4Hl6qWxtrPVNeOW1zpdM0dRtfcxjz42tkcf77U0tTObdc9yfNJMs5zS4Jk%2FdF25sqHf6RCyqEn9OLl0tk5JyZ7bEQzdXh0d9wVTk1MLAogciX1F5gGzQX99UbIH7dV9JpF8dEVt7G0RgIeBEiztHZPsI3fM5HbXdVJw6fYZEhV18zQnFkQOcQMaNsMDGOYUGE0Vz9so7dYoSmkJi6iYGRWJe%2BHU1%2F%2BFk0eaRvVX9MpTz9OkGhazrBBQrOeCU6MOsgf5VUXeDOzjeVNlPYQh%2BvuLGScTLXuzAkIv5%2F2Soox2rZ0NAgruvk3UHxP%2FsociaqoA6dgFhoeCslqyZJS9jeLeW7Zt0KsIxEMpNrnAxmNWafHtYakR5%2FUglOiRpkLFEmBI%2FPaTvT4MQse4J7folX24dkxjAY79oDsODqXtqXkoKRHCFt4aVDdDqHbhHBABDXplGbBq1gQwOeKYKP2uihD3SAIth34zfdzBcq0T4mUZq%2BCcqHFdIAlVUxaqymP5TB8%2BXdTe5V5oDRtOC5WqmietjTwBoiyOqj11CIRCW%2FkIUrE4miWwGnA5TQECCTgUcBiTzUsojDMiwgdi3Wee%2FQZDbd70dXtmkcgknSYyJMbYZfvgEDt6mX35Y1Gb4UGN6DRLGlbWmSOsvOzw36cQzJlboSYu7pMmTquxfbuqd2jdAWzbWgHwc7SV4XelbT6TVAiMiL5tmyCvxJwzS4MWaMu8iS418LlRHSU3ryh6KMBUy9blzgAL670xtKHQzWZZ8jwDr5mktdL0%2Bip98LytPwY5JQE6faatouRfApgjDwv58rNq06ws2uZ%2BW2tZhrVyp8CnnM3F8dfdD1nNg1jwL1Sti6u6Nkkfp4ZudJNyk9vmpR857%2FkZzNdyf2NGGz5ywH5020s1fGHpe1RRxLp5ytkLZ7GLAm4doHhd%2Bev7U%2BHI9DRfdKzx51SsMRJXqwAk5pdK7nf%2FM6XANUnZNM8oTul7eylsnPok9WSDm7bke7TuHeUjnC6%2BZ6xWCfafDVqTf4H"></iframe>
