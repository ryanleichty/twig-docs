---
title: "``currency_names``"
source: "https://github.com/twigphp/Twig/blob/99d95dd6b8b0cc3c2397d15d45a4bb87eff89ddc/doc/functions/currency_names.rst"
upstreamPath: "doc/functions/currency_names.rst"
editLink: true
vue: false
---
:::::: v-pre

# ``currency_names``


> **Added in Twig 3.5**
>
> The `currency_names` function was added in Twig 3.5.
>

The `currency_names` function returns the names of the currencies:


```twig
{# Afghan Afghani, Afghan Afghani (1927–2002), ... #}
{{ currency_names()|join(', ') }}

```

By default, the function uses the current locale. You can pass it explicitly:


```twig
{# afghani (1927–2002), afghani afghan, ... #}
{{ currency_names('fr')|join(', ') }}

```


> **The `currency_names` function is part of the `IntlExtension` which is not**
>
> installed by default. Install it first:
>
>
> ```bash
> $ composer require twig/intl-extra
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
>     use Twig\Extra\Intl\IntlExtension;
>
>     $twig = new \Twig\Environment(...);
>     $twig->addExtension(new IntlExtension());
>

## Arguments

* `locale`: The locale code as defined in [RFC 5646](https://www.rfc-editor.org/info/rfc5646)

::::::
