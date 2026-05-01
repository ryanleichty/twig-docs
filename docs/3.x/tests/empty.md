---
title: "``empty``"
source: "https://github.com/twigphp/Twig/blob/99d95dd6b8b0cc3c2397d15d45a4bb87eff89ddc/doc/tests/empty.rst"
upstreamPath: "doc/tests/empty.rst"
editLink: true
vue: false
---
:::::: v-pre

# ``empty``

`empty` checks if a variable is an empty string, an empty sequence, an empty
mapping, exactly `false`, or exactly `null`.

For objects that implement the `Countable` interface, `empty` will check the
return value of the `count()` method.

For objects that implement the `__toString()` magic method (and not `Countable`),
it will check if an empty string is returned.


```twig
{% if user is empty %}
    ...
{% endif %}


```

::::::
