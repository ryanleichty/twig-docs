---
title: "``format_date``"
source: "https://github.com/twigphp/Twig/blob/ecb310e129f549daa3424f6565520bcc807d16f3/doc/filters/format_date.rst"
upstreamPath: "doc/filters/format_date.rst"
editLink: true
vue: false
---
:::::: v-pre

# ``format_date``

The `format_date` filter formats a date. It behaves in the exact same way as
the [format_datetime](format_datetime) filter, but without the time.


> **The `format_date` filter is part of the `IntlExtension` which is not**
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
* `dateFormat`: The date format
* `pattern`: A date time pattern
* `timezone`: The date timezone
* `calendar`: The calendar ("gregorian" by default)

::::::
