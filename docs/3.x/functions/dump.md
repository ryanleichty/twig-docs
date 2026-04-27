---
title: "``dump``"
source: "https://github.com/twigphp/Twig/blob/ecb310e129f549daa3424f6565520bcc807d16f3/doc/functions/dump.rst"
upstreamPath: "doc/functions/dump.rst"
editLink: true
vue: false
---
:::::: v-pre

# ``dump``

The `dump` function dumps information about a template variable. This is
mostly useful to debug a template that does not behave as expected by
introspecting its variables:


```twig
{{ dump(user) }}

```


> **The `dump` function is not available by default. You must add the**
>
> `\Twig\Extension\DebugExtension` extension explicitly when creating your Twig
> environment::
>
>     $twig = new \Twig\Environment($loader, [
>         'debug' => true,
>         // ...
>     ]);
>     $twig->addExtension(new \Twig\Extension\DebugExtension());
>
> Even when enabled, the `dump` function won't display anything if the
> `debug` option on the environment is not enabled (to avoid leaking debug
> information on a production server).
>

In an HTML context, wrap the output with a `pre` tag to make it easier to
read:


```twig
<pre>
    {{ dump(user) }}
</pre>

```


> **Using a `pre` tag is not needed when `XDebug`_ is enabled and**
>
> `html_errors` is `on`; as a bonus, the output is also nicer with
> XDebug enabled.
>

You can debug several variables by passing them as additional arguments:


```twig
{{ dump(user, categories) }}

```

If you don't pass any value, all variables from the current context are
dumped:


```twig
{{ dump() }}

```


> **Internally, Twig uses the PHP `var_dump`_ function.**
>
>

## Arguments

* `context`: The context to dump

::::::
