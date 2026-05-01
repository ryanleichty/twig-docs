---
title: "``defined``"
source: "https://github.com/twigphp/Twig/blob/99d95dd6b8b0cc3c2397d15d45a4bb87eff89ddc/doc/tests/defined.rst"
upstreamPath: "doc/tests/defined.rst"
editLink: true
vue: false
---
:::::: v-pre

# ``defined``

`defined` checks if a variable is defined in the current context. This is very
useful if you use the `strict_variables` option:


```twig
{# defined works with variable names #}
{% if user is defined %}
    ...
{% endif %}

{# and attributes on variables names #}
{% if user.name is defined %}
    ...
{% endif %}

{% if user['name'] is defined %}
    ...
{% endif %}

```

When using the `defined` test on an expression that uses variables in some
method calls, be sure that they are all defined first:


```twig
{% if var is defined and user.name(var) is defined %}
    ...
{% endif %}

```

::::::
