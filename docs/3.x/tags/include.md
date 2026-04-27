---
title: "``include``"
source: "https://github.com/twigphp/Twig/blob/ecb310e129f549daa3424f6565520bcc807d16f3/doc/tags/include.rst"
upstreamPath: "doc/tags/include.rst"
editLink: true
vue: false
---
:::::: v-pre

# ``include``

The `include` statement includes a template and outputs the rendered content
of that file:


```twig
{% include 'header.html.twig' %}
    Body
{% include 'footer.html.twig' %}

```


> **It is recommended to use the [include](../functions/include) function**
>
> instead as it provides the same features with a bit more flexibility:
>
> * The `include` function is semantically more "correct" (including a
>   template outputs its rendered contents in the current scope; a tag should
>   not display anything);
>
> * The `include` function is more "composable":
>
>
> ```twig
> {# Store a rendered template in a variable #}
> {% set content %}
>     {% include 'template.html.twig' %}
> {% endset %}
> {# vs #}
> {% set content = include('template.html.twig') %}
>
> {# Apply filter on a rendered template #}
> {% apply upper %}
>     {% include 'template.html.twig' %}
> {% endapply %}
> {# vs #}
> {{ include('template.html.twig')|upper }}
>
> ```
>
> * The `include` function does not impose any specific order for
>   arguments thanks to `named arguments`.
>

Included templates have access to the variables of the active context.

If you are using the filesystem loader, the templates are looked for in the
paths defined by it.

You can add additional variables by passing them after the `with` keyword:


```twig
{# template.html.twig will have access to the variables from the current context and the additional ones provided #}
{% include 'template.html.twig' with {'name': 'Fabien'} %}

{% set vars = {'name': 'Fabien'} %}
{% include 'template.html.twig' with vars %}

```

You can disable access to the context by appending the `only` keyword:


```twig
{# only the name variable will be accessible #}
{% include 'template.html.twig' with {'name': 'Fabien'} only %}

```


```twig
{# no variables will be accessible #}
{% include 'template.html.twig' only %}

```


> **When including a template created by an end user, you should consider**
>
> sandboxing it. More information in the [Twig Sandbox](../sandbox)
> chapter.
>

The template name can be any valid Twig expression:


```twig
{% include some_var %}
{% include ajax ? 'ajax.html.twig' : 'not_ajax.html.twig' %}

```

And if the expression evaluates to a `\Twig\Template` or a
`\Twig\TemplateWrapper` instance, Twig will use it directly:

```php
// {% include template %}

$template = $twig->load('some_template.html.twig');

$twig->display('template.html.twig', ['template' => $template]);

```

You can mark an include with `ignore missing` in which case Twig will ignore
the statement if the template to be included does not exist. It has to be
placed just after the template name. Here some valid examples:


```twig
{% include 'sidebar.html.twig' ignore missing %}
{% include 'sidebar.html.twig' ignore missing with {'name': 'Fabien'} %}
{% include 'sidebar.html.twig' ignore missing only %}

```

You can also provide a list of templates that are checked for existence before
inclusion. The first template that exists will be included:


```twig
{% include ['page_detailed.html.twig', 'page.html.twig'] %}

```

If `ignore missing` is given, it will fall back to rendering nothing if none
of the templates exist, otherwise it will throw an exception.

::::::
