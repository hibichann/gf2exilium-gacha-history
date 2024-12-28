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
     * @property {number|null} [Rank] GunData Rank
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
     * GunData Rank.
     * @member {number} Rank
     * @memberof GunData
     * @instance
     */
    GunData.prototype.Rank = 0;

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
        if (message.Rank != null && Object.hasOwnProperty.call(message, "Rank"))
            writer.uint32(/* id 15, wireType 0 =*/120).int32(message.Rank);
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
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GunData();
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
            case 15: {
                    message.Rank = reader.int32();
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
        if (message.Rank != null && message.hasOwnProperty("Rank"))
            if (!$util.isInteger(message.Rank))
                return "Rank: integer expected";
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
        if (object.Rank != null)
            message.Rank = object.Rank | 0;
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
        if (options.defaults) {
            object.Id = 0;
            object.Name = null;
            object.Rank = 0;
        }
        if (message.Id != null && message.hasOwnProperty("Id"))
            object.Id = message.Id;
        if (message.Name != null && message.hasOwnProperty("Name"))
            object.Name = $root.LanguageStringData.toObject(message.Name, options);
        if (message.Rank != null && message.hasOwnProperty("Rank"))
            object.Rank = message.Rank;
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
     * @property {number|null} [Rank] GunWeaponData Rank
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
     * GunWeaponData Rank.
     * @member {number} Rank
     * @memberof GunWeaponData
     * @instance
     */
    GunWeaponData.prototype.Rank = 0;

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
        if (message.Rank != null && Object.hasOwnProperty.call(message, "Rank"))
            writer.uint32(/* id 11, wireType 0 =*/88).int32(message.Rank);
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
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GunWeaponData();
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
            case 11: {
                    message.Rank = reader.int32();
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
        if (message.Rank != null && message.hasOwnProperty("Rank"))
            if (!$util.isInteger(message.Rank))
                return "Rank: integer expected";
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
        if (object.Rank != null)
            message.Rank = object.Rank | 0;
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
        if (options.defaults) {
            object.Id = 0;
            object.Name = null;
            object.Description = null;
            object.Rank = 0;
        }
        if (message.Id != null && message.hasOwnProperty("Id"))
            object.Id = message.Id;
        if (message.Name != null && message.hasOwnProperty("Name"))
            object.Name = $root.LanguageStringData.toObject(message.Name, options);
        if (message.Description != null && message.hasOwnProperty("Description"))
            object.Description = $root.LanguageStringData.toObject(message.Description, options);
        if (message.Rank != null && message.hasOwnProperty("Rank"))
            object.Rank = message.Rank;
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
