"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tag_identifiers_1 = __importDefault(require("../tag_identifiers"));
const byte_array_tag_1 = __importDefault(require("../tag/byte_array_tag"));
const byte_tag_1 = __importDefault(require("../tag/byte_tag"));
const compound_tag_1 = __importDefault(require("../tag/compound_tag"));
const double_tag_1 = __importDefault(require("../tag/double_tag"));
const end_tag_1 = __importDefault(require("../tag/end_tag"));
const float_tag_1 = __importDefault(require("../tag/float_tag"));
const int_array_tag_1 = __importDefault(require("../tag/int_array_tag"));
const int_tag_1 = __importDefault(require("../tag/int_tag"));
const list_tag_1 = __importDefault(require("../tag/list_tag"));
const long_array_tag_1 = __importDefault(require("../tag/long_array_tag"));
const long_tag_1 = __importDefault(require("../tag/long_tag"));
const short_tag_1 = __importDefault(require("../tag/short_tag"));
const string_tag_1 = __importDefault(require("../tag/string_tag"));
class Nbt {
    static new_tag(tag_id) {
        if (tag_id === tag_identifiers_1.default.END_TAG) {
            return new end_tag_1.default();
        }
        if (tag_id === tag_identifiers_1.default.BYTE_TAG) {
            return new byte_tag_1.default();
        }
        if (tag_id === tag_identifiers_1.default.SHORT_TAG) {
            return new short_tag_1.default();
        }
        if (tag_id === tag_identifiers_1.default.INT_TAG) {
            return new int_tag_1.default();
        }
        if (tag_id === tag_identifiers_1.default.LONG_TAG) {
            return new long_tag_1.default();
        }
        if (tag_id === tag_identifiers_1.default.FLOAT_TAG) {
            return new float_tag_1.default();
        }
        if (tag_id === tag_identifiers_1.default.DOUBLE_TAG) {
            return new double_tag_1.default();
        }
        if (tag_id === tag_identifiers_1.default.BYTE_ARRAY_TAG) {
            return new byte_array_tag_1.default();
        }
        if (tag_id === tag_identifiers_1.default.STRING_TAG) {
            return new string_tag_1.default();
        }
        if (tag_id === tag_identifiers_1.default.LIST_TAG) {
            return new list_tag_1.default();
        }
        if (tag_id === tag_identifiers_1.default.COMPOUND_TAG) {
            return new compound_tag_1.default();
        }
        if (tag_id === tag_identifiers_1.default.INT_ARRAY_TAG) {
            return new int_array_tag_1.default();
        }
        if (tag_id === tag_identifiers_1.default.LONG_ARRAY_TAG) {
            return new long_array_tag_1.default();
        }
    }
}
exports.default = Nbt;
//# sourceMappingURL=nbt.js.map