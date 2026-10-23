'use strict';
const icons={
 'arrow-right':'<path d="M4 12h16m-6-6 6 6-6 6"/>',
 'arrow-up-right':'<path d="M6 18 18 6M6 6h12v12"/>',
 'chevron-down':'<path d="m6 9 6 6 6-6"/>',
 'search':'<circle cx="10.8" cy="10.8" r="6.8"/><path d="m16 16 4.5 4.5"/>',
 'pin':'<path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.6"/>',
 'heart':'<path d="M20.8 4.9a5.5 5.5 0 0 0-7.8 0L12 6l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.3a5.5 5.5 0 0 0 0-7.8Z"/>',
 'bag':'<path d="M5 7h14l2 14H3L5 7Z"/><path d="M8 9V6a4 4 0 0 1 8 0v3"/>',
 'basket':'<path d="m3 10 2 11h14l2-11H3Zm4 0 5-8 5 8M8 14v3m4-3v3m4-3v3M2 10h20"/>',
 'grid':'<rect x="3" y="3" width="6" height="6" rx="1"/><rect x="15" y="3" width="6" height="6" rx="1"/><rect x="3" y="15" width="6" height="6" rx="1"/><rect x="15" y="15" width="6" height="6" rx="1"/>',
 'leaf':'<path d="M20 3s-9-2-14 3-3 10 0 12 8 2 11-2 3-13 3-13Z"/><path d="M3 21 15 9m-7 7v-5m0 5h5"/>',
 'store':'<path d="M4 10v11h16V10M3 3h18l1 6a3 3 0 0 1-5 2 3 3 0 0 1-5 0 3 3 0 0 1-5 0 3 3 0 0 1-5-2l1-6Z"/><path d="M9 21v-7h6v7M8 3 7 9m9-6 1 6"/>',
 'sparkles':'<path d="m12 3 2.7 6.3L21 12l-6.3 2.7L12 21l-2.7-6.3L3 12l6.3-2.7L12 3Zm8-2v4m-2-2h4"/>',
 'plus':'<path d="M12 5v14M5 12h14"/>',
 'minus':'<path d="M5 12h14"/>',
 'x':'<path d="m6 6 12 12M6 18 18 6"/>',
 'check':'<path d="m5 12 4 4L19 6"/>',
 'info':'<circle cx="12" cy="12" r="9"/><path d="M12 11v6m0-10v.1"/>',
 'facebook':'<path d="M14 21v-8h3l.5-4H14V7c0-1 .5-2 2-2h2V2h-3c-4 0-5 3-5 5v2H7v4h3v8"/>',
 'instagram':'<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17.5 6.5h.01"/>'
};
const icon=(name)=>`<svg viewBox="0 0 24 24" aria-hidden="true">${icons[name]||icons.bag}</svg>`;
function hydrateIcons(root=document){root.querySelectorAll('i[data-icon]').forEach(el=>el.outerHTML=icon(el.dataset.icon));}
const products=[
 {id:'banana',name:'Fresh Bananas',unit:'1 dozen',price:240,image:0,category:'fresh',badge:'FRESH PICK',description:'A fruit-bowl favourite for breakfast, smoothies and a little something between meals.'},
 {id:'eggs',name:'Farm Eggs',unit:'6 pieces',price:180,image:5,category:'dairy',badge:'EVERYDAY',description:'An everyday kitchen essential. The sample pack shown contains six brown eggs.'},
 {id:'milk',name:'Fresh Whole Milk',unit:'1 litre',price:230,image:4,category:'dairy',badge:'BREAKFAST',description:'For morning cereal, creamy chai and the recipes that feel like home.'},
 {id:'bread',name:'Whole Wheat Bread',unit:'1 loaf · 400 g',price:220,image:6,category:'bakery',badge:'BAKERY PICK',description:'A sliced whole wheat loaf for toast, sandwiches and easy family breakfasts.'},
 {id:'rice',name:'Basmati Rice',unit:'1 kg',price:390,image:7,category:'pantry',badge:'PANTRY PICK',description:'Long-grain basmati rice for a simple weekday meal or a table full of family favourites.'},
 {id:'apples',name:'Red Apples',unit:'1 kg',price:340,image:1,category:'fresh',badge:'FRESH PICK',description:'Crisp red apples for lunchboxes, fruit bowls and an easy afternoon snack.'},
 {id:'tomato',name:'Fresh Tomatoes',unit:'1 kg',price:160,image:2,category:'fresh',badge:'FRESH PICK',description:'Bring a little colour to your kitchen with a versatile cooking and salad favourite.'},
 {id:'spinach',name:'Leafy Spinach',unit:'1 bunch · approx. 250 g',price:80,image:3,category:'fresh',badge:'FRESH PICK',description:'Fresh leafy greens for a comforting bowl of palak or a quick everyday side.'},
 {id:'oil',name:'Sunflower Cooking Oil',unit:'1 litre',price:560,image:8,category:'pantry',badge:'ESSENTIAL',description:'An everyday pantry staple for your home cooking. Packaging shown is illustrative.'},
 {id:'tea',name:'Classic Black Tea',unit:'190 g',price:480,image:9,category:'drinks',badge:'CHAI TIME',description:'Make time for a cup of chai. The image shows a serving suggestion for this sample tea product.'},
 {id:'soap',name:'Everyday Bath Soap',unit:'3 bars · 100 g each',price:280,image:10,category:'personal',badge:'HOME PICK',description:'A simple personal-care essential for your household shopping list.'},
 {id:'juice',name:'Orange Juice',unit:'1 litre',price:380,image:11,category:'drinks',badge:'FRUITY PICK',description:'A bright addition to the breakfast table. The image shows an illustrative serving suggestion.'}
];
const categories=[
 {id:'fresh',name:'Fruit & vegetables',subtitle:'A basket of fresh',image:1,tint:'#f5f5e9'},
 {id:'dairy',name:'Dairy & eggs',subtitle:'Your morning essentials',image:4,tint:'#f1f4ee'},
 {id:'bakery',name:'Bakery',subtitle:'A little comfort',image:6,tint:'#fcf1e5'},
 {id:'pantry',name:'Pantry staples',subtitle:'Keep the kitchen happy',image:7,tint:'#f8f4e8'},
 {id:'drinks',name:'Drinks & tea',subtitle:'Sip something lovely',image:11,tint:'#fff1e7'},
 {id:'personal',name:'Personal care',subtitle:'Everyday, taken care of',image:10,tint:'#f1f4ec'}
];
const stores=[{id:'Jhelum',label:'Jhelum',detail:'A&G Mall, Jhelum',query:'U Mart A&G Mall Jhelum Pakistan'},{id:'Kharian',label:'Kharian',detail:'Main G.T. Road, Kharian',query:'U Mart Kharian Pakistan'},{id:'Sarai Alamgir',label:'Sarai Alamgir',detail:'Sarai Alamgir, Punjab',query:'U Mart Sarai Alamgir Pakistan'}];
const $=s=>document.querySelector(s);
const money=n=>`Rs. ${n.toLocaleString('en-PK')}`;
const escapeHTML=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const productById=id=>products.find(p=>p.id===id);
const sprite=(index,label='',extra='')=>`<div class="sprite ${extra}" ${label?`role="img" aria-label="${escapeHTML(label)}"`:'aria-hidden="true"'} style="--x:${index%4/3*100}%;--y:${[0,45,96][Math.floor(index/4)]}%"></div>`;
function readStored(key,fallback){try{return JSON.parse(localStorage.getItem(key))??fallback;}catch{return fallback;}}
const rawCart=readStored('umart-cart',{});
let cart=Object.fromEntries(Object.entries(rawCart&&typeof rawCart==='object'?rawCart:{}).filter(([id,q])=>productById(id)&&Number.isInteger(q)&&q>0&&q<=99));
const rawFavs=readStored('umart-favourites',[]);
let favourites=new Set((Array.isArray(rawFavs)?rawFavs:[]).filter(id=>productById(id)));
let store=readStored('umart-store','Jhelum');if(!stores.some(s=>s.id===store))store='Jhelum';
let currentFilter='all',query='',allProducts=false,favouritesOnly=false;
let toastTimer;
function save(){try{localStorage.setItem('umart-cart',JSON.stringify(cart));localStorage.setItem('umart-favourites',JSON.stringify([...favourites]));localStorage.setItem('umart-store',JSON.stringify(store));}catch{/* Shopping remains usable when storage is unavailable. */}}
const count=()=>Object.values(cart).reduce((a,b)=>a+b,0);
const subtotal=()=>Object.entries(cart).reduce((a,[id,q])=>a+productById(id).price*q,0);
function toast(text){$('#toast').innerHTML=icon('check')+escapeHTML(text);$('#toast').classList.add('visible');clearTimeout(toastTimer);toastTimer=setTimeout(()=>$('#toast').classList.remove('visible'),2600);}
function updateHeader(){$('#cart-count').textContent=count();$('#drawer-count').textContent=count();$('#wishlist-count').textContent=favourites.size;$('#wishlist-count').hidden=favourites.size===0;$('.wishlist-header').setAttribute('aria-label',`View favourites (${favourites.size})`);$('#selected-store').textContent=store;}
function quantity(p){return `<div class="quantity-control" aria-label="Quantity of ${p.name}"><button data-minus="${p.id}" aria-label="Remove one ${p.name}">${icon('minus')}</button><span aria-live="polite">${cart[p.id]||0}</span><button data-add="${p.id}" aria-label="Add one ${p.name}" ${cart[p.id]>=99?'disabled':''}>${icon('plus')}</button></div>`;}
function renderCategories(){$('#category-grid').innerHTML=categories.map(c=>`<button class="category-card" data-category="${c.id}"><div class="category-picture" style="--tint:${c.tint}">${sprite(c.image)}</div><strong>${c.name}</strong><small>${c.subtitle}</small></button>`).join('');}
function matchingProducts(){return products.filter(p=>(!favouritesOnly||favourites.has(p.id))&&(currentFilter==='all'||(currentFilter==='breakfast'?['dairy','bakery'].includes(p.category)||p.id==='tea':p.category===currentFilter))&&(!query||query.toLowerCase().split(/\s+/).every(word=>`${p.name} ${p.unit} ${p.category} ${p.id==='tea'?'chai':''}`.toLowerCase().includes(word))));}
function renderProducts(){
 const filtered=matchingProducts();const visible=allProducts||query||currentFilter!=='all'||favouritesOnly?filtered:filtered.slice(0,6);
 $('#product-grid').innerHTML=visible.map(p=>`<article class="product-card"><div class="product-top"><span class="product-badge ${['bakery','pantry','drinks'].includes(p.category)?'warm':''}">${p.badge}</span><button class="product-heart ${favourites.has(p.id)?'saved':''}" data-favourite="${p.id}" aria-label="${favourites.has(p.id)?'Remove':'Save'} ${p.name} ${favourites.has(p.id)?'from':'to'} favourites" aria-pressed="${favourites.has(p.id)}">${icon('heart')}</button></div><button class="product-image" data-detail="${p.id}" aria-label="View ${p.name}">${sprite(p.image,p.name)}</button><div class="product-unit">${p.unit}</div><button class="product-title" data-detail="${p.id}">${p.name}</button><div class="product-price-row"><span class="product-price">${money(p.price)}</span>${cart[p.id]?quantity(p):`<button class="add-button" data-add="${p.id}" aria-label="Add ${p.name} to basket">${icon('plus')}</button>`}</div></article>`).join('');
 if(!visible.length)$('#product-grid').innerHTML=`<div class="empty-products">${icon(favouritesOnly?'heart':'search')}<h3>${favouritesOnly?'Your favourites start here.':'Nothing in this aisle yet.'}</h3><p>${favouritesOnly?'Tap a heart on any product to save it for later.':'Try another search, or explore all our sample products.'}</p><button class="button primary" data-action="reset-shop">Explore the catalogue ${icon('arrow-right')}</button></div>`;
 let title='Everyday favourites.';
 if(favouritesOnly)title='Saved for another day.';else if(query)title='Your shopping list, found.';else if(currentFilter==='breakfast')title='Better mornings start here.';else if(currentFilter!=='all')title=(categories.find(c=>c.id===currentFilter)?.name||'Everyday favourites')+'.';
 $('#shop-title').textContent=title;
 $('#results-summary').innerHTML=query||currentFilter!=='all'||favouritesOnly?`<span>${filtered.length} ${filtered.length===1?'product':'products'}${query?` for “${escapeHTML(query)}”`:''}${favouritesOnly?' in your favourites':''}</span><button data-action="reset-shop">Clear filters</button>`:'';
 document.querySelectorAll('[data-tab]').forEach(b=>{const active=b.dataset.tab===currentFilter&&!favouritesOnly;b.classList.toggle('active',active);b.setAttribute('aria-pressed',active);});
 $('#view-all').innerHTML=allProducts&&!query&&currentFilter==='all'&&!favouritesOnly?`Show top picks ${icon('arrow-right')}`:`View all products ${icon('arrow-right')}`;
}
function setFilter(filter,scroll=true){currentFilter=filter;query='';$('#search').value='';favouritesOnly=false;allProducts=true;renderProducts();if(scroll)$('#shop').scrollIntoView({behavior:'smooth'});}
function renderCart(){
 updateHeader();
 renderFloatingBasket();
 if(!count()){$('#cart-items').innerHTML=`<div class="empty-cart">${icon('basket')}<h3>A little room for good things.</h3><p>Your basket is waiting for its first favourite.</p><button class="button primary" data-action="continue-shopping">Let’s go shopping ${icon('arrow-right')}</button></div>`;$('#cart-bottom').innerHTML='';return;}
 $('#cart-items').innerHTML=Object.entries(cart).map(([id,q])=>{const p=productById(id);return `<div class="cart-item">${sprite(p.image,p.name)}<div><h3>${p.name}</h3><small>${p.unit}</small>${quantity(p)}</div><div class="cart-item-right"><span>${money(p.price*q)}</span><button class="remove-item" data-remove="${id}" aria-label="Remove ${p.name} from basket">Remove</button></div></div>`;}).join('');
 $('#cart-bottom').innerHTML=`<div class="cart-bottom"><div class="cart-row"><span>Subtotal (${count()} items)</span><strong>${money(subtotal())}</strong></div><div class="cart-row subtle"><span>Demo collection store</span><span>${store}</span></div><div class="cart-row cart-total"><span>Example total</span><span>${money(subtotal())}</span></div><button class="button primary" data-action="checkout">Preview checkout ${icon('arrow-right')}</button><p class="small-note">No real order or payment. Fulfilment is for demonstration only.</p></div>`;
}
function changeCart(id,delta){const p=productById(id);if(!p)return;const q=(cart[id]||0)+delta;if(q>99){toast('You can add up to 99 of this item in the demo.');return;}if(q<=0)delete cart[id];else cart[id]=q;save();renderProducts();renderCart();if(delta>0)toast(`${p.name} added to your basket`);}
function openDialog(id){const el=$(id);if(!el.open)el.showModal();}
function renderFloatingBasket(){
 const bar=$('#floating-basket');const items=count();
 bar.hidden=items===0;document.body.classList.toggle('has-basket',items>0);
 if(!items){bar.innerHTML='';return;}
 bar.innerHTML=`<div class="basket-preview-images" aria-hidden="true">${Object.keys(cart).slice(0,3).map(id=>sprite(productById(id).image)).join('')}</div><div class="floating-basket-copy" aria-live="polite"><strong>${items} ${items===1?'item':'items'} in your basket</strong><span>${money(subtotal())} <small>· Sample total</small></span></div><button class="button primary" data-action="cart">View basket ${icon('arrow-right')}</button>`;
}
let previewMatches=[],activePreview=-1;
function closeSearch(){
 $('#search-preview').hidden=true;$('#search').setAttribute('aria-expanded','false');
 $('#search').removeAttribute('aria-activedescendant');activePreview=-1;
}
function renderSearchPreview(){
 const term=$('#search').value.trim().toLowerCase();activePreview=-1;$('#search').removeAttribute('aria-activedescendant');
 if(!term){closeSearch();return;}
 const words=term.split(/\s+/);
 previewMatches=products.filter(p=>words.every(word=>`${p.name} ${p.unit} ${p.category} ${p.id==='tea'?'chai':''}`.toLowerCase().includes(word)));
 $('#search-status').textContent=`${previewMatches.length} ${previewMatches.length===1?'product':'products'} found`;
 $('#search-results').innerHTML=previewMatches.slice(0,6).map(p=>`<button type="button" tabindex="-1" class="search-result" role="option" id="search-result-${p.id}" data-search-result="${p.id}" aria-selected="false">${sprite(p.image)}<span class="search-result-copy"><strong>${p.name}</strong><small>${p.unit}</small></span><span class="search-result-price">${money(p.price)}</span>${icon('arrow-up-right')}</button>`).join('');
 if(!previewMatches.length)$('#search-results').innerHTML='<div class="search-no-results">No matches yet.<span>Try “milk”, “bread” or “chai”.</span></div>';
 $('#search-all').hidden=previewMatches.length===0;
 $('#search-all').innerHTML=`View ${previewMatches.length===1?'product':`all ${previewMatches.length} products`} ${icon('arrow-right')}`;
 $('#search-preview').hidden=false;$('#search').setAttribute('aria-expanded','true');
}
function activatePreview(index){
 const options=[...$('#search-results').querySelectorAll('[role="option"]')];if(!options.length)return;
 activePreview=(index+options.length)%options.length;
 options.forEach((el,i)=>el.setAttribute('aria-selected',String(i===activePreview)));
 $('#search').setAttribute('aria-activedescendant',options[activePreview].id);
 options[activePreview].scrollIntoView({block:'nearest'});
}
function chooseSearchResult(id){
 const p=productById(id);if(!p)return;
 query=p.name;$('#search').value=p.name;currentFilter='all';favouritesOnly=false;allProducts=true;closeSearch();renderProducts();
 const card=$(`[data-detail="${id}"].product-title`)?.closest('.product-card');
 if(card){card.classList.add('search-highlight');card.querySelector('.product-title').focus({preventScroll:true});card.scrollIntoView({behavior:'smooth',block:'center'});}
}
function showSearchMatches(){
 query=$('#search').value.trim();currentFilter='all';favouritesOnly=false;allProducts=true;closeSearch();renderProducts();
 $('#shop-title').setAttribute('tabindex','-1');$('#shop-title').focus({preventScroll:true});$('#shop').scrollIntoView({behavior:'smooth'});
}
function renderStores(){$('#store-options').innerHTML=stores.map(s=>`<div class="store-option ${store===s.id?'selected':''}"><div><h3>${s.label}</h3><p>${s.detail}</p><a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(s.query)}" target="_blank" rel="noopener noreferrer">Search on Maps ${icon('arrow-up-right')}</a></div><button data-store="${s.id}">${store===s.id?'Selected':'Choose store'}</button></div>`).join('');}
function showDetail(id){const p=productById(id);if(!p)return;$('#product-detail').innerHTML=`<div class="detail-photo">${sprite(p.image,p.name)}</div><span class="eyebrow muted">${p.badge}</span><h2 id="detail-title">${p.name}</h2><p class="product-unit">${p.unit}</p><strong class="detail-price">${money(p.price)}</strong><p class="detail-description">${p.description}</p><div class="detail-controls"><button class="button primary" data-add="${p.id}">Add to basket ${icon('plus')}</button><button class="button outline" data-action="detail-cart">View basket ${icon('bag')}</button></div><p class="small-note">Sample product and price. Photography is illustrative; no live inventory is connected.</p>`;openDialog('#product-dialog');}
function showCheckout(){if(!count())return;$('#cart-dialog').close();$('#checkout-content').innerHTML=`<span class="eyebrow muted">ONE LAST LOOK</span><h2 id="checkout-title">Your everyday, sorted.</h2><p class="modal-intro">Here’s how a simple collection checkout could feel.</p><div class="pickup-option">${icon('store')}<div><strong>Collection at U-Mart ${store}</strong><small>Illustrative collection option · No booking will be made</small></div></div><div class="checkout-lines">${Object.entries(cart).map(([id,q])=>`<div class="cart-row"><span>${productById(id).name} × ${q}</span><strong>${money(productById(id).price*q)}</strong></div>`).join('')}<div class="cart-row cart-total"><span>Example total</span><span>${money(subtotal())}</span></div></div><p class="small-note">This is a prototype. Prices and products are samples. No personal information, payment or real order is required.</p><button class="button primary checkout-button" data-action="complete-demo">Complete the demo ${icon('arrow-right')}</button>`;openDialog('#checkout-dialog');}
function completeDemo(){$('#checkout-content').innerHTML=`<div class="success-icon">${icon('check')}</div><span class="eyebrow muted">A LITTLE PREVIEW OF WHAT’S POSSIBLE</span><h2 id="checkout-title">That’s your shopping sorted.</h2><p class="success-description">A smoother shopping experience, from the first search to the final basket.</p><p class="small-note" style="margin-top:17px">Demo complete. Nothing has been ordered or charged. Your basket is saved in this browser so you can keep exploring.</p><div class="success-actions"><button class="button primary" data-action="continue-shopping">Keep exploring ${icon('arrow-right')}</button><button class="button outline" data-action="clear-basket">Start a fresh basket</button></div>`;$('#checkout-title').setAttribute('tabindex','-1');$('#checkout-title').focus();}
function preserveFocus(el,callback){const attr=['data-add','data-minus','data-favourite','data-remove'].find(a=>el.hasAttribute(a));const value=attr?el.getAttribute(attr):null;const dialog=el.closest('dialog');callback();if(attr){const replacement=(dialog||document.querySelector('#product-grid')).querySelector(`[${attr}="${value}"]`);if(replacement)replacement.focus({preventScroll:true});}}
document.addEventListener('click',e=>{
 const searchResult=e.target.closest('[data-search-result]');if(searchResult){chooseSearchResult(searchResult.dataset.searchResult);return;}
 if(!e.target.closest('.search-form'))closeSearch();
 const el=e.target.closest('button,a');if(!el)return;
 if(el.matches('.close-dialog')){el.closest('dialog').close();return;}
 if(el.dataset.add){preserveFocus(el,()=>changeCart(el.dataset.add,1));return;}
 if(el.dataset.minus){preserveFocus(el,()=>changeCart(el.dataset.minus,-1));return;}
 if(el.dataset.remove){delete cart[el.dataset.remove];save();renderProducts();renderCart();return;}
 if(el.dataset.favourite){const id=el.dataset.favourite;preserveFocus(el,()=>{if(favourites.has(id)){favourites.delete(id);toast('Removed from favourites');}else{favourites.add(id);toast('Saved to your favourites');}save();updateHeader();renderProducts();});return;}
 if(el.dataset.detail){showDetail(el.dataset.detail);return;}
 if(el.dataset.category){setFilter(el.dataset.category);return;}
 if(el.dataset.tab){setFilter(el.dataset.tab,false);return;}
 if(el.dataset.filter){e.preventDefault();setFilter(el.dataset.filter);return;}
 if(el.dataset.store){store=el.dataset.store;save();updateHeader();renderCart();renderStores();$('#store-dialog').close();toast(`Your neighbourhood store is now ${store}`);return;}
 switch(el.dataset.action){
  case 'close-search':$('#search').focus({preventScroll:true});closeSearch();break;
  case 'cart':renderCart();openDialog('#cart-dialog');break;
  case 'detail-cart':$('#product-dialog').close();renderCart();openDialog('#cart-dialog');break;
  case 'stores':renderStores();openDialog('#store-dialog');break;
  case 'about-demo':openDialog('#demo-dialog');break;
  case 'start-demo':$('#demo-dialog').close();setFilter('all');break;
  case 'wishlist':favouritesOnly=true;query='';$('#search').value='';currentFilter='all';allProducts=true;renderProducts();$('#shop').scrollIntoView({behavior:'smooth'});break;
  case 'breakfast':setFilter('breakfast');break;
  case 'reset-shop':setFilter('all',false);break;
  case 'continue-shopping':document.querySelectorAll('dialog[open]').forEach(d=>d.close());$('#shop').scrollIntoView({behavior:'smooth'});break;
  case 'checkout':showCheckout();break;
  case 'complete-demo':completeDemo();break;
  case 'clear-basket':cart={};save();renderProducts();renderCart();$('#checkout-dialog').close();toast('A fresh basket, ready for good things.');break;
 }
});
$('.search-form').addEventListener('submit',e=>{e.preventDefault();if(activePreview>=0&&!$('#search-preview').hidden){chooseSearchResult(previewMatches[activePreview].id);}else renderSearchPreview();});
$('#search').addEventListener('input',renderSearchPreview);
$('#search').addEventListener('focus',renderSearchPreview);
$('#search').addEventListener('search',renderSearchPreview);
$('#search').addEventListener('keydown',e=>{
 if(e.key==='Escape'){e.preventDefault();closeSearch();}
 if(e.key==='ArrowDown'||e.key==='ArrowUp'){
  e.preventDefault();if($('#search-preview').hidden)renderSearchPreview();
  activatePreview(activePreview<0?(e.key==='ArrowDown'?0:Math.min(previewMatches.length,6)-1):activePreview+(e.key==='ArrowDown'?1:-1));
 }
});
$('.search-form').addEventListener('focusout',e=>{if(!$('.search-form').contains(e.relatedTarget))closeSearch();});
$('#search-all').addEventListener('click',showSearchMatches);
$('#view-all').addEventListener('click',()=>{const showingAll=allProducts&&!query&&currentFilter==='all'&&!favouritesOnly;currentFilter='all';query='';favouritesOnly=false;$('#search').value='';allProducts=!showingAll;renderProducts();});
document.querySelectorAll('dialog').forEach(d=>d.addEventListener('click',e=>{if(e.target===d){const r=d.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)d.close();}}));
hydrateIcons();renderCategories();renderProducts();renderCart();
