// ========================================================
// BOBOMUROD TECH STORE - ASOSIY ILOVA MANTIQI
// ========================================================

// Savat holati (LocalStorage bilan sinxron)
let cart = JSON.parse(localStorage.getItem('bobomurod_cart')) || [];
let currentCategory = 'all';
let searchQuery = '';
let currentSort = 'default';

// DOM elementlari yuklanganda ishga tushirish
document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  updateCartBadge();
  setupEventListeners();
});

// Hodisalarni sozlash
function setupEventListeners() {
  // Qidiruv inputi
  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.toLowerCase().trim();
      renderProducts();
    });
  }

  // Saralash tanlovi
  const sortSelect = document.getElementById('sort-select');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      currentSort = e.target.value;
      renderProducts();
    });
  }

  // Aloqa formasi
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('cf-name').value;
      const phone = document.getElementById('cf-phone').value;
      const message = document.getElementById('cf-message').value;

      showToast(`Rahmat, ${name}! Xabaringiz Bobomurodga qabul qilindi. Tez orada +998954442888 raqamidan aloqaga chiqamiz.`, 'success');
      contactForm.reset();
    });
  }
}

// Kategoriyani o'zgartirish
function setCategory(category) {
  currentCategory = category;

  // Tugmalarni faollashtirish
  document.querySelectorAll('.cat-pill').forEach(btn => {
    if (btn.dataset.category === category) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // Agar aloqa bo'lsa, aloqa bo'limiga o'tish
  if (category === 'aloqa') {
    const contactSection = document.getElementById('aloqa-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
    return;
  }

  renderProducts();

  // Mahsulotlar bo'limiga silliq o'tish
  const catalogSection = document.getElementById('katalog-section');
  if (catalogSection) {
    catalogSection.scrollIntoView({ behavior: 'smooth' });
  }
}

// Mahsulotlarni filtrlash va saralash
function getFilteredProducts() {
  let list = [...productsData];

  // Kategoriya filtri
  if (currentCategory !== 'all' && currentCategory !== 'aloqa') {
    list = list.filter(p => p.category === currentCategory);
  }

  // Qidiruv filtri
  if (searchQuery) {
    list = list.filter(p => 
      p.name.toLowerCase().includes(searchQuery) ||
      p.description.toLowerCase().includes(searchQuery) ||
      p.categoryName.toLowerCase().includes(searchQuery)
    );
  }

  // Saralash
  if (currentSort === 'price-asc') {
    list.sort((a, b) => a.price - b.price);
  } else if (currentSort === 'price-desc') {
    list.sort((a, b) => b.price - a.price);
  } else if (currentSort === 'rating') {
    list.sort((a, b) => b.rating - a.rating);
  }

  return list;
}

// Mahsulotlarni chizish (Render)
function renderProducts() {
  const container = document.getElementById('products-grid');
  const emptyState = document.getElementById('empty-products');
  const countBadge = document.getElementById('products-count');

  if (!container) return;

  const filtered = getFilteredProducts();

  if (countBadge) {
    countBadge.textContent = `${filtered.length} ta mahsulot topildi`;
  }

  if (filtered.length === 0) {
    container.innerHTML = '';
    if (emptyState) emptyState.classList.remove('hidden');
    return;
  }

  if (emptyState) emptyState.classList.add('hidden');

  container.innerHTML = filtered.map(product => {
    let badgeClass = 'badge-blue';
    if (product.badge.includes('Xit') || product.badge.includes('Top')) badgeClass = 'badge-gold';
    if (product.badge.includes('Yangi')) badgeClass = 'badge-emerald';
    if (product.badge.includes('Gaming') || product.badge.includes('Maksimal')) badgeClass = 'badge-purple';

    const discountPercentage = product.oldPrice 
      ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100) 
      : 0;

    return `
      <div class="glass-card rounded-2xl overflow-hidden flex flex-col justify-between group border border-slate-800 hover:border-blue-500/50 transition-all duration-300">
        <div>
          <!-- Rasm va badge qismi -->
          <div class="product-img-wrap h-56 w-full relative overflow-hidden bg-slate-900">
            <img 
              src="${product.image}" 
              alt="${product.name}" 
              loading="lazy"
              class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
            
            <!-- Badges -->
            <div class="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
              <span class="${badgeClass} text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
                ${product.badge}
              </span>
              ${discountPercentage > 0 ? `
                <span class="bg-rose-600 text-white text-[11px] font-bold px-2 py-0.5 rounded-full shadow-sm">
                  -${discountPercentage}%
                </span>
              ` : ''}
            </div>

            <!-- Tezkor ko'rish tugmasi -->
            <button 
              onclick="openProductModal(${product.id})"
              class="absolute top-3 right-3 w-9 h-9 rounded-full bg-slate-900/80 hover:bg-blue-600 text-white flex items-center justify-center backdrop-blur-md transition-colors duration-200"
              title="Batafsil ma'lumot"
            >
              <i class="fas fa-eye text-sm"></i>
            </button>
            
            <div class="absolute bottom-2 left-3">
              <span class="text-xs font-medium text-blue-400 bg-blue-950/80 border border-blue-800/60 px-2 py-0.5 rounded">
                ${product.categoryName}
              </span>
            </div>
          </div>

          <!-- Ma'lumot qismi -->
          <div class="p-5">
            <!-- Reyting -->
            <div class="flex items-center gap-1.5 text-xs text-amber-400 mb-2">
              <i class="fas fa-star"></i>
              <span class="font-bold text-slate-200">${product.rating}</span>
              <span class="text-slate-500">(${product.reviewsCount} sharh)</span>
            </div>

            <h3 class="font-bold text-base text-slate-100 hover:text-blue-400 transition-colors line-clamp-2 mb-2 cursor-pointer" onclick="openProductModal(${product.id})">
              ${product.name}
            </h3>

            <p class="text-slate-400 text-xs line-clamp-2 mb-4 leading-relaxed">
              ${product.description}
            </p>

            <!-- Qisqa xususiyatlar chips -->
            <div class="flex flex-wrap gap-1.5 mb-4">
              ${Object.entries(product.specs).slice(0, 2).map(([key, val]) => `
                <span class="text-[11px] bg-slate-800/80 text-slate-300 px-2 py-0.5 rounded border border-slate-700/50">
                  ${val}
                </span>
              `).join('')}
            </div>
          </div>
        </div>

        <!-- Narx va harakat qismi -->
        <div class="px-5 pb-5 pt-2 border-t border-slate-800/80 flex items-center justify-between gap-3 bg-slate-900/30">
          <div>
            ${product.oldPrice ? `
              <div class="text-xs text-slate-500 line-through font-medium">
                ${formatPrice(product.oldPrice)}
              </div>
            ` : ''}
            <div class="text-lg font-extrabold text-blue-400 tracking-tight">
              ${formatPrice(product.price)}
            </div>
          </div>

          <button 
            onclick="addToCart(${product.id})"
            class="px-4 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold text-xs flex items-center gap-2 shadow-lg shadow-blue-600/30 active:scale-95 transition-all"
          >
            <i class="fas fa-shopping-cart text-xs"></i>
            <span>Savatga</span>
          </button>
        </div>
      </div>
    `;
  }).join('');
}

// ========================================================
// SAVAT FUNKSIYALARI
// ========================================================

function addToCart(productId) {
  const product = productsData.find(p => p.id === productId);
  if (!product) return;

  const existingItem = cart.find(item => item.id === productId);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      categoryName: product.categoryName,
      quantity: 1
    });
  }

  saveCart();
  updateCartBadge();
  showToast(`"${product.name.slice(0, 25)}..." savatga qo'shildi!`, 'success');
}

function updateCartQuantity(productId, delta) {
  const item = cart.find(i => i.id === productId);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    removeFromCart(productId);
    return;
  }

  saveCart();
  renderCartItems();
  updateCartBadge();
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  saveCart();
  renderCartItems();
  updateCartBadge();
  showToast("Mahsulot savatdan olib tashlandi", 'info');
}

function clearCart() {
  if (cart.length === 0) return;
  if (confirm("Savatni butunlay tozalashni xohlaysizmi?")) {
    cart = [];
    saveCart();
    renderCartItems();
    updateCartBadge();
    showToast("Savat tozalandi", 'info');
  }
}

function saveCart() {
  localStorage.setItem('bobomurod_cart', JSON.stringify(cart));
}

function updateCartBadge() {
  const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const badges = document.querySelectorAll('.cart-badge-count');
  badges.forEach(badge => {
    badge.textContent = totalCount;
    if (totalCount > 0) {
      badge.classList.remove('hidden');
    } else {
      badge.classList.add('hidden');
    }
  });
}

// Savat panelini ochish/yopish
function toggleCartDrawer() {
  const drawer = document.getElementById('cart-drawer');
  const overlay = document.getElementById('cart-overlay');
  if (!drawer || !overlay) return;

  const isOpen = !drawer.classList.contains('translate-x-full');
  if (isOpen) {
    drawer.classList.add('translate-x-full');
    overlay.classList.add('hidden');
    document.body.style.overflow = '';
  } else {
    drawer.classList.remove('translate-x-full');
    overlay.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    renderCartItems();
  }
}

function renderCartItems() {
  const container = document.getElementById('cart-items-container');
  const totalElem = document.getElementById('cart-total-price');
  const emptyState = document.getElementById('cart-empty-state');
  const footerElem = document.getElementById('cart-footer');

  if (!container) return;

  if (cart.length === 0) {
    container.innerHTML = '';
    if (emptyState) emptyState.classList.remove('hidden');
    if (footerElem) footerElem.classList.add('hidden');
    return;
  }

  if (emptyState) emptyState.classList.add('hidden');
  if (footerElem) footerElem.classList.remove('hidden');

  const totalSum = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  if (totalElem) {
    totalElem.textContent = formatPrice(totalSum);
  }

  container.innerHTML = cart.map(item => `
    <div class="flex items-center gap-3 p-3 bg-slate-800/60 rounded-xl border border-slate-700/60 hover:border-slate-600 transition-colors">
      <img src="${item.image}" alt="${item.name}" class="w-16 h-16 rounded-lg object-cover bg-slate-900 flex-shrink-0" />
      <div class="flex-1 min-w-0">
        <h4 class="text-xs font-semibold text-slate-200 truncate">${item.name}</h4>
        <div class="text-xs text-blue-400 font-bold mt-0.5">${formatPrice(item.price)}</div>
        
        <div class="flex items-center gap-2 mt-2">
          <div class="flex items-center border border-slate-700 rounded-lg bg-slate-900/80">
            <button 
              onclick="updateCartQuantity(${item.id}, -1)" 
              class="w-6 h-6 flex items-center justify-center text-slate-300 hover:text-white hover:bg-slate-700 rounded-l transition-colors"
            >
              -
            </button>
            <span class="w-8 text-center text-xs font-bold text-white">${item.quantity}</span>
            <button 
              onclick="updateCartQuantity(${item.id}, 1)" 
              class="w-6 h-6 flex items-center justify-center text-slate-300 hover:text-white hover:bg-slate-700 rounded-r transition-colors"
            >
              +
            </button>
          </div>
          <span class="text-[11px] text-slate-400">
            Jami: <strong class="text-slate-200">${formatPrice(item.price * item.quantity)}</strong>
          </span>
        </div>
      </div>
      <button 
        onclick="removeFromCart(${item.id})"
        class="text-slate-400 hover:text-rose-400 p-2 text-sm transition-colors"
        title="O'chirish"
      >
        <i class="fas fa-trash-alt"></i>
      </button>
    </div>
  `).join('');
}

// ========================================================
// BUYURTMA BERISH VA MODAL TIZIMI
// ========================================================

function openCheckoutModal() {
  if (cart.length === 0) {
    showToast("Savatingiz bo'sh!", 'warning');
    return;
  }
  toggleCartDrawer(); // Savatni yopish

  const modal = document.getElementById('checkout-modal');
  const summaryElem = document.getElementById('checkout-summary');
  const totalElem = document.getElementById('checkout-total');

  if (!modal) return;

  const totalSum = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  
  if (summaryElem) {
    summaryElem.innerHTML = cart.map(item => `
      <div class="flex justify-between items-center text-xs py-1 border-b border-slate-800 text-slate-300">
        <span class="truncate max-w-[200px]">${item.name} (${item.quantity} dona)</span>
        <span class="font-semibold text-blue-400">${formatPrice(item.price * item.quantity)}</span>
      </div>
    `).join('');
  }

  if (totalElem) {
    totalElem.textContent = formatPrice(totalSum);
  }

  modal.classList.remove('hidden');
}

function closeCheckoutModal() {
  const modal = document.getElementById('checkout-modal');
  if (modal) modal.classList.add('hidden');
}

function submitCheckout(e) {
  e.preventDefault();
  const name = document.getElementById('order-name').value;
  const phone = document.getElementById('order-phone').value;
  const address = document.getElementById('order-address').value;

  const totalSum = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const itemsList = cart.map(i => `${i.name} (${i.quantity} dona) - ${formatPrice(i.price * i.quantity)}`).join('\n');

  // Telegramga tayyor xabar shabloni
  const messageText = `Assalomu alaykum Bobomurod!\nYangi buyurtma:\n\nMijoz: ${name}\nTel: ${phone}\nManzil: ${address}\n\nMahsulotlar:\n${itemsList}\n\nJami: ${formatPrice(totalSum)}`;
  
  closeCheckoutModal();
  cart = [];
  saveCart();
  updateCartBadge();

  // Muvaffaqiyat xabari
  showToast(`Buyurtma qabul qilindi! Bobomurod (+998954442888) tez orada siz bilan bog'lanadi.`, 'success');

  // Foydalanuvchiga Telegram orqali ham yuborish imkoni haqida modal yoki taklif
  setTimeout(() => {
    if (confirm("Buyurtmangizni Bobomurodga to'g'ridan-to'g'ri Telegram orqali yuborishni xohlaysizmi?")) {
      const tgUrl = `https://t.me/+998954442888?text=${encodeURIComponent(messageText)}`;
      window.open(tgUrl, '_blank');
    }
  }, 1000);
}

// ========================================================
// MAHSULOT HAQIDA BATAFSIL MODAL (QUICK VIEW)
// ========================================================

function openProductModal(productId) {
  const product = productsData.find(p => p.id === productId);
  if (!product) return;

  const modal = document.getElementById('product-detail-modal');
  const content = document.getElementById('product-modal-content');
  if (!modal || !content) return;

  content.innerHTML = `
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="rounded-xl overflow-hidden bg-slate-900 border border-slate-800">
        <img src="${product.image}" alt="${product.name}" class="w-full h-80 object-cover" />
      </div>
      <div class="flex flex-col justify-between">
        <div>
          <span class="text-xs font-bold text-blue-400 bg-blue-950/90 border border-blue-800/80 px-2.5 py-1 rounded">
            ${product.categoryName}
          </span>
          <h2 class="text-xl font-bold text-white mt-2 mb-2">${product.name}</h2>
          
          <div class="flex items-center gap-2 mb-4">
            <div class="text-amber-400 text-sm">
              <i class="fas fa-star"></i> <span class="font-bold text-white">${product.rating}</span>
            </div>
            <span class="text-slate-400 text-xs">(${product.reviewsCount} ta ijobiy fikr)</span>
          </div>

          <div class="mb-4">
            ${product.oldPrice ? `
              <span class="text-slate-500 line-through text-sm mr-2">${formatPrice(product.oldPrice)}</span>
            ` : ''}
            <span class="text-2xl font-black text-blue-400">${formatPrice(product.price)}</span>
          </div>

          <p class="text-slate-300 text-sm mb-4 leading-relaxed">${product.description}</p>

          <h4 class="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Texnik ko'rsatkichlar:</h4>
          <div class="space-y-1.5 mb-6">
            ${Object.entries(product.specs).map(([key, val]) => `
              <div class="flex justify-between text-xs py-1 border-b border-slate-800">
                <span class="text-slate-400 capitalize">${key}:</span>
                <span class="text-slate-200 font-semibold">${val}</span>
              </div>
            `).join('')}
          </div>
        </div>

        <div class="flex gap-3">
          <button 
            onclick="addToCart(${product.id}); closeProductModal();"
            class="flex-1 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl text-sm flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30 transition-all"
          >
            <i class="fas fa-shopping-cart"></i> Savatga qo'shish
          </button>
          <a 
            href="tel:+998954442888" 
            class="px-4 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-sm flex items-center justify-center gap-2 transition-all"
            title="Bobomurodga qo'ng'iroq qilish"
          >
            <i class="fas fa-phone-alt"></i> Bog'lanish
          </a>
        </div>
      </div>
    </div>
  `;

  modal.classList.remove('hidden');
}

function closeProductModal() {
  const modal = document.getElementById('product-detail-modal');
  if (modal) modal.classList.add('hidden');
}

// ========================================================
// TOAST BILDIRISHNOMA TIZIMI
// ========================================================

function showToast(message, type = 'info') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  let icon = '<i class="fas fa-info-circle text-blue-400"></i>';
  let borderClass = 'border-blue-500/50';

  if (type === 'success') {
    icon = '<i class="fas fa-check-circle text-emerald-400"></i>';
    borderClass = 'border-emerald-500/50';
  } else if (type === 'warning') {
    icon = '<i class="fas fa-exclamation-triangle text-amber-400"></i>';
    borderClass = 'border-amber-500/50';
  }

  toast.className = `toast-msg flex items-center gap-3 bg-slate-900 text-slate-100 text-xs px-4 py-3 rounded-xl shadow-xl border ${borderClass} max-w-sm pointer-events-auto`;
  toast.innerHTML = `
    <span class="text-base flex-shrink-0">${icon}</span>
    <span class="flex-1 leading-snug">${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// Mobil navigatsiya menyusi
function toggleMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  if (menu) {
    menu.classList.toggle('hidden');
  }
}
