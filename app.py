"""U-Mart interactive storefront — run with streamlit run app.py."""
import streamlit as st
import streamlit.components.v1 as components
from bundle import build_html
st.set_page_config(page_title="U-Mart", page_icon="🛒", layout="wide", initial_sidebar_state="collapsed")
st.markdown("""<style>
[data-testid="stHeader"] {display:none;}
.block-container {padding:0!important;max-width:100%!important;}
iframe {height:100dvh!important;display:block;border:0;}
</style>""", unsafe_allow_html=True)
components.html(build_html(), height=900, scrolling=True)
