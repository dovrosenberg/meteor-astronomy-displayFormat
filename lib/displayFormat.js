Astro.createDisplayFormat = function(formatDefinition) {
  // Check if the type definition is an object.
  if (!_.isObject(formatDefinition)) {
    throw new Error('Provide a format definition');
  }
  // Check if the type name is provided.
  if (!_.has(formatDefinition, 'name')) {
    throw new Error('Provide a format name');
  }
  // Check if the type name is a string.
  if (!_.isString(formatDefinition.name)) {
    throw new Error('The format name has to be a string');
  }
  // Check if the format with the given name already exists.
  if (_.has(Astro.displayFormats, formatDefinition.name)) {
    throw new Error('Display format with the name "' + formatDefinition.name +
      '" is already defined');
  }
  // Check if the format function is provided.
  if (!_.has(formatDefinition, 'format')) {
    throw new Error('Provide the "format" function');
  }
  // Check if the "format" attribute is function.
  if (!_.isFunction(formatDefinition.format)) {
    throw new Error('The "format" attribute has to be a function');
  }

  Astro.displayFormats[formatDefinition.name] = formatDefinition.format;

  // if the defaultForTypes attribute exists, must be a string or array
  if (_.has(formatDefinition,'defaultForTypes')) {
    if (_.isString(formatDefinition.defaultForTypes)) {
      Astro.typeDisplayFormats[formatDefinition.defaultForTypes] = formatDefinition.format;
    } else if (_.isArray(formatDefinition.defaultForTypes)) {
      _.each(formatDefinition.defaultForTypes, function(type) {
         if (_.isString(type)) {
            if (!Astro.typeDisplayFormats[type]) {
              Astro.typeDisplayFormats[type] = formatDefinition.format;
            } else {
              throw new Error('Set multiple default formats for the same type "' + type + '"');
            }
        } else {
           throw new Error('The "defaultForTypes" attribute must a string or array of strings');
        }
      });
    } else {
      throw new Error('The "defaultForTypes" attribute must a string or array of strings');
    }
  }
};
