Astro.utils.displayFormats = {};

Astro.utils.displayFormats.formatValue = function(format, value, params) {
  // We only format value if the type was provided.
  if (!_.isNull(format) && Astro.displayFormats[format] && !_.isUndefined(value) && !_.isNull(value)) {
    value = Astro.displayFormats[format](value,params);
  }

  return value;
};
