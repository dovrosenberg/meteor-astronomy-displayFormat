Astro.utils.displayFormats = {};

Astro.utils.displayFormats.formatValue = function(displayFormat, type, value, params) {
  // We only format value if the format was provided or (second) if the type has a default format)
  if (!_.isNull(displayFormat) && !_.isUndefined(value) && !_.isNull(value)) {
     if (Astro.displayFormats[displayFormat]) {
       return Astro.displayFormats[format](value,params);
    } else if (Astro.typeDisplayFormats[type]) {
      return Astro.typeDisplayFormats[type](value,params);
    }
  }

  return value;
};
