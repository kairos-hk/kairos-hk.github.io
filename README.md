# Dongyoung Kim's Portfolio

An English personal academic homepage built with Jekyll, Bootstrap 3, and the original
Allan Lab / Lumen theme. It covers education,
professional experience, cybersecurity and AI research, publications and talks,
entrepreneurship, and honors. Content is based on Dongyoung Kim's CV.

## Local setup

Use a current Ruby installation compatible with the Bundler version recorded in
`Gemfile.lock` (Ruby 3.3 or newer), then install dependencies:

```bash
gem install bundler -v 2.7.2
bundle install
```

Run the local webserver:

```bash
bundle exec jekyll serve
```

Verify the site before publishing:

```bash
bundle exec jekyll build --strict_front_matter
git diff --check
```

The generated site is written to `_site/`, which is ignored by Git.

## Updating content

- `_data/profile.yml`: English CV details, social links, education, experience,
  teaching, community service, and entrepreneurship activities.
- `_data/publications.json`: publications, conference presentations, talks,
  manuscripts, and technical guides. Only add a DOI when it is known; specify
  the output type in `kind` and preserve the precision of the source date.
  English titles, abstracts, and venue labels are displayed; `category` drives filtering.
- `_data/ach.yml`: honors and awards, grouped by year in descending order.
  Keep dates at the precision provided by the source. Add `attachments` only
  when the files are available.
- `_data/news.yml`: research, startup, and award updates, with recent entries first.
- `_pages/home.html` and `_pages/about/index.html`: the home overview and full background.
- `css/main.scss`: original Bootstrap/Lumen styles and responsive layout adjustments.
- `css/fonts.css` and `fonts/source-sans-pro-*`: locally hosted Source Sans Pro,
  the same font used by Allan Lab (OFL license included).
- `js/navigation.js`: mobile navigation and publication search/type filters.
- `_pages/contact.html`: research and business contact information.
- `_config.yml`: site title, contact email, description, and canonical URL.

Activity sections use plain lists rather than cards. Research interests are
summarized on the homepage; there is no separate Research page.

The original CV is a local reference and is excluded from the generated site.
The existing portrait is stored in `images/team/researcher.png`.

## Credits

The original research-lab template is derived from the
[Allan Lab website](https://www.allanlab.org/aboutwebsite.html) at Leiden University.
See `LICENSE` for the template's license.
