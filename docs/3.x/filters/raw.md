---
title: "``raw``"
source: "https://github.com/twigphp/Twig/blob/ecb310e129f549daa3424f6565520bcc807d16f3/doc/filters/raw.rst"
upstreamPath: "doc/filters/raw.rst"
editLink: true
vue: false
---
:::::: v-pre

# ``raw``

The `raw` filter marks the value as being "safe", which means that in an
environment with automatic escaping enabled this variable will not be escaped
if `raw` is the last filter applied to it:


```twig
{% autoescape %}
    {{ var|raw }} {# var won't be escaped #}
{% endautoescape %}

```

::::::
