export default {
	/**
     * <p>Returns true if the passed value is empty.</p>
     * <p>The value is deemed to be empty if it is<div class="mdetail-params"><ul>
     * <li>null</li>
     * <li>undefined</li>
     * <li>an empty array</li>
     * <li>a zero length string (Unless the <tt>allowBlank</tt> parameter is <tt>true</tt>)</li>
     * </ul></div>
     * @param {Mixed} value The value to test
     * @param {Boolean} allowBlank (optional) true to allow empty strings (defaults to false)
     * @return {Boolean}
     */
	isEmpty(v, allowBlank) {
		return v === null || v === undefined || (this.isArray(v) && !v.length) || (!allowBlank ? v === '' : false);
	},

	/**
     * Returns true if the passed value is a JavaScript array, otherwise false.
     * @param {Mixed} value The value to test
     * @return {Boolean}
     */
	isArray(v) {
		return toString.apply(v) === '[object Array]';
	},

	/**
     * Returns true if the passed object is a JavaScript date object, otherwise false.
     * @param {Object} object The object to test
     * @return {Boolean}
     */
	isDate(v) {
		return toString.apply(v) === '[object Date]';
	},

	/**
     * Returns true if the passed value is a JavaScript Object, otherwise false.
     * @param {Mixed} value The value to test
     * @return {Boolean}
     */
	isObject(v) {
		return !!v && Object.prototype.toString.call(v) === '[object Object]';
	},

	/**
     * Returns true if the passed value is a JavaScript 'primitive', a string, number or boolean.
     * @param {Mixed} value The value to test
     * @return {Boolean}
     */
	isPrimitive(v) {
		return this.isString(v) || this.isNumber(v) || this.isBoolean(v);
	},

	/**
     * Returns true if the passed value is a JavaScript Function, otherwise false.
     * @param {Mixed} value The value to test
     * @return {Boolean}
     */
	isFunction(v) {
		return toString.apply(v) === '[object Function]';
	},

	/**
     * Returns true if the passed value is a number. Returns false for non-finite numbers.
     * @param {Mixed} value The value to test
     * @return {Boolean}
     */
	isNumber(v) {
		return typeof v === 'number' && isFinite(v);
	},

	/**
     * Returns true if the passed value is a string.
     * @param {Mixed} value The value to test
     * @return {Boolean}
     */
	isString(v) {
		return typeof v === 'string';
	},

	/**
     * Returns true if the passed value is a boolean.
     * @param {Mixed} value The value to test
     * @return {Boolean}
     */
	isBoolean(v) {
		return typeof v === 'boolean';
	},

	/**
     * Returns true if the passed value is an HTMLElement
     * @param {Mixed} value The value to test
     * @return {Boolean}
     */
	isElement(v) {
		return v ? !!v.tagName : false;
	},

	/**
     * Returns true if the passed value is not undefined.
     * @param {Mixed} value The value to test
     * @return {Boolean}
     */
	isDefined(v) {
		return typeof v !== 'undefined';
	}
};
