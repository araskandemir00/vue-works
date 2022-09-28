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
<h2>CHAPTER 3 Summary</h2>
<h3>Conditional Content</h3>
<ul>
    <li><strong>v-if</strong>(and <strong>v-show</strong>) allows you to render content <strong>only if a certain condition is met</strong></li>
    <li>v-if can be combined with <strong>v-else</strong> and <strong>v-else-if</strong> (only on direct sibling elements!)</li>
</ul>
<h3>v-for Variations</h3>
<ul>
    <li>You can extract <strong>values</strong>, values and indexes or values, <strong>keys</strong> and indexes</li>
    <li>If you need v-for and v-if, <strong>DON'T use them on same element</strong>. Use a wrapper with v-if instead.</li>
</ul>
<h3>Lists</h3>
<ul>
    <li>v-for can be used to render multiple elements dynamically</li>
    <li>v-for can be used with arrays, objects and ranges(numbers)</li>
</ul>
<h3>Keys</h3>
<ul>
    <li>Vue <strong>re-uses DOM elements to optimize performance <strong>-></strong> This can lead to bug if elements contain state</strong></li>
    <li>Bind the <strong>key</strong> attribute to a unique value to help Vue identify elements that belong to list content</li>
</ul>
<h2>How Vue Updates the DOM</h2>
<table>
    <tr>
        <th>Vue Instance</th>
        <th>Virtual DOM</th>
        <th>Browser DOM</th>
    </tr>
    <tr>
        <td>Stores data, computed properties, methods, ...</td>
        <td>JS-based DOM which exist only memory</td>
        <td>Vue-controlled template is rendered in the DOM</td>
    </tr>
    <tr>
        <td>title: 'Hello',<br>
            text: 'Not the title'
        </td>
        <td> {el: 'h2', child: 'Hello!' }, ...</td>
        <td>&#60; h2 &#62; Hello &#60;/ h2 &#62;<br>
            &#60; p &#62; Not the title &#60; /p &#62;
        </td>
    </tr>
    <tr>
        <td>Data and computed properties may change (e.g. because of user input)</td>
        <td></td>
        <td>Updates should be reflected, but Vue should <strong>not</strong> re-render everything</td>
    </tr>
    <tr>
        <td>
            <strong>title: 'Hi there!'</strong><br>
            text: 'Not the title'
        </td>
        <td></td>
        <td>
            <strong>h2 &#62; Hi there! &#60;/ h2 &#62;<br></strong>
            &#60; p &#62; Not the title &#60; /p &#62;
        </td>
    </tr>
</table>
<h2>Vue Instance Lifecycle</h2>
<img scr="./vue-lifecycle.PNG">