---
title: "``with``"
source: "https://github.com/twigphp/Twig/blob/99d95dd6b8b0cc3c2397d15d45a4bb87eff89ddc/doc/tags/with.rst"
upstreamPath: "doc/tags/with.rst"
editLink: true
vue: false
---
:::::: v-pre

# ``with``

Use the `with` tag to create a new inner scope. Variables set within this
scope are not visible outside of the scope:


```twig
{% with %}
    {% set value = 42 %}
    {{ value }} {# value is 42 here #}
{% endwith %}
value is not visible here any longer

```

Instead of defining variables at the beginning of the scope, you can pass a
mapping of variables you want to define in the `with` tag; the previous
example is equivalent to the following one:


```twig
{% with {value: 42} %}
    {{ value }} {# value is 42 here #}
{% endwith %}
value is not visible here any longer

{# it works with any expression that resolves to a mapping #}
{% set vars = {value: 42} %}
{% with vars %}
    ...
{% endwith %}

```

By default, the inner scope has access to the outer scope context; you can
disable this behavior by appending the `only` keyword:


```twig
{% set zero = 0 %}
{% with {value: 42} only %}
    {# only value is defined #}
    {# zero is not defined #}
{% endwith %}

```

::::::
