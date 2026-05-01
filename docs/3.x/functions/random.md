---
title: "``random``"
source: "https://github.com/twigphp/Twig/blob/99d95dd6b8b0cc3c2397d15d45a4bb87eff89ddc/doc/functions/random.rst"
upstreamPath: "doc/functions/random.rst"
editLink: true
vue: false
---
:::::: v-pre

# ``random``

The `random` function returns a random value depending on the supplied
parameter type:

* a random item from a sequence;
* a random character from a string;
* a random integer between 0 and the integer parameter (inclusive).
* a random integer between the integer parameter (when negative) and 0 (inclusive).
* a random integer between the first integer and the second integer parameter (inclusive).


> **The `random` function does not produce cryptographically secure random numbers.**
>
> Do not use them for purposes that require returned values to be unguessable. 
>


```twig
{{ random(['apple', 'orange', 'citrus']) }} {# example output: orange #}
{{ random('ABC') }}                         {# example output: C #}
{{ random() }}                              {# example output: 15386094 (works as the native PHP mt_rand function) #}
{{ random(5) }}                             {# example output: 3 #}
{{ random(50, 100) }}                       {# example output: 63 #}

```

## Arguments

* `values`: The values
* `max`: The max value when values is an integer

::::::
