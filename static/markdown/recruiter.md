# recruiter api

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

`200`

```json
{
  "version": 20180831,
  "status": true,
  "message": "OK",
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
  "version": 20180831,
  "status": true,
  "message": "OK",
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
  "version": 20180831,
  "status": true,
  "message": "OK",
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
  "Accept-Language": "zh_TW" //or en
}
```

```json
{
  "password": "abcd1234",
  "newPassword": "123456"
}
```

### Response

`200`

```json
{
  "version": 20180831,
  "status": true,
  "message": "OK",
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

## GET/POST/PUT /resume/:jobs

### Request [POST|PUT]

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

<iframe frameborder="0" style="width:100%;height:1131px;" src="https://www.draw.io/?lightbox=1&highlight=0000ff&edit=_blank&layers=1&nav=1&title=recruiter.xml#R7V1Jk6M4Fv41RMwc0oEAgTgal3N6ImY6OqYmuruOspFtqjG4Mc6lf%2F1IbLYWnJRZ7ZysQ4GsjU9v03tPoJmL%2Fds%2FEnzY%2FTv2SagZuv%2BmmV80wzAsF9L%2FWMl7XoIMOy%2FYJoGfF4FzwdfgL1IU6kXpKfDJkauYxnGYBge%2BcB1HEVmnXBlOkviVr7aJQ37UA94SqeDrGody6W%2BBn%2B7Kp3DO5T%2BRYLsrRwa2m%2F%2Bywus%2Ftkl8iorxNMPcZH%2F5z3tc9lU86HGH%2Ffj1oshcauYiieM0v9q%2FLUjIsC1hy9s91%2FxazTshUdqogW7lTV5weCLlnLOZpe8lGsSn4BS3cZLu4m0c4XB5LvWyJyasT53e7dJ9SC8BvfxO0vS9WF98SmNadO7hX3F8KOrlY7KBah%2BkKDrGp2Rd1IIlbeBkS8pqulHhSOmTxHuSJu%2B0UkJCnAYv%2FAC4IJRtVa9q%2Bksc0KENvSBqUy9ouiBp4Op8F%2FkkilZnyOnFxTTORdlCqBfFQHe8JgaU1yTnmxZLwoF5BTkTTAI5ik%2Fy%2FnvRPrv5xm5mkN2%2BBenv3N23omKHeNu9sMAT1HWOBxyjPx6A0krGm02wDjCtZeM9hdqLVkf23ytZHYOUSAvNL%2BPrjtb5esAZbq9UbfFLW4xGkpS8XYdfhrWCx%2BbhQSVcr2cdAkrIdhf6w9brl6Ix6ZuTIP0bidiRidhsK8ebIlcOfoHc93h1HJ%2BezFHpSWbA%2B6En01DQkzWUEjJU9DQ%2BOYExycm6a3KyZHKyatDunpxkC907pWkcUT0Y0sl4q4RebdmVtrQ1hDQXaEukzek1yEocDbnaEmreUvNgOzrcBGG4iMM4ydqaG%2By7PrNjjmkS%2F0EufsHEApQRaIs4SstFLa2zTsnYtockY%2FeOybjchI9imkP9wZAbTJ%2BUg18gF8bbIBpfo4gGyrCseM8Gr6XwXPS1a6u8asUqQae3XZsl66qfY2lVKMWlPNgJOQZ%2F4VVWga3Dgc0lmx30NPiFluAw2Ea0YE1RJVTHeIxygzUO58UP%2B8D3sxUN8YqEXuWHu9RWuSfuCu0X%2FsRiJlrlprtczZzu6plCn%2BnIsnnE87tbF7KsQjfAR9J6ieTdzhhsc81F0h1LwbZGmpqlDJ6hTL0%2FhpJdgd%2BIvDW9c46qsUHOHGVweBsTYid7Ih7HwqtYXl%2F4GytGO9%2B28ziqvO4Q9qO7gOBxBLAZq82TBL9fVCvIv3YgYFiCKaMLhJH3eDMfy2SS23Dms0QuyS7er07HgZwCwnNTYaaJJhxSWHCoAwvOncZm6oJDnK5YROEwgEZLFmkKKwAysX0lkf9gWiOnnqtaw56QooCyabz0AzbM4ldZBAy8k7NdPrhpKqRAbxs5KLsG8eEQvmeQ4PQ0viceACRYfHBAfGx5%2Fz%2BymDQ6EpN2H2KyRsG7wia4P5vdlm32BxS%2Fdo234ix%2BoWU7HOZPpSu75Vo6urrbbg17WV4vEoJZnHkSElsQSM6QAqmB3dYmquBCG1meKqpgmJYF%2FW4QFDbxrsJ36aos3wrWNhA6xiRk%2Bm1iu6S1S7HtDBUOKwfnkMsDYX7wcq5o%2F3liSXRe%2BvqUz%2FOJydsnKtpSHERUdlY1quhZ827kxvPCYskzB%2FKO6KNkffHdi6WtGIc%2BzTPeByEj4l9J4uMIK6J0kP1T8ZOd%2FXXDT6bAT%2B6AEsmZhol0Izsp%2FClOW39KY%2BRU%2Fqvx2Ynq7zSItp%2BTk8ZlpXtOPm3NNmqD0xYWBOj9JT468m74zxM5pgFL%2BNArvngUWrfGpHU0Def9jbTuymoD9bN5dtzh6N%2BVVfnDhZDRdZ7QZ5THLA7xpyLZYRKuTDSNMyPqTPq2DNV9DEvYqoMq5FL2kU9CYh65J1OIhiFRCHYUDbMdccriMaKPZia2aB1AQ7JafLxAOKpJKTv71JBZ2meTkASOyhOUG%2BfHA45K0xwfDkn8wnj9%2BcJ2v6whGzQDBkFF865y%2BwwQA0UqR9D4%2By%2B%2BsR8kXOsw5ca7tfOdJZbkJHFBB2VTZrI%2BvRbYz2kViwkcseP%2FkO%2FZadDna4RWFcvDN9tmDrb57IC00ZjmNdDv2S1THCTlDWy7bdJvTXQK8fFXQzQRurOvgS4nAD6cgV1Q3tXoFCrDGJPQpECfXDJMR0FeJR%2FBfvjIMobjozKr%2BqEt0oIsrzGSDYWt6pSynSviu0y7eWHmki4fn2JZJ0FhpY5ojhq2QMSK2G5f5igADdy%2FjNYO7cjqKgCSt1V6fAgVzw%2FElI6bkpEauAR7iPXnsMuIDPLMhswj7Ligu9A8nV0gT5tbXaCgeGQFNLV0IZxjMQY0ZQ3FYaOlo81dzZuzM5YUK%2FQlA83U5mACWI0KlsI%2FuHQ119PcJUPNg5rXCVe1xMgaESMAGth7uaCVIzOlapciM3r211rpX6csIZFOIZ6VeTOmeOzsJvGscpe02nr3lHoEauymQVBSgTQdn1Lh5AlxtOXak0huA2YssYaavnn88yOXjsJPM9hU%2FxbFaWb2Yl9jKYJ%2Fv2m6w%2Bc0rHRiElspTQjSEaqRtm4NHzTV3mDIFOpp5DTUB6yunYa86hxUrgl3cl2T9t6F%2F0fYx7fYizd%2Bk8WkxVKvru4fESTm7J9s2%2F8SkNdORMhoyVKbjbFeqwSLb69saF8n4ttN3UElyzRC4Z3LCHMsGQGm8Z6gdoCq3mY2FqCq4%2F6fROhORqIbM4rjMfAzGPsS6KPZj8D3N7pKzAPdMV3Sl5g3hgxlqqTSJ%2BGiHyF0a%2FaMg%2FC%2BrRa0JmqrZYWgBfWuyFl0Pg1qtUwjLt9OyZqykoWjWS31eVAPLx%2FaZPFEcbLPXugr9P1fvP1YiMgD9zOVkGRxyV%2FiuIFkGzCp6GPRRue4DjKxXScef9yzzIa6KLcWuu66XQlFNKZQLPu9a6moeBt4WW14sWg0CKaOmNNS75PTW69DScjTWAhFrsr%2F9VMLpQBnc38fHI%2BNghKTzzMVlICPCdooLWB7jcjqnFPUsQU86IYOGBMTTVrHjn%2BFeVziPYL8AdN462QNpNUqAHkVlJA1UQCqBejnhJFoNZn9nc4DnziG04cisWc%2FBQml6MdTIpAg31IpEWSsTLuz4I89qhJ5hOiP0lIdL%2F7TwDW1PiXZYbJCXPtz9sU3ersOMTXJ1jyIjd6MKr%2F3sXPl2xTRy4xPBdmWZW0PnPBcY4kao%2BmR1LrXUHV8IFV80TzgX88q1xdTiM1uT6O602D8W20ThAazTSA0Z3w6e8M3%2BN6yKp%2FhjLD74RlhA9otzwi%2FKRt08%2B4AORUrzs9j%2FMwsN%2Fx%2BHOD4RR2tl9LDFWlWkePa20uRp78xbfcJw4YZKKjmRES3747s71MYQOVOrj7CxL7P5LJPNLFDBEt2ZIBeUNMV2Q3EFW9SR3FEBPu7KGoutFRcxZNQndXPRwOes7%2BivKAy4HbFl0LmeUOm7OJ1jUD1%2BTK6hghonpMdaVhkB0FuWEwRqR8Euhmw18WdcERc9REfXQGseLayAbD09vxt45ypzh%2BQNpf%2FAw%3D%3D"></iframe>

# apply job flow

<iframe frameborder="0" style="width:100%;height:703px;" src="https://www.draw.io/?lightbox=1&highlight=0000ff&edit=_blank&layers=1&nav=1#R3Vrbcps6FP0aPyaDJG5%2BbNKknU57pjM5M6d5lI0MagExQo7tfv0RIC5COHVrxSHNS8Rm68Laa28thBfoNtt%2F4LhIvrCIpAvoRPsFer%2BAELgwlP8qy0FZlu6yscScRsrWGx7oT6KMjrJuaURKzVEwlgpa6MY1y3OyFpoNc852utuGpfqsBY6JYXhY49S0%2FkcjkTTWEAa9%2FSOhcdLODHz1fCu8%2FhFzts3VfAuINvVfczvD7VjqQcsER2w3MKG7BbrljImmle1vSVqB28LW9Ls%2FcrdbNye5OKWD6zU9nnC6Je2S64WJQwsGiSQ26pJxkbCY5Ti966039QOTakhHXiUiS2UTyOZ3IsRBhRdvBZOmfoTPjBXKr5mzmujocyhTybZ8rbxgB5hkImEZEfwgXThJsaBP%2BlBYMSLu%2FLquXxmVk0BH0RctVWwUea%2BAd%2B3pgwjMYyJUvx5d2RgspDfVmE%2FjDw34P7FVaYRAB3iXUEEeClzjsJMpqIN%2BFLsnwgXZD0wmdi0GyMCgA2HXJwRoaZwMksF3jiOuIfUMLP4sWEn2VHwbtB%2BroSQMz0A8pCdShasmi6ogk0S3TuGujqrw%2Be4oJvYIDJARqkdiEljyTuhB4KSkP%2FGqdqjiU1SLqZfn3Sy899KCUxrn0rCWIBMuDRV%2FqSzS79SNjEZRHekUr0h605XeW5YyXs%2FbFt%2BpiLUcGydFt6uoxWmVeSpZrpxrCD0d8ObqT8PYurDNpiRnlxh3HsmUyxV%2FU%2F3riz6d2kRzrCVacJlEG20VHjwtz95xjg8DN8X9o9MAMD3P%2FYn%2BfqD5y0azgj%2BllGcm%2FT9srjl%2FcoLrPGvS5rmkD0ZJfwVmlPVmhKgkmJ9WEVlx2YpFjVBjKQuct7YGzweBK9Ha3JaTDT2mxhkLloRlq215EbECXZ3tbugYSiWcECqhBaESGDBvME1NOH5Hv21omg7pjKNlVNXCUnD2gwzuYOICBO2ACLwjkuESci80UFxzggWxiuMKRNHGmcIROAFaEkvK%2BTVxBCaQr7rVg2sHBPp27yPUGr4STuUjVmW%2B2%2FnPkNttNX4Fve2N9lsUvIwO8KE%2BD3Se1wFjfz8IreoAsHxDOkCjT5soNsR%2F4PpAD%2F%2BcdIAzr5KgBH9XEM7JbnSZ7IbBdNa9wNs0Aka03sjbdMczOxkV%2BDrkM8ooaB6ZJliuyRDFuChSOeb9zOTyWKEA%2F3JyGUEDO5JNCWaT4bpqy1lORhJPmU7n%2BRTUeqGzgLY72oKBax6juhNoIxtoz0wOTtT%2B7uSnOwd6%2FBXTtZMf39wV2vx8cdEXjiI7ThBLom%2F8PaI93Dkm%2Bn7hf7boc9%2FsiS%2ByqfocD%2Bp71FV43ialhg4nB7W6g7lz04T2T4Qn6sKFjoTHatF7maowPuJVVe%2B1ToRdU7i%2BjTdB16puXSKk197zSoLdN0Hzo2qjUA15WuJsQs5%2BZ6t%2FD0X1q4y5K9rBF%2FsLaFrX1LQdVH%2BvrB2duS8nALcka%2BVl%2F3uYhvf9r47Q3f8%3D"></iframe>
