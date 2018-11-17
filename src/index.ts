
/* IMPORT */

import isString = require ( 'lodash/isString' );
import compact = require ( 'lodash/compact' );
import castArray = require ( 'lodash/castArray' );
import stripKeys from 'strip-keys';
import * as utils from 'loader-utils';

/* JSON STRIP LOADER */

function JSONStripLoader ( source ) {

  if ( this.cacheable ) this.cacheable ();

  const obj = isString ( source ) ? JSON.parse ( source ) : source,
        options = utils.getOptions ( this ),
        keys = options ? compact ( [options.key].concat ( castArray ( options.keys ) ) ) : [],
        deep = options && options.hasOwnProperty ( 'deep' ) ? !!options.deep : true,
        value = keys.length ? stripKeys ( obj, keys, deep ) : obj;

  return `module.exports = ${JSON.stringify ( value )};`;

}

/* EXPORT */

export default JSONStripLoader;
