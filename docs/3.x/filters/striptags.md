---
title: "``striptags``"
source: "https://github.com/twigphp/Twig/blob/ecb310e129f549daa3424f6565520bcc807d16f3/doc/filters/striptags.rst"
upstreamPath: "doc/filters/striptags.rst"
editLink: true
vue: false
---
:::::: v-pre

# ``striptags``

The `striptags` filter strips SGML/XML tags and replaces adjacent whitespace characters
by one space:


```twig
{{ some_html|striptags }}

```

You can also provide tags which should not be stripped:


```twig
{{ some_html|striptags('<br><p>') }}

```

In this example, the `<br/>`, `<br>`, `<p>`, and `</p>` tags won't be
removed from the string.


> **Internally, Twig uses the PHP [strip_tags](https://www.php.net/strip_tags) function.**
>
>

## Arguments

* `allowable_tags`: Tags which should not be stripped

::::::
