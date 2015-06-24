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
  // Check if the type with the given name already exists.
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
    throw new Error('The "cast" attribute has to be a function');
  }

  Astro.displayFormats[formatDefinition.name] = formatDefinition.format;
};
