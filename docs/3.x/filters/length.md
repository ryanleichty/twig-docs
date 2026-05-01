---
title: "``length``"
source: "https://github.com/twigphp/Twig/blob/99d95dd6b8b0cc3c2397d15d45a4bb87eff89ddc/doc/filters/length.rst"
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

For strings, [mb_strlen()](https://www.php.net/manual/function.mb-strlen.php) is used.


```twig
{% if users|length > 10 %}
    ...
{% endif %}

```

::::::
