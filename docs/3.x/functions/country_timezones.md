---
title: "``country_timezones``"
source: "https://github.com/twigphp/Twig/blob/99d95dd6b8b0cc3c2397d15d45a4bb87eff89ddc/doc/functions/country_timezones.rst"
upstreamPath: "doc/functions/country_timezones.rst"
editLink: true
vue: false
---
:::::: v-pre

# ``country_timezones``

The `country_timezones` function returns the names of the timezones associated
with a given country code (ISO-3166):


```twig
{# Europe/Paris #}
{{ country_timezones('FR')|join(', ') }}

```

If the specified country is unknown, it will return an empty array.


> **The `country_timezones` function is part of the `IntlExtension` which is not**
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

* `country`: The country code

::::::
