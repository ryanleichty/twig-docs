---
title: "``currency_symbol``"
source: "https://github.com/twigphp/Twig/blob/99d95dd6b8b0cc3c2397d15d45a4bb87eff89ddc/doc/filters/currency_symbol.rst"
upstreamPath: "doc/filters/currency_symbol.rst"
editLink: true
vue: false
---
:::::: v-pre

# ``currency_symbol``

The `currency_symbol` filter returns the currency symbol given its ISO 4217
code:


```twig
{# € #}
{{ 'EUR'|currency_symbol }}

{# ¥ #}
{{ 'JPY'|currency_symbol }}

```

By default, the filter uses the current locale. You can pass it explicitly:


```twig
{# ¥ #}
{{ 'JPY'|currency_symbol('fr') }}

```


> **The `currency_symbol` filter is part of the `IntlExtension` which is not**
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
