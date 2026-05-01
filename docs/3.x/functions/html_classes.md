---
title: "``html_classes``"
source: "https://github.com/twigphp/Twig/blob/99d95dd6b8b0cc3c2397d15d45a4bb87eff89ddc/doc/functions/html_classes.rst"
upstreamPath: "doc/functions/html_classes.rst"
editLink: true
vue: false
---
:::::: v-pre

# ``html_classes``

The `html_classes` function returns a string by conditionally joining class
names together:


```twig
<p class="{{ html_classes('a-class', 'another-class', {
    'errored': object.errored,
    'finished': object.finished,
    'pending': object.pending,
}) }}">How are you doing?</p>

```


> **The `html_classes` function is part of the `HtmlExtension` which is not**
>
> installed by default. Install it first:
>
>
> ```bash
> $ composer require twig/html-extra
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
>     use Twig\Extra\Html\HtmlExtension;
>
>     $twig = new \Twig\Environment(...);
>     $twig->addExtension(new HtmlExtension());
>

::::::
