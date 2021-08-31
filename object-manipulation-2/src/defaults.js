/* exported defaults */
/*
  - look at each property in source
    - create storage for if the property is in target and set it to false
    - look at each property in target
      - if the property key in source matches the key in target
        - set the storage for property is in target to true
    - if the storage for in target is false
      -add the sources property and value to target
*/

function defaults(target, source) {
  for (var sourceKey in source) {
    var inTarget = false;
    for (var targetKey in target) {
      if (sourceKey === targetKey) {
        inTarget = true;
      }
    }
    if (inTarget === false) {
      target[sourceKey] = source[sourceKey];
    }
  }
}

/*
 - look at each
*/
