'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_wepy$page) {
    _inherits(Home, _wepy$page);

    function Home() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Home);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Home.__proto__ || Object.getPrototypeOf(Home)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
            navigationBarTitleText: '我的'
        }, _this.components = {}, _this.data = {
            list: [],
            cartImg: '../images/cart.png',
            msgList: [{ url: "url", title: "一次性购物满1000元以上，市区能免费送货上门，购买2000元以上打98折，具体请咨询客服" }, { url: "url", title: "一次性购物满1000元以上，市区能免费送货上门，购买2000元以上打98折，具体请咨询客服" }, { url: "url", title: "一次性购物满1000元以上，市区能免费送货上门，购买2000元以上打98折，具体请咨询客服" }]
        }, _this.computed = {}, _this.methods = {}, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Home, [{
        key: 'onReachBottom',
        value: function onReachBottom() {}
    }, {
        key: 'onLoad',
        value: function onLoad() {
            this.list = [];
            for (var i = 0; i < 20; i++) {
                this.list.push({
                    id: 2,
                    thumLogo: '../images/goods02.png',
                    name: 'sfsf',
                    price: '234',
                    marketPrice: '234',
                    saleCount: '23'
                });
            }
        }
    }]);

    return Home;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Home , 'pages/home'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuanMiXSwibmFtZXMiOlsiSG9tZSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJjb21wb25lbnRzIiwiZGF0YSIsImxpc3QiLCJjYXJ0SW1nIiwibXNnTGlzdCIsInVybCIsInRpdGxlIiwiY29tcHV0ZWQiLCJtZXRob2RzIiwiZXZlbnRzIiwiaSIsInB1c2giLCJpZCIsInRodW1Mb2dvIiwibmFtZSIsInByaWNlIiwibWFya2V0UHJpY2UiLCJzYWxlQ291bnQiLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7Ozs7Ozs7OztJQUVxQkEsSTs7Ozs7Ozs7Ozs7Ozs7c0xBQ25CQyxNLEdBQVM7QUFDUEMsb0NBQXdCO0FBRGpCLFMsUUFHVEMsVSxHQUFhLEUsUUFJYkMsSSxHQUFPO0FBQ0xDLGtCQUFLLEVBREE7QUFJTEMscUJBQVEsb0JBSkg7QUFLTEMscUJBQVMsQ0FDUCxFQUFFQyxLQUFLLEtBQVAsRUFBY0MsT0FBTywrQ0FBckIsRUFETyxFQUVQLEVBQUVELEtBQUssS0FBUCxFQUFjQyxPQUFPLCtDQUFyQixFQUZPLEVBR1AsRUFBRUQsS0FBSyxLQUFQLEVBQWNDLE9BQU8sK0NBQXJCLEVBSE87QUFMSixTLFFBWVBDLFEsR0FBVyxFLFFBSVhDLE8sR0FBVSxFLFFBSVZDLE0sR0FBUyxFOzs7Ozt3Q0FHTyxDQUVmOzs7aUNBQ1E7QUFDTixpQkFBS1AsSUFBTCxHQUFZLEVBQVo7QUFDQyxpQkFBSyxJQUFJUSxJQUFJLENBQWIsRUFBZ0JBLElBQUksRUFBcEIsRUFBd0JBLEdBQXhCLEVBQTZCO0FBQ3pCLHFCQUFLUixJQUFMLENBQVVTLElBQVYsQ0FBZ0I7QUFDWkMsd0JBQUcsQ0FEUztBQUVaQyw4QkFBUyx1QkFGRztBQUdaQywwQkFBSyxNQUhPO0FBSVpDLDJCQUFNLEtBSk07QUFLWkMsaUNBQVksS0FMQTtBQU1aQywrQkFBVTtBQU5FLGlCQUFoQjtBQVFIO0FBQ0o7Ozs7RUE5QytCQyxlQUFLQyxJOztrQkFBbEJ0QixJIiwiZmlsZSI6ImhvbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG5cclxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBIb21lIGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICAgIGNvbmZpZyA9IHtcclxuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+aIkeeahCdcclxuICAgIH07XHJcbiAgICBjb21wb25lbnRzID0ge1xyXG4gICAgIFxyXG4gICAgfTtcclxuXHJcbiAgICBkYXRhID0ge1xyXG4gICAgICBsaXN0OltcclxuXHJcbiAgICAgIF0sXHJcbiAgICAgIGNhcnRJbWc6Jy4uL2ltYWdlcy9jYXJ0LnBuZycsXHJcbiAgICAgIG1zZ0xpc3Q6IFtcclxuICAgICAgICB7IHVybDogXCJ1cmxcIiwgdGl0bGU6IFwi5LiA5qyh5oCn6LSt54mp5ruhMTAwMOWFg+S7peS4iu+8jOW4guWMuuiDveWFjei0uemAgei0p+S4iumXqO+8jOi0reS5sDIwMDDlhYPku6XkuIrmiZM5OOaKmO+8jOWFt+S9k+ivt+WSqOivouWuouacjVwiIH0sXHJcbiAgICAgICAgeyB1cmw6IFwidXJsXCIsIHRpdGxlOiBcIuS4gOasoeaAp+i0reeJqea7oTEwMDDlhYPku6XkuIrvvIzluILljLrog73lhY3otLnpgIHotKfkuIrpl6jvvIzotK3kubAyMDAw5YWD5Lul5LiK5omTOTjmipjvvIzlhbfkvZPor7flkqjor6LlrqLmnI1cIiB9LFxyXG4gICAgICAgIHsgdXJsOiBcInVybFwiLCB0aXRsZTogXCLkuIDmrKHmgKfotK3nianmu6ExMDAw5YWD5Lul5LiK77yM5biC5Yy66IO95YWN6LS56YCB6LSn5LiK6Zeo77yM6LSt5LmwMjAwMOWFg+S7peS4iuaJkzk45oqY77yM5YW35L2T6K+35ZKo6K+i5a6i5pyNXCIgfVxyXG4gICAgICBdXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbXB1dGVkID0ge1xyXG4gICAgICAgIFxyXG4gICAgfTtcclxuXHJcbiAgICBtZXRob2RzID0ge1xyXG4gICAgICAgXHJcbiAgICB9O1xyXG5cclxuICAgIGV2ZW50cyA9IHtcclxuICAgICBcclxuICAgIH07XHJcbiAgICBvblJlYWNoQm90dG9tKCkge1xyXG4gICAgICAgXHJcbiAgICB9O1xyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgdGhpcy5saXN0ID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCAyMDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMubGlzdC5wdXNoKCB7XHJcbiAgICAgICAgICAgICAgICBpZDoyLFxyXG4gICAgICAgICAgICAgICAgdGh1bUxvZ286Jy4uL2ltYWdlcy9nb29kczAyLnBuZycsXHJcbiAgICAgICAgICAgICAgICBuYW1lOidzZnNmJyxcclxuICAgICAgICAgICAgICAgIHByaWNlOicyMzQnLFxyXG4gICAgICAgICAgICAgICAgbWFya2V0UHJpY2U6JzIzNCcsXHJcbiAgICAgICAgICAgICAgICBzYWxlQ291bnQ6JzIzJ1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4iXX0=