initModule = function() {
  _.extend(Astro.BaseClass.prototype, {
    getFormatted: function(fieldNameOrPattern, params) {
      var doc = this;
      var Class = doc.constructor;
      var retval;

      if (arguments.length === 0) {
        return doc.getDisplay(Astro.utils.fields.getAllFieldsNames(Class));
      } else if (arguments.length === 1) {
         if (_.isArray(fieldNameOrPattern)) {
           retval = {};

           _.each(fieldNameOrPattern, function(name) {
             values[name] = doc.getDisplay(name);
           });
           return retval;
         } else if (_.isString(fieldNameOrPattern)) {
           if (fieldNameOrPattern.indexOf('$') === -1) {
             var fieldDefinition = Astro.utils.fields.getDefinition(Class, fieldNameOrPattern);
             var value = doc.get(fieldNameOrPattern);

             if (fieldDefinition) {
               return Astro.utils.displayFormats.formatValue(fieldDefinition.type, value, params);
             } else {
               return value;
             }
           } else {
             var fieldNames = Astro.utils.fields.getFieldsNamesFromPattern(
               doc,
               fieldNameOrPattern
             );
             retval = {};

             _.each(names, function(name) {
               values[name] = doc.getDisplay(name);
             });
             return retval;
           }
         }
       }
     }
  });
};