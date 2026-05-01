---
title: "``constant``"
source: "https://github.com/twigphp/Twig/blob/99d95dd6b8b0cc3c2397d15d45a4bb87eff89ddc/doc/tests/constant.rst"
upstreamPath: "doc/tests/constant.rst"
editLink: true
vue: false
---
:::::: v-pre

# ``constant``

`constant` checks if a variable has the exact same value as a constant. You
can use either global constants or class constants:


```twig
{% if post.status is constant('Post::PUBLISHED') %}
    the status attribute is exactly the same as Post::PUBLISHED
{% endif %}

```

You can test constants from object instances as well:


```twig
{% if post.status is constant('PUBLISHED', post) %}
    the status attribute is exactly the same as Post::PUBLISHED
{% endif %}

```

::::::
