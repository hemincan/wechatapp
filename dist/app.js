'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

require('./npm/wepy-async-function/index.js');

var _wepyRedux = require('./npm/wepy-redux/lib/index.js');

var _store = require('./store/index.js');

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var store = (0, _store2.default)();
(0, _wepyRedux.setStore)(store);

var _default = function (_wepy$app) {
  _inherits(_default, _wepy$app);

  function _default() {
    _classCallCheck(this, _default);

    var _this = _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this));

    _this.config = {
      pages: ['pages/home', 'pages/index', 'pages/mallList', 'pages/my', 'pages/goodsDetails', 'pages/allGoods'],
      window: {
        "enablePullDownRefresh": true,
        backgroundTextStyle: 'light',
        navigationBarBackgroundColor: '#fff',
        navigationBarTitleText: 'WeChat',
        navigationBarTextStyle: 'black'
      },
      tabBar: {
        "color": "#6e6d6b",
        "selectedColor": "#e64340",
        "borderStyle": "white",
        "backgroundColor": "#fff",
        "box-shadow": "0 0 6px 0",
        "list": [{
          "pagePath": "pages/home",
          "iconPath": "images/nav/home-off.png",
          "selectedIconPath": "images/nav/home-on.png",
          "text": "首页"
        }, {
          "pagePath": "pages/allGoods",
          "iconPath": "images/nav/cart-off.png",
          "selectedIconPath": "images/nav/cart-on.png",
          "text": "全部商品"
        }, {
          "pagePath": "pages/mallList",
          "iconPath": "images/nav/cart-off.png",
          "selectedIconPath": "images/nav/cart-on.png",
          "text": "购物车"
        }, {
          "pagePath": "pages/my",
          "iconPath": "images/nav/my-off.png",
          "selectedIconPath": "images/nav/my-on.png",
          "text": "我的"
        }]
      }
    };
    _this.globalData = {
      userInfo: null
    };

    _this.use('requestfix');
    return _this;
  }

  _createClass(_default, [{
    key: 'onLaunch',
    value: function onLaunch() {
      this.testAsync();
    }
  }, {
    key: 'sleep',
    value: function sleep(s) {
      return new Promise(function (resolve, reject) {
        setTimeout(function () {
          resolve('promise resolved');
        }, s * 1000);
      });
    }
  }, {
    key: 'testAsync',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var data;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.sleep(3);

              case 2:
                data = _context.sent;

                console.log(data);

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function testAsync() {
        return _ref.apply(this, arguments);
      }

      return testAsync;
    }()
  }, {
    key: 'getUserInfo',
    value: function getUserInfo(cb) {
      var that = this;
      if (this.globalData.userInfo) {
        return this.globalData.userInfo;
      }
      _wepy2.default.getUserInfo({
        success: function success(res) {
          that.globalData.userInfo = res.userInfo;
          cb && cb(res.userInfo);
        }
      });
    }
  }]);

  return _default;
}(_wepy2.default.app);


App(require('./npm/wepy/lib/wepy.js').default.$createApp(_default, {"noPromiseAPI":["createSelectorQuery"]}));
require('./_wepylogs.js')

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJzdG9yZSIsImNvbmZpZyIsInBhZ2VzIiwid2luZG93IiwiYmFja2dyb3VuZFRleHRTdHlsZSIsIm5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3IiLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwibmF2aWdhdGlvbkJhclRleHRTdHlsZSIsInRhYkJhciIsImdsb2JhbERhdGEiLCJ1c2VySW5mbyIsInVzZSIsInRlc3RBc3luYyIsInMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInNldFRpbWVvdXQiLCJzbGVlcCIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiY2IiLCJ0aGF0Iiwid2VweSIsImdldFVzZXJJbmZvIiwic3VjY2VzcyIsInJlcyIsImFwcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7QUFFQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxRQUFRLHNCQUFkO0FBQ0EseUJBQVNBLEtBQVQ7Ozs7O0FBd0RFLHNCQUFlO0FBQUE7O0FBQUE7O0FBQUEsVUFyRGZDLE1BcURlLEdBckROO0FBQ1BDLGFBQU8sQ0FDTCxZQURLLEVBRUwsYUFGSyxFQUdMLGdCQUhLLEVBSUwsVUFKSyxFQUtMLG9CQUxLLEVBTUwsZ0JBTkssQ0FEQTtBQVNQQyxjQUFRO0FBQ04saUNBQXlCLElBRG5CO0FBRU5DLDZCQUFxQixPQUZmO0FBR05DLHNDQUE4QixNQUh4QjtBQUlOQyxnQ0FBd0IsUUFKbEI7QUFLTkMsZ0NBQXdCO0FBTGxCLE9BVEQ7QUFnQlBDLGNBQVE7QUFDSixpQkFBUyxTQURMO0FBRUoseUJBQWlCLFNBRmI7QUFHSix1QkFBZSxPQUhYO0FBSUosMkJBQW1CLE1BSmY7QUFLSixzQkFBYSxXQUxUO0FBTUosZ0JBQVEsQ0FBQztBQUNSLHNCQUFZLFlBREo7QUFFUCxzQkFBWSx5QkFGTDtBQUdQLDhCQUFvQix3QkFIYjtBQUlQLGtCQUFRO0FBSkQsU0FBRCxFQU1QO0FBQ0Msc0JBQVksZ0JBRGI7QUFFQyxzQkFBWSx5QkFGYjtBQUdDLDhCQUFvQix3QkFIckI7QUFJQyxrQkFBUTtBQUpULFNBTk8sRUFZUjtBQUNFLHNCQUFZLGdCQURkO0FBRUUsc0JBQVkseUJBRmQ7QUFHRSw4QkFBb0Isd0JBSHRCO0FBSUUsa0JBQVE7QUFKVixTQVpRLEVBa0JSO0FBQ0Usc0JBQVksVUFEZDtBQUVFLHNCQUFZLHVCQUZkO0FBR0UsOEJBQW9CLHNCQUh0QjtBQUlFLGtCQUFRO0FBSlYsU0FsQlE7QUFOSjtBQWhCRCxLQXFETTtBQUFBLFVBSmZDLFVBSWUsR0FKRjtBQUNYQyxnQkFBVTtBQURDLEtBSUU7O0FBRWIsVUFBS0MsR0FBTCxDQUFTLFlBQVQ7QUFGYTtBQUdkOzs7OytCQUVVO0FBQ1QsV0FBS0MsU0FBTDtBQUNEOzs7MEJBRU1DLEMsRUFBRztBQUNSLGFBQU8sSUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUN0Q0MsbUJBQVcsWUFBTTtBQUNmRixrQkFBUSxrQkFBUjtBQUNELFNBRkQsRUFFR0YsSUFBSSxJQUZQO0FBR0QsT0FKTSxDQUFQO0FBS0Q7Ozs7Ozs7Ozs7O3VCQUdvQixLQUFLSyxLQUFMLENBQVcsQ0FBWCxDOzs7QUFBYkMsb0I7O0FBQ05DLHdCQUFRQyxHQUFSLENBQVlGLElBQVo7Ozs7Ozs7Ozs7Ozs7Ozs7OztnQ0FHVUcsRSxFQUFJO0FBQ2QsVUFBTUMsT0FBTyxJQUFiO0FBQ0EsVUFBSSxLQUFLZCxVQUFMLENBQWdCQyxRQUFwQixFQUE4QjtBQUM1QixlQUFPLEtBQUtELFVBQUwsQ0FBZ0JDLFFBQXZCO0FBQ0Q7QUFDRGMscUJBQUtDLFdBQUwsQ0FBaUI7QUFDZkMsZUFEZSxtQkFDTkMsR0FETSxFQUNEO0FBQ1pKLGVBQUtkLFVBQUwsQ0FBZ0JDLFFBQWhCLEdBQTJCaUIsSUFBSWpCLFFBQS9CO0FBQ0FZLGdCQUFNQSxHQUFHSyxJQUFJakIsUUFBUCxDQUFOO0FBQ0Q7QUFKYyxPQUFqQjtBQU1EOzs7O0VBdkYwQmMsZUFBS0ksRyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuaW1wb3J0ICd3ZXB5LWFzeW5jLWZ1bmN0aW9uJ1xyXG5cclxuaW1wb3J0IHsgc2V0U3RvcmUgfSBmcm9tICd3ZXB5LXJlZHV4J1xyXG5pbXBvcnQgY29uZmlnU3RvcmUgZnJvbSAnLi9zdG9yZSdcclxuXHJcbmNvbnN0IHN0b3JlID0gY29uZmlnU3RvcmUoKVxyXG5zZXRTdG9yZShzdG9yZSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgd2VweS5hcHAge1xyXG4gIGNvbmZpZyA9IHtcclxuICAgIHBhZ2VzOiBbXHJcbiAgICAgICdwYWdlcy9ob21lJyxcclxuICAgICAgJ3BhZ2VzL2luZGV4JyxcclxuICAgICAgJ3BhZ2VzL21hbGxMaXN0JyxcclxuICAgICAgJ3BhZ2VzL215JyxcclxuICAgICAgJ3BhZ2VzL2dvb2RzRGV0YWlscycsXHJcbiAgICAgICdwYWdlcy9hbGxHb29kcydcclxuICAgIF0sXHJcbiAgICB3aW5kb3c6IHtcclxuICAgICAgXCJlbmFibGVQdWxsRG93blJlZnJlc2hcIjogdHJ1ZSxcclxuICAgICAgYmFja2dyb3VuZFRleHRTdHlsZTogJ2xpZ2h0JyxcclxuICAgICAgbmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvcjogJyNmZmYnLFxyXG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAnV2VDaGF0JyxcclxuICAgICAgbmF2aWdhdGlvbkJhclRleHRTdHlsZTogJ2JsYWNrJ1xyXG4gICAgfSxcclxuICAgIHRhYkJhcjoge1xyXG4gICAgICAgIFwiY29sb3JcIjogXCIjNmU2ZDZiXCIsXHJcbiAgICAgICAgXCJzZWxlY3RlZENvbG9yXCI6IFwiI2U2NDM0MFwiLFxyXG4gICAgICAgIFwiYm9yZGVyU3R5bGVcIjogXCJ3aGl0ZVwiLFxyXG4gICAgICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2ZmZlwiLFxyXG4gICAgICAgIFwiYm94LXNoYWRvd1wiOlwiMCAwIDZweCAwXCIsXHJcbiAgICAgICAgXCJsaXN0XCI6IFt7XHJcbiAgICAgICAgIFwicGFnZVBhdGhcIjogXCJwYWdlcy9ob21lXCIsXHJcbiAgICAgICAgICBcImljb25QYXRoXCI6IFwiaW1hZ2VzL25hdi9ob21lLW9mZi5wbmdcIixcclxuICAgICAgICAgIFwic2VsZWN0ZWRJY29uUGF0aFwiOiBcImltYWdlcy9uYXYvaG9tZS1vbi5wbmdcIixcclxuICAgICAgICAgIFwidGV4dFwiOiBcIummlumhtVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICAge1xyXG4gICAgICAgICAgXCJwYWdlUGF0aFwiOiBcInBhZ2VzL2FsbEdvb2RzXCIsXHJcbiAgICAgICAgICBcImljb25QYXRoXCI6IFwiaW1hZ2VzL25hdi9jYXJ0LW9mZi5wbmdcIixcclxuICAgICAgICAgIFwic2VsZWN0ZWRJY29uUGF0aFwiOiBcImltYWdlcy9uYXYvY2FydC1vbi5wbmdcIixcclxuICAgICAgICAgIFwidGV4dFwiOiBcIuWFqOmDqOWVhuWTgVwiXHJcbiAgICAgICAgfSwgXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgXCJwYWdlUGF0aFwiOiBcInBhZ2VzL21hbGxMaXN0XCIsXHJcbiAgICAgICAgICBcImljb25QYXRoXCI6IFwiaW1hZ2VzL25hdi9jYXJ0LW9mZi5wbmdcIixcclxuICAgICAgICAgIFwic2VsZWN0ZWRJY29uUGF0aFwiOiBcImltYWdlcy9uYXYvY2FydC1vbi5wbmdcIixcclxuICAgICAgICAgIFwidGV4dFwiOiBcIui0reeJqei9plwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBcInBhZ2VQYXRoXCI6IFwicGFnZXMvbXlcIixcclxuICAgICAgICAgIFwiaWNvblBhdGhcIjogXCJpbWFnZXMvbmF2L215LW9mZi5wbmdcIixcclxuICAgICAgICAgIFwic2VsZWN0ZWRJY29uUGF0aFwiOiBcImltYWdlcy9uYXYvbXktb24ucG5nXCIsXHJcbiAgICAgICAgICBcInRleHRcIjogXCLmiJHnmoRcIlxyXG4gICAgICAgIH1dXHJcbiAgICAgIH1cclxuICB9XHJcblxyXG4gIGdsb2JhbERhdGEgPSB7XHJcbiAgICB1c2VySW5mbzogbnVsbFxyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IgKCkge1xyXG4gICAgc3VwZXIoKVxyXG4gICAgdGhpcy51c2UoJ3JlcXVlc3RmaXgnKVxyXG4gIH1cclxuXHJcbiAgb25MYXVuY2goKSB7XHJcbiAgICB0aGlzLnRlc3RBc3luYygpXHJcbiAgfVxyXG5cclxuICBzbGVlcCAocykge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgcmVzb2x2ZSgncHJvbWlzZSByZXNvbHZlZCcpXHJcbiAgICAgIH0sIHMgKiAxMDAwKVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGFzeW5jIHRlc3RBc3luYyAoKSB7XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgdGhpcy5zbGVlcCgzKVxyXG4gICAgY29uc29sZS5sb2coZGF0YSlcclxuICB9XHJcblxyXG4gIGdldFVzZXJJbmZvKGNiKSB7XHJcbiAgICBjb25zdCB0aGF0ID0gdGhpc1xyXG4gICAgaWYgKHRoaXMuZ2xvYmFsRGF0YS51c2VySW5mbykge1xyXG4gICAgICByZXR1cm4gdGhpcy5nbG9iYWxEYXRhLnVzZXJJbmZvXHJcbiAgICB9XHJcbiAgICB3ZXB5LmdldFVzZXJJbmZvKHtcclxuICAgICAgc3VjY2VzcyAocmVzKSB7XHJcbiAgICAgICAgdGhhdC5nbG9iYWxEYXRhLnVzZXJJbmZvID0gcmVzLnVzZXJJbmZvXHJcbiAgICAgICAgY2IgJiYgY2IocmVzLnVzZXJJbmZvKVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxufVxyXG4iXX0=