##A Custom Jekyll Theme For My Babble

This is a basic theme for a Jekyll blog. It creates posts, uses tags, and can display gists.

Right now, I use a few different gems/plugins that Jekyll doesn't normally use/come with (Also use Ruby 1.9.3). They include:

1. rdiscount - _for rendering_ (GEM)
2. activesupport - _for caching_ (GEM)
3. [Jekyll Image Tag](https://github.com/robwierzbowski/jekyll-image-tag) - _modified for my use case_
    * [Minimagick](https://github.com/minimagick/minimagick) - _for liquid image tags_
    * [Imagemagick](http://www.imagemagick.org/script/index.php) - _for liquid image tags_
6. [tag_gen.rb](http://charliepark.org/tags-in-jekyll/)
7. [gist_gen.rb](http://blog.55minutes.com/2012/03/liquid-gist-tag-for-jekyll/#gist-1937862-gist-rb)
8. [youtube.rb](https://gist.github.com/joelverhagen/1805814)

###If You're Using Github Pages
If you're using Github Pages to publish with this "theme" you will not be able to use any custom plugins (i.e. Jekyll Image Tag, tag_gen, gist_gen, or youtube). Checkout the two links below, which outline what you can do to combat this problem.

+ http://ixti.net/software/2013/01/28/using-jekyll-plugins-on-github-pages.html
+ http://davidensinger.com/2013/04/deploying-jekyll-to-github-pages/
