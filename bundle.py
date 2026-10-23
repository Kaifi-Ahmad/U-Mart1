"""Bundle local storefront assets for the Streamlit iframe."""
from pathlib import Path
import base64
import mimetypes
import re
ROOT = Path(__file__).parent / "web"
def data_uri(path):
    mime = mimetypes.guess_type(path.name)[0] or "application/octet-stream"
    return "data:" + mime + ";base64," + base64.b64encode(path.read_bytes()).decode()
def css_inline(path):
    return re.sub(r"url\([\"']?([^\)\"']+)[\"']?\)", lambda m: "url(" + data_uri(path.parent / m[1]) + ")", path.read_text(encoding="utf-8"))
def build_html():
    html = (ROOT / "index.html").read_text(encoding="utf-8")
    for name in ("assets/fonts.css", "styles.css"):
        html = html.replace('<link rel="stylesheet" href="' + name + '">', '<style>' + css_inline(ROOT / name) + '</style>')
    html = re.sub(r'(src|href)="(assets/[^"]+)"', lambda m: m[1] + '="' + data_uri(ROOT / m[2]) + '"', html)
    html = html.replace('<script src="app.js" defer></script>', '')
    return html.replace('</body>', '<script>' + (ROOT / "app.js").read_text(encoding="utf-8") + '</script></body>')
