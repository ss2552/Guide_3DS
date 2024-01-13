# 3ds.hacks.guide

A complete guide to 3DS (and 2DS) custom firmware, from stock to boot9strap.

https://3ds.hacks.guide/

## Running the site locally

This requires the following installed on your system:
- ruby(-dev)
- bundler

To test the website locally, clone the source code:
```sh
git clone https://github.com/hacks-guide/Guide_3DS --recurse-submodules
cd Guide_3DS
```

Then simply run the following commands:

```sh
bundle config set --local path vendor/bundle
bundle install
bundle exec jekyll serve
```

The website should now be running on http://127.0.0.1:4000/.
