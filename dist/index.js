/* IMPORT */
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
var strip_keys_1 = require("strip-keys");
var loader_utils_1 = require("loader-utils");
/* JSON STRIP LOADER */
function JSONStripLoader(source) {
    if (this.cacheable)
        this.cacheable();
    var obj = _.isString(source) ? JSON.parse(source) : source, options = loader_utils_1.default.getOptions(this), keys = _.compact([options.key].concat(_.castArray(options.keys))), deep = options.hasOwnProperty('deep') ? !!options.deep : true, value = keys.length ? strip_keys_1.default(obj, keys, deep) : obj;
    this.value = [value];
    return "module.exports = " + JSON.stringify(value) + ";";
}
/* EXPORT */
exports.default = JSONStripLoader;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsWUFBWTs7O0FBRVosMEJBQTRCO0FBQzVCLHlDQUFtQztBQUNuQyw2Q0FBaUM7QUFFakMsdUJBQXVCO0FBRXZCLHlCQUEyQixNQUFNO0lBRWhDLEVBQUUsQ0FBQyxDQUFFLElBQUksQ0FBQyxTQUFVLENBQUM7UUFBQyxJQUFJLENBQUMsU0FBUyxFQUFHLENBQUM7SUFFdkMsSUFBTSxHQUFHLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBRyxNQUFNLENBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFHLE1BQU0sQ0FBRSxHQUFHLE1BQU0sRUFDNUQsT0FBTyxHQUFHLHNCQUFLLENBQUMsVUFBVSxDQUFHLElBQUksQ0FBRSxFQUNuQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBRyxPQUFPLENBQUMsSUFBSSxDQUFFLENBQUUsQ0FBRSxFQUMxRSxJQUFJLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBRyxNQUFNLENBQUUsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksR0FBRyxJQUFJLEVBQ2hFLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLG9CQUFTLENBQUcsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUUsR0FBRyxHQUFHLENBQUM7SUFFakUsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBRXJCLE1BQU0sQ0FBQyxzQkFBb0IsSUFBSSxDQUFDLFNBQVMsQ0FBRyxLQUFLLENBQUUsTUFBRyxDQUFDO0FBRXhELENBQUM7QUFFRCxZQUFZO0FBRVosa0JBQWUsZUFBZSxDQUFDIn0=