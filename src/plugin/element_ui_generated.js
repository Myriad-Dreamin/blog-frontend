/* generated file, DO NOT EDIT!! */
import {Button, Card, Col, Divider, Drawer, Form, FormItem, Input, Row} from 'element-ui';
import 'element-ui/lib/theme-chalk/button.css';
import 'element-ui/lib/theme-chalk/card.css';
import 'element-ui/lib/theme-chalk/col.css';
import 'element-ui/lib/theme-chalk/date-picker.css';
import 'element-ui/lib/theme-chalk/divider.css';
import 'element-ui/lib/theme-chalk/drawer.css';
import 'element-ui/lib/theme-chalk/form.css';
import 'element-ui/lib/theme-chalk/form-item.css';
import 'element-ui/lib/theme-chalk/input.css';
import 'element-ui/lib/theme-chalk/row.css';
import 'element-ui/lib/theme-chalk/time-picker.css';

function UseElElements(Vue) {
    Vue.use(Button);
    Vue.use(Card);
    Vue.use(Col);
    Vue.component('el-date-picker', () => import(/* webpackChunkName: 'el-date-picker' */ 'element-ui/lib/date-picker'));
    Vue.use(Divider);
    Vue.use(Drawer);
    Vue.use(Form);
    Vue.use(FormItem);
    Vue.use(Input);
    Vue.use(Row);
    Vue.component('el-time-picker', () => import(/* webpackChunkName: 'el-time-picker' */ 'element-ui/lib/time-picker'));
}

export default UseElElements;

