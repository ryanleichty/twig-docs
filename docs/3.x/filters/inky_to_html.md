---
title: "``inky_to_html``"
source: "https://github.com/twigphp/Twig/blob/99d95dd6b8b0cc3c2397d15d45a4bb87eff89ddc/doc/filters/inky_to_html.rst"
upstreamPath: "doc/filters/inky_to_html.rst"
editLink: true
vue: false
---
:::::: v-pre

# ``inky_to_html``

The `inky_to_html` filter processes an [inky email template](https://github.com/foundation/inky):


```twig
{% apply inky_to_html %}
    <row>
        <columns large="6"></columns>
        <columns large="6"></columns>
    </row>
{% endapply %}

```

You can also use the filter on an included file:


```twig
{{ include('some_template.inky.twig')|inky_to_html }}

```


> **The `inky_to_html` filter is part of the `InkyExtension` which is not**
>
> installed by default. Install it first:
>
>
> ```bash
> $ composer require twig/inky-extra
>
> ```
>
> Then, on Symfony projects, install the `twig/extra-bundle`:
>
>
> ```bash
> $ composer require twig/extra-bundle
>
> ```
>
> Otherwise, add the extension explicitly on the Twig environment::
>
>     use Twig\Extra\Inky\InkyExtension;
>
>     $twig = new \Twig\Environment(...);
>     $twig->addExtension(new InkyExtension());
>

::::::
