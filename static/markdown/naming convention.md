# Naming Convention 命名規則

## Naming Style 命名風格

- **Camel Case 駝峰式**

  - Upper Camel Case 大駝峰

    - alias 別名: Bumpy Case 顛波式, Pascal Case
    - example: `ThisISUpperCamelCase`

  - Lower Camel Case 小駝峰

    - example: `thisIsLowerCamelCase`

- **Snake Case 蛇式**
  - example: `this_is_snake_case`
- **Screaming Snake Case 尖叫蛇式命名**

  - example: `THIS_IS_SCREAMING_SNAKE_CASE`

- **Kebab Case 串燒式**
  - alias: spinal case 脊椎式, Lisp case, dash case 破折號式
  - example: `this-is-kebeb-case`
- **Train case 火車式**
  - example: `THIS-IS-TRAIN-CASE`

## URL

小駝峰

```bash
e.g. http://localhost/api/v1/getPhoto
```

## variable

一般 variable - 小駝峰

```javascript
var brianBoobSize = 'big';
```

常數 const - 火車式

```javascript
const BRIAN_BOOB_NUM = 2;
```

## function

lower camel case 小駝峰

```javascript
function isBrainBigBoob() {
  //...
}
```

## table name

upper camel case 大駝峰

> BrianBigBoob

## columns name

snake case 蛇式

> brian_big_boob

> Foreign key: 單數 Table name_id

```bash
e.g. user_id
```

## spacing

> php: 4
> javascript: 2
