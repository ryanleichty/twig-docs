---
title: "``use``"
source: "https://github.com/twigphp/Twig/blob/ecb310e129f549daa3424f6565520bcc807d16f3/doc/tags/use.rst"
upstreamPath: "doc/tags/use.rst"
editLink: true
vue: false
---
:::::: v-pre

# ``use``


> **Horizontal reuse is an advanced Twig feature that is hardly ever needed in**
>
> regular templates. It is mainly used by projects that need to make
> template blocks reusable without using inheritance.
>

Template inheritance is one of the most powerful features of Twig but it is
limited to single inheritance; a template can only extend one other template.
This limitation makes template inheritance simple to understand and easy to
debug:


```twig
{% extends "base.html.twig" %}

{% block title %}{% endblock %}
{% block content %}{% endblock %}

```

Horizontal reuse is a way to achieve the same goal as multiple inheritance,
but without the associated complexity:


```twig
{% extends "base.html.twig" %}

{% use "blocks.html.twig" %}

{% block title %}{% endblock %}
{% block content %}{% endblock %}

```

The `use` statement tells Twig to import the blocks defined in
`blocks.html.twig` into the current template (it's like macros, but for blocks):


```twig
{# blocks.html.twig #}
{% block sidebar %}{% endblock %}

```

In this example, the `use` statement imports the `sidebar` block into the
main template. The code is mostly equivalent to the following one (the
imported blocks are not outputted automatically):


```twig
{% extends "base.html.twig" %}

{% block sidebar %}{% endblock %}
{% block title %}{% endblock %}
{% block content %}{% endblock %}

```


> **The `use` tag only imports a template if it does not extend another**
>
> template, if it does not define macros, and if the body is empty. But it
> can *use* other templates.
>


> **Because `use` statements are resolved independently of the context**
>
> passed to the template, the template reference cannot be an expression.
>

The main template can also override any imported block. If the template
already defines the `sidebar` block, then the one defined in `blocks.html.twig`
is ignored. To avoid name conflicts, you can rename imported blocks:


```twig
{% extends "base.html.twig" %}

{% use "blocks.html.twig" with sidebar as base_sidebar, title as base_title %}

{% block sidebar %}{% endblock %}
{% block title %}{% endblock %}
{% block content %}{% endblock %}

```

The `parent()` function automatically determines the correct inheritance
tree, so it can be used when overriding a block defined in an imported
template:


```twig
{% extends "base.html.twig" %}

{% use "blocks.html.twig" %}

{% block sidebar %}
    {{ parent() }}
{% endblock %}

{% block title %}{% endblock %}
{% block content %}{% endblock %}

```

In this example, `parent()` will correctly call the `sidebar` block from
the `blocks.html.twig` template.


> **Renaming allows you to simulate inheritance by calling the "parent" block:**
>
>
>
> ```twig
> {% extends "base.html.twig" %}
>
> {% use "blocks.html.twig" with sidebar as parent_sidebar %}
>
> {% block sidebar %}
>     {{ block('parent_sidebar') }}
> {% endblock %}
>
> ```
>


> **You can use as many `use` statements as you want in any given template.**
>
> If two imported templates define the same block, the latest one wins.
>

::::::
