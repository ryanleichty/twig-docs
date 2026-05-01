---
title: "``same as``"
source: "https://github.com/twigphp/Twig/blob/99d95dd6b8b0cc3c2397d15d45a4bb87eff89ddc/doc/tests/sameas.rst"
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
