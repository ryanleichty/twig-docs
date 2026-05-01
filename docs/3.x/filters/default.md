---
title: "``default``"
source: "https://github.com/twigphp/Twig/blob/99d95dd6b8b0cc3c2397d15d45a4bb87eff89ddc/doc/filters/default.rst"
upstreamPath: "doc/filters/default.rst"
editLink: true
vue: false
---
:::::: v-pre

# ``default``

The `default` filter returns the passed default value if the value is
undefined or empty, otherwise the value of the variable:


```twig
{{ var|default('var is not defined') }}

{{ user.name|default('name item on user is not defined') }}

{{ user['name']|default('name item on user is not defined') }}

{{ ''|default('passed var is empty')  }}

```

When using the `default` filter on an expression that uses variables in some
method calls, be sure to use the `default` filter whenever a variable can be
undefined:


```twig
{{ user.value(name|default('username'))|default('not defined') }}

```

Using the `default` filter on a boolean variable might trigger unexpected
behavior, as `false` is treated as an empty value. Consider using `??`
instead:


```twig
{% set value = false %}
{{ value|default(true) }} {# true #}
{{ value ?? true }} {# false #}

```


> **Read the documentation for the [defined](../tests/defined) and**
>
> [empty](../tests/empty) tests to learn more about their semantics.
>

## Arguments

* `default`: The default value

::::::
