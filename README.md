# Astronomy Display Formatting

The [Astronomy](https://github.com/jagi/meteor-astronomy/) package extends your Mongo documents with functionalities defined in the schema. It's the model layer (in [MVC](http://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller) pattern) for Meteor or for people coming from relational databases environment, it's the Object-relational mapping system (ORM).

This module adds the ability to specify a default formatting function for each field in a schema (or each type in a schema) for use in the view layer.

## Installation

```sh
$ meteor add jagi:astronomy
```
if you haven't added it already.  Then

```sh
$ meteor add dovrosenberg:astronomy-displayformats
```

## Usage

Refer to the [Astronomy](https://github.com/jagi/meteor-astronomy/) package for detailed explanations of the underlying framework.

### Defining formats
Formats are defined in a manner very similar to types.

```js
Astro.createDisplayFormat({
  name: 'currency',
  format: function(value) {
    return "$" + value;
  }
});
```

You can then apply this format to a field:
```js
Item = Astro.Class({
  name: 'Item',
  collection: Items,
  fields: {
     price: {
        type: 'number',
        format: 'currency'
    }
  }
});

var item = new Item({price:14});
console.log(item.getFormatted('price'));  // outputs $14
```

You can also tie a format to a specific type:
```js
Astro.createDisplayFormat({
  name: 'currency',
  format: function(value) {
    return "$" + value;
  },
  defaultForTypes: ['number']
});

Item = Astro.Class({
  name: 'Item',
  collection: Items,
  fields: {
     price: {
        type: 'number'  // note: no 'format' defined
    }
  }
});

var item = new Item({price:14});
console.log(item.getFormatted('price'));  // still outputs $14
```

This default format for a type will be overridden by any format applyied to a specific field.

### Getting formatted values
This module adds to each class a `getFormatted()` function that mirrors the `get()` function, but returns a formatted value.

```js
// Return the formatted value of the "phone" field
obj.getFormatter('phone');
```

```js
// Return only "title" and "commentsCount" fields' formatted values.
obj.getFormatter(['title', 'commentsCount']);
```

```js
// Returns object with all fields and their corresponding formatted values
obj.getFormatted();
```

All of these methods trigger beforeget and afterget events as expected.

### Parameters
Finally, any format function can take second parameter:

```js
Astro.createDisplayFormat({
  name: 'currency',
  format: function(value, decimals) {
     ...
  }
});
```

And the value is passed in simply as:
```js
item.getFormatted('price',2);
```

This second value can also be useful to allow for specifying different formats for different circumstances (for example on inputs vs on display).

## License

MIT
