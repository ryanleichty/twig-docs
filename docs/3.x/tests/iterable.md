---
title: "``iterable``"
source: "https://github.com/twigphp/Twig/blob/99d95dd6b8b0cc3c2397d15d45a4bb87eff89ddc/doc/tests/iterable.rst"
upstreamPath: "doc/tests/iterable.rst"
editLink: true
vue: false
---
:::::: v-pre

# ``iterable``

`iterable` checks if a variable is an array or a traversable object:


```twig
{# evaluates to true if the users variable is iterable #}
{% if users is iterable %}
    {% for user in users %}
        Hello {{ user }}!
    {% endfor %}
{% else %}
    {# users is probably a string #}
    Hello {{ users }}!
{% endif %}

```

::::::
