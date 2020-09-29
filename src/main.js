import Vue from "vue";
import {
  Avatar,
  Comment,
  Tooltip,
  Icon,
  Form,
  Button,
  Input,
  List,
  Spin,
  Collapse,
  message
} from "ant-design-vue";
import App from "./App.vue";
import "ant-design-vue/dist/antd.css";

const { TextArea } = Input;

Vue.use(Avatar);
Vue.use(Comment);
Vue.use(Tooltip);
Vue.use(Icon);
Vue.use(Form);
Vue.use(Button);
Vue.use(Input);
Vue.use(List);
Vue.use(Spin);
Vue.use(Collapse);
Vue.use(TextArea);
Vue.config.productionTip = false;
Vue.prototype.$message = message;

new Vue({
  render: h => h(App)
}).$mount("#app");
