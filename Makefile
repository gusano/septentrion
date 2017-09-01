SHELL := /bin/bash
BUNDLE = /home/gusi/.gem/ruby/2.4.0/bin/bundle

serve:
	$(BUNDLE) exec jekyll serve

.PHONY: serve
