---
title: "``block``"
source: "https://github.com/twigphp/Twig/blob/ecb310e129f549daa3424f6565520bcc807d16f3/doc/functions/block.rst"
upstreamPath: "doc/functions/block.rst"
editLink: true
vue: false
---
:::::: v-pre

# ``block``

When a template uses inheritance and if you want to render a block multiple
times, use the `block` function:


```twig
<title>{% block title %}{% endblock %}</title>

<h1>{{ block('title') }}</h1>

{% block body %}{% endblock %}

```

The `block` function can also be used to display one block from another
template:


```twig
{{ block("title", "common_blocks.html.twig") }}

```

Use the `defined` test to check if a block exists in the context of the
current template:


```twig
{% if block("footer") is defined %}
    ...
{% endif %}

{% if block("footer", "common_blocks.html.twig") is defined %}
    ...
{% endif %}

```

## Arguments

* `name`: The block name
* `template`: The template where to look for the block


> **Note**
>

::::::
