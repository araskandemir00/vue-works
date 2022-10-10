# vue-works
<h2>Component Deep Dive</h2>
<h3>Component Registration & Styles</h3>
<ul>
    <li>Components can be registered <strong>globally or locally: Prefer local</strong> registration</li>
    <li>Styles can be <strong>global or scoped</strong> to  a conponent: <strong>Prefer scoped</strong> for most components</li>
</ul>
<h3>Slots</h3>
<ul>
    <li><strong>Slots</strong> can be used to  add a <strong>"placeholder</strong> for dynamic HTML code.</li>
    <li><strong>Multiple, named slots</strong> are possible, <strong>default fallbacks</strong> can be provided. <strong>Scoped slots</strong> allow adv. use-cases.</li>
</ul>
<h3>Dynamic Components</h3>
<ul>
    <li>Components can be <strong>swapped dynamically</strong> via the built-in "component" component.</li>
    <li>Component caching can be added via the "keep-alive" component</li>
</ul>
<h3>Teleport & Style Guide</h3>
<ul>
    <li><strong>DOM structure can be manipulated</strong> via "teleport" -it <strong>keeps the component hierarchy!</strong></li>
    <li><strong>Consider following the official style guide</strong> to keep your code clean and understandable</li>
</ul>