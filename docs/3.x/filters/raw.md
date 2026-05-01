---
title: "``raw``"
source: "https://github.com/twigphp/Twig/blob/99d95dd6b8b0cc3c2397d15d45a4bb87eff89ddc/doc/filters/raw.rst"
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
