+++
date = '2025-04-15T13:57:41+07:00'
draft = true
title = 'Chào thế giới'
description = 'Bài đầu tiên trên blog cá nhân của mình'
+++

Handling combined indexing and serving rules

You can create a multi-rule instruction by combining robots meta tag rules with commas or by using multiple meta tags. Here is an example of a robots meta tag that instructs web crawlers to not index the page and to not crawl any of the links on the page:

Here is an example that limits the text snippet to 20 characters, and allows a large image preview:

<meta name="robots" content="max-snippet:20, max-image-preview:large">

For situations where multiple crawlers are specified along with different rules, the search engine will use the sum of the negative rules. For example:

<meta name="robots" content="nofollow">
<meta name="googlebot" content="noindex">

The page containing these meta tags will be interpreted as having a noindex, nofollow rule when crawled by Googlebot.
Using the data-nosnippet HTML attribute

You can designate textual parts of an HTML page not to be used as a snippet. This can be done on an HTML-element level with the data-nosnippet HTML attribute on span, div, and section elements. The data-nosnippet is considered a boolean attribute. As with all boolean attributes, any value specified is ignored. To ensure machine-readability, the HTML section must be valid HTML and all appropriate tags must be closed accordingly.

Examples:

<p>This text can be shown in a snippet
<span data-nosnippet>and this part would not be shown</span>.</p>

<div data-nosnippet>not in snippet</div>
<div data-nosnippet="true">also not in snippet</div>
<div data-nosnippet="false">also not in snippet</div>
<!-- all values are ignored -->

<div data-nosnippet>some text</html>
<!-- unclosed "div" will include all content afterwards -->

<mytag data-nosnippet>some text</mytag>
<!-- NOT VALID: not a span, div, or section -->

<p>This text can be shown in a snippet.</p>
<div data-nosnippet>
<p>However, this is not in snippet.</p>
<ul>
  <li>Stuff not in snippet</li>
  <li>More stuff not in snippet</li>
</ul>
</div>

Google typically renders pages in order to index them, however rendering is not guaranteed. Because of this, extraction of data-nosnippet may happen both before and after rendering. To avoid uncertainty from rendering, do not add or remove the data-nosnippet attribute of existing nodes through JavaScript. When adding DOM elements through JavaScript, include the data-nosnippet attribute as necessary when initially adding the element to the page's DOM. If custom elements are used, wrap or render them with div, span, or section elements if you need to use data-nosnippet. 
