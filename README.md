# VUE.JS NOTES
<h1>CHAPTER 1 & CHAPTER 2</h1>
<h2>What is Vue.js?</h2>
<p>Vue.js is a javascript framework that makes building interactive and reactive web frontends easier.</p>
<h2>Different ways of Utilizing Vue</h2>
<ol>
    <li>Vue can be used to control parts of HTML pages or entire pages("Widget" approach on a multi-page-application).</li>
    <li>Vue can also be used to control the entire frontend of a web application(SPA approach).</li>
</ol>
<link ref="https://academind.com/tutorials/angular-vs-react-vs-vue-my-thoughts">Angular vs React vs Vue</link><br>
<h2>Parts of this course which we learned to in first two part:</h2>
<ul>
    <li>DOM interaction,Templates & Data Binding</li>
    <li>Event Handling</li>
    <li>Advanced Reactivity</li>
</ul>
<h2>Methods vs Computed vs Watch</h2>
<h3>Methods:</h3>
<ul>
    <li>Use with event binding OR data binding</li>
    <li>Data binding: Method is executed for every "rerender" cycle of the component</li>
    <li>Use fır events ır data that really needs to be re-evaluated all the time</li>
</ul>
<h3>Computed:</h3>
<ul>
    <li>Use with data binding</li>
    <li>Computed properties are only re-evaluated if one of their "used values" changed</li>
    <li>Use for data that depends on other data</li>
</ul>
<h3>Watch:</h3>
<ul>
    <li>Not used directly in template</li>
    <li>Allows you to run any code in reaction to some changed data(e.g. send Http request etc.)</li>
    <li>Use for any non-data update you want to make</li>
</ul>
<h2>CHAPTER 1 & CHAPTER 2 Summary</h2>
<h3>DOM & Templeates</h3>
<ul>
    <li>Vue can be used to define the goal instead of the steps(-> declarative approach)</li>
    <li>Connect Vue to HTML via <strong>"mount"</strong> Vue <strong> then renders the real DOM based on the connected template</li>
</ul>
<h3>Data & Event Bindings</h3>
<ul>
    <li>You can bind data via interpolation ({{}}) or the <strong>v-bind(":")</strong> directive</li>
    <li>You listen for events via <strong> via v-on("@")</strong></li>
</ul>
<h3>Reactive</h3>
<ul>
    <li>Vue updates the real DOM for you when bound data changes</li>
    <li><strong>Computed properties</strong> and <strong>watchers</strong> allow you to react to data changes</li>
</ul>
<h3>Styling</h3>
<ul>
    <li>Dynamic CSS class and inline style bindings are supported by Vue</li>
    <li>Vue offers multiple <strong>special syntaxes</strong> (object-based, array-based) for efficient bindings</li>
</ul>