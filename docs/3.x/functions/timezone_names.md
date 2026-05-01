---
title: "``timezone_names``"
source: "https://github.com/twigphp/Twig/blob/99d95dd6b8b0cc3c2397d15d45a4bb87eff89ddc/doc/functions/timezone_names.rst"
upstreamPath: "doc/functions/timezone_names.rst"
editLink: true
vue: false
---
:::::: v-pre

# ``timezone_names``


> **Added in Twig 3.5**
>
> The `timezone_names` function was added in Twig 3.5.
>

The `timezone_names` function returns the names of the timezones:


```twig
{# Acre Time (Eirunepe), Acre Time (Rio Branco), ... #}
{{ timezone_names()|join(', ') }}

```

By default, the function uses the current locale. You can pass it explicitly:


```twig
{# heure : Antarctique (Casey), heure : Canada (Montreal), ... #}
{{ timezone_names('fr')|join(', ') }}

```


> **The `timezone_names` function is part of the `IntlExtension` which is not**
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
