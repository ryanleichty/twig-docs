---
title: "``verbatim``"
source: "https://github.com/twigphp/Twig/blob/ecb310e129f549daa3424f6565520bcc807d16f3/doc/tags/verbatim.rst"
upstreamPath: "doc/tags/verbatim.rst"
editLink: true
vue: false
---
:::::: v-pre

# ``verbatim``

The `verbatim` tag marks sections as being raw text that should not be
parsed. For example to put Twig syntax as example into a template you can use
this snippet:


```twig
{% verbatim %}
    <ul>
    {% for item in seq %}
        <li>{{ item }}</li>
    {% endfor %}
    </ul>
{% endverbatim %}

```

::::::
