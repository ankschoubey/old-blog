---
layout: page
title: 
permalink: /about/
---
<script>
  for (const iterator of document.getElementsByClassName('page-link')) {
      if (iterator.innerHTML === 'Search'){ iterator.classList.add('search-button'); iterator.title = 'Search';}
      if (iterator.innerHTML === 'Tags'){ iterator.classList.add('tags-button'); iterator.title = 'Tags';}
      if (iterator.innerHTML === 'Side Projects'){ iterator.classList.add('side-project-button'); iterator.title = 'Side Projects';}
  }
</script>
This is where you put the contents of your *About* page. Like all your pages, it's in [Markdown](https://guides.github.com/features/mastering-markdown/) format.

This website is powered by **[fastpages](https://github.com/fastai/fastpages)** [^1].

<script> window.location.href = '/' </script>

[^1]:a blogging platform that natively supports Jupyter notebooks in addition to other formats.
