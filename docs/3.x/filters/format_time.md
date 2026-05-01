---
title: "``format_time``"
source: "https://github.com/twigphp/Twig/blob/99d95dd6b8b0cc3c2397d15d45a4bb87eff89ddc/doc/filters/format_time.rst"
upstreamPath: "doc/filters/format_time.rst"
editLink: true
vue: false
---
:::::: v-pre

# ``format_time``

The `format_time` filter formats a time. It behaves in the exact same way as
the [format_datetime](format_datetime) filter, but without the date.


> **The `format_time` filter is part of the `IntlExtension` which is not**
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
* `timeFormat`: The time format
* `pattern`: A date time pattern
* `timezone`: The date timezone
* `calendar`: The calendar ("gregorian" by default)

::::::
