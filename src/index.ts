
/* IMPORT */

import * as _ from 'lodash';
import stripKeys from 'strip-keys';
import * as utils from 'loader-utils';

/* JSON STRIP LOADER */

function JSONStripLoader ( source ) {

	if ( this.cacheable ) this.cacheable ();

  const obj = _.isString ( source ) ? JSON.parse ( source ) : source,
        options = utils.getOptions ( this ),
        keys = options ? _.compact ( [options.key].concat ( _.castArray ( options.keys ) ) ) : [],
        deep = options && options.hasOwnProperty ( 'deep' ) ? !!options.deep : true,
        value = keys.length ? stripKeys ( obj, keys, deep ) : obj;

	return `module.exports = ${JSON.stringify ( value )};`;

}

/* EXPORT */

export = Object.assign ( JSONStripLoader, { default: JSONStripLoader } );
