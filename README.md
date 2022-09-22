# vue-works
<strong>Vue.js sample projects</strong><br>
What is Vue.js?<br>
Vue.js is a javascript framework that makes building interactive and reactive web frontends easier.<br>
<strong>Different ways of Utilizing Vue</strong><br>
1-Vue can be used to control parts of HTML pages or entire pages("Widget" approach on a multi-page-application).<br>
2-Vue can also be used to control the entire frontend of a web application(SPA approach).<br> 
<link ref="https://academind.com/tutorials/angular-vs-react-vs-vue-my-thoughts">Angular vs React vs Vue</link><br>
Parts of this course which we learned to in first two part:<br>
-DOM interaction,templates & Data Binding<br>
-Event Handling<br>
-"Advanced Reactivity<br>
Methods vs Computed vs Watch<br>
Methods:<br>
-Use with event binding OR data binding<br>
-Data binding: Method is executed for every "rerender" cycle of the component<br>
-Use fır events ır data that really needs to be re-evaluated all the time <br>
COmputed:<br>
-Use with data binding<br>
-Computed properties are only re-evaluated if one of their "used values" changed<br>
-Use for data that depends on other data<br>
Watch:<br>
-Not used directly in template<br>
-Allows you to run any code in reaction to some changed data(e.g. send Http request etc.)<br>
-Use for any non-data update you want to make<br>
