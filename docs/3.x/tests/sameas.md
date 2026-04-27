---
title: "``same as``"
source: "https://github.com/twigphp/Twig/blob/ecb310e129f549daa3424f6565520bcc807d16f3/doc/tests/sameas.rst"
upstreamPath: "doc/tests/sameas.rst"
editLink: true
vue: false
---
:::::: v-pre

# ``same as``

`same as` checks if a variable is the same as another variable.
This is equivalent to `===` in PHP:


```twig
{% if user.name is same as(false) %}
    the user attribute is the 'false' PHP value
{% endif %}

```

::::::
