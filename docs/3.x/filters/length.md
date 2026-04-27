---
title: "``length``"
source: "https://github.com/twigphp/Twig/blob/ecb310e129f549daa3424f6565520bcc807d16f3/doc/filters/length.rst"
upstreamPath: "doc/filters/length.rst"
editLink: true
vue: false
---
:::::: v-pre

# ``length``

The `length` filter returns the number of items of a sequence or mapping, or
the length of a string.

For objects that implement the `Countable` interface, `length` will use the
return value of the `count()` method.

For objects that implement the `__toString()` magic method (and not `Countable`),
it will return the length of the string provided by that method.

For objects that implement the `Traversable` interface, `length` will use the return value of the `iterator_count()` method.

For strings, `mb_strlen()`_ is used.


```twig
{% if users|length > 10 %}
    ...
{% endif %}

```

::::::
