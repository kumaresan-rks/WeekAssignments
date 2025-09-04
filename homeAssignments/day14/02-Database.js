"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlaywrightConnection = void 0;
var PlaywrightConnection = /** @class */ (function () {
    function PlaywrightConnection() {
    }
    PlaywrightConnection.prototype.connect = function () {
        console.log(" Connected to Database.");
    };
    PlaywrightConnection.prototype.disconnect = function () {
        console.log(" Disconnected from  Database.");
    };
    PlaywrightConnection.prototype.executeUpdate = function (query) {
        console.log(" Executing query: ".concat(query));
        console.log(" Query successfully.");
    };
    return PlaywrightConnection;
}());
exports.PlaywrightConnection = PlaywrightConnection;
var db = new PlaywrightConnection();
db.connect();
db.executeUpdate("INSERT INTO users (id, name) VALUES (1, 'Kumaresan')");
db.disconnect();
