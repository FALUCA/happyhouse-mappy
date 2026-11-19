"""Validacoes estruturais da interface estatica Mappy."""
import re
import unittest
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlsplit, unquote

ROOT = Path(__file__).resolve().parents[1]

class References(HTMLParser):
    def __init__(self):
        super().__init__()
        self.refs = []
    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        for attr in ({'script': ['src'], 'link': ['href'], 'img': ['src']}.get(tag, [])):
            if attrs.get(attr):
                self.refs.append(attrs[attr])

class StaticSiteTests(unittest.TestCase):
    def test_required_files(self):
        for file in ('index.html', '_headers', 'assets/js/mappy-header.js', 'assets/css/mappy-adjustments.css'):
            with self.subTest(file=file):
                self.assertTrue((ROOT / file).is_file())

    def test_local_assets_exist(self):
        parser = References()
        parser.feed((ROOT / 'index.html').read_text(encoding='utf-8'))
        missing = []
        for ref in parser.refs:
            parsed = urlsplit(ref)
            if parsed.scheme or parsed.netloc or ref.startswith(('#', 'data:', 'mailto:', '//')):
                continue
            path = unquote(parsed.path).lstrip('/')
            if not path or path.startswith('..'):
                continue
            if not (ROOT / path).is_file():
                missing.append(ref)
        self.assertFalse(missing, f'Referencias locais ausentes: {missing}')

    def test_header_white_logo(self):
        js = (ROOT / 'assets/js/mappy-header.js').read_text(encoding='utf-8')
        self.assertIn('happyhouse-logo.png', js)
        self.assertNotIn('happyhouse-logo-red.png', js)

    def test_version(self):
        self.assertRegex((ROOT / 'VERSION').read_text(encoding='utf-8').strip(), r'^\d+\.\d+\.\d+$')

if __name__ == '__main__':
    unittest.main()
