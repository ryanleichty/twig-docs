---
title: "``constant``"
source: "https://github.com/twigphp/Twig/blob/ecb310e129f549daa3424f6565520bcc807d16f3/doc/tests/constant.rst"
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
