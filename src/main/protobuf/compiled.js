/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.LangPackageTableCnDataTable = (function() {

    /**
     * Properties of a LangPackageTableCnDataTable.
     * @exports ILangPackageTableCnDataTable
     * @interface ILangPackageTableCnDataTable
     * @property {Array.<ILangPackageTableCnData>|null} [Data] LangPackageTableCnDataTable Data
     */

    /**
     * Constructs a new LangPackageTableCnDataTable.
     * @exports LangPackageTableCnDataTable
     * @classdesc Represents a LangPackageTableCnDataTable.
     * @implements ILangPackageTableCnDataTable
     * @constructor
     * @param {ILangPackageTableCnDataTable=} [properties] Properties to set
     */
    function LangPackageTableCnDataTable(properties) {
        this.Data = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * LangPackageTableCnDataTable Data.
     * @member {Array.<ILangPackageTableCnData>} Data
     * @memberof LangPackageTableCnDataTable
     * @instance
     */
    LangPackageTableCnDataTable.prototype.Data = $util.emptyArray;

    /**
     * Creates a new LangPackageTableCnDataTable instance using the specified properties.
     * @function create
     * @memberof LangPackageTableCnDataTable
     * @static
     * @param {ILangPackageTableCnDataTable=} [properties] Properties to set
     * @returns {LangPackageTableCnDataTable} LangPackageTableCnDataTable instance
     */
    LangPackageTableCnDataTable.create = function create(properties) {
        return new LangPackageTableCnDataTable(properties);
    };

    /**
     * Encodes the specified LangPackageTableCnDataTable message. Does not implicitly {@link LangPackageTableCnDataTable.verify|verify} messages.
     * @function encode
     * @memberof LangPackageTableCnDataTable
     * @static
     * @param {ILangPackageTableCnDataTable} message LangPackageTableCnDataTable message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LangPackageTableCnDataTable.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.Data != null && message.Data.length)
            for (var i = 0; i < message.Data.length; ++i)
                $root.LangPackageTableCnData.encode(message.Data[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified LangPackageTableCnDataTable message, length delimited. Does not implicitly {@link LangPackageTableCnDataTable.verify|verify} messages.
     * @function encodeDelimited
     * @memberof LangPackageTableCnDataTable
     * @static
     * @param {ILangPackageTableCnDataTable} message LangPackageTableCnDataTable message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LangPackageTableCnDataTable.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a LangPackageTableCnDataTable message from the specified reader or buffer.
     * @function decode
     * @memberof LangPackageTableCnDataTable
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {LangPackageTableCnDataTable} LangPackageTableCnDataTable
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LangPackageTableCnDataTable.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.LangPackageTableCnDataTable();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    if (!(message.Data && message.Data.length))
                        message.Data = [];
                    message.Data.push($root.LangPackageTableCnData.decode(reader, reader.uint32()));
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a LangPackageTableCnDataTable message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof LangPackageTableCnDataTable
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {LangPackageTableCnDataTable} LangPackageTableCnDataTable
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LangPackageTableCnDataTable.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a LangPackageTableCnDataTable message.
     * @function verify
     * @memberof LangPackageTableCnDataTable
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    LangPackageTableCnDataTable.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.Data != null && message.hasOwnProperty("Data")) {
            if (!Array.isArray(message.Data))
                return "Data: array expected";
            for (var i = 0; i < message.Data.length; ++i) {
                var error = $root.LangPackageTableCnData.verify(message.Data[i]);
                if (error)
                    return "Data." + error;
            }
        }
        return null;
    };

    /**
     * Creates a LangPackageTableCnDataTable message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof LangPackageTableCnDataTable
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {LangPackageTableCnDataTable} LangPackageTableCnDataTable
     */
    LangPackageTableCnDataTable.fromObject = function fromObject(object) {
        if (object instanceof $root.LangPackageTableCnDataTable)
            return object;
        var message = new $root.LangPackageTableCnDataTable();
        if (object.Data) {
            if (!Array.isArray(object.Data))
                throw TypeError(".LangPackageTableCnDataTable.Data: array expected");
            message.Data = [];
            for (var i = 0; i < object.Data.length; ++i) {
                if (typeof object.Data[i] !== "object")
                    throw TypeError(".LangPackageTableCnDataTable.Data: object expected");
                message.Data[i] = $root.LangPackageTableCnData.fromObject(object.Data[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a LangPackageTableCnDataTable message. Also converts values to other types if specified.
     * @function toObject
     * @memberof LangPackageTableCnDataTable
     * @static
     * @param {LangPackageTableCnDataTable} message LangPackageTableCnDataTable
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    LangPackageTableCnDataTable.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.Data = [];
        if (message.Data && message.Data.length) {
            object.Data = [];
            for (var j = 0; j < message.Data.length; ++j)
                object.Data[j] = $root.LangPackageTableCnData.toObject(message.Data[j], options);
        }
        return object;
    };

    /**
     * Converts this LangPackageTableCnDataTable to JSON.
     * @function toJSON
     * @memberof LangPackageTableCnDataTable
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    LangPackageTableCnDataTable.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for LangPackageTableCnDataTable
     * @function getTypeUrl
     * @memberof LangPackageTableCnDataTable
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    LangPackageTableCnDataTable.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/LangPackageTableCnDataTable";
    };

    return LangPackageTableCnDataTable;
})();

$root.LangPackageTableCnData = (function() {

    /**
     * Properties of a LangPackageTableCnData.
     * @exports ILangPackageTableCnData
     * @interface ILangPackageTableCnData
     * @property {number|Long|null} [Id] LangPackageTableCnData Id
     * @property {string|null} [Content] LangPackageTableCnData Content
     */

    /**
     * Constructs a new LangPackageTableCnData.
     * @exports LangPackageTableCnData
     * @classdesc Represents a LangPackageTableCnData.
     * @implements ILangPackageTableCnData
     * @constructor
     * @param {ILangPackageTableCnData=} [properties] Properties to set
     */
    function LangPackageTableCnData(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * LangPackageTableCnData Id.
     * @member {number|Long} Id
     * @memberof LangPackageTableCnData
     * @instance
     */
    LangPackageTableCnData.prototype.Id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * LangPackageTableCnData Content.
     * @member {string} Content
     * @memberof LangPackageTableCnData
     * @instance
     */
    LangPackageTableCnData.prototype.Content = "";

    /**
     * Creates a new LangPackageTableCnData instance using the specified properties.
     * @function create
     * @memberof LangPackageTableCnData
     * @static
     * @param {ILangPackageTableCnData=} [properties] Properties to set
     * @returns {LangPackageTableCnData} LangPackageTableCnData instance
     */
    LangPackageTableCnData.create = function create(properties) {
        return new LangPackageTableCnData(properties);
    };

    /**
     * Encodes the specified LangPackageTableCnData message. Does not implicitly {@link LangPackageTableCnData.verify|verify} messages.
     * @function encode
     * @memberof LangPackageTableCnData
     * @static
     * @param {ILangPackageTableCnData} message LangPackageTableCnData message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LangPackageTableCnData.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.Id != null && Object.hasOwnProperty.call(message, "Id"))
            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.Id);
        if (message.Content != null && Object.hasOwnProperty.call(message, "Content"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.Content);
        return writer;
    };

    /**
     * Encodes the specified LangPackageTableCnData message, length delimited. Does not implicitly {@link LangPackageTableCnData.verify|verify} messages.
     * @function encodeDelimited
     * @memberof LangPackageTableCnData
     * @static
     * @param {ILangPackageTableCnData} message LangPackageTableCnData message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LangPackageTableCnData.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a LangPackageTableCnData message from the specified reader or buffer.
     * @function decode
     * @memberof LangPackageTableCnData
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {LangPackageTableCnData} LangPackageTableCnData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LangPackageTableCnData.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.LangPackageTableCnData();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.Id = reader.int64();
                    break;
                }
            case 2: {
                    message.Content = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a LangPackageTableCnData message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof LangPackageTableCnData
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {LangPackageTableCnData} LangPackageTableCnData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LangPackageTableCnData.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a LangPackageTableCnData message.
     * @function verify
     * @memberof LangPackageTableCnData
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    LangPackageTableCnData.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.Id != null && message.hasOwnProperty("Id"))
            if (!$util.isInteger(message.Id) && !(message.Id && $util.isInteger(message.Id.low) && $util.isInteger(message.Id.high)))
                return "Id: integer|Long expected";
        if (message.Content != null && message.hasOwnProperty("Content"))
            if (!$util.isString(message.Content))
                return "Content: string expected";
        return null;
    };

    /**
     * Creates a LangPackageTableCnData message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof LangPackageTableCnData
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {LangPackageTableCnData} LangPackageTableCnData
     */
    LangPackageTableCnData.fromObject = function fromObject(object) {
        if (object instanceof $root.LangPackageTableCnData)
            return object;
        var message = new $root.LangPackageTableCnData();
        if (object.Id != null)
            if ($util.Long)
                (message.Id = $util.Long.fromValue(object.Id)).unsigned = false;
            else if (typeof object.Id === "string")
                message.Id = parseInt(object.Id, 10);
            else if (typeof object.Id === "number")
                message.Id = object.Id;
            else if (typeof object.Id === "object")
                message.Id = new $util.LongBits(object.Id.low >>> 0, object.Id.high >>> 0).toNumber();
        if (object.Content != null)
            message.Content = String(object.Content);
        return message;
    };

    /**
     * Creates a plain object from a LangPackageTableCnData message. Also converts values to other types if specified.
     * @function toObject
     * @memberof LangPackageTableCnData
     * @static
     * @param {LangPackageTableCnData} message LangPackageTableCnData
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    LangPackageTableCnData.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.Id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.Id = options.longs === String ? "0" : 0;
            object.Content = "";
        }
        if (message.Id != null && message.hasOwnProperty("Id"))
            if (typeof message.Id === "number")
                object.Id = options.longs === String ? String(message.Id) : message.Id;
            else
                object.Id = options.longs === String ? $util.Long.prototype.toString.call(message.Id) : options.longs === Number ? new $util.LongBits(message.Id.low >>> 0, message.Id.high >>> 0).toNumber() : message.Id;
        if (message.Content != null && message.hasOwnProperty("Content"))
            object.Content = message.Content;
        return object;
    };

    /**
     * Converts this LangPackageTableCnData to JSON.
     * @function toJSON
     * @memberof LangPackageTableCnData
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    LangPackageTableCnData.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for LangPackageTableCnData
     * @function getTypeUrl
     * @memberof LangPackageTableCnData
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    LangPackageTableCnData.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/LangPackageTableCnData";
    };

    return LangPackageTableCnData;
})();

$root.GunDataTable = (function() {

    /**
     * Properties of a GunDataTable.
     * @exports IGunDataTable
     * @interface IGunDataTable
     * @property {Array.<IGunData>|null} [Data] GunDataTable Data
     */

    /**
     * Constructs a new GunDataTable.
     * @exports GunDataTable
     * @classdesc Represents a GunDataTable.
     * @implements IGunDataTable
     * @constructor
     * @param {IGunDataTable=} [properties] Properties to set
     */
    function GunDataTable(properties) {
        this.Data = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GunDataTable Data.
     * @member {Array.<IGunData>} Data
     * @memberof GunDataTable
     * @instance
     */
    GunDataTable.prototype.Data = $util.emptyArray;

    /**
     * Creates a new GunDataTable instance using the specified properties.
     * @function create
     * @memberof GunDataTable
     * @static
     * @param {IGunDataTable=} [properties] Properties to set
     * @returns {GunDataTable} GunDataTable instance
     */
    GunDataTable.create = function create(properties) {
        return new GunDataTable(properties);
    };

    /**
     * Encodes the specified GunDataTable message. Does not implicitly {@link GunDataTable.verify|verify} messages.
     * @function encode
     * @memberof GunDataTable
     * @static
     * @param {IGunDataTable} message GunDataTable message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GunDataTable.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.Data != null && message.Data.length)
            for (var i = 0; i < message.Data.length; ++i)
                $root.GunData.encode(message.Data[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified GunDataTable message, length delimited. Does not implicitly {@link GunDataTable.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GunDataTable
     * @static
     * @param {IGunDataTable} message GunDataTable message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GunDataTable.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GunDataTable message from the specified reader or buffer.
     * @function decode
     * @memberof GunDataTable
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GunDataTable} GunDataTable
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GunDataTable.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GunDataTable();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    if (!(message.Data && message.Data.length))
                        message.Data = [];
                    message.Data.push($root.GunData.decode(reader, reader.uint32()));
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a GunDataTable message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GunDataTable
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GunDataTable} GunDataTable
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GunDataTable.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GunDataTable message.
     * @function verify
     * @memberof GunDataTable
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GunDataTable.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.Data != null && message.hasOwnProperty("Data")) {
            if (!Array.isArray(message.Data))
                return "Data: array expected";
            for (var i = 0; i < message.Data.length; ++i) {
                var error = $root.GunData.verify(message.Data[i]);
                if (error)
                    return "Data." + error;
            }
        }
        return null;
    };

    /**
     * Creates a GunDataTable message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GunDataTable
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GunDataTable} GunDataTable
     */
    GunDataTable.fromObject = function fromObject(object) {
        if (object instanceof $root.GunDataTable)
            return object;
        var message = new $root.GunDataTable();
        if (object.Data) {
            if (!Array.isArray(object.Data))
                throw TypeError(".GunDataTable.Data: array expected");
            message.Data = [];
            for (var i = 0; i < object.Data.length; ++i) {
                if (typeof object.Data[i] !== "object")
                    throw TypeError(".GunDataTable.Data: object expected");
                message.Data[i] = $root.GunData.fromObject(object.Data[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a GunDataTable message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GunDataTable
     * @static
     * @param {GunDataTable} message GunDataTable
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GunDataTable.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.Data = [];
        if (message.Data && message.Data.length) {
            object.Data = [];
            for (var j = 0; j < message.Data.length; ++j)
                object.Data[j] = $root.GunData.toObject(message.Data[j], options);
        }
        return object;
    };

    /**
     * Converts this GunDataTable to JSON.
     * @function toJSON
     * @memberof GunDataTable
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GunDataTable.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for GunDataTable
     * @function getTypeUrl
     * @memberof GunDataTable
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    GunDataTable.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/GunDataTable";
    };

    return GunDataTable;
})();

$root.GunData = (function() {

    /**
     * Properties of a GunData.
     * @exports IGunData
     * @interface IGunData
     * @property {number|null} [Id] GunData Id
     * @property {ILanguageStringData|null} [Name] GunData Name
     * @property {ILanguageStringData|null} [FirstName] GunData FirstName
     * @property {ILanguageStringData|null} [SecondName] GunData SecondName
     * @property {ILanguageStringData|null} [EnName] GunData EnName
     * @property {ILanguageStringData|null} [Introduce] GunData Introduce
     * @property {ILanguageStringData|null} [Dialogue] GunData Dialogue
     * @property {ILanguageStringData|null} [Extra] GunData Extra
     * @property {string|null} [Code] GunData Code
     * @property {number|null} [Type] GunData Type
     * @property {number|null} [CharacterId] GunData CharacterId
     * @property {number|null} [GetAudio] GunData GetAudio
     * @property {number|null} [Duty] GunData Duty
     * @property {number|null} [SecondDuty] GunData SecondDuty
     * @property {number|null} [Rank] GunData Rank
     * @property {number|null} [RoleTemplateId] GunData RoleTemplateId
     * @property {number|null} [CoreItemId] GunData CoreItemId
     * @property {ILanguageStringData|null} [UpgradeSpeech] GunData UpgradeSpeech
     * @property {number|null} [SkillNormalAttack] GunData SkillNormalAttack
     * @property {Array.<number>|null} [SkillActiveExtra] GunData SkillActiveExtra
     * @property {Array.<number>|null} [SkillTalentExtra] GunData SkillTalentExtra
     * @property {Array.<number>|null} [AiList] GunData AiList
     * @property {number|null} [Element] GunData Element
     * @property {number|null} [WeaponType] GunData WeaponType
     * @property {Array.<number>|null} [WeaponPrivate] GunData WeaponPrivate
     * @property {Array.<number>|null} [WeaponPrivateShow] GunData WeaponPrivateShow
     * @property {number|null} [WeaponDefault] GunData WeaponDefault
     * @property {number|null} [MoveCode] GunData MoveCode
     * @property {Object.<string,number>|null} [SoldGet1] GunData SoldGet1
     * @property {number|null} [SystemSwitch] GunData SystemSwitch
     * @property {boolean|null} [UseFakeAttack] GunData UseFakeAttack
     * @property {number|null} [Camp] GunData Camp
     * @property {number|null} [DefaultGrade] GunData DefaultGrade
     * @property {number|null} [UnlockCost] GunData UnlockCost
     * @property {number|null} [Grade] GunData Grade
     * @property {number|null} [GunClass] GunData GunClass
     * @property {string|null} [BarrackCameraSetting] GunData BarrackCameraSetting
     * @property {number|null} [Avatar] GunData Avatar
     * @property {number|null} [CostumeId] GunData CostumeId
     * @property {Array.<number>|null} [CostumeReplace] GunData CostumeReplace
     * @property {number|null} [PropertyId] GunData PropertyId
     * @property {Array.<number>|null} [BarrackEffectId] GunData BarrackEffectId
     * @property {number|null} [Weight] GunData Weight
     * @property {number|null} [BarrackAudioId] GunData BarrackAudioId
     * @property {number|null} [ShieldType] GunData ShieldType
     * @property {number|null} [MaxGrade] GunData MaxGrade
     * @property {number|null} [ShieldEffectId] GunData ShieldEffectId
     * @property {number|null} [BaseSupply] GunData BaseSupply
     * @property {Array.<number>|null} [SupplyTypeBanList] GunData SupplyTypeBanList
     * @property {number|null} [ExtraSkill] GunData ExtraSkill
     * @property {number|null} [ShieldBrokenEffectId] GunData ShieldBrokenEffectId
     * @property {number|null} [AttackType] GunData AttackType
     * @property {string|null} [GachaGetTimeline] GunData GachaGetTimeline
     * @property {Array.<number>|null} [BeSuppressedConfig] GunData BeSuppressedConfig
     * @property {number|null} [Shape] GunData Shape
     * @property {string|null} [ShapeParam] GunData ShapeParam
     * @property {string|null} [ShapeIcon] GunData ShapeIcon
     * @property {number|null} [ShapeTerrain] GunData ShapeTerrain
     * @property {number|null} [IdleType] GunData IdleType
     * @property {number|null} [Displacement] GunData Displacement
     * @property {boolean|null} [IsHide] GunData IsHide
     * @property {string|null} [WeakTag] GunData WeakTag
     * @property {string|null} [SuppressGroup] GunData SuppressGroup
     * @property {number|null} [UnlockHint] GunData UnlockHint
     * @property {Array.<number>|null} [UnlockDorm] GunData UnlockDorm
     * @property {number|null} [GuardRadius] GunData GuardRadius
     * @property {number|null} [GuardRadiusShow] GunData GuardRadiusShow
     * @property {number|null} [GachaGetAudio] GunData GachaGetAudio
     * @property {number|null} [GachaGetVoice] GunData GachaGetVoice
     * @property {number|null} [WeakWeaponTag] GunData WeakWeaponTag
     */

    /**
     * Constructs a new GunData.
     * @exports GunData
     * @classdesc Represents a GunData.
     * @implements IGunData
     * @constructor
     * @param {IGunData=} [properties] Properties to set
     */
    function GunData(properties) {
        this.SkillActiveExtra = [];
        this.SkillTalentExtra = [];
        this.AiList = [];
        this.WeaponPrivate = [];
        this.WeaponPrivateShow = [];
        this.SoldGet1 = {};
        this.CostumeReplace = [];
        this.BarrackEffectId = [];
        this.SupplyTypeBanList = [];
        this.BeSuppressedConfig = [];
        this.UnlockDorm = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GunData Id.
     * @member {number} Id
     * @memberof GunData
     * @instance
     */
    GunData.prototype.Id = 0;

    /**
     * GunData Name.
     * @member {ILanguageStringData|null|undefined} Name
     * @memberof GunData
     * @instance
     */
    GunData.prototype.Name = null;

    /**
     * GunData FirstName.
     * @member {ILanguageStringData|null|undefined} FirstName
     * @memberof GunData
     * @instance
     */
    GunData.prototype.FirstName = null;

    /**
     * GunData SecondName.
     * @member {ILanguageStringData|null|undefined} SecondName
     * @memberof GunData
     * @instance
     */
    GunData.prototype.SecondName = null;

    /**
     * GunData EnName.
     * @member {ILanguageStringData|null|undefined} EnName
     * @memberof GunData
     * @instance
     */
    GunData.prototype.EnName = null;

    /**
     * GunData Introduce.
     * @member {ILanguageStringData|null|undefined} Introduce
     * @memberof GunData
     * @instance
     */
    GunData.prototype.Introduce = null;

    /**
     * GunData Dialogue.
     * @member {ILanguageStringData|null|undefined} Dialogue
     * @memberof GunData
     * @instance
     */
    GunData.prototype.Dialogue = null;

    /**
     * GunData Extra.
     * @member {ILanguageStringData|null|undefined} Extra
     * @memberof GunData
     * @instance
     */
    GunData.prototype.Extra = null;

    /**
     * GunData Code.
     * @member {string} Code
     * @memberof GunData
     * @instance
     */
    GunData.prototype.Code = "";

    /**
     * GunData Type.
     * @member {number} Type
     * @memberof GunData
     * @instance
     */
    GunData.prototype.Type = 0;

    /**
     * GunData CharacterId.
     * @member {number} CharacterId
     * @memberof GunData
     * @instance
     */
    GunData.prototype.CharacterId = 0;

    /**
     * GunData GetAudio.
     * @member {number} GetAudio
     * @memberof GunData
     * @instance
     */
    GunData.prototype.GetAudio = 0;

    /**
     * GunData Duty.
     * @member {number} Duty
     * @memberof GunData
     * @instance
     */
    GunData.prototype.Duty = 0;

    /**
     * GunData SecondDuty.
     * @member {number} SecondDuty
     * @memberof GunData
     * @instance
     */
    GunData.prototype.SecondDuty = 0;

    /**
     * GunData Rank.
     * @member {number} Rank
     * @memberof GunData
     * @instance
     */
    GunData.prototype.Rank = 0;

    /**
     * GunData RoleTemplateId.
     * @member {number} RoleTemplateId
     * @memberof GunData
     * @instance
     */
    GunData.prototype.RoleTemplateId = 0;

    /**
     * GunData CoreItemId.
     * @member {number} CoreItemId
     * @memberof GunData
     * @instance
     */
    GunData.prototype.CoreItemId = 0;

    /**
     * GunData UpgradeSpeech.
     * @member {ILanguageStringData|null|undefined} UpgradeSpeech
     * @memberof GunData
     * @instance
     */
    GunData.prototype.UpgradeSpeech = null;

    /**
     * GunData SkillNormalAttack.
     * @member {number} SkillNormalAttack
     * @memberof GunData
     * @instance
     */
    GunData.prototype.SkillNormalAttack = 0;

    /**
     * GunData SkillActiveExtra.
     * @member {Array.<number>} SkillActiveExtra
     * @memberof GunData
     * @instance
     */
    GunData.prototype.SkillActiveExtra = $util.emptyArray;

    /**
     * GunData SkillTalentExtra.
     * @member {Array.<number>} SkillTalentExtra
     * @memberof GunData
     * @instance
     */
    GunData.prototype.SkillTalentExtra = $util.emptyArray;

    /**
     * GunData AiList.
     * @member {Array.<number>} AiList
     * @memberof GunData
     * @instance
     */
    GunData.prototype.AiList = $util.emptyArray;

    /**
     * GunData Element.
     * @member {number} Element
     * @memberof GunData
     * @instance
     */
    GunData.prototype.Element = 0;

    /**
     * GunData WeaponType.
     * @member {number} WeaponType
     * @memberof GunData
     * @instance
     */
    GunData.prototype.WeaponType = 0;

    /**
     * GunData WeaponPrivate.
     * @member {Array.<number>} WeaponPrivate
     * @memberof GunData
     * @instance
     */
    GunData.prototype.WeaponPrivate = $util.emptyArray;

    /**
     * GunData WeaponPrivateShow.
     * @member {Array.<number>} WeaponPrivateShow
     * @memberof GunData
     * @instance
     */
    GunData.prototype.WeaponPrivateShow = $util.emptyArray;

    /**
     * GunData WeaponDefault.
     * @member {number} WeaponDefault
     * @memberof GunData
     * @instance
     */
    GunData.prototype.WeaponDefault = 0;

    /**
     * GunData MoveCode.
     * @member {number} MoveCode
     * @memberof GunData
     * @instance
     */
    GunData.prototype.MoveCode = 0;

    /**
     * GunData SoldGet1.
     * @member {Object.<string,number>} SoldGet1
     * @memberof GunData
     * @instance
     */
    GunData.prototype.SoldGet1 = $util.emptyObject;

    /**
     * GunData SystemSwitch.
     * @member {number} SystemSwitch
     * @memberof GunData
     * @instance
     */
    GunData.prototype.SystemSwitch = 0;

    /**
     * GunData UseFakeAttack.
     * @member {boolean} UseFakeAttack
     * @memberof GunData
     * @instance
     */
    GunData.prototype.UseFakeAttack = false;

    /**
     * GunData Camp.
     * @member {number} Camp
     * @memberof GunData
     * @instance
     */
    GunData.prototype.Camp = 0;

    /**
     * GunData DefaultGrade.
     * @member {number} DefaultGrade
     * @memberof GunData
     * @instance
     */
    GunData.prototype.DefaultGrade = 0;

    /**
     * GunData UnlockCost.
     * @member {number} UnlockCost
     * @memberof GunData
     * @instance
     */
    GunData.prototype.UnlockCost = 0;

    /**
     * GunData Grade.
     * @member {number} Grade
     * @memberof GunData
     * @instance
     */
    GunData.prototype.Grade = 0;

    /**
     * GunData GunClass.
     * @member {number} GunClass
     * @memberof GunData
     * @instance
     */
    GunData.prototype.GunClass = 0;

    /**
     * GunData BarrackCameraSetting.
     * @member {string} BarrackCameraSetting
     * @memberof GunData
     * @instance
     */
    GunData.prototype.BarrackCameraSetting = "";

    /**
     * GunData Avatar.
     * @member {number} Avatar
     * @memberof GunData
     * @instance
     */
    GunData.prototype.Avatar = 0;

    /**
     * GunData CostumeId.
     * @member {number} CostumeId
     * @memberof GunData
     * @instance
     */
    GunData.prototype.CostumeId = 0;

    /**
     * GunData CostumeReplace.
     * @member {Array.<number>} CostumeReplace
     * @memberof GunData
     * @instance
     */
    GunData.prototype.CostumeReplace = $util.emptyArray;

    /**
     * GunData PropertyId.
     * @member {number} PropertyId
     * @memberof GunData
     * @instance
     */
    GunData.prototype.PropertyId = 0;

    /**
     * GunData BarrackEffectId.
     * @member {Array.<number>} BarrackEffectId
     * @memberof GunData
     * @instance
     */
    GunData.prototype.BarrackEffectId = $util.emptyArray;

    /**
     * GunData Weight.
     * @member {number} Weight
     * @memberof GunData
     * @instance
     */
    GunData.prototype.Weight = 0;

    /**
     * GunData BarrackAudioId.
     * @member {number} BarrackAudioId
     * @memberof GunData
     * @instance
     */
    GunData.prototype.BarrackAudioId = 0;

    /**
     * GunData ShieldType.
     * @member {number} ShieldType
     * @memberof GunData
     * @instance
     */
    GunData.prototype.ShieldType = 0;

    /**
     * GunData MaxGrade.
     * @member {number} MaxGrade
     * @memberof GunData
     * @instance
     */
    GunData.prototype.MaxGrade = 0;

    /**
     * GunData ShieldEffectId.
     * @member {number} ShieldEffectId
     * @memberof GunData
     * @instance
     */
    GunData.prototype.ShieldEffectId = 0;

    /**
     * GunData BaseSupply.
     * @member {number} BaseSupply
     * @memberof GunData
     * @instance
     */
    GunData.prototype.BaseSupply = 0;

    /**
     * GunData SupplyTypeBanList.
     * @member {Array.<number>} SupplyTypeBanList
     * @memberof GunData
     * @instance
     */
    GunData.prototype.SupplyTypeBanList = $util.emptyArray;

    /**
     * GunData ExtraSkill.
     * @member {number} ExtraSkill
     * @memberof GunData
     * @instance
     */
    GunData.prototype.ExtraSkill = 0;

    /**
     * GunData ShieldBrokenEffectId.
     * @member {number} ShieldBrokenEffectId
     * @memberof GunData
     * @instance
     */
    GunData.prototype.ShieldBrokenEffectId = 0;

    /**
     * GunData AttackType.
     * @member {number} AttackType
     * @memberof GunData
     * @instance
     */
    GunData.prototype.AttackType = 0;

    /**
     * GunData GachaGetTimeline.
     * @member {string} GachaGetTimeline
     * @memberof GunData
     * @instance
     */
    GunData.prototype.GachaGetTimeline = "";

    /**
     * GunData BeSuppressedConfig.
     * @member {Array.<number>} BeSuppressedConfig
     * @memberof GunData
     * @instance
     */
    GunData.prototype.BeSuppressedConfig = $util.emptyArray;

    /**
     * GunData Shape.
     * @member {number} Shape
     * @memberof GunData
     * @instance
     */
    GunData.prototype.Shape = 0;

    /**
     * GunData ShapeParam.
     * @member {string} ShapeParam
     * @memberof GunData
     * @instance
     */
    GunData.prototype.ShapeParam = "";

    /**
     * GunData ShapeIcon.
     * @member {string} ShapeIcon
     * @memberof GunData
     * @instance
     */
    GunData.prototype.ShapeIcon = "";

    /**
     * GunData ShapeTerrain.
     * @member {number} ShapeTerrain
     * @memberof GunData
     * @instance
     */
    GunData.prototype.ShapeTerrain = 0;

    /**
     * GunData IdleType.
     * @member {number} IdleType
     * @memberof GunData
     * @instance
     */
    GunData.prototype.IdleType = 0;

    /**
     * GunData Displacement.
     * @member {number} Displacement
     * @memberof GunData
     * @instance
     */
    GunData.prototype.Displacement = 0;

    /**
     * GunData IsHide.
     * @member {boolean} IsHide
     * @memberof GunData
     * @instance
     */
    GunData.prototype.IsHide = false;

    /**
     * GunData WeakTag.
     * @member {string} WeakTag
     * @memberof GunData
     * @instance
     */
    GunData.prototype.WeakTag = "";

    /**
     * GunData SuppressGroup.
     * @member {string} SuppressGroup
     * @memberof GunData
     * @instance
     */
    GunData.prototype.SuppressGroup = "";

    /**
     * GunData UnlockHint.
     * @member {number} UnlockHint
     * @memberof GunData
     * @instance
     */
    GunData.prototype.UnlockHint = 0;

    /**
     * GunData UnlockDorm.
     * @member {Array.<number>} UnlockDorm
     * @memberof GunData
     * @instance
     */
    GunData.prototype.UnlockDorm = $util.emptyArray;

    /**
     * GunData GuardRadius.
     * @member {number} GuardRadius
     * @memberof GunData
     * @instance
     */
    GunData.prototype.GuardRadius = 0;

    /**
     * GunData GuardRadiusShow.
     * @member {number} GuardRadiusShow
     * @memberof GunData
     * @instance
     */
    GunData.prototype.GuardRadiusShow = 0;

    /**
     * GunData GachaGetAudio.
     * @member {number} GachaGetAudio
     * @memberof GunData
     * @instance
     */
    GunData.prototype.GachaGetAudio = 0;

    /**
     * GunData GachaGetVoice.
     * @member {number} GachaGetVoice
     * @memberof GunData
     * @instance
     */
    GunData.prototype.GachaGetVoice = 0;

    /**
     * GunData WeakWeaponTag.
     * @member {number} WeakWeaponTag
     * @memberof GunData
     * @instance
     */
    GunData.prototype.WeakWeaponTag = 0;

    /**
     * Creates a new GunData instance using the specified properties.
     * @function create
     * @memberof GunData
     * @static
     * @param {IGunData=} [properties] Properties to set
     * @returns {GunData} GunData instance
     */
    GunData.create = function create(properties) {
        return new GunData(properties);
    };

    /**
     * Encodes the specified GunData message. Does not implicitly {@link GunData.verify|verify} messages.
     * @function encode
     * @memberof GunData
     * @static
     * @param {IGunData} message GunData message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GunData.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.Id != null && Object.hasOwnProperty.call(message, "Id"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.Id);
        if (message.Name != null && Object.hasOwnProperty.call(message, "Name"))
            $root.LanguageStringData.encode(message.Name, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        if (message.FirstName != null && Object.hasOwnProperty.call(message, "FirstName"))
            $root.LanguageStringData.encode(message.FirstName, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        if (message.SecondName != null && Object.hasOwnProperty.call(message, "SecondName"))
            $root.LanguageStringData.encode(message.SecondName, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
        if (message.EnName != null && Object.hasOwnProperty.call(message, "EnName"))
            $root.LanguageStringData.encode(message.EnName, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
        if (message.Introduce != null && Object.hasOwnProperty.call(message, "Introduce"))
            $root.LanguageStringData.encode(message.Introduce, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
        if (message.Dialogue != null && Object.hasOwnProperty.call(message, "Dialogue"))
            $root.LanguageStringData.encode(message.Dialogue, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
        if (message.Extra != null && Object.hasOwnProperty.call(message, "Extra"))
            $root.LanguageStringData.encode(message.Extra, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
        if (message.Code != null && Object.hasOwnProperty.call(message, "Code"))
            writer.uint32(/* id 9, wireType 2 =*/74).string(message.Code);
        if (message.Type != null && Object.hasOwnProperty.call(message, "Type"))
            writer.uint32(/* id 10, wireType 0 =*/80).int32(message.Type);
        if (message.CharacterId != null && Object.hasOwnProperty.call(message, "CharacterId"))
            writer.uint32(/* id 11, wireType 0 =*/88).uint32(message.CharacterId);
        if (message.GetAudio != null && Object.hasOwnProperty.call(message, "GetAudio"))
            writer.uint32(/* id 12, wireType 0 =*/96).uint32(message.GetAudio);
        if (message.Duty != null && Object.hasOwnProperty.call(message, "Duty"))
            writer.uint32(/* id 13, wireType 0 =*/104).int32(message.Duty);
        if (message.SecondDuty != null && Object.hasOwnProperty.call(message, "SecondDuty"))
            writer.uint32(/* id 14, wireType 0 =*/112).uint32(message.SecondDuty);
        if (message.Rank != null && Object.hasOwnProperty.call(message, "Rank"))
            writer.uint32(/* id 15, wireType 0 =*/120).int32(message.Rank);
        if (message.RoleTemplateId != null && Object.hasOwnProperty.call(message, "RoleTemplateId"))
            writer.uint32(/* id 16, wireType 0 =*/128).uint32(message.RoleTemplateId);
        if (message.CoreItemId != null && Object.hasOwnProperty.call(message, "CoreItemId"))
            writer.uint32(/* id 17, wireType 0 =*/136).uint32(message.CoreItemId);
        if (message.UpgradeSpeech != null && Object.hasOwnProperty.call(message, "UpgradeSpeech"))
            $root.LanguageStringData.encode(message.UpgradeSpeech, writer.uint32(/* id 18, wireType 2 =*/146).fork()).ldelim();
        if (message.SkillNormalAttack != null && Object.hasOwnProperty.call(message, "SkillNormalAttack"))
            writer.uint32(/* id 19, wireType 0 =*/152).uint32(message.SkillNormalAttack);
        if (message.SkillActiveExtra != null && message.SkillActiveExtra.length) {
            writer.uint32(/* id 20, wireType 2 =*/162).fork();
            for (var i = 0; i < message.SkillActiveExtra.length; ++i)
                writer.uint32(message.SkillActiveExtra[i]);
            writer.ldelim();
        }
        if (message.SkillTalentExtra != null && message.SkillTalentExtra.length) {
            writer.uint32(/* id 21, wireType 2 =*/170).fork();
            for (var i = 0; i < message.SkillTalentExtra.length; ++i)
                writer.uint32(message.SkillTalentExtra[i]);
            writer.ldelim();
        }
        if (message.AiList != null && message.AiList.length) {
            writer.uint32(/* id 22, wireType 2 =*/178).fork();
            for (var i = 0; i < message.AiList.length; ++i)
                writer.int32(message.AiList[i]);
            writer.ldelim();
        }
        if (message.Element != null && Object.hasOwnProperty.call(message, "Element"))
            writer.uint32(/* id 23, wireType 0 =*/184).uint32(message.Element);
        if (message.WeaponType != null && Object.hasOwnProperty.call(message, "WeaponType"))
            writer.uint32(/* id 24, wireType 0 =*/192).uint32(message.WeaponType);
        if (message.WeaponPrivate != null && message.WeaponPrivate.length) {
            writer.uint32(/* id 25, wireType 2 =*/202).fork();
            for (var i = 0; i < message.WeaponPrivate.length; ++i)
                writer.uint32(message.WeaponPrivate[i]);
            writer.ldelim();
        }
        if (message.WeaponPrivateShow != null && message.WeaponPrivateShow.length) {
            writer.uint32(/* id 26, wireType 2 =*/210).fork();
            for (var i = 0; i < message.WeaponPrivateShow.length; ++i)
                writer.uint32(message.WeaponPrivateShow[i]);
            writer.ldelim();
        }
        if (message.WeaponDefault != null && Object.hasOwnProperty.call(message, "WeaponDefault"))
            writer.uint32(/* id 27, wireType 0 =*/216).uint32(message.WeaponDefault);
        if (message.MoveCode != null && Object.hasOwnProperty.call(message, "MoveCode"))
            writer.uint32(/* id 28, wireType 0 =*/224).uint32(message.MoveCode);
        if (message.SoldGet1 != null && Object.hasOwnProperty.call(message, "SoldGet1"))
            for (var keys = Object.keys(message.SoldGet1), i = 0; i < keys.length; ++i)
                writer.uint32(/* id 29, wireType 2 =*/234).fork().uint32(/* id 1, wireType 0 =*/8).uint32(keys[i]).uint32(/* id 2, wireType 0 =*/16).uint32(message.SoldGet1[keys[i]]).ldelim();
        if (message.SystemSwitch != null && Object.hasOwnProperty.call(message, "SystemSwitch"))
            writer.uint32(/* id 30, wireType 0 =*/240).uint32(message.SystemSwitch);
        if (message.UseFakeAttack != null && Object.hasOwnProperty.call(message, "UseFakeAttack"))
            writer.uint32(/* id 31, wireType 0 =*/248).bool(message.UseFakeAttack);
        if (message.Camp != null && Object.hasOwnProperty.call(message, "Camp"))
            writer.uint32(/* id 32, wireType 0 =*/256).uint32(message.Camp);
        if (message.DefaultGrade != null && Object.hasOwnProperty.call(message, "DefaultGrade"))
            writer.uint32(/* id 33, wireType 0 =*/264).uint32(message.DefaultGrade);
        if (message.UnlockCost != null && Object.hasOwnProperty.call(message, "UnlockCost"))
            writer.uint32(/* id 34, wireType 0 =*/272).uint32(message.UnlockCost);
        if (message.Grade != null && Object.hasOwnProperty.call(message, "Grade"))
            writer.uint32(/* id 35, wireType 0 =*/280).uint32(message.Grade);
        if (message.GunClass != null && Object.hasOwnProperty.call(message, "GunClass"))
            writer.uint32(/* id 36, wireType 0 =*/288).uint32(message.GunClass);
        if (message.BarrackCameraSetting != null && Object.hasOwnProperty.call(message, "BarrackCameraSetting"))
            writer.uint32(/* id 37, wireType 2 =*/298).string(message.BarrackCameraSetting);
        if (message.Avatar != null && Object.hasOwnProperty.call(message, "Avatar"))
            writer.uint32(/* id 38, wireType 0 =*/304).uint32(message.Avatar);
        if (message.CostumeId != null && Object.hasOwnProperty.call(message, "CostumeId"))
            writer.uint32(/* id 39, wireType 0 =*/312).uint32(message.CostumeId);
        if (message.CostumeReplace != null && message.CostumeReplace.length) {
            writer.uint32(/* id 40, wireType 2 =*/322).fork();
            for (var i = 0; i < message.CostumeReplace.length; ++i)
                writer.uint32(message.CostumeReplace[i]);
            writer.ldelim();
        }
        if (message.PropertyId != null && Object.hasOwnProperty.call(message, "PropertyId"))
            writer.uint32(/* id 41, wireType 0 =*/328).uint32(message.PropertyId);
        if (message.BarrackEffectId != null && message.BarrackEffectId.length) {
            writer.uint32(/* id 42, wireType 2 =*/338).fork();
            for (var i = 0; i < message.BarrackEffectId.length; ++i)
                writer.uint32(message.BarrackEffectId[i]);
            writer.ldelim();
        }
        if (message.Weight != null && Object.hasOwnProperty.call(message, "Weight"))
            writer.uint32(/* id 43, wireType 0 =*/344).uint32(message.Weight);
        if (message.BarrackAudioId != null && Object.hasOwnProperty.call(message, "BarrackAudioId"))
            writer.uint32(/* id 44, wireType 0 =*/352).uint32(message.BarrackAudioId);
        if (message.ShieldType != null && Object.hasOwnProperty.call(message, "ShieldType"))
            writer.uint32(/* id 45, wireType 0 =*/360).uint32(message.ShieldType);
        if (message.MaxGrade != null && Object.hasOwnProperty.call(message, "MaxGrade"))
            writer.uint32(/* id 46, wireType 0 =*/368).uint32(message.MaxGrade);
        if (message.ShieldEffectId != null && Object.hasOwnProperty.call(message, "ShieldEffectId"))
            writer.uint32(/* id 47, wireType 0 =*/376).uint32(message.ShieldEffectId);
        if (message.BaseSupply != null && Object.hasOwnProperty.call(message, "BaseSupply"))
            writer.uint32(/* id 48, wireType 0 =*/384).uint32(message.BaseSupply);
        if (message.SupplyTypeBanList != null && message.SupplyTypeBanList.length) {
            writer.uint32(/* id 49, wireType 2 =*/394).fork();
            for (var i = 0; i < message.SupplyTypeBanList.length; ++i)
                writer.uint32(message.SupplyTypeBanList[i]);
            writer.ldelim();
        }
        if (message.ExtraSkill != null && Object.hasOwnProperty.call(message, "ExtraSkill"))
            writer.uint32(/* id 50, wireType 0 =*/400).uint32(message.ExtraSkill);
        if (message.ShieldBrokenEffectId != null && Object.hasOwnProperty.call(message, "ShieldBrokenEffectId"))
            writer.uint32(/* id 51, wireType 0 =*/408).uint32(message.ShieldBrokenEffectId);
        if (message.AttackType != null && Object.hasOwnProperty.call(message, "AttackType"))
            writer.uint32(/* id 52, wireType 0 =*/416).uint32(message.AttackType);
        if (message.GachaGetTimeline != null && Object.hasOwnProperty.call(message, "GachaGetTimeline"))
            writer.uint32(/* id 53, wireType 2 =*/426).string(message.GachaGetTimeline);
        if (message.BeSuppressedConfig != null && message.BeSuppressedConfig.length) {
            writer.uint32(/* id 54, wireType 2 =*/434).fork();
            for (var i = 0; i < message.BeSuppressedConfig.length; ++i)
                writer.int32(message.BeSuppressedConfig[i]);
            writer.ldelim();
        }
        if (message.Shape != null && Object.hasOwnProperty.call(message, "Shape"))
            writer.uint32(/* id 55, wireType 0 =*/440).uint32(message.Shape);
        if (message.ShapeParam != null && Object.hasOwnProperty.call(message, "ShapeParam"))
            writer.uint32(/* id 56, wireType 2 =*/450).string(message.ShapeParam);
        if (message.ShapeIcon != null && Object.hasOwnProperty.call(message, "ShapeIcon"))
            writer.uint32(/* id 57, wireType 2 =*/458).string(message.ShapeIcon);
        if (message.ShapeTerrain != null && Object.hasOwnProperty.call(message, "ShapeTerrain"))
            writer.uint32(/* id 58, wireType 0 =*/464).uint32(message.ShapeTerrain);
        if (message.IdleType != null && Object.hasOwnProperty.call(message, "IdleType"))
            writer.uint32(/* id 59, wireType 0 =*/472).uint32(message.IdleType);
        if (message.Displacement != null && Object.hasOwnProperty.call(message, "Displacement"))
            writer.uint32(/* id 60, wireType 0 =*/480).uint32(message.Displacement);
        if (message.IsHide != null && Object.hasOwnProperty.call(message, "IsHide"))
            writer.uint32(/* id 61, wireType 0 =*/488).bool(message.IsHide);
        if (message.WeakTag != null && Object.hasOwnProperty.call(message, "WeakTag"))
            writer.uint32(/* id 62, wireType 2 =*/498).string(message.WeakTag);
        if (message.SuppressGroup != null && Object.hasOwnProperty.call(message, "SuppressGroup"))
            writer.uint32(/* id 63, wireType 2 =*/506).string(message.SuppressGroup);
        if (message.UnlockHint != null && Object.hasOwnProperty.call(message, "UnlockHint"))
            writer.uint32(/* id 64, wireType 0 =*/512).uint32(message.UnlockHint);
        if (message.UnlockDorm != null && message.UnlockDorm.length) {
            writer.uint32(/* id 65, wireType 2 =*/522).fork();
            for (var i = 0; i < message.UnlockDorm.length; ++i)
                writer.uint32(message.UnlockDorm[i]);
            writer.ldelim();
        }
        if (message.GuardRadius != null && Object.hasOwnProperty.call(message, "GuardRadius"))
            writer.uint32(/* id 66, wireType 0 =*/528).int32(message.GuardRadius);
        if (message.GuardRadiusShow != null && Object.hasOwnProperty.call(message, "GuardRadiusShow"))
            writer.uint32(/* id 67, wireType 0 =*/536).int32(message.GuardRadiusShow);
        if (message.GachaGetAudio != null && Object.hasOwnProperty.call(message, "GachaGetAudio"))
            writer.uint32(/* id 68, wireType 0 =*/544).uint32(message.GachaGetAudio);
        if (message.GachaGetVoice != null && Object.hasOwnProperty.call(message, "GachaGetVoice"))
            writer.uint32(/* id 69, wireType 0 =*/552).uint32(message.GachaGetVoice);
        if (message.WeakWeaponTag != null && Object.hasOwnProperty.call(message, "WeakWeaponTag"))
            writer.uint32(/* id 70, wireType 0 =*/560).int32(message.WeakWeaponTag);
        return writer;
    };

    /**
     * Encodes the specified GunData message, length delimited. Does not implicitly {@link GunData.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GunData
     * @static
     * @param {IGunData} message GunData message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GunData.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GunData message from the specified reader or buffer.
     * @function decode
     * @memberof GunData
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GunData} GunData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GunData.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GunData(), key, value;
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.Id = reader.uint32();
                    break;
                }
            case 2: {
                    message.Name = $root.LanguageStringData.decode(reader, reader.uint32());
                    break;
                }
            case 3: {
                    message.FirstName = $root.LanguageStringData.decode(reader, reader.uint32());
                    break;
                }
            case 4: {
                    message.SecondName = $root.LanguageStringData.decode(reader, reader.uint32());
                    break;
                }
            case 5: {
                    message.EnName = $root.LanguageStringData.decode(reader, reader.uint32());
                    break;
                }
            case 6: {
                    message.Introduce = $root.LanguageStringData.decode(reader, reader.uint32());
                    break;
                }
            case 7: {
                    message.Dialogue = $root.LanguageStringData.decode(reader, reader.uint32());
                    break;
                }
            case 8: {
                    message.Extra = $root.LanguageStringData.decode(reader, reader.uint32());
                    break;
                }
            case 9: {
                    message.Code = reader.string();
                    break;
                }
            case 10: {
                    message.Type = reader.int32();
                    break;
                }
            case 11: {
                    message.CharacterId = reader.uint32();
                    break;
                }
            case 12: {
                    message.GetAudio = reader.uint32();
                    break;
                }
            case 13: {
                    message.Duty = reader.int32();
                    break;
                }
            case 14: {
                    message.SecondDuty = reader.uint32();
                    break;
                }
            case 15: {
                    message.Rank = reader.int32();
                    break;
                }
            case 16: {
                    message.RoleTemplateId = reader.uint32();
                    break;
                }
            case 17: {
                    message.CoreItemId = reader.uint32();
                    break;
                }
            case 18: {
                    message.UpgradeSpeech = $root.LanguageStringData.decode(reader, reader.uint32());
                    break;
                }
            case 19: {
                    message.SkillNormalAttack = reader.uint32();
                    break;
                }
            case 20: {
                    if (!(message.SkillActiveExtra && message.SkillActiveExtra.length))
                        message.SkillActiveExtra = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.SkillActiveExtra.push(reader.uint32());
                    } else
                        message.SkillActiveExtra.push(reader.uint32());
                    break;
                }
            case 21: {
                    if (!(message.SkillTalentExtra && message.SkillTalentExtra.length))
                        message.SkillTalentExtra = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.SkillTalentExtra.push(reader.uint32());
                    } else
                        message.SkillTalentExtra.push(reader.uint32());
                    break;
                }
            case 22: {
                    if (!(message.AiList && message.AiList.length))
                        message.AiList = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.AiList.push(reader.int32());
                    } else
                        message.AiList.push(reader.int32());
                    break;
                }
            case 23: {
                    message.Element = reader.uint32();
                    break;
                }
            case 24: {
                    message.WeaponType = reader.uint32();
                    break;
                }
            case 25: {
                    if (!(message.WeaponPrivate && message.WeaponPrivate.length))
                        message.WeaponPrivate = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.WeaponPrivate.push(reader.uint32());
                    } else
                        message.WeaponPrivate.push(reader.uint32());
                    break;
                }
            case 26: {
                    if (!(message.WeaponPrivateShow && message.WeaponPrivateShow.length))
                        message.WeaponPrivateShow = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.WeaponPrivateShow.push(reader.uint32());
                    } else
                        message.WeaponPrivateShow.push(reader.uint32());
                    break;
                }
            case 27: {
                    message.WeaponDefault = reader.uint32();
                    break;
                }
            case 28: {
                    message.MoveCode = reader.uint32();
                    break;
                }
            case 29: {
                    if (message.SoldGet1 === $util.emptyObject)
                        message.SoldGet1 = {};
                    var end2 = reader.uint32() + reader.pos;
                    key = 0;
                    value = 0;
                    while (reader.pos < end2) {
                        var tag2 = reader.uint32();
                        switch (tag2 >>> 3) {
                        case 1:
                            key = reader.uint32();
                            break;
                        case 2:
                            value = reader.uint32();
                            break;
                        default:
                            reader.skipType(tag2 & 7);
                            break;
                        }
                    }
                    message.SoldGet1[key] = value;
                    break;
                }
            case 30: {
                    message.SystemSwitch = reader.uint32();
                    break;
                }
            case 31: {
                    message.UseFakeAttack = reader.bool();
                    break;
                }
            case 32: {
                    message.Camp = reader.uint32();
                    break;
                }
            case 33: {
                    message.DefaultGrade = reader.uint32();
                    break;
                }
            case 34: {
                    message.UnlockCost = reader.uint32();
                    break;
                }
            case 35: {
                    message.Grade = reader.uint32();
                    break;
                }
            case 36: {
                    message.GunClass = reader.uint32();
                    break;
                }
            case 37: {
                    message.BarrackCameraSetting = reader.string();
                    break;
                }
            case 38: {
                    message.Avatar = reader.uint32();
                    break;
                }
            case 39: {
                    message.CostumeId = reader.uint32();
                    break;
                }
            case 40: {
                    if (!(message.CostumeReplace && message.CostumeReplace.length))
                        message.CostumeReplace = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.CostumeReplace.push(reader.uint32());
                    } else
                        message.CostumeReplace.push(reader.uint32());
                    break;
                }
            case 41: {
                    message.PropertyId = reader.uint32();
                    break;
                }
            case 42: {
                    if (!(message.BarrackEffectId && message.BarrackEffectId.length))
                        message.BarrackEffectId = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.BarrackEffectId.push(reader.uint32());
                    } else
                        message.BarrackEffectId.push(reader.uint32());
                    break;
                }
            case 43: {
                    message.Weight = reader.uint32();
                    break;
                }
            case 44: {
                    message.BarrackAudioId = reader.uint32();
                    break;
                }
            case 45: {
                    message.ShieldType = reader.uint32();
                    break;
                }
            case 46: {
                    message.MaxGrade = reader.uint32();
                    break;
                }
            case 47: {
                    message.ShieldEffectId = reader.uint32();
                    break;
                }
            case 48: {
                    message.BaseSupply = reader.uint32();
                    break;
                }
            case 49: {
                    if (!(message.SupplyTypeBanList && message.SupplyTypeBanList.length))
                        message.SupplyTypeBanList = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.SupplyTypeBanList.push(reader.uint32());
                    } else
                        message.SupplyTypeBanList.push(reader.uint32());
                    break;
                }
            case 50: {
                    message.ExtraSkill = reader.uint32();
                    break;
                }
            case 51: {
                    message.ShieldBrokenEffectId = reader.uint32();
                    break;
                }
            case 52: {
                    message.AttackType = reader.uint32();
                    break;
                }
            case 53: {
                    message.GachaGetTimeline = reader.string();
                    break;
                }
            case 54: {
                    if (!(message.BeSuppressedConfig && message.BeSuppressedConfig.length))
                        message.BeSuppressedConfig = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.BeSuppressedConfig.push(reader.int32());
                    } else
                        message.BeSuppressedConfig.push(reader.int32());
                    break;
                }
            case 55: {
                    message.Shape = reader.uint32();
                    break;
                }
            case 56: {
                    message.ShapeParam = reader.string();
                    break;
                }
            case 57: {
                    message.ShapeIcon = reader.string();
                    break;
                }
            case 58: {
                    message.ShapeTerrain = reader.uint32();
                    break;
                }
            case 59: {
                    message.IdleType = reader.uint32();
                    break;
                }
            case 60: {
                    message.Displacement = reader.uint32();
                    break;
                }
            case 61: {
                    message.IsHide = reader.bool();
                    break;
                }
            case 62: {
                    message.WeakTag = reader.string();
                    break;
                }
            case 63: {
                    message.SuppressGroup = reader.string();
                    break;
                }
            case 64: {
                    message.UnlockHint = reader.uint32();
                    break;
                }
            case 65: {
                    if (!(message.UnlockDorm && message.UnlockDorm.length))
                        message.UnlockDorm = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.UnlockDorm.push(reader.uint32());
                    } else
                        message.UnlockDorm.push(reader.uint32());
                    break;
                }
            case 66: {
                    message.GuardRadius = reader.int32();
                    break;
                }
            case 67: {
                    message.GuardRadiusShow = reader.int32();
                    break;
                }
            case 68: {
                    message.GachaGetAudio = reader.uint32();
                    break;
                }
            case 69: {
                    message.GachaGetVoice = reader.uint32();
                    break;
                }
            case 70: {
                    message.WeakWeaponTag = reader.int32();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a GunData message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GunData
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GunData} GunData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GunData.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GunData message.
     * @function verify
     * @memberof GunData
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GunData.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.Id != null && message.hasOwnProperty("Id"))
            if (!$util.isInteger(message.Id))
                return "Id: integer expected";
        if (message.Name != null && message.hasOwnProperty("Name")) {
            var error = $root.LanguageStringData.verify(message.Name);
            if (error)
                return "Name." + error;
        }
        if (message.FirstName != null && message.hasOwnProperty("FirstName")) {
            var error = $root.LanguageStringData.verify(message.FirstName);
            if (error)
                return "FirstName." + error;
        }
        if (message.SecondName != null && message.hasOwnProperty("SecondName")) {
            var error = $root.LanguageStringData.verify(message.SecondName);
            if (error)
                return "SecondName." + error;
        }
        if (message.EnName != null && message.hasOwnProperty("EnName")) {
            var error = $root.LanguageStringData.verify(message.EnName);
            if (error)
                return "EnName." + error;
        }
        if (message.Introduce != null && message.hasOwnProperty("Introduce")) {
            var error = $root.LanguageStringData.verify(message.Introduce);
            if (error)
                return "Introduce." + error;
        }
        if (message.Dialogue != null && message.hasOwnProperty("Dialogue")) {
            var error = $root.LanguageStringData.verify(message.Dialogue);
            if (error)
                return "Dialogue." + error;
        }
        if (message.Extra != null && message.hasOwnProperty("Extra")) {
            var error = $root.LanguageStringData.verify(message.Extra);
            if (error)
                return "Extra." + error;
        }
        if (message.Code != null && message.hasOwnProperty("Code"))
            if (!$util.isString(message.Code))
                return "Code: string expected";
        if (message.Type != null && message.hasOwnProperty("Type"))
            if (!$util.isInteger(message.Type))
                return "Type: integer expected";
        if (message.CharacterId != null && message.hasOwnProperty("CharacterId"))
            if (!$util.isInteger(message.CharacterId))
                return "CharacterId: integer expected";
        if (message.GetAudio != null && message.hasOwnProperty("GetAudio"))
            if (!$util.isInteger(message.GetAudio))
                return "GetAudio: integer expected";
        if (message.Duty != null && message.hasOwnProperty("Duty"))
            if (!$util.isInteger(message.Duty))
                return "Duty: integer expected";
        if (message.SecondDuty != null && message.hasOwnProperty("SecondDuty"))
            if (!$util.isInteger(message.SecondDuty))
                return "SecondDuty: integer expected";
        if (message.Rank != null && message.hasOwnProperty("Rank"))
            if (!$util.isInteger(message.Rank))
                return "Rank: integer expected";
        if (message.RoleTemplateId != null && message.hasOwnProperty("RoleTemplateId"))
            if (!$util.isInteger(message.RoleTemplateId))
                return "RoleTemplateId: integer expected";
        if (message.CoreItemId != null && message.hasOwnProperty("CoreItemId"))
            if (!$util.isInteger(message.CoreItemId))
                return "CoreItemId: integer expected";
        if (message.UpgradeSpeech != null && message.hasOwnProperty("UpgradeSpeech")) {
            var error = $root.LanguageStringData.verify(message.UpgradeSpeech);
            if (error)
                return "UpgradeSpeech." + error;
        }
        if (message.SkillNormalAttack != null && message.hasOwnProperty("SkillNormalAttack"))
            if (!$util.isInteger(message.SkillNormalAttack))
                return "SkillNormalAttack: integer expected";
        if (message.SkillActiveExtra != null && message.hasOwnProperty("SkillActiveExtra")) {
            if (!Array.isArray(message.SkillActiveExtra))
                return "SkillActiveExtra: array expected";
            for (var i = 0; i < message.SkillActiveExtra.length; ++i)
                if (!$util.isInteger(message.SkillActiveExtra[i]))
                    return "SkillActiveExtra: integer[] expected";
        }
        if (message.SkillTalentExtra != null && message.hasOwnProperty("SkillTalentExtra")) {
            if (!Array.isArray(message.SkillTalentExtra))
                return "SkillTalentExtra: array expected";
            for (var i = 0; i < message.SkillTalentExtra.length; ++i)
                if (!$util.isInteger(message.SkillTalentExtra[i]))
                    return "SkillTalentExtra: integer[] expected";
        }
        if (message.AiList != null && message.hasOwnProperty("AiList")) {
            if (!Array.isArray(message.AiList))
                return "AiList: array expected";
            for (var i = 0; i < message.AiList.length; ++i)
                if (!$util.isInteger(message.AiList[i]))
                    return "AiList: integer[] expected";
        }
        if (message.Element != null && message.hasOwnProperty("Element"))
            if (!$util.isInteger(message.Element))
                return "Element: integer expected";
        if (message.WeaponType != null && message.hasOwnProperty("WeaponType"))
            if (!$util.isInteger(message.WeaponType))
                return "WeaponType: integer expected";
        if (message.WeaponPrivate != null && message.hasOwnProperty("WeaponPrivate")) {
            if (!Array.isArray(message.WeaponPrivate))
                return "WeaponPrivate: array expected";
            for (var i = 0; i < message.WeaponPrivate.length; ++i)
                if (!$util.isInteger(message.WeaponPrivate[i]))
                    return "WeaponPrivate: integer[] expected";
        }
        if (message.WeaponPrivateShow != null && message.hasOwnProperty("WeaponPrivateShow")) {
            if (!Array.isArray(message.WeaponPrivateShow))
                return "WeaponPrivateShow: array expected";
            for (var i = 0; i < message.WeaponPrivateShow.length; ++i)
                if (!$util.isInteger(message.WeaponPrivateShow[i]))
                    return "WeaponPrivateShow: integer[] expected";
        }
        if (message.WeaponDefault != null && message.hasOwnProperty("WeaponDefault"))
            if (!$util.isInteger(message.WeaponDefault))
                return "WeaponDefault: integer expected";
        if (message.MoveCode != null && message.hasOwnProperty("MoveCode"))
            if (!$util.isInteger(message.MoveCode))
                return "MoveCode: integer expected";
        if (message.SoldGet1 != null && message.hasOwnProperty("SoldGet1")) {
            if (!$util.isObject(message.SoldGet1))
                return "SoldGet1: object expected";
            var key = Object.keys(message.SoldGet1);
            for (var i = 0; i < key.length; ++i) {
                if (!$util.key32Re.test(key[i]))
                    return "SoldGet1: integer key{k:uint32} expected";
                if (!$util.isInteger(message.SoldGet1[key[i]]))
                    return "SoldGet1: integer{k:uint32} expected";
            }
        }
        if (message.SystemSwitch != null && message.hasOwnProperty("SystemSwitch"))
            if (!$util.isInteger(message.SystemSwitch))
                return "SystemSwitch: integer expected";
        if (message.UseFakeAttack != null && message.hasOwnProperty("UseFakeAttack"))
            if (typeof message.UseFakeAttack !== "boolean")
                return "UseFakeAttack: boolean expected";
        if (message.Camp != null && message.hasOwnProperty("Camp"))
            if (!$util.isInteger(message.Camp))
                return "Camp: integer expected";
        if (message.DefaultGrade != null && message.hasOwnProperty("DefaultGrade"))
            if (!$util.isInteger(message.DefaultGrade))
                return "DefaultGrade: integer expected";
        if (message.UnlockCost != null && message.hasOwnProperty("UnlockCost"))
            if (!$util.isInteger(message.UnlockCost))
                return "UnlockCost: integer expected";
        if (message.Grade != null && message.hasOwnProperty("Grade"))
            if (!$util.isInteger(message.Grade))
                return "Grade: integer expected";
        if (message.GunClass != null && message.hasOwnProperty("GunClass"))
            if (!$util.isInteger(message.GunClass))
                return "GunClass: integer expected";
        if (message.BarrackCameraSetting != null && message.hasOwnProperty("BarrackCameraSetting"))
            if (!$util.isString(message.BarrackCameraSetting))
                return "BarrackCameraSetting: string expected";
        if (message.Avatar != null && message.hasOwnProperty("Avatar"))
            if (!$util.isInteger(message.Avatar))
                return "Avatar: integer expected";
        if (message.CostumeId != null && message.hasOwnProperty("CostumeId"))
            if (!$util.isInteger(message.CostumeId))
                return "CostumeId: integer expected";
        if (message.CostumeReplace != null && message.hasOwnProperty("CostumeReplace")) {
            if (!Array.isArray(message.CostumeReplace))
                return "CostumeReplace: array expected";
            for (var i = 0; i < message.CostumeReplace.length; ++i)
                if (!$util.isInteger(message.CostumeReplace[i]))
                    return "CostumeReplace: integer[] expected";
        }
        if (message.PropertyId != null && message.hasOwnProperty("PropertyId"))
            if (!$util.isInteger(message.PropertyId))
                return "PropertyId: integer expected";
        if (message.BarrackEffectId != null && message.hasOwnProperty("BarrackEffectId")) {
            if (!Array.isArray(message.BarrackEffectId))
                return "BarrackEffectId: array expected";
            for (var i = 0; i < message.BarrackEffectId.length; ++i)
                if (!$util.isInteger(message.BarrackEffectId[i]))
                    return "BarrackEffectId: integer[] expected";
        }
        if (message.Weight != null && message.hasOwnProperty("Weight"))
            if (!$util.isInteger(message.Weight))
                return "Weight: integer expected";
        if (message.BarrackAudioId != null && message.hasOwnProperty("BarrackAudioId"))
            if (!$util.isInteger(message.BarrackAudioId))
                return "BarrackAudioId: integer expected";
        if (message.ShieldType != null && message.hasOwnProperty("ShieldType"))
            if (!$util.isInteger(message.ShieldType))
                return "ShieldType: integer expected";
        if (message.MaxGrade != null && message.hasOwnProperty("MaxGrade"))
            if (!$util.isInteger(message.MaxGrade))
                return "MaxGrade: integer expected";
        if (message.ShieldEffectId != null && message.hasOwnProperty("ShieldEffectId"))
            if (!$util.isInteger(message.ShieldEffectId))
                return "ShieldEffectId: integer expected";
        if (message.BaseSupply != null && message.hasOwnProperty("BaseSupply"))
            if (!$util.isInteger(message.BaseSupply))
                return "BaseSupply: integer expected";
        if (message.SupplyTypeBanList != null && message.hasOwnProperty("SupplyTypeBanList")) {
            if (!Array.isArray(message.SupplyTypeBanList))
                return "SupplyTypeBanList: array expected";
            for (var i = 0; i < message.SupplyTypeBanList.length; ++i)
                if (!$util.isInteger(message.SupplyTypeBanList[i]))
                    return "SupplyTypeBanList: integer[] expected";
        }
        if (message.ExtraSkill != null && message.hasOwnProperty("ExtraSkill"))
            if (!$util.isInteger(message.ExtraSkill))
                return "ExtraSkill: integer expected";
        if (message.ShieldBrokenEffectId != null && message.hasOwnProperty("ShieldBrokenEffectId"))
            if (!$util.isInteger(message.ShieldBrokenEffectId))
                return "ShieldBrokenEffectId: integer expected";
        if (message.AttackType != null && message.hasOwnProperty("AttackType"))
            if (!$util.isInteger(message.AttackType))
                return "AttackType: integer expected";
        if (message.GachaGetTimeline != null && message.hasOwnProperty("GachaGetTimeline"))
            if (!$util.isString(message.GachaGetTimeline))
                return "GachaGetTimeline: string expected";
        if (message.BeSuppressedConfig != null && message.hasOwnProperty("BeSuppressedConfig")) {
            if (!Array.isArray(message.BeSuppressedConfig))
                return "BeSuppressedConfig: array expected";
            for (var i = 0; i < message.BeSuppressedConfig.length; ++i)
                if (!$util.isInteger(message.BeSuppressedConfig[i]))
                    return "BeSuppressedConfig: integer[] expected";
        }
        if (message.Shape != null && message.hasOwnProperty("Shape"))
            if (!$util.isInteger(message.Shape))
                return "Shape: integer expected";
        if (message.ShapeParam != null && message.hasOwnProperty("ShapeParam"))
            if (!$util.isString(message.ShapeParam))
                return "ShapeParam: string expected";
        if (message.ShapeIcon != null && message.hasOwnProperty("ShapeIcon"))
            if (!$util.isString(message.ShapeIcon))
                return "ShapeIcon: string expected";
        if (message.ShapeTerrain != null && message.hasOwnProperty("ShapeTerrain"))
            if (!$util.isInteger(message.ShapeTerrain))
                return "ShapeTerrain: integer expected";
        if (message.IdleType != null && message.hasOwnProperty("IdleType"))
            if (!$util.isInteger(message.IdleType))
                return "IdleType: integer expected";
        if (message.Displacement != null && message.hasOwnProperty("Displacement"))
            if (!$util.isInteger(message.Displacement))
                return "Displacement: integer expected";
        if (message.IsHide != null && message.hasOwnProperty("IsHide"))
            if (typeof message.IsHide !== "boolean")
                return "IsHide: boolean expected";
        if (message.WeakTag != null && message.hasOwnProperty("WeakTag"))
            if (!$util.isString(message.WeakTag))
                return "WeakTag: string expected";
        if (message.SuppressGroup != null && message.hasOwnProperty("SuppressGroup"))
            if (!$util.isString(message.SuppressGroup))
                return "SuppressGroup: string expected";
        if (message.UnlockHint != null && message.hasOwnProperty("UnlockHint"))
            if (!$util.isInteger(message.UnlockHint))
                return "UnlockHint: integer expected";
        if (message.UnlockDorm != null && message.hasOwnProperty("UnlockDorm")) {
            if (!Array.isArray(message.UnlockDorm))
                return "UnlockDorm: array expected";
            for (var i = 0; i < message.UnlockDorm.length; ++i)
                if (!$util.isInteger(message.UnlockDorm[i]))
                    return "UnlockDorm: integer[] expected";
        }
        if (message.GuardRadius != null && message.hasOwnProperty("GuardRadius"))
            if (!$util.isInteger(message.GuardRadius))
                return "GuardRadius: integer expected";
        if (message.GuardRadiusShow != null && message.hasOwnProperty("GuardRadiusShow"))
            if (!$util.isInteger(message.GuardRadiusShow))
                return "GuardRadiusShow: integer expected";
        if (message.GachaGetAudio != null && message.hasOwnProperty("GachaGetAudio"))
            if (!$util.isInteger(message.GachaGetAudio))
                return "GachaGetAudio: integer expected";
        if (message.GachaGetVoice != null && message.hasOwnProperty("GachaGetVoice"))
            if (!$util.isInteger(message.GachaGetVoice))
                return "GachaGetVoice: integer expected";
        if (message.WeakWeaponTag != null && message.hasOwnProperty("WeakWeaponTag"))
            if (!$util.isInteger(message.WeakWeaponTag))
                return "WeakWeaponTag: integer expected";
        return null;
    };

    /**
     * Creates a GunData message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GunData
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GunData} GunData
     */
    GunData.fromObject = function fromObject(object) {
        if (object instanceof $root.GunData)
            return object;
        var message = new $root.GunData();
        if (object.Id != null)
            message.Id = object.Id >>> 0;
        if (object.Name != null) {
            if (typeof object.Name !== "object")
                throw TypeError(".GunData.Name: object expected");
            message.Name = $root.LanguageStringData.fromObject(object.Name);
        }
        if (object.FirstName != null) {
            if (typeof object.FirstName !== "object")
                throw TypeError(".GunData.FirstName: object expected");
            message.FirstName = $root.LanguageStringData.fromObject(object.FirstName);
        }
        if (object.SecondName != null) {
            if (typeof object.SecondName !== "object")
                throw TypeError(".GunData.SecondName: object expected");
            message.SecondName = $root.LanguageStringData.fromObject(object.SecondName);
        }
        if (object.EnName != null) {
            if (typeof object.EnName !== "object")
                throw TypeError(".GunData.EnName: object expected");
            message.EnName = $root.LanguageStringData.fromObject(object.EnName);
        }
        if (object.Introduce != null) {
            if (typeof object.Introduce !== "object")
                throw TypeError(".GunData.Introduce: object expected");
            message.Introduce = $root.LanguageStringData.fromObject(object.Introduce);
        }
        if (object.Dialogue != null) {
            if (typeof object.Dialogue !== "object")
                throw TypeError(".GunData.Dialogue: object expected");
            message.Dialogue = $root.LanguageStringData.fromObject(object.Dialogue);
        }
        if (object.Extra != null) {
            if (typeof object.Extra !== "object")
                throw TypeError(".GunData.Extra: object expected");
            message.Extra = $root.LanguageStringData.fromObject(object.Extra);
        }
        if (object.Code != null)
            message.Code = String(object.Code);
        if (object.Type != null)
            message.Type = object.Type | 0;
        if (object.CharacterId != null)
            message.CharacterId = object.CharacterId >>> 0;
        if (object.GetAudio != null)
            message.GetAudio = object.GetAudio >>> 0;
        if (object.Duty != null)
            message.Duty = object.Duty | 0;
        if (object.SecondDuty != null)
            message.SecondDuty = object.SecondDuty >>> 0;
        if (object.Rank != null)
            message.Rank = object.Rank | 0;
        if (object.RoleTemplateId != null)
            message.RoleTemplateId = object.RoleTemplateId >>> 0;
        if (object.CoreItemId != null)
            message.CoreItemId = object.CoreItemId >>> 0;
        if (object.UpgradeSpeech != null) {
            if (typeof object.UpgradeSpeech !== "object")
                throw TypeError(".GunData.UpgradeSpeech: object expected");
            message.UpgradeSpeech = $root.LanguageStringData.fromObject(object.UpgradeSpeech);
        }
        if (object.SkillNormalAttack != null)
            message.SkillNormalAttack = object.SkillNormalAttack >>> 0;
        if (object.SkillActiveExtra) {
            if (!Array.isArray(object.SkillActiveExtra))
                throw TypeError(".GunData.SkillActiveExtra: array expected");
            message.SkillActiveExtra = [];
            for (var i = 0; i < object.SkillActiveExtra.length; ++i)
                message.SkillActiveExtra[i] = object.SkillActiveExtra[i] >>> 0;
        }
        if (object.SkillTalentExtra) {
            if (!Array.isArray(object.SkillTalentExtra))
                throw TypeError(".GunData.SkillTalentExtra: array expected");
            message.SkillTalentExtra = [];
            for (var i = 0; i < object.SkillTalentExtra.length; ++i)
                message.SkillTalentExtra[i] = object.SkillTalentExtra[i] >>> 0;
        }
        if (object.AiList) {
            if (!Array.isArray(object.AiList))
                throw TypeError(".GunData.AiList: array expected");
            message.AiList = [];
            for (var i = 0; i < object.AiList.length; ++i)
                message.AiList[i] = object.AiList[i] | 0;
        }
        if (object.Element != null)
            message.Element = object.Element >>> 0;
        if (object.WeaponType != null)
            message.WeaponType = object.WeaponType >>> 0;
        if (object.WeaponPrivate) {
            if (!Array.isArray(object.WeaponPrivate))
                throw TypeError(".GunData.WeaponPrivate: array expected");
            message.WeaponPrivate = [];
            for (var i = 0; i < object.WeaponPrivate.length; ++i)
                message.WeaponPrivate[i] = object.WeaponPrivate[i] >>> 0;
        }
        if (object.WeaponPrivateShow) {
            if (!Array.isArray(object.WeaponPrivateShow))
                throw TypeError(".GunData.WeaponPrivateShow: array expected");
            message.WeaponPrivateShow = [];
            for (var i = 0; i < object.WeaponPrivateShow.length; ++i)
                message.WeaponPrivateShow[i] = object.WeaponPrivateShow[i] >>> 0;
        }
        if (object.WeaponDefault != null)
            message.WeaponDefault = object.WeaponDefault >>> 0;
        if (object.MoveCode != null)
            message.MoveCode = object.MoveCode >>> 0;
        if (object.SoldGet1) {
            if (typeof object.SoldGet1 !== "object")
                throw TypeError(".GunData.SoldGet1: object expected");
            message.SoldGet1 = {};
            for (var keys = Object.keys(object.SoldGet1), i = 0; i < keys.length; ++i)
                message.SoldGet1[keys[i]] = object.SoldGet1[keys[i]] >>> 0;
        }
        if (object.SystemSwitch != null)
            message.SystemSwitch = object.SystemSwitch >>> 0;
        if (object.UseFakeAttack != null)
            message.UseFakeAttack = Boolean(object.UseFakeAttack);
        if (object.Camp != null)
            message.Camp = object.Camp >>> 0;
        if (object.DefaultGrade != null)
            message.DefaultGrade = object.DefaultGrade >>> 0;
        if (object.UnlockCost != null)
            message.UnlockCost = object.UnlockCost >>> 0;
        if (object.Grade != null)
            message.Grade = object.Grade >>> 0;
        if (object.GunClass != null)
            message.GunClass = object.GunClass >>> 0;
        if (object.BarrackCameraSetting != null)
            message.BarrackCameraSetting = String(object.BarrackCameraSetting);
        if (object.Avatar != null)
            message.Avatar = object.Avatar >>> 0;
        if (object.CostumeId != null)
            message.CostumeId = object.CostumeId >>> 0;
        if (object.CostumeReplace) {
            if (!Array.isArray(object.CostumeReplace))
                throw TypeError(".GunData.CostumeReplace: array expected");
            message.CostumeReplace = [];
            for (var i = 0; i < object.CostumeReplace.length; ++i)
                message.CostumeReplace[i] = object.CostumeReplace[i] >>> 0;
        }
        if (object.PropertyId != null)
            message.PropertyId = object.PropertyId >>> 0;
        if (object.BarrackEffectId) {
            if (!Array.isArray(object.BarrackEffectId))
                throw TypeError(".GunData.BarrackEffectId: array expected");
            message.BarrackEffectId = [];
            for (var i = 0; i < object.BarrackEffectId.length; ++i)
                message.BarrackEffectId[i] = object.BarrackEffectId[i] >>> 0;
        }
        if (object.Weight != null)
            message.Weight = object.Weight >>> 0;
        if (object.BarrackAudioId != null)
            message.BarrackAudioId = object.BarrackAudioId >>> 0;
        if (object.ShieldType != null)
            message.ShieldType = object.ShieldType >>> 0;
        if (object.MaxGrade != null)
            message.MaxGrade = object.MaxGrade >>> 0;
        if (object.ShieldEffectId != null)
            message.ShieldEffectId = object.ShieldEffectId >>> 0;
        if (object.BaseSupply != null)
            message.BaseSupply = object.BaseSupply >>> 0;
        if (object.SupplyTypeBanList) {
            if (!Array.isArray(object.SupplyTypeBanList))
                throw TypeError(".GunData.SupplyTypeBanList: array expected");
            message.SupplyTypeBanList = [];
            for (var i = 0; i < object.SupplyTypeBanList.length; ++i)
                message.SupplyTypeBanList[i] = object.SupplyTypeBanList[i] >>> 0;
        }
        if (object.ExtraSkill != null)
            message.ExtraSkill = object.ExtraSkill >>> 0;
        if (object.ShieldBrokenEffectId != null)
            message.ShieldBrokenEffectId = object.ShieldBrokenEffectId >>> 0;
        if (object.AttackType != null)
            message.AttackType = object.AttackType >>> 0;
        if (object.GachaGetTimeline != null)
            message.GachaGetTimeline = String(object.GachaGetTimeline);
        if (object.BeSuppressedConfig) {
            if (!Array.isArray(object.BeSuppressedConfig))
                throw TypeError(".GunData.BeSuppressedConfig: array expected");
            message.BeSuppressedConfig = [];
            for (var i = 0; i < object.BeSuppressedConfig.length; ++i)
                message.BeSuppressedConfig[i] = object.BeSuppressedConfig[i] | 0;
        }
        if (object.Shape != null)
            message.Shape = object.Shape >>> 0;
        if (object.ShapeParam != null)
            message.ShapeParam = String(object.ShapeParam);
        if (object.ShapeIcon != null)
            message.ShapeIcon = String(object.ShapeIcon);
        if (object.ShapeTerrain != null)
            message.ShapeTerrain = object.ShapeTerrain >>> 0;
        if (object.IdleType != null)
            message.IdleType = object.IdleType >>> 0;
        if (object.Displacement != null)
            message.Displacement = object.Displacement >>> 0;
        if (object.IsHide != null)
            message.IsHide = Boolean(object.IsHide);
        if (object.WeakTag != null)
            message.WeakTag = String(object.WeakTag);
        if (object.SuppressGroup != null)
            message.SuppressGroup = String(object.SuppressGroup);
        if (object.UnlockHint != null)
            message.UnlockHint = object.UnlockHint >>> 0;
        if (object.UnlockDorm) {
            if (!Array.isArray(object.UnlockDorm))
                throw TypeError(".GunData.UnlockDorm: array expected");
            message.UnlockDorm = [];
            for (var i = 0; i < object.UnlockDorm.length; ++i)
                message.UnlockDorm[i] = object.UnlockDorm[i] >>> 0;
        }
        if (object.GuardRadius != null)
            message.GuardRadius = object.GuardRadius | 0;
        if (object.GuardRadiusShow != null)
            message.GuardRadiusShow = object.GuardRadiusShow | 0;
        if (object.GachaGetAudio != null)
            message.GachaGetAudio = object.GachaGetAudio >>> 0;
        if (object.GachaGetVoice != null)
            message.GachaGetVoice = object.GachaGetVoice >>> 0;
        if (object.WeakWeaponTag != null)
            message.WeakWeaponTag = object.WeakWeaponTag | 0;
        return message;
    };

    /**
     * Creates a plain object from a GunData message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GunData
     * @static
     * @param {GunData} message GunData
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GunData.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults) {
            object.SkillActiveExtra = [];
            object.SkillTalentExtra = [];
            object.AiList = [];
            object.WeaponPrivate = [];
            object.WeaponPrivateShow = [];
            object.CostumeReplace = [];
            object.BarrackEffectId = [];
            object.SupplyTypeBanList = [];
            object.BeSuppressedConfig = [];
            object.UnlockDorm = [];
        }
        if (options.objects || options.defaults)
            object.SoldGet1 = {};
        if (options.defaults) {
            object.Id = 0;
            object.Name = null;
            object.FirstName = null;
            object.SecondName = null;
            object.EnName = null;
            object.Introduce = null;
            object.Dialogue = null;
            object.Extra = null;
            object.Code = "";
            object.Type = 0;
            object.CharacterId = 0;
            object.GetAudio = 0;
            object.Duty = 0;
            object.SecondDuty = 0;
            object.Rank = 0;
            object.RoleTemplateId = 0;
            object.CoreItemId = 0;
            object.UpgradeSpeech = null;
            object.SkillNormalAttack = 0;
            object.Element = 0;
            object.WeaponType = 0;
            object.WeaponDefault = 0;
            object.MoveCode = 0;
            object.SystemSwitch = 0;
            object.UseFakeAttack = false;
            object.Camp = 0;
            object.DefaultGrade = 0;
            object.UnlockCost = 0;
            object.Grade = 0;
            object.GunClass = 0;
            object.BarrackCameraSetting = "";
            object.Avatar = 0;
            object.CostumeId = 0;
            object.PropertyId = 0;
            object.Weight = 0;
            object.BarrackAudioId = 0;
            object.ShieldType = 0;
            object.MaxGrade = 0;
            object.ShieldEffectId = 0;
            object.BaseSupply = 0;
            object.ExtraSkill = 0;
            object.ShieldBrokenEffectId = 0;
            object.AttackType = 0;
            object.GachaGetTimeline = "";
            object.Shape = 0;
            object.ShapeParam = "";
            object.ShapeIcon = "";
            object.ShapeTerrain = 0;
            object.IdleType = 0;
            object.Displacement = 0;
            object.IsHide = false;
            object.WeakTag = "";
            object.SuppressGroup = "";
            object.UnlockHint = 0;
            object.GuardRadius = 0;
            object.GuardRadiusShow = 0;
            object.GachaGetAudio = 0;
            object.GachaGetVoice = 0;
            object.WeakWeaponTag = 0;
        }
        if (message.Id != null && message.hasOwnProperty("Id"))
            object.Id = message.Id;
        if (message.Name != null && message.hasOwnProperty("Name"))
            object.Name = $root.LanguageStringData.toObject(message.Name, options);
        if (message.FirstName != null && message.hasOwnProperty("FirstName"))
            object.FirstName = $root.LanguageStringData.toObject(message.FirstName, options);
        if (message.SecondName != null && message.hasOwnProperty("SecondName"))
            object.SecondName = $root.LanguageStringData.toObject(message.SecondName, options);
        if (message.EnName != null && message.hasOwnProperty("EnName"))
            object.EnName = $root.LanguageStringData.toObject(message.EnName, options);
        if (message.Introduce != null && message.hasOwnProperty("Introduce"))
            object.Introduce = $root.LanguageStringData.toObject(message.Introduce, options);
        if (message.Dialogue != null && message.hasOwnProperty("Dialogue"))
            object.Dialogue = $root.LanguageStringData.toObject(message.Dialogue, options);
        if (message.Extra != null && message.hasOwnProperty("Extra"))
            object.Extra = $root.LanguageStringData.toObject(message.Extra, options);
        if (message.Code != null && message.hasOwnProperty("Code"))
            object.Code = message.Code;
        if (message.Type != null && message.hasOwnProperty("Type"))
            object.Type = message.Type;
        if (message.CharacterId != null && message.hasOwnProperty("CharacterId"))
            object.CharacterId = message.CharacterId;
        if (message.GetAudio != null && message.hasOwnProperty("GetAudio"))
            object.GetAudio = message.GetAudio;
        if (message.Duty != null && message.hasOwnProperty("Duty"))
            object.Duty = message.Duty;
        if (message.SecondDuty != null && message.hasOwnProperty("SecondDuty"))
            object.SecondDuty = message.SecondDuty;
        if (message.Rank != null && message.hasOwnProperty("Rank"))
            object.Rank = message.Rank;
        if (message.RoleTemplateId != null && message.hasOwnProperty("RoleTemplateId"))
            object.RoleTemplateId = message.RoleTemplateId;
        if (message.CoreItemId != null && message.hasOwnProperty("CoreItemId"))
            object.CoreItemId = message.CoreItemId;
        if (message.UpgradeSpeech != null && message.hasOwnProperty("UpgradeSpeech"))
            object.UpgradeSpeech = $root.LanguageStringData.toObject(message.UpgradeSpeech, options);
        if (message.SkillNormalAttack != null && message.hasOwnProperty("SkillNormalAttack"))
            object.SkillNormalAttack = message.SkillNormalAttack;
        if (message.SkillActiveExtra && message.SkillActiveExtra.length) {
            object.SkillActiveExtra = [];
            for (var j = 0; j < message.SkillActiveExtra.length; ++j)
                object.SkillActiveExtra[j] = message.SkillActiveExtra[j];
        }
        if (message.SkillTalentExtra && message.SkillTalentExtra.length) {
            object.SkillTalentExtra = [];
            for (var j = 0; j < message.SkillTalentExtra.length; ++j)
                object.SkillTalentExtra[j] = message.SkillTalentExtra[j];
        }
        if (message.AiList && message.AiList.length) {
            object.AiList = [];
            for (var j = 0; j < message.AiList.length; ++j)
                object.AiList[j] = message.AiList[j];
        }
        if (message.Element != null && message.hasOwnProperty("Element"))
            object.Element = message.Element;
        if (message.WeaponType != null && message.hasOwnProperty("WeaponType"))
            object.WeaponType = message.WeaponType;
        if (message.WeaponPrivate && message.WeaponPrivate.length) {
            object.WeaponPrivate = [];
            for (var j = 0; j < message.WeaponPrivate.length; ++j)
                object.WeaponPrivate[j] = message.WeaponPrivate[j];
        }
        if (message.WeaponPrivateShow && message.WeaponPrivateShow.length) {
            object.WeaponPrivateShow = [];
            for (var j = 0; j < message.WeaponPrivateShow.length; ++j)
                object.WeaponPrivateShow[j] = message.WeaponPrivateShow[j];
        }
        if (message.WeaponDefault != null && message.hasOwnProperty("WeaponDefault"))
            object.WeaponDefault = message.WeaponDefault;
        if (message.MoveCode != null && message.hasOwnProperty("MoveCode"))
            object.MoveCode = message.MoveCode;
        var keys2;
        if (message.SoldGet1 && (keys2 = Object.keys(message.SoldGet1)).length) {
            object.SoldGet1 = {};
            for (var j = 0; j < keys2.length; ++j)
                object.SoldGet1[keys2[j]] = message.SoldGet1[keys2[j]];
        }
        if (message.SystemSwitch != null && message.hasOwnProperty("SystemSwitch"))
            object.SystemSwitch = message.SystemSwitch;
        if (message.UseFakeAttack != null && message.hasOwnProperty("UseFakeAttack"))
            object.UseFakeAttack = message.UseFakeAttack;
        if (message.Camp != null && message.hasOwnProperty("Camp"))
            object.Camp = message.Camp;
        if (message.DefaultGrade != null && message.hasOwnProperty("DefaultGrade"))
            object.DefaultGrade = message.DefaultGrade;
        if (message.UnlockCost != null && message.hasOwnProperty("UnlockCost"))
            object.UnlockCost = message.UnlockCost;
        if (message.Grade != null && message.hasOwnProperty("Grade"))
            object.Grade = message.Grade;
        if (message.GunClass != null && message.hasOwnProperty("GunClass"))
            object.GunClass = message.GunClass;
        if (message.BarrackCameraSetting != null && message.hasOwnProperty("BarrackCameraSetting"))
            object.BarrackCameraSetting = message.BarrackCameraSetting;
        if (message.Avatar != null && message.hasOwnProperty("Avatar"))
            object.Avatar = message.Avatar;
        if (message.CostumeId != null && message.hasOwnProperty("CostumeId"))
            object.CostumeId = message.CostumeId;
        if (message.CostumeReplace && message.CostumeReplace.length) {
            object.CostumeReplace = [];
            for (var j = 0; j < message.CostumeReplace.length; ++j)
                object.CostumeReplace[j] = message.CostumeReplace[j];
        }
        if (message.PropertyId != null && message.hasOwnProperty("PropertyId"))
            object.PropertyId = message.PropertyId;
        if (message.BarrackEffectId && message.BarrackEffectId.length) {
            object.BarrackEffectId = [];
            for (var j = 0; j < message.BarrackEffectId.length; ++j)
                object.BarrackEffectId[j] = message.BarrackEffectId[j];
        }
        if (message.Weight != null && message.hasOwnProperty("Weight"))
            object.Weight = message.Weight;
        if (message.BarrackAudioId != null && message.hasOwnProperty("BarrackAudioId"))
            object.BarrackAudioId = message.BarrackAudioId;
        if (message.ShieldType != null && message.hasOwnProperty("ShieldType"))
            object.ShieldType = message.ShieldType;
        if (message.MaxGrade != null && message.hasOwnProperty("MaxGrade"))
            object.MaxGrade = message.MaxGrade;
        if (message.ShieldEffectId != null && message.hasOwnProperty("ShieldEffectId"))
            object.ShieldEffectId = message.ShieldEffectId;
        if (message.BaseSupply != null && message.hasOwnProperty("BaseSupply"))
            object.BaseSupply = message.BaseSupply;
        if (message.SupplyTypeBanList && message.SupplyTypeBanList.length) {
            object.SupplyTypeBanList = [];
            for (var j = 0; j < message.SupplyTypeBanList.length; ++j)
                object.SupplyTypeBanList[j] = message.SupplyTypeBanList[j];
        }
        if (message.ExtraSkill != null && message.hasOwnProperty("ExtraSkill"))
            object.ExtraSkill = message.ExtraSkill;
        if (message.ShieldBrokenEffectId != null && message.hasOwnProperty("ShieldBrokenEffectId"))
            object.ShieldBrokenEffectId = message.ShieldBrokenEffectId;
        if (message.AttackType != null && message.hasOwnProperty("AttackType"))
            object.AttackType = message.AttackType;
        if (message.GachaGetTimeline != null && message.hasOwnProperty("GachaGetTimeline"))
            object.GachaGetTimeline = message.GachaGetTimeline;
        if (message.BeSuppressedConfig && message.BeSuppressedConfig.length) {
            object.BeSuppressedConfig = [];
            for (var j = 0; j < message.BeSuppressedConfig.length; ++j)
                object.BeSuppressedConfig[j] = message.BeSuppressedConfig[j];
        }
        if (message.Shape != null && message.hasOwnProperty("Shape"))
            object.Shape = message.Shape;
        if (message.ShapeParam != null && message.hasOwnProperty("ShapeParam"))
            object.ShapeParam = message.ShapeParam;
        if (message.ShapeIcon != null && message.hasOwnProperty("ShapeIcon"))
            object.ShapeIcon = message.ShapeIcon;
        if (message.ShapeTerrain != null && message.hasOwnProperty("ShapeTerrain"))
            object.ShapeTerrain = message.ShapeTerrain;
        if (message.IdleType != null && message.hasOwnProperty("IdleType"))
            object.IdleType = message.IdleType;
        if (message.Displacement != null && message.hasOwnProperty("Displacement"))
            object.Displacement = message.Displacement;
        if (message.IsHide != null && message.hasOwnProperty("IsHide"))
            object.IsHide = message.IsHide;
        if (message.WeakTag != null && message.hasOwnProperty("WeakTag"))
            object.WeakTag = message.WeakTag;
        if (message.SuppressGroup != null && message.hasOwnProperty("SuppressGroup"))
            object.SuppressGroup = message.SuppressGroup;
        if (message.UnlockHint != null && message.hasOwnProperty("UnlockHint"))
            object.UnlockHint = message.UnlockHint;
        if (message.UnlockDorm && message.UnlockDorm.length) {
            object.UnlockDorm = [];
            for (var j = 0; j < message.UnlockDorm.length; ++j)
                object.UnlockDorm[j] = message.UnlockDorm[j];
        }
        if (message.GuardRadius != null && message.hasOwnProperty("GuardRadius"))
            object.GuardRadius = message.GuardRadius;
        if (message.GuardRadiusShow != null && message.hasOwnProperty("GuardRadiusShow"))
            object.GuardRadiusShow = message.GuardRadiusShow;
        if (message.GachaGetAudio != null && message.hasOwnProperty("GachaGetAudio"))
            object.GachaGetAudio = message.GachaGetAudio;
        if (message.GachaGetVoice != null && message.hasOwnProperty("GachaGetVoice"))
            object.GachaGetVoice = message.GachaGetVoice;
        if (message.WeakWeaponTag != null && message.hasOwnProperty("WeakWeaponTag"))
            object.WeakWeaponTag = message.WeakWeaponTag;
        return object;
    };

    /**
     * Converts this GunData to JSON.
     * @function toJSON
     * @memberof GunData
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GunData.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for GunData
     * @function getTypeUrl
     * @memberof GunData
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    GunData.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/GunData";
    };

    return GunData;
})();

$root.LanguageStringData = (function() {

    /**
     * Properties of a LanguageStringData.
     * @exports ILanguageStringData
     * @interface ILanguageStringData
     * @property {number|Long|null} [Id] LanguageStringData Id
     */

    /**
     * Constructs a new LanguageStringData.
     * @exports LanguageStringData
     * @classdesc Represents a LanguageStringData.
     * @implements ILanguageStringData
     * @constructor
     * @param {ILanguageStringData=} [properties] Properties to set
     */
    function LanguageStringData(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * LanguageStringData Id.
     * @member {number|Long} Id
     * @memberof LanguageStringData
     * @instance
     */
    LanguageStringData.prototype.Id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Creates a new LanguageStringData instance using the specified properties.
     * @function create
     * @memberof LanguageStringData
     * @static
     * @param {ILanguageStringData=} [properties] Properties to set
     * @returns {LanguageStringData} LanguageStringData instance
     */
    LanguageStringData.create = function create(properties) {
        return new LanguageStringData(properties);
    };

    /**
     * Encodes the specified LanguageStringData message. Does not implicitly {@link LanguageStringData.verify|verify} messages.
     * @function encode
     * @memberof LanguageStringData
     * @static
     * @param {ILanguageStringData} message LanguageStringData message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LanguageStringData.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.Id != null && Object.hasOwnProperty.call(message, "Id"))
            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.Id);
        return writer;
    };

    /**
     * Encodes the specified LanguageStringData message, length delimited. Does not implicitly {@link LanguageStringData.verify|verify} messages.
     * @function encodeDelimited
     * @memberof LanguageStringData
     * @static
     * @param {ILanguageStringData} message LanguageStringData message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LanguageStringData.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a LanguageStringData message from the specified reader or buffer.
     * @function decode
     * @memberof LanguageStringData
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {LanguageStringData} LanguageStringData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LanguageStringData.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.LanguageStringData();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.Id = reader.int64();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a LanguageStringData message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof LanguageStringData
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {LanguageStringData} LanguageStringData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LanguageStringData.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a LanguageStringData message.
     * @function verify
     * @memberof LanguageStringData
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    LanguageStringData.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.Id != null && message.hasOwnProperty("Id"))
            if (!$util.isInteger(message.Id) && !(message.Id && $util.isInteger(message.Id.low) && $util.isInteger(message.Id.high)))
                return "Id: integer|Long expected";
        return null;
    };

    /**
     * Creates a LanguageStringData message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof LanguageStringData
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {LanguageStringData} LanguageStringData
     */
    LanguageStringData.fromObject = function fromObject(object) {
        if (object instanceof $root.LanguageStringData)
            return object;
        var message = new $root.LanguageStringData();
        if (object.Id != null)
            if ($util.Long)
                (message.Id = $util.Long.fromValue(object.Id)).unsigned = false;
            else if (typeof object.Id === "string")
                message.Id = parseInt(object.Id, 10);
            else if (typeof object.Id === "number")
                message.Id = object.Id;
            else if (typeof object.Id === "object")
                message.Id = new $util.LongBits(object.Id.low >>> 0, object.Id.high >>> 0).toNumber();
        return message;
    };

    /**
     * Creates a plain object from a LanguageStringData message. Also converts values to other types if specified.
     * @function toObject
     * @memberof LanguageStringData
     * @static
     * @param {LanguageStringData} message LanguageStringData
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    LanguageStringData.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.Id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.Id = options.longs === String ? "0" : 0;
        if (message.Id != null && message.hasOwnProperty("Id"))
            if (typeof message.Id === "number")
                object.Id = options.longs === String ? String(message.Id) : message.Id;
            else
                object.Id = options.longs === String ? $util.Long.prototype.toString.call(message.Id) : options.longs === Number ? new $util.LongBits(message.Id.low >>> 0, message.Id.high >>> 0).toNumber() : message.Id;
        return object;
    };

    /**
     * Converts this LanguageStringData to JSON.
     * @function toJSON
     * @memberof LanguageStringData
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    LanguageStringData.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for LanguageStringData
     * @function getTypeUrl
     * @memberof LanguageStringData
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    LanguageStringData.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/LanguageStringData";
    };

    return LanguageStringData;
})();

$root.GunWeaponDataTable = (function() {

    /**
     * Properties of a GunWeaponDataTable.
     * @exports IGunWeaponDataTable
     * @interface IGunWeaponDataTable
     * @property {Array.<IGunWeaponData>|null} [Data] GunWeaponDataTable Data
     */

    /**
     * Constructs a new GunWeaponDataTable.
     * @exports GunWeaponDataTable
     * @classdesc Represents a GunWeaponDataTable.
     * @implements IGunWeaponDataTable
     * @constructor
     * @param {IGunWeaponDataTable=} [properties] Properties to set
     */
    function GunWeaponDataTable(properties) {
        this.Data = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GunWeaponDataTable Data.
     * @member {Array.<IGunWeaponData>} Data
     * @memberof GunWeaponDataTable
     * @instance
     */
    GunWeaponDataTable.prototype.Data = $util.emptyArray;

    /**
     * Creates a new GunWeaponDataTable instance using the specified properties.
     * @function create
     * @memberof GunWeaponDataTable
     * @static
     * @param {IGunWeaponDataTable=} [properties] Properties to set
     * @returns {GunWeaponDataTable} GunWeaponDataTable instance
     */
    GunWeaponDataTable.create = function create(properties) {
        return new GunWeaponDataTable(properties);
    };

    /**
     * Encodes the specified GunWeaponDataTable message. Does not implicitly {@link GunWeaponDataTable.verify|verify} messages.
     * @function encode
     * @memberof GunWeaponDataTable
     * @static
     * @param {IGunWeaponDataTable} message GunWeaponDataTable message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GunWeaponDataTable.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.Data != null && message.Data.length)
            for (var i = 0; i < message.Data.length; ++i)
                $root.GunWeaponData.encode(message.Data[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified GunWeaponDataTable message, length delimited. Does not implicitly {@link GunWeaponDataTable.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GunWeaponDataTable
     * @static
     * @param {IGunWeaponDataTable} message GunWeaponDataTable message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GunWeaponDataTable.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GunWeaponDataTable message from the specified reader or buffer.
     * @function decode
     * @memberof GunWeaponDataTable
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GunWeaponDataTable} GunWeaponDataTable
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GunWeaponDataTable.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GunWeaponDataTable();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    if (!(message.Data && message.Data.length))
                        message.Data = [];
                    message.Data.push($root.GunWeaponData.decode(reader, reader.uint32()));
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a GunWeaponDataTable message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GunWeaponDataTable
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GunWeaponDataTable} GunWeaponDataTable
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GunWeaponDataTable.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GunWeaponDataTable message.
     * @function verify
     * @memberof GunWeaponDataTable
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GunWeaponDataTable.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.Data != null && message.hasOwnProperty("Data")) {
            if (!Array.isArray(message.Data))
                return "Data: array expected";
            for (var i = 0; i < message.Data.length; ++i) {
                var error = $root.GunWeaponData.verify(message.Data[i]);
                if (error)
                    return "Data." + error;
            }
        }
        return null;
    };

    /**
     * Creates a GunWeaponDataTable message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GunWeaponDataTable
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GunWeaponDataTable} GunWeaponDataTable
     */
    GunWeaponDataTable.fromObject = function fromObject(object) {
        if (object instanceof $root.GunWeaponDataTable)
            return object;
        var message = new $root.GunWeaponDataTable();
        if (object.Data) {
            if (!Array.isArray(object.Data))
                throw TypeError(".GunWeaponDataTable.Data: array expected");
            message.Data = [];
            for (var i = 0; i < object.Data.length; ++i) {
                if (typeof object.Data[i] !== "object")
                    throw TypeError(".GunWeaponDataTable.Data: object expected");
                message.Data[i] = $root.GunWeaponData.fromObject(object.Data[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a GunWeaponDataTable message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GunWeaponDataTable
     * @static
     * @param {GunWeaponDataTable} message GunWeaponDataTable
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GunWeaponDataTable.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.Data = [];
        if (message.Data && message.Data.length) {
            object.Data = [];
            for (var j = 0; j < message.Data.length; ++j)
                object.Data[j] = $root.GunWeaponData.toObject(message.Data[j], options);
        }
        return object;
    };

    /**
     * Converts this GunWeaponDataTable to JSON.
     * @function toJSON
     * @memberof GunWeaponDataTable
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GunWeaponDataTable.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for GunWeaponDataTable
     * @function getTypeUrl
     * @memberof GunWeaponDataTable
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    GunWeaponDataTable.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/GunWeaponDataTable";
    };

    return GunWeaponDataTable;
})();

$root.GunWeaponData = (function() {

    /**
     * Properties of a GunWeaponData.
     * @exports IGunWeaponData
     * @interface IGunWeaponData
     * @property {number|null} [Id] GunWeaponData Id
     * @property {ILanguageStringData|null} [Name] GunWeaponData Name
     * @property {ILanguageStringData|null} [Description] GunWeaponData Description
     * @property {number|null} [Type] GunWeaponData Type
     * @property {number|null} [Modelstype] GunWeaponData Modelstype
     * @property {number|null} [Element] GunWeaponData Element
     * @property {string|null} [ResCode] GunWeaponData ResCode
     * @property {string|null} [ResPath] GunWeaponData ResPath
     * @property {string|null} [Brand] GunWeaponData Brand
     * @property {number|null} [Rank] GunWeaponData Rank
     * @property {number|null} [ElemenSkill] GunWeaponData ElemenSkill
     * @property {number|null} [Skill] GunWeaponData Skill
     * @property {number|null} [BuffSkill] GunWeaponData BuffSkill
     * @property {Array.<number>|null} [Slot] GunWeaponData Slot
     * @property {number|null} [ExpRate] GunWeaponData ExpRate
     * @property {number|null} [WeaponOfferExp] GunWeaponData WeaponOfferExp
     * @property {number|null} [WeaponNeedCash] GunWeaponData WeaponNeedCash
     * @property {number|null} [DefaultMaxlv] GunWeaponData DefaultMaxlv
     * @property {number|null} [MaxBreak] GunWeaponData MaxBreak
     * @property {Array.<number>|null} [SoldDrop] GunWeaponData SoldDrop
     * @property {Object.<string,number>|null} [SoldGet] GunWeaponData SoldGet
     * @property {number|null} [PropertyId] GunWeaponData PropertyId
     * @property {Object.<string,number>|null} [UnlockCost] GunWeaponData UnlockCost
     * @property {number|null} [PrivateSkill] GunWeaponData PrivateSkill
     * @property {number|null} [CapacityMax] GunWeaponData CapacityMax
     * @property {number|null} [WeaponPolarityId] GunWeaponData WeaponPolarityId
     * @property {Object.<string,number>|null} [PolarityCostRandom] GunWeaponData PolarityCostRandom
     * @property {Object.<string,number>|null} [PolarityCostCustom] GunWeaponData PolarityCostCustom
     * @property {Array.<number>|null} [AdvanceWeapon] GunWeaponData AdvanceWeapon
     * @property {number|null} [CharacterId] GunWeaponData CharacterId
     * @property {number|null} [ModNum] GunWeaponData ModNum
     * @property {Array.<number>|null} [ModTypeGroup] GunWeaponData ModTypeGroup
     * @property {boolean|null} [IsHide] GunWeaponData IsHide
     * @property {number|null} [Audio] GunWeaponData Audio
     * @property {number|null} [WeaponTag] GunWeaponData WeaponTag
     * @property {number|null} [AttackType] GunWeaponData AttackType
     * @property {Array.<number>|null} [WeaponSkill] GunWeaponData WeaponSkill
     */

    /**
     * Constructs a new GunWeaponData.
     * @exports GunWeaponData
     * @classdesc Represents a GunWeaponData.
     * @implements IGunWeaponData
     * @constructor
     * @param {IGunWeaponData=} [properties] Properties to set
     */
    function GunWeaponData(properties) {
        this.Slot = [];
        this.SoldDrop = [];
        this.SoldGet = {};
        this.UnlockCost = {};
        this.PolarityCostRandom = {};
        this.PolarityCostCustom = {};
        this.AdvanceWeapon = [];
        this.ModTypeGroup = [];
        this.WeaponSkill = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GunWeaponData Id.
     * @member {number} Id
     * @memberof GunWeaponData
     * @instance
     */
    GunWeaponData.prototype.Id = 0;

    /**
     * GunWeaponData Name.
     * @member {ILanguageStringData|null|undefined} Name
     * @memberof GunWeaponData
     * @instance
     */
    GunWeaponData.prototype.Name = null;

    /**
     * GunWeaponData Description.
     * @member {ILanguageStringData|null|undefined} Description
     * @memberof GunWeaponData
     * @instance
     */
    GunWeaponData.prototype.Description = null;

    /**
     * GunWeaponData Type.
     * @member {number} Type
     * @memberof GunWeaponData
     * @instance
     */
    GunWeaponData.prototype.Type = 0;

    /**
     * GunWeaponData Modelstype.
     * @member {number} Modelstype
     * @memberof GunWeaponData
     * @instance
     */
    GunWeaponData.prototype.Modelstype = 0;

    /**
     * GunWeaponData Element.
     * @member {number} Element
     * @memberof GunWeaponData
     * @instance
     */
    GunWeaponData.prototype.Element = 0;

    /**
     * GunWeaponData ResCode.
     * @member {string} ResCode
     * @memberof GunWeaponData
     * @instance
     */
    GunWeaponData.prototype.ResCode = "";

    /**
     * GunWeaponData ResPath.
     * @member {string} ResPath
     * @memberof GunWeaponData
     * @instance
     */
    GunWeaponData.prototype.ResPath = "";

    /**
     * GunWeaponData Brand.
     * @member {string} Brand
     * @memberof GunWeaponData
     * @instance
     */
    GunWeaponData.prototype.Brand = "";

    /**
     * GunWeaponData Rank.
     * @member {number} Rank
     * @memberof GunWeaponData
     * @instance
     */
    GunWeaponData.prototype.Rank = 0;

    /**
     * GunWeaponData ElemenSkill.
     * @member {number} ElemenSkill
     * @memberof GunWeaponData
     * @instance
     */
    GunWeaponData.prototype.ElemenSkill = 0;

    /**
     * GunWeaponData Skill.
     * @member {number} Skill
     * @memberof GunWeaponData
     * @instance
     */
    GunWeaponData.prototype.Skill = 0;

    /**
     * GunWeaponData BuffSkill.
     * @member {number} BuffSkill
     * @memberof GunWeaponData
     * @instance
     */
    GunWeaponData.prototype.BuffSkill = 0;

    /**
     * GunWeaponData Slot.
     * @member {Array.<number>} Slot
     * @memberof GunWeaponData
     * @instance
     */
    GunWeaponData.prototype.Slot = $util.emptyArray;

    /**
     * GunWeaponData ExpRate.
     * @member {number} ExpRate
     * @memberof GunWeaponData
     * @instance
     */
    GunWeaponData.prototype.ExpRate = 0;

    /**
     * GunWeaponData WeaponOfferExp.
     * @member {number} WeaponOfferExp
     * @memberof GunWeaponData
     * @instance
     */
    GunWeaponData.prototype.WeaponOfferExp = 0;

    /**
     * GunWeaponData WeaponNeedCash.
     * @member {number} WeaponNeedCash
     * @memberof GunWeaponData
     * @instance
     */
    GunWeaponData.prototype.WeaponNeedCash = 0;

    /**
     * GunWeaponData DefaultMaxlv.
     * @member {number} DefaultMaxlv
     * @memberof GunWeaponData
     * @instance
     */
    GunWeaponData.prototype.DefaultMaxlv = 0;

    /**
     * GunWeaponData MaxBreak.
     * @member {number} MaxBreak
     * @memberof GunWeaponData
     * @instance
     */
    GunWeaponData.prototype.MaxBreak = 0;

    /**
     * GunWeaponData SoldDrop.
     * @member {Array.<number>} SoldDrop
     * @memberof GunWeaponData
     * @instance
     */
    GunWeaponData.prototype.SoldDrop = $util.emptyArray;

    /**
     * GunWeaponData SoldGet.
     * @member {Object.<string,number>} SoldGet
     * @memberof GunWeaponData
     * @instance
     */
    GunWeaponData.prototype.SoldGet = $util.emptyObject;

    /**
     * GunWeaponData PropertyId.
     * @member {number} PropertyId
     * @memberof GunWeaponData
     * @instance
     */
    GunWeaponData.prototype.PropertyId = 0;

    /**
     * GunWeaponData UnlockCost.
     * @member {Object.<string,number>} UnlockCost
     * @memberof GunWeaponData
     * @instance
     */
    GunWeaponData.prototype.UnlockCost = $util.emptyObject;

    /**
     * GunWeaponData PrivateSkill.
     * @member {number} PrivateSkill
     * @memberof GunWeaponData
     * @instance
     */
    GunWeaponData.prototype.PrivateSkill = 0;

    /**
     * GunWeaponData CapacityMax.
     * @member {number} CapacityMax
     * @memberof GunWeaponData
     * @instance
     */
    GunWeaponData.prototype.CapacityMax = 0;

    /**
     * GunWeaponData WeaponPolarityId.
     * @member {number} WeaponPolarityId
     * @memberof GunWeaponData
     * @instance
     */
    GunWeaponData.prototype.WeaponPolarityId = 0;

    /**
     * GunWeaponData PolarityCostRandom.
     * @member {Object.<string,number>} PolarityCostRandom
     * @memberof GunWeaponData
     * @instance
     */
    GunWeaponData.prototype.PolarityCostRandom = $util.emptyObject;

    /**
     * GunWeaponData PolarityCostCustom.
     * @member {Object.<string,number>} PolarityCostCustom
     * @memberof GunWeaponData
     * @instance
     */
    GunWeaponData.prototype.PolarityCostCustom = $util.emptyObject;

    /**
     * GunWeaponData AdvanceWeapon.
     * @member {Array.<number>} AdvanceWeapon
     * @memberof GunWeaponData
     * @instance
     */
    GunWeaponData.prototype.AdvanceWeapon = $util.emptyArray;

    /**
     * GunWeaponData CharacterId.
     * @member {number} CharacterId
     * @memberof GunWeaponData
     * @instance
     */
    GunWeaponData.prototype.CharacterId = 0;

    /**
     * GunWeaponData ModNum.
     * @member {number} ModNum
     * @memberof GunWeaponData
     * @instance
     */
    GunWeaponData.prototype.ModNum = 0;

    /**
     * GunWeaponData ModTypeGroup.
     * @member {Array.<number>} ModTypeGroup
     * @memberof GunWeaponData
     * @instance
     */
    GunWeaponData.prototype.ModTypeGroup = $util.emptyArray;

    /**
     * GunWeaponData IsHide.
     * @member {boolean} IsHide
     * @memberof GunWeaponData
     * @instance
     */
    GunWeaponData.prototype.IsHide = false;

    /**
     * GunWeaponData Audio.
     * @member {number} Audio
     * @memberof GunWeaponData
     * @instance
     */
    GunWeaponData.prototype.Audio = 0;

    /**
     * GunWeaponData WeaponTag.
     * @member {number} WeaponTag
     * @memberof GunWeaponData
     * @instance
     */
    GunWeaponData.prototype.WeaponTag = 0;

    /**
     * GunWeaponData AttackType.
     * @member {number} AttackType
     * @memberof GunWeaponData
     * @instance
     */
    GunWeaponData.prototype.AttackType = 0;

    /**
     * GunWeaponData WeaponSkill.
     * @member {Array.<number>} WeaponSkill
     * @memberof GunWeaponData
     * @instance
     */
    GunWeaponData.prototype.WeaponSkill = $util.emptyArray;

    /**
     * Creates a new GunWeaponData instance using the specified properties.
     * @function create
     * @memberof GunWeaponData
     * @static
     * @param {IGunWeaponData=} [properties] Properties to set
     * @returns {GunWeaponData} GunWeaponData instance
     */
    GunWeaponData.create = function create(properties) {
        return new GunWeaponData(properties);
    };

    /**
     * Encodes the specified GunWeaponData message. Does not implicitly {@link GunWeaponData.verify|verify} messages.
     * @function encode
     * @memberof GunWeaponData
     * @static
     * @param {IGunWeaponData} message GunWeaponData message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GunWeaponData.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.Id != null && Object.hasOwnProperty.call(message, "Id"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.Id);
        if (message.Name != null && Object.hasOwnProperty.call(message, "Name"))
            $root.LanguageStringData.encode(message.Name, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        if (message.Description != null && Object.hasOwnProperty.call(message, "Description"))
            $root.LanguageStringData.encode(message.Description, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        if (message.Type != null && Object.hasOwnProperty.call(message, "Type"))
            writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.Type);
        if (message.Modelstype != null && Object.hasOwnProperty.call(message, "Modelstype"))
            writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.Modelstype);
        if (message.Element != null && Object.hasOwnProperty.call(message, "Element"))
            writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.Element);
        if (message.ResCode != null && Object.hasOwnProperty.call(message, "ResCode"))
            writer.uint32(/* id 7, wireType 2 =*/58).string(message.ResCode);
        if (message.ResPath != null && Object.hasOwnProperty.call(message, "ResPath"))
            writer.uint32(/* id 8, wireType 2 =*/66).string(message.ResPath);
        if (message.Brand != null && Object.hasOwnProperty.call(message, "Brand"))
            writer.uint32(/* id 9, wireType 2 =*/74).string(message.Brand);
        if (message.Rank != null && Object.hasOwnProperty.call(message, "Rank"))
            writer.uint32(/* id 10, wireType 0 =*/80).int32(message.Rank);
        if (message.ElemenSkill != null && Object.hasOwnProperty.call(message, "ElemenSkill"))
            writer.uint32(/* id 11, wireType 0 =*/88).uint32(message.ElemenSkill);
        if (message.Skill != null && Object.hasOwnProperty.call(message, "Skill"))
            writer.uint32(/* id 12, wireType 0 =*/96).uint32(message.Skill);
        if (message.BuffSkill != null && Object.hasOwnProperty.call(message, "BuffSkill"))
            writer.uint32(/* id 13, wireType 0 =*/104).uint32(message.BuffSkill);
        if (message.Slot != null && message.Slot.length) {
            writer.uint32(/* id 14, wireType 2 =*/114).fork();
            for (var i = 0; i < message.Slot.length; ++i)
                writer.uint32(message.Slot[i]);
            writer.ldelim();
        }
        if (message.ExpRate != null && Object.hasOwnProperty.call(message, "ExpRate"))
            writer.uint32(/* id 15, wireType 0 =*/120).uint32(message.ExpRate);
        if (message.WeaponOfferExp != null && Object.hasOwnProperty.call(message, "WeaponOfferExp"))
            writer.uint32(/* id 16, wireType 0 =*/128).uint32(message.WeaponOfferExp);
        if (message.WeaponNeedCash != null && Object.hasOwnProperty.call(message, "WeaponNeedCash"))
            writer.uint32(/* id 17, wireType 0 =*/136).uint32(message.WeaponNeedCash);
        if (message.DefaultMaxlv != null && Object.hasOwnProperty.call(message, "DefaultMaxlv"))
            writer.uint32(/* id 18, wireType 0 =*/144).uint32(message.DefaultMaxlv);
        if (message.MaxBreak != null && Object.hasOwnProperty.call(message, "MaxBreak"))
            writer.uint32(/* id 19, wireType 0 =*/152).uint32(message.MaxBreak);
        if (message.SoldDrop != null && message.SoldDrop.length) {
            writer.uint32(/* id 20, wireType 2 =*/162).fork();
            for (var i = 0; i < message.SoldDrop.length; ++i)
                writer.uint32(message.SoldDrop[i]);
            writer.ldelim();
        }
        if (message.SoldGet != null && Object.hasOwnProperty.call(message, "SoldGet"))
            for (var keys = Object.keys(message.SoldGet), i = 0; i < keys.length; ++i)
                writer.uint32(/* id 21, wireType 2 =*/170).fork().uint32(/* id 1, wireType 0 =*/8).uint32(keys[i]).uint32(/* id 2, wireType 0 =*/16).uint32(message.SoldGet[keys[i]]).ldelim();
        if (message.PropertyId != null && Object.hasOwnProperty.call(message, "PropertyId"))
            writer.uint32(/* id 22, wireType 0 =*/176).uint32(message.PropertyId);
        if (message.UnlockCost != null && Object.hasOwnProperty.call(message, "UnlockCost"))
            for (var keys = Object.keys(message.UnlockCost), i = 0; i < keys.length; ++i)
                writer.uint32(/* id 23, wireType 2 =*/186).fork().uint32(/* id 1, wireType 0 =*/8).uint32(keys[i]).uint32(/* id 2, wireType 0 =*/16).uint32(message.UnlockCost[keys[i]]).ldelim();
        if (message.PrivateSkill != null && Object.hasOwnProperty.call(message, "PrivateSkill"))
            writer.uint32(/* id 24, wireType 0 =*/192).uint32(message.PrivateSkill);
        if (message.CapacityMax != null && Object.hasOwnProperty.call(message, "CapacityMax"))
            writer.uint32(/* id 25, wireType 0 =*/200).uint32(message.CapacityMax);
        if (message.WeaponPolarityId != null && Object.hasOwnProperty.call(message, "WeaponPolarityId"))
            writer.uint32(/* id 26, wireType 0 =*/208).uint32(message.WeaponPolarityId);
        if (message.PolarityCostRandom != null && Object.hasOwnProperty.call(message, "PolarityCostRandom"))
            for (var keys = Object.keys(message.PolarityCostRandom), i = 0; i < keys.length; ++i)
                writer.uint32(/* id 27, wireType 2 =*/218).fork().uint32(/* id 1, wireType 0 =*/8).uint32(keys[i]).uint32(/* id 2, wireType 0 =*/16).uint32(message.PolarityCostRandom[keys[i]]).ldelim();
        if (message.PolarityCostCustom != null && Object.hasOwnProperty.call(message, "PolarityCostCustom"))
            for (var keys = Object.keys(message.PolarityCostCustom), i = 0; i < keys.length; ++i)
                writer.uint32(/* id 28, wireType 2 =*/226).fork().uint32(/* id 1, wireType 0 =*/8).uint32(keys[i]).uint32(/* id 2, wireType 0 =*/16).uint32(message.PolarityCostCustom[keys[i]]).ldelim();
        if (message.AdvanceWeapon != null && message.AdvanceWeapon.length) {
            writer.uint32(/* id 29, wireType 2 =*/234).fork();
            for (var i = 0; i < message.AdvanceWeapon.length; ++i)
                writer.uint32(message.AdvanceWeapon[i]);
            writer.ldelim();
        }
        if (message.CharacterId != null && Object.hasOwnProperty.call(message, "CharacterId"))
            writer.uint32(/* id 30, wireType 0 =*/240).uint32(message.CharacterId);
        if (message.ModNum != null && Object.hasOwnProperty.call(message, "ModNum"))
            writer.uint32(/* id 31, wireType 0 =*/248).uint32(message.ModNum);
        if (message.ModTypeGroup != null && message.ModTypeGroup.length) {
            writer.uint32(/* id 32, wireType 2 =*/258).fork();
            for (var i = 0; i < message.ModTypeGroup.length; ++i)
                writer.uint32(message.ModTypeGroup[i]);
            writer.ldelim();
        }
        if (message.IsHide != null && Object.hasOwnProperty.call(message, "IsHide"))
            writer.uint32(/* id 33, wireType 0 =*/264).bool(message.IsHide);
        if (message.Audio != null && Object.hasOwnProperty.call(message, "Audio"))
            writer.uint32(/* id 34, wireType 0 =*/272).uint32(message.Audio);
        if (message.WeaponTag != null && Object.hasOwnProperty.call(message, "WeaponTag"))
            writer.uint32(/* id 35, wireType 0 =*/280).int32(message.WeaponTag);
        if (message.AttackType != null && Object.hasOwnProperty.call(message, "AttackType"))
            writer.uint32(/* id 36, wireType 0 =*/288).uint32(message.AttackType);
        if (message.WeaponSkill != null && message.WeaponSkill.length) {
            writer.uint32(/* id 37, wireType 2 =*/298).fork();
            for (var i = 0; i < message.WeaponSkill.length; ++i)
                writer.uint32(message.WeaponSkill[i]);
            writer.ldelim();
        }
        return writer;
    };

    /**
     * Encodes the specified GunWeaponData message, length delimited. Does not implicitly {@link GunWeaponData.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GunWeaponData
     * @static
     * @param {IGunWeaponData} message GunWeaponData message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GunWeaponData.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GunWeaponData message from the specified reader or buffer.
     * @function decode
     * @memberof GunWeaponData
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GunWeaponData} GunWeaponData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GunWeaponData.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GunWeaponData(), key, value;
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.Id = reader.uint32();
                    break;
                }
            case 2: {
                    message.Name = $root.LanguageStringData.decode(reader, reader.uint32());
                    break;
                }
            case 3: {
                    message.Description = $root.LanguageStringData.decode(reader, reader.uint32());
                    break;
                }
            case 4: {
                    message.Type = reader.uint32();
                    break;
                }
            case 5: {
                    message.Modelstype = reader.uint32();
                    break;
                }
            case 6: {
                    message.Element = reader.uint32();
                    break;
                }
            case 7: {
                    message.ResCode = reader.string();
                    break;
                }
            case 8: {
                    message.ResPath = reader.string();
                    break;
                }
            case 9: {
                    message.Brand = reader.string();
                    break;
                }
            case 10: {
                    message.Rank = reader.int32();
                    break;
                }
            case 11: {
                    message.ElemenSkill = reader.uint32();
                    break;
                }
            case 12: {
                    message.Skill = reader.uint32();
                    break;
                }
            case 13: {
                    message.BuffSkill = reader.uint32();
                    break;
                }
            case 14: {
                    if (!(message.Slot && message.Slot.length))
                        message.Slot = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.Slot.push(reader.uint32());
                    } else
                        message.Slot.push(reader.uint32());
                    break;
                }
            case 15: {
                    message.ExpRate = reader.uint32();
                    break;
                }
            case 16: {
                    message.WeaponOfferExp = reader.uint32();
                    break;
                }
            case 17: {
                    message.WeaponNeedCash = reader.uint32();
                    break;
                }
            case 18: {
                    message.DefaultMaxlv = reader.uint32();
                    break;
                }
            case 19: {
                    message.MaxBreak = reader.uint32();
                    break;
                }
            case 20: {
                    if (!(message.SoldDrop && message.SoldDrop.length))
                        message.SoldDrop = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.SoldDrop.push(reader.uint32());
                    } else
                        message.SoldDrop.push(reader.uint32());
                    break;
                }
            case 21: {
                    if (message.SoldGet === $util.emptyObject)
                        message.SoldGet = {};
                    var end2 = reader.uint32() + reader.pos;
                    key = 0;
                    value = 0;
                    while (reader.pos < end2) {
                        var tag2 = reader.uint32();
                        switch (tag2 >>> 3) {
                        case 1:
                            key = reader.uint32();
                            break;
                        case 2:
                            value = reader.uint32();
                            break;
                        default:
                            reader.skipType(tag2 & 7);
                            break;
                        }
                    }
                    message.SoldGet[key] = value;
                    break;
                }
            case 22: {
                    message.PropertyId = reader.uint32();
                    break;
                }
            case 23: {
                    if (message.UnlockCost === $util.emptyObject)
                        message.UnlockCost = {};
                    var end2 = reader.uint32() + reader.pos;
                    key = 0;
                    value = 0;
                    while (reader.pos < end2) {
                        var tag2 = reader.uint32();
                        switch (tag2 >>> 3) {
                        case 1:
                            key = reader.uint32();
                            break;
                        case 2:
                            value = reader.uint32();
                            break;
                        default:
                            reader.skipType(tag2 & 7);
                            break;
                        }
                    }
                    message.UnlockCost[key] = value;
                    break;
                }
            case 24: {
                    message.PrivateSkill = reader.uint32();
                    break;
                }
            case 25: {
                    message.CapacityMax = reader.uint32();
                    break;
                }
            case 26: {
                    message.WeaponPolarityId = reader.uint32();
                    break;
                }
            case 27: {
                    if (message.PolarityCostRandom === $util.emptyObject)
                        message.PolarityCostRandom = {};
                    var end2 = reader.uint32() + reader.pos;
                    key = 0;
                    value = 0;
                    while (reader.pos < end2) {
                        var tag2 = reader.uint32();
                        switch (tag2 >>> 3) {
                        case 1:
                            key = reader.uint32();
                            break;
                        case 2:
                            value = reader.uint32();
                            break;
                        default:
                            reader.skipType(tag2 & 7);
                            break;
                        }
                    }
                    message.PolarityCostRandom[key] = value;
                    break;
                }
            case 28: {
                    if (message.PolarityCostCustom === $util.emptyObject)
                        message.PolarityCostCustom = {};
                    var end2 = reader.uint32() + reader.pos;
                    key = 0;
                    value = 0;
                    while (reader.pos < end2) {
                        var tag2 = reader.uint32();
                        switch (tag2 >>> 3) {
                        case 1:
                            key = reader.uint32();
                            break;
                        case 2:
                            value = reader.uint32();
                            break;
                        default:
                            reader.skipType(tag2 & 7);
                            break;
                        }
                    }
                    message.PolarityCostCustom[key] = value;
                    break;
                }
            case 29: {
                    if (!(message.AdvanceWeapon && message.AdvanceWeapon.length))
                        message.AdvanceWeapon = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.AdvanceWeapon.push(reader.uint32());
                    } else
                        message.AdvanceWeapon.push(reader.uint32());
                    break;
                }
            case 30: {
                    message.CharacterId = reader.uint32();
                    break;
                }
            case 31: {
                    message.ModNum = reader.uint32();
                    break;
                }
            case 32: {
                    if (!(message.ModTypeGroup && message.ModTypeGroup.length))
                        message.ModTypeGroup = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.ModTypeGroup.push(reader.uint32());
                    } else
                        message.ModTypeGroup.push(reader.uint32());
                    break;
                }
            case 33: {
                    message.IsHide = reader.bool();
                    break;
                }
            case 34: {
                    message.Audio = reader.uint32();
                    break;
                }
            case 35: {
                    message.WeaponTag = reader.int32();
                    break;
                }
            case 36: {
                    message.AttackType = reader.uint32();
                    break;
                }
            case 37: {
                    if (!(message.WeaponSkill && message.WeaponSkill.length))
                        message.WeaponSkill = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.WeaponSkill.push(reader.uint32());
                    } else
                        message.WeaponSkill.push(reader.uint32());
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a GunWeaponData message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GunWeaponData
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GunWeaponData} GunWeaponData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GunWeaponData.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GunWeaponData message.
     * @function verify
     * @memberof GunWeaponData
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GunWeaponData.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.Id != null && message.hasOwnProperty("Id"))
            if (!$util.isInteger(message.Id))
                return "Id: integer expected";
        if (message.Name != null && message.hasOwnProperty("Name")) {
            var error = $root.LanguageStringData.verify(message.Name);
            if (error)
                return "Name." + error;
        }
        if (message.Description != null && message.hasOwnProperty("Description")) {
            var error = $root.LanguageStringData.verify(message.Description);
            if (error)
                return "Description." + error;
        }
        if (message.Type != null && message.hasOwnProperty("Type"))
            if (!$util.isInteger(message.Type))
                return "Type: integer expected";
        if (message.Modelstype != null && message.hasOwnProperty("Modelstype"))
            if (!$util.isInteger(message.Modelstype))
                return "Modelstype: integer expected";
        if (message.Element != null && message.hasOwnProperty("Element"))
            if (!$util.isInteger(message.Element))
                return "Element: integer expected";
        if (message.ResCode != null && message.hasOwnProperty("ResCode"))
            if (!$util.isString(message.ResCode))
                return "ResCode: string expected";
        if (message.ResPath != null && message.hasOwnProperty("ResPath"))
            if (!$util.isString(message.ResPath))
                return "ResPath: string expected";
        if (message.Brand != null && message.hasOwnProperty("Brand"))
            if (!$util.isString(message.Brand))
                return "Brand: string expected";
        if (message.Rank != null && message.hasOwnProperty("Rank"))
            if (!$util.isInteger(message.Rank))
                return "Rank: integer expected";
        if (message.ElemenSkill != null && message.hasOwnProperty("ElemenSkill"))
            if (!$util.isInteger(message.ElemenSkill))
                return "ElemenSkill: integer expected";
        if (message.Skill != null && message.hasOwnProperty("Skill"))
            if (!$util.isInteger(message.Skill))
                return "Skill: integer expected";
        if (message.BuffSkill != null && message.hasOwnProperty("BuffSkill"))
            if (!$util.isInteger(message.BuffSkill))
                return "BuffSkill: integer expected";
        if (message.Slot != null && message.hasOwnProperty("Slot")) {
            if (!Array.isArray(message.Slot))
                return "Slot: array expected";
            for (var i = 0; i < message.Slot.length; ++i)
                if (!$util.isInteger(message.Slot[i]))
                    return "Slot: integer[] expected";
        }
        if (message.ExpRate != null && message.hasOwnProperty("ExpRate"))
            if (!$util.isInteger(message.ExpRate))
                return "ExpRate: integer expected";
        if (message.WeaponOfferExp != null && message.hasOwnProperty("WeaponOfferExp"))
            if (!$util.isInteger(message.WeaponOfferExp))
                return "WeaponOfferExp: integer expected";
        if (message.WeaponNeedCash != null && message.hasOwnProperty("WeaponNeedCash"))
            if (!$util.isInteger(message.WeaponNeedCash))
                return "WeaponNeedCash: integer expected";
        if (message.DefaultMaxlv != null && message.hasOwnProperty("DefaultMaxlv"))
            if (!$util.isInteger(message.DefaultMaxlv))
                return "DefaultMaxlv: integer expected";
        if (message.MaxBreak != null && message.hasOwnProperty("MaxBreak"))
            if (!$util.isInteger(message.MaxBreak))
                return "MaxBreak: integer expected";
        if (message.SoldDrop != null && message.hasOwnProperty("SoldDrop")) {
            if (!Array.isArray(message.SoldDrop))
                return "SoldDrop: array expected";
            for (var i = 0; i < message.SoldDrop.length; ++i)
                if (!$util.isInteger(message.SoldDrop[i]))
                    return "SoldDrop: integer[] expected";
        }
        if (message.SoldGet != null && message.hasOwnProperty("SoldGet")) {
            if (!$util.isObject(message.SoldGet))
                return "SoldGet: object expected";
            var key = Object.keys(message.SoldGet);
            for (var i = 0; i < key.length; ++i) {
                if (!$util.key32Re.test(key[i]))
                    return "SoldGet: integer key{k:uint32} expected";
                if (!$util.isInteger(message.SoldGet[key[i]]))
                    return "SoldGet: integer{k:uint32} expected";
            }
        }
        if (message.PropertyId != null && message.hasOwnProperty("PropertyId"))
            if (!$util.isInteger(message.PropertyId))
                return "PropertyId: integer expected";
        if (message.UnlockCost != null && message.hasOwnProperty("UnlockCost")) {
            if (!$util.isObject(message.UnlockCost))
                return "UnlockCost: object expected";
            var key = Object.keys(message.UnlockCost);
            for (var i = 0; i < key.length; ++i) {
                if (!$util.key32Re.test(key[i]))
                    return "UnlockCost: integer key{k:uint32} expected";
                if (!$util.isInteger(message.UnlockCost[key[i]]))
                    return "UnlockCost: integer{k:uint32} expected";
            }
        }
        if (message.PrivateSkill != null && message.hasOwnProperty("PrivateSkill"))
            if (!$util.isInteger(message.PrivateSkill))
                return "PrivateSkill: integer expected";
        if (message.CapacityMax != null && message.hasOwnProperty("CapacityMax"))
            if (!$util.isInteger(message.CapacityMax))
                return "CapacityMax: integer expected";
        if (message.WeaponPolarityId != null && message.hasOwnProperty("WeaponPolarityId"))
            if (!$util.isInteger(message.WeaponPolarityId))
                return "WeaponPolarityId: integer expected";
        if (message.PolarityCostRandom != null && message.hasOwnProperty("PolarityCostRandom")) {
            if (!$util.isObject(message.PolarityCostRandom))
                return "PolarityCostRandom: object expected";
            var key = Object.keys(message.PolarityCostRandom);
            for (var i = 0; i < key.length; ++i) {
                if (!$util.key32Re.test(key[i]))
                    return "PolarityCostRandom: integer key{k:uint32} expected";
                if (!$util.isInteger(message.PolarityCostRandom[key[i]]))
                    return "PolarityCostRandom: integer{k:uint32} expected";
            }
        }
        if (message.PolarityCostCustom != null && message.hasOwnProperty("PolarityCostCustom")) {
            if (!$util.isObject(message.PolarityCostCustom))
                return "PolarityCostCustom: object expected";
            var key = Object.keys(message.PolarityCostCustom);
            for (var i = 0; i < key.length; ++i) {
                if (!$util.key32Re.test(key[i]))
                    return "PolarityCostCustom: integer key{k:uint32} expected";
                if (!$util.isInteger(message.PolarityCostCustom[key[i]]))
                    return "PolarityCostCustom: integer{k:uint32} expected";
            }
        }
        if (message.AdvanceWeapon != null && message.hasOwnProperty("AdvanceWeapon")) {
            if (!Array.isArray(message.AdvanceWeapon))
                return "AdvanceWeapon: array expected";
            for (var i = 0; i < message.AdvanceWeapon.length; ++i)
                if (!$util.isInteger(message.AdvanceWeapon[i]))
                    return "AdvanceWeapon: integer[] expected";
        }
        if (message.CharacterId != null && message.hasOwnProperty("CharacterId"))
            if (!$util.isInteger(message.CharacterId))
                return "CharacterId: integer expected";
        if (message.ModNum != null && message.hasOwnProperty("ModNum"))
            if (!$util.isInteger(message.ModNum))
                return "ModNum: integer expected";
        if (message.ModTypeGroup != null && message.hasOwnProperty("ModTypeGroup")) {
            if (!Array.isArray(message.ModTypeGroup))
                return "ModTypeGroup: array expected";
            for (var i = 0; i < message.ModTypeGroup.length; ++i)
                if (!$util.isInteger(message.ModTypeGroup[i]))
                    return "ModTypeGroup: integer[] expected";
        }
        if (message.IsHide != null && message.hasOwnProperty("IsHide"))
            if (typeof message.IsHide !== "boolean")
                return "IsHide: boolean expected";
        if (message.Audio != null && message.hasOwnProperty("Audio"))
            if (!$util.isInteger(message.Audio))
                return "Audio: integer expected";
        if (message.WeaponTag != null && message.hasOwnProperty("WeaponTag"))
            if (!$util.isInteger(message.WeaponTag))
                return "WeaponTag: integer expected";
        if (message.AttackType != null && message.hasOwnProperty("AttackType"))
            if (!$util.isInteger(message.AttackType))
                return "AttackType: integer expected";
        if (message.WeaponSkill != null && message.hasOwnProperty("WeaponSkill")) {
            if (!Array.isArray(message.WeaponSkill))
                return "WeaponSkill: array expected";
            for (var i = 0; i < message.WeaponSkill.length; ++i)
                if (!$util.isInteger(message.WeaponSkill[i]))
                    return "WeaponSkill: integer[] expected";
        }
        return null;
    };

    /**
     * Creates a GunWeaponData message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GunWeaponData
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GunWeaponData} GunWeaponData
     */
    GunWeaponData.fromObject = function fromObject(object) {
        if (object instanceof $root.GunWeaponData)
            return object;
        var message = new $root.GunWeaponData();
        if (object.Id != null)
            message.Id = object.Id >>> 0;
        if (object.Name != null) {
            if (typeof object.Name !== "object")
                throw TypeError(".GunWeaponData.Name: object expected");
            message.Name = $root.LanguageStringData.fromObject(object.Name);
        }
        if (object.Description != null) {
            if (typeof object.Description !== "object")
                throw TypeError(".GunWeaponData.Description: object expected");
            message.Description = $root.LanguageStringData.fromObject(object.Description);
        }
        if (object.Type != null)
            message.Type = object.Type >>> 0;
        if (object.Modelstype != null)
            message.Modelstype = object.Modelstype >>> 0;
        if (object.Element != null)
            message.Element = object.Element >>> 0;
        if (object.ResCode != null)
            message.ResCode = String(object.ResCode);
        if (object.ResPath != null)
            message.ResPath = String(object.ResPath);
        if (object.Brand != null)
            message.Brand = String(object.Brand);
        if (object.Rank != null)
            message.Rank = object.Rank | 0;
        if (object.ElemenSkill != null)
            message.ElemenSkill = object.ElemenSkill >>> 0;
        if (object.Skill != null)
            message.Skill = object.Skill >>> 0;
        if (object.BuffSkill != null)
            message.BuffSkill = object.BuffSkill >>> 0;
        if (object.Slot) {
            if (!Array.isArray(object.Slot))
                throw TypeError(".GunWeaponData.Slot: array expected");
            message.Slot = [];
            for (var i = 0; i < object.Slot.length; ++i)
                message.Slot[i] = object.Slot[i] >>> 0;
        }
        if (object.ExpRate != null)
            message.ExpRate = object.ExpRate >>> 0;
        if (object.WeaponOfferExp != null)
            message.WeaponOfferExp = object.WeaponOfferExp >>> 0;
        if (object.WeaponNeedCash != null)
            message.WeaponNeedCash = object.WeaponNeedCash >>> 0;
        if (object.DefaultMaxlv != null)
            message.DefaultMaxlv = object.DefaultMaxlv >>> 0;
        if (object.MaxBreak != null)
            message.MaxBreak = object.MaxBreak >>> 0;
        if (object.SoldDrop) {
            if (!Array.isArray(object.SoldDrop))
                throw TypeError(".GunWeaponData.SoldDrop: array expected");
            message.SoldDrop = [];
            for (var i = 0; i < object.SoldDrop.length; ++i)
                message.SoldDrop[i] = object.SoldDrop[i] >>> 0;
        }
        if (object.SoldGet) {
            if (typeof object.SoldGet !== "object")
                throw TypeError(".GunWeaponData.SoldGet: object expected");
            message.SoldGet = {};
            for (var keys = Object.keys(object.SoldGet), i = 0; i < keys.length; ++i)
                message.SoldGet[keys[i]] = object.SoldGet[keys[i]] >>> 0;
        }
        if (object.PropertyId != null)
            message.PropertyId = object.PropertyId >>> 0;
        if (object.UnlockCost) {
            if (typeof object.UnlockCost !== "object")
                throw TypeError(".GunWeaponData.UnlockCost: object expected");
            message.UnlockCost = {};
            for (var keys = Object.keys(object.UnlockCost), i = 0; i < keys.length; ++i)
                message.UnlockCost[keys[i]] = object.UnlockCost[keys[i]] >>> 0;
        }
        if (object.PrivateSkill != null)
            message.PrivateSkill = object.PrivateSkill >>> 0;
        if (object.CapacityMax != null)
            message.CapacityMax = object.CapacityMax >>> 0;
        if (object.WeaponPolarityId != null)
            message.WeaponPolarityId = object.WeaponPolarityId >>> 0;
        if (object.PolarityCostRandom) {
            if (typeof object.PolarityCostRandom !== "object")
                throw TypeError(".GunWeaponData.PolarityCostRandom: object expected");
            message.PolarityCostRandom = {};
            for (var keys = Object.keys(object.PolarityCostRandom), i = 0; i < keys.length; ++i)
                message.PolarityCostRandom[keys[i]] = object.PolarityCostRandom[keys[i]] >>> 0;
        }
        if (object.PolarityCostCustom) {
            if (typeof object.PolarityCostCustom !== "object")
                throw TypeError(".GunWeaponData.PolarityCostCustom: object expected");
            message.PolarityCostCustom = {};
            for (var keys = Object.keys(object.PolarityCostCustom), i = 0; i < keys.length; ++i)
                message.PolarityCostCustom[keys[i]] = object.PolarityCostCustom[keys[i]] >>> 0;
        }
        if (object.AdvanceWeapon) {
            if (!Array.isArray(object.AdvanceWeapon))
                throw TypeError(".GunWeaponData.AdvanceWeapon: array expected");
            message.AdvanceWeapon = [];
            for (var i = 0; i < object.AdvanceWeapon.length; ++i)
                message.AdvanceWeapon[i] = object.AdvanceWeapon[i] >>> 0;
        }
        if (object.CharacterId != null)
            message.CharacterId = object.CharacterId >>> 0;
        if (object.ModNum != null)
            message.ModNum = object.ModNum >>> 0;
        if (object.ModTypeGroup) {
            if (!Array.isArray(object.ModTypeGroup))
                throw TypeError(".GunWeaponData.ModTypeGroup: array expected");
            message.ModTypeGroup = [];
            for (var i = 0; i < object.ModTypeGroup.length; ++i)
                message.ModTypeGroup[i] = object.ModTypeGroup[i] >>> 0;
        }
        if (object.IsHide != null)
            message.IsHide = Boolean(object.IsHide);
        if (object.Audio != null)
            message.Audio = object.Audio >>> 0;
        if (object.WeaponTag != null)
            message.WeaponTag = object.WeaponTag | 0;
        if (object.AttackType != null)
            message.AttackType = object.AttackType >>> 0;
        if (object.WeaponSkill) {
            if (!Array.isArray(object.WeaponSkill))
                throw TypeError(".GunWeaponData.WeaponSkill: array expected");
            message.WeaponSkill = [];
            for (var i = 0; i < object.WeaponSkill.length; ++i)
                message.WeaponSkill[i] = object.WeaponSkill[i] >>> 0;
        }
        return message;
    };

    /**
     * Creates a plain object from a GunWeaponData message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GunWeaponData
     * @static
     * @param {GunWeaponData} message GunWeaponData
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GunWeaponData.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults) {
            object.Slot = [];
            object.SoldDrop = [];
            object.AdvanceWeapon = [];
            object.ModTypeGroup = [];
            object.WeaponSkill = [];
        }
        if (options.objects || options.defaults) {
            object.SoldGet = {};
            object.UnlockCost = {};
            object.PolarityCostRandom = {};
            object.PolarityCostCustom = {};
        }
        if (options.defaults) {
            object.Id = 0;
            object.Name = null;
            object.Description = null;
            object.Type = 0;
            object.Modelstype = 0;
            object.Element = 0;
            object.ResCode = "";
            object.ResPath = "";
            object.Brand = "";
            object.Rank = 0;
            object.ElemenSkill = 0;
            object.Skill = 0;
            object.BuffSkill = 0;
            object.ExpRate = 0;
            object.WeaponOfferExp = 0;
            object.WeaponNeedCash = 0;
            object.DefaultMaxlv = 0;
            object.MaxBreak = 0;
            object.PropertyId = 0;
            object.PrivateSkill = 0;
            object.CapacityMax = 0;
            object.WeaponPolarityId = 0;
            object.CharacterId = 0;
            object.ModNum = 0;
            object.IsHide = false;
            object.Audio = 0;
            object.WeaponTag = 0;
            object.AttackType = 0;
        }
        if (message.Id != null && message.hasOwnProperty("Id"))
            object.Id = message.Id;
        if (message.Name != null && message.hasOwnProperty("Name"))
            object.Name = $root.LanguageStringData.toObject(message.Name, options);
        if (message.Description != null && message.hasOwnProperty("Description"))
            object.Description = $root.LanguageStringData.toObject(message.Description, options);
        if (message.Type != null && message.hasOwnProperty("Type"))
            object.Type = message.Type;
        if (message.Modelstype != null && message.hasOwnProperty("Modelstype"))
            object.Modelstype = message.Modelstype;
        if (message.Element != null && message.hasOwnProperty("Element"))
            object.Element = message.Element;
        if (message.ResCode != null && message.hasOwnProperty("ResCode"))
            object.ResCode = message.ResCode;
        if (message.ResPath != null && message.hasOwnProperty("ResPath"))
            object.ResPath = message.ResPath;
        if (message.Brand != null && message.hasOwnProperty("Brand"))
            object.Brand = message.Brand;
        if (message.Rank != null && message.hasOwnProperty("Rank"))
            object.Rank = message.Rank;
        if (message.ElemenSkill != null && message.hasOwnProperty("ElemenSkill"))
            object.ElemenSkill = message.ElemenSkill;
        if (message.Skill != null && message.hasOwnProperty("Skill"))
            object.Skill = message.Skill;
        if (message.BuffSkill != null && message.hasOwnProperty("BuffSkill"))
            object.BuffSkill = message.BuffSkill;
        if (message.Slot && message.Slot.length) {
            object.Slot = [];
            for (var j = 0; j < message.Slot.length; ++j)
                object.Slot[j] = message.Slot[j];
        }
        if (message.ExpRate != null && message.hasOwnProperty("ExpRate"))
            object.ExpRate = message.ExpRate;
        if (message.WeaponOfferExp != null && message.hasOwnProperty("WeaponOfferExp"))
            object.WeaponOfferExp = message.WeaponOfferExp;
        if (message.WeaponNeedCash != null && message.hasOwnProperty("WeaponNeedCash"))
            object.WeaponNeedCash = message.WeaponNeedCash;
        if (message.DefaultMaxlv != null && message.hasOwnProperty("DefaultMaxlv"))
            object.DefaultMaxlv = message.DefaultMaxlv;
        if (message.MaxBreak != null && message.hasOwnProperty("MaxBreak"))
            object.MaxBreak = message.MaxBreak;
        if (message.SoldDrop && message.SoldDrop.length) {
            object.SoldDrop = [];
            for (var j = 0; j < message.SoldDrop.length; ++j)
                object.SoldDrop[j] = message.SoldDrop[j];
        }
        var keys2;
        if (message.SoldGet && (keys2 = Object.keys(message.SoldGet)).length) {
            object.SoldGet = {};
            for (var j = 0; j < keys2.length; ++j)
                object.SoldGet[keys2[j]] = message.SoldGet[keys2[j]];
        }
        if (message.PropertyId != null && message.hasOwnProperty("PropertyId"))
            object.PropertyId = message.PropertyId;
        if (message.UnlockCost && (keys2 = Object.keys(message.UnlockCost)).length) {
            object.UnlockCost = {};
            for (var j = 0; j < keys2.length; ++j)
                object.UnlockCost[keys2[j]] = message.UnlockCost[keys2[j]];
        }
        if (message.PrivateSkill != null && message.hasOwnProperty("PrivateSkill"))
            object.PrivateSkill = message.PrivateSkill;
        if (message.CapacityMax != null && message.hasOwnProperty("CapacityMax"))
            object.CapacityMax = message.CapacityMax;
        if (message.WeaponPolarityId != null && message.hasOwnProperty("WeaponPolarityId"))
            object.WeaponPolarityId = message.WeaponPolarityId;
        if (message.PolarityCostRandom && (keys2 = Object.keys(message.PolarityCostRandom)).length) {
            object.PolarityCostRandom = {};
            for (var j = 0; j < keys2.length; ++j)
                object.PolarityCostRandom[keys2[j]] = message.PolarityCostRandom[keys2[j]];
        }
        if (message.PolarityCostCustom && (keys2 = Object.keys(message.PolarityCostCustom)).length) {
            object.PolarityCostCustom = {};
            for (var j = 0; j < keys2.length; ++j)
                object.PolarityCostCustom[keys2[j]] = message.PolarityCostCustom[keys2[j]];
        }
        if (message.AdvanceWeapon && message.AdvanceWeapon.length) {
            object.AdvanceWeapon = [];
            for (var j = 0; j < message.AdvanceWeapon.length; ++j)
                object.AdvanceWeapon[j] = message.AdvanceWeapon[j];
        }
        if (message.CharacterId != null && message.hasOwnProperty("CharacterId"))
            object.CharacterId = message.CharacterId;
        if (message.ModNum != null && message.hasOwnProperty("ModNum"))
            object.ModNum = message.ModNum;
        if (message.ModTypeGroup && message.ModTypeGroup.length) {
            object.ModTypeGroup = [];
            for (var j = 0; j < message.ModTypeGroup.length; ++j)
                object.ModTypeGroup[j] = message.ModTypeGroup[j];
        }
        if (message.IsHide != null && message.hasOwnProperty("IsHide"))
            object.IsHide = message.IsHide;
        if (message.Audio != null && message.hasOwnProperty("Audio"))
            object.Audio = message.Audio;
        if (message.WeaponTag != null && message.hasOwnProperty("WeaponTag"))
            object.WeaponTag = message.WeaponTag;
        if (message.AttackType != null && message.hasOwnProperty("AttackType"))
            object.AttackType = message.AttackType;
        if (message.WeaponSkill && message.WeaponSkill.length) {
            object.WeaponSkill = [];
            for (var j = 0; j < message.WeaponSkill.length; ++j)
                object.WeaponSkill[j] = message.WeaponSkill[j];
        }
        return object;
    };

    /**
     * Converts this GunWeaponData to JSON.
     * @function toJSON
     * @memberof GunWeaponData
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GunWeaponData.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for GunWeaponData
     * @function getTypeUrl
     * @memberof GunWeaponData
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    GunWeaponData.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/GunWeaponData";
    };

    return GunWeaponData;
})();

module.exports = $root;
