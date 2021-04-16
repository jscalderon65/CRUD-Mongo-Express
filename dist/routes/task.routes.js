"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _database = require("../database");

var _mongodb = require("mongodb");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var router = (0, _express.Router)();
router.get("/", /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var db, result;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _database.connect)();

          case 2:
            db = _context.sent;
            _context.next = 5;
            return db.collection("task").find({}).toArray();

          case 5:
            result = _context.sent;
            res.json(result);

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
router.get("/:id", /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var id, db, result;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            id = req.params.id;
            _context2.next = 3;
            return (0, _database.connect)();

          case 3:
            db = _context2.sent;
            _context2.next = 6;
            return db.collection("task").find({
              _id: (0, _mongodb.ObjectID)(id)
            }).toArray();

          case 6:
            result = _context2.sent;
            res.json(result);

          case 8:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}());
router["delete"]("/:id", /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var id, db, result;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            id = req.params.id;
            _context3.next = 3;
            return (0, _database.connect)();

          case 3:
            db = _context3.sent;
            _context3.next = 6;
            return db.collection("task").deleteOne({
              _id: (0, _mongodb.ObjectID)(id)
            });

          case 6:
            result = _context3.sent;
            res.json({
              message: "Task ".concat(id, " deleted"),
              result: result
            });

          case 8:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function (_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}());
router.post("/", /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var db, _req$body, title, description, result;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return (0, _database.connect)();

          case 3:
            db = _context4.sent;
            _req$body = req.body, title = _req$body.title, description = _req$body.description;

            if (!(title === undefined || description === undefined)) {
              _context4.next = 9;
              break;
            }

            throw new Error("Undefined params");

          case 9:
            _context4.next = 11;
            return db.collection("task").insertOne({
              title: title,
              description: description
            });

          case 11:
            result = _context4.sent;
            console.log(result);
            res.json(result.ops[0]);

          case 14:
            _context4.next = 20;
            break;

          case 16:
            _context4.prev = 16;
            _context4.t0 = _context4["catch"](0);
            console.log(_context4.t0);
            res.json({
              title: _context4.t0.name,
              error: _context4.t0.message
            });

          case 20:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 16]]);
  }));

  return function (_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}());
router.put("/:id", /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var id, db, _req$body2, title, description, result;

    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            id = req.params.id;
            _context5.next = 4;
            return (0, _database.connect)();

          case 4:
            db = _context5.sent;
            _req$body2 = req.body, title = _req$body2.title, description = _req$body2.description;

            if (!(title === undefined || description === undefined)) {
              _context5.next = 10;
              break;
            }

            throw new Error("Undefined params");

          case 10:
            _context5.next = 12;
            return db.collection("task").updateOne({
              _id: (0, _mongodb.ObjectID)(id)
            }, {
              $set: {
                title: title,
                description: description
              }
            });

          case 12:
            result = _context5.sent;
            console.log(result);
            res.json({
              message: "Task ".concat(id, " updated")
            });

          case 15:
            _context5.next = 21;
            break;

          case 17:
            _context5.prev = 17;
            _context5.t0 = _context5["catch"](0);
            console.log(_context5.t0);
            res.json({
              title: _context5.t0.name,
              error: _context5.t0.message
            });

          case 21:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 17]]);
  }));

  return function (_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}());
router.put("/:id/title", /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {
    var id, db, title, result;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            id = req.params.id;
            _context6.next = 4;
            return (0, _database.connect)();

          case 4:
            db = _context6.sent;
            title = req.body.title;

            if (!(title === undefined)) {
              _context6.next = 10;
              break;
            }

            throw new Error("Undefined params");

          case 10:
            _context6.next = 12;
            return db.collection("task").updateOne({
              _id: (0, _mongodb.ObjectID)(id)
            }, {
              $set: {
                title: title
              }
            });

          case 12:
            result = _context6.sent;
            console.log(result);
            res.json({
              message: "Title of Task ".concat(id, " updated")
            });

          case 15:
            _context6.next = 21;
            break;

          case 17:
            _context6.prev = 17;
            _context6.t0 = _context6["catch"](0);
            console.log(_context6.t0);
            res.json({
              title: _context6.t0.name,
              error: _context6.t0.message
            });

          case 21:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[0, 17]]);
  }));

  return function (_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}());
router.put("/:id/description", /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(req, res) {
    var id, db, description, result;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            id = req.params.id;
            _context7.next = 4;
            return (0, _database.connect)();

          case 4:
            db = _context7.sent;
            description = req.body.description;

            if (!(description === undefined)) {
              _context7.next = 10;
              break;
            }

            throw new Error("Undefined params");

          case 10:
            _context7.next = 12;
            return db.collection("task").updateOne({
              _id: (0, _mongodb.ObjectID)(id)
            }, {
              $set: {
                description: description
              }
            });

          case 12:
            result = _context7.sent;
            console.log(result);
            res.json({
              message: "Description of Task ".concat(id, " updated")
            });

          case 15:
            _context7.next = 21;
            break;

          case 17:
            _context7.prev = 17;
            _context7.t0 = _context7["catch"](0);
            console.log(_context7.t0);
            res.json({
              title: _context7.t0.name,
              error: _context7.t0.message
            });

          case 21:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, null, [[0, 17]]);
  }));

  return function (_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}());
var _default = router;
exports["default"] = _default;