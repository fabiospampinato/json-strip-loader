/* IMPORT */
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
var strip_keys_1 = require("strip-keys");
var utils = require("loader-utils");
/* JSON STRIP LOADER */
function JSONStripLoader(source) {
    if (this.cacheable)
        this.cacheable();
    var obj = _.isString(source) ? JSON.parse(source) : source, options = utils.getOptions(this), keys = options ? _.compact([options.key].concat(_.castArray(options.keys))) : [], deep = options && options.hasOwnProperty('deep') ? !!options.deep : true, value = keys.length ? strip_keys_1.default(obj, keys, deep) : obj;
    return "module.exports = " + JSON.stringify(value) + ";";
}
/* EXPORT */
exports.default = JSONStripLoader;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsWUFBWTs7O0FBRVosMEJBQTRCO0FBQzVCLHlDQUFtQztBQUNuQyxvQ0FBc0M7QUFFdEMsdUJBQXVCO0FBRXZCLHlCQUEyQixNQUFNO0lBRWhDLEVBQUUsQ0FBQyxDQUFFLElBQUksQ0FBQyxTQUFVLENBQUM7UUFBQyxJQUFJLENBQUMsU0FBUyxFQUFHLENBQUM7SUFFdkMsSUFBTSxHQUFHLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBRyxNQUFNLENBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFHLE1BQU0sQ0FBRSxHQUFHLE1BQU0sRUFDNUQsT0FBTyxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUcsSUFBSSxDQUFFLEVBQ25DLElBQUksR0FBRyxPQUFPLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBRyxPQUFPLENBQUMsSUFBSSxDQUFFLENBQUUsQ0FBRSxHQUFHLEVBQUUsRUFDekYsSUFBSSxHQUFHLE9BQU8sSUFBSSxPQUFPLENBQUMsY0FBYyxDQUFHLE1BQU0sQ0FBRSxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxHQUFHLElBQUksRUFDM0UsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsb0JBQVMsQ0FBRyxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBRSxHQUFHLEdBQUcsQ0FBQztJQUVqRSxNQUFNLENBQUMsc0JBQW9CLElBQUksQ0FBQyxTQUFTLENBQUcsS0FBSyxDQUFFLE1BQUcsQ0FBQztBQUV4RCxDQUFDO0FBRUQsWUFBWTtBQUVaLGtCQUFlLGVBQWUsQ0FBQyJ9