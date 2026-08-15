const houses = [
    {
        id: 1,
        title: 'COMPRAMOS TU CASA EN CIUDAD JUAREZ, CHIHUAHUA',
        location: 'CIUDAD JUAREZ, CHIHUAHUA',
        price: 'CUALQUIER PRECIO',
        image: './imagenes_casas/compra.png',
        badge: 'Anuncio',
        bedrooms: "N/A",
        bathrooms: "N/A",
        area: '120 m²',
        description: 'COMPRAMOS CASAS EN CIUDAD JUAREZ, CHIHUAHUA.',
        year: "N/A",
        heating: 'N/A',
        parking: 'N/A',
        extra: 'N/A'
    },
    {
        id: 2,
        title: 'Casa en Puerto Anapra SOLO CONTADO',
        location: 'Puerto Anapra, Ciudad Juárez, Chihuahua',
        price: '$450.000',
        image: './imagenes_casas/casa2.jpeg',
        image2: './imagenes_casas/casa2.1.jpeg',
        image3: './imagenes_casas/casa2.2.jpeg',
        image4: './imagenes_casas/casa2.3.jpeg',
        badge: 'Disponible',
        bedrooms: 1,
        bathrooms: 1,
        area: '40 m²',
        description: 'Casa de 2 plantas, 1 recamara, 1 baño, piso de ceramica, enrejada, con balcon. $450,000.00 PRECIO INCLUYE GASTOS DE ESCRITUCACIÓN A NOMBRE DEL COMPRADOR.',
        year: 2020,
        heating: 'N/A',
        parking: 'Exterior',
        extra: 'Balcón'
    },
    {
        id: 3,
        title: 'Terreno en venta en Las Choapas, Veracruz',
        location: 'Calle Manzano S/N, Colonia Ignacio Zaragoza, Las Choapas, Veracruz',
        price: '$150,000',
        image: './imagenes_casas/casa3.jpeg',
        image2: './imagenes_casas/casa3.1.jpeg',
        image3: './imagenes_casas/casa3.2.jpeg',
        image4: './imagenes_casas/casa3.3.jpeg',
        badge: 'Disponible',
        bedrooms: 0,
        bathrooms: 0,
        area: '260 m²',
        description: 'Se vende terreno de 260 m² en Las Choapas, Veracruz. Ubicado en Calle Manzano S/N, Colonia Ignacio Zaragoza. Ideal para construcción de vivienda. Precio: $150,000.00. Se entrega Limpio y delimitado, el precio incluye gastos de traslado de dominio a nombre del comprador.',
        year: 0,
        heating: 'N/A',
        parking: 'S/A',
        extra: 'N/A'
    },
    {
        id: 4,
        title: 'Terreno de 210m² en venta, con Construcción de 20 m², en Las Choapas, Veracruz',
        location: 'Prolongación Cacao Colonia Miguel Hidalgo, Las Choapas, Veracruz',
        price: '$230,000',
        image: './imagenes_casas/casa4.jpeg',
        image2: './imagenes_casas/casa4.1.jpeg',
        image3: './imagenes_casas/casa4.2.jpeg',
        image4: './imagenes_casas/casa4.3.jpeg',
        badge: 'Disponible',
        bedrooms: 1,
        bathrooms: 0,
        area: '210 m²',
        description: 'Se vende terrreno de 210 m² con construcción de 20 m² en Las Choapas, Veracruz. Ubicado en Prolongación Cacao Colonia Miguel Hidalgo. Se entrega 100% habitable, precio incluye gastos de traslado de dominio a nombre del comprador.',
        year: 0,
        heating: 'N/A',
        parking: 'N/A',
        extra: 'N/A'
    },
    {
        id: 5,
        title: 'N/A',
        location: 'N/A',
        price: 'N/A',
        image: 'N/A',
        badge: 'N/A',
        bedrooms: 0,
        bathrooms: 0,
        area: 'N/A',
        description: 'N/A',
        year: 0,
        heating: 'N/A',
        parking: 'N/A',
        extra: 'N/A'
    },
    {
        id: 6,
        title: 'N/A',
        location: 'N/A',
        price: 'N/A',
        image: 'N/A',
        badge: 'N/A',
        bedrooms: 0,
        bathrooms: 0,
        area: 'N/A',
        description: 'N/A',
        year: 0,
        heating: 'N/A',
        parking: 'N/A',
        extra: 'N/A'
    }
];

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('open');
        });
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('open');
            });
        });
    }

    // Catalog
    const catalogGrid = document.getElementById('catalogGrid');
    if (catalogGrid) {
        catalogGrid.innerHTML = houses.map(house => `
            <a href="detalle.html?id=${house.id}" class="house-card">
                <div class="house-card-image">
                    <img src="${house.image}" alt="${house.title}" loading="lazy">
                    <span class="house-card-badge">${house.badge}</span>
                </div>
                <div class="house-card-body">
                    <h3 class="house-card-title">${house.title}</h3>
                    <p class="house-card-location">📍 ${house.location}</p>
                    <div class="house-card-features">
                        <span>🛏 ${house.bedrooms} hab.</span>
                        <span>🛁 ${house.bathrooms} baños</span>
                        <span>📐 ${house.area}</span>
                    </div>
                    <p class="house-card-price">${house.price}</p>
                </div>
            </a>
        `).join('');
    }

    // Detail page
    const detailContainer = document.getElementById('detailContainer');
    if (detailContainer) {
        const params = new URLSearchParams(window.location.search);
        const houseId = parseInt(params.get('id'));
        const house = houses.find(h => h.id === houseId);
        if (house) {
            // Collect all image fields (image, image2, image3, ...)
            const images = Object.keys(house)
                .filter(k => /^image(\d*)$/.test(k))
                .sort((a, b) => {
                    // keep natural order: image, image2, image3
                    const na = a === 'image' ? 0 : parseInt(a.replace('image', ''), 10) || 0;
                    const nb = b === 'image' ? 0 : parseInt(b.replace('image', ''), 10) || 0;
                    return na - nb;
                })
                .map(k => house[k])
                .filter(Boolean);

            const mainImg = document.getElementById('detailImage');
            const thumbs = document.getElementById('detailThumbs');

            // Ensure we have an images array (fallback to single image)
            const normalizedImages = images.length > 0 ? images : (house.image ? [house.image] : []);
            let currentIndex = 0;

            // Reference to controls
            const prevBtn = document.getElementById('detailPrev');
            const nextBtn = document.getElementById('detailNext');

            function showImage(index) {
                if (!normalizedImages.length) {
                    mainImg.src = '';
                    return;
                }
                currentIndex = (index + normalizedImages.length) % normalizedImages.length;
                mainImg.src = normalizedImages[currentIndex];
            }

            // Initialize
            showImage(0);

            // Render thumbnails (kept hidden by default via CSS) and wire clicks to set index
            if (thumbs) {
                if (normalizedImages.length <= 1) {
                    thumbs.innerHTML = '';
                } else {
                    thumbs.innerHTML = normalizedImages.map((src, idx) => `
                        <button class="thumb-btn" data-index="${idx}" aria-label="Ver imagen ${idx + 1}">
                            <img src="${src}" loading="lazy" alt="Miniatura ${idx + 1}">
                        </button>
                    `).join('');

                    thumbs.querySelectorAll('.thumb-btn').forEach(btn => {
                        btn.addEventListener('click', (e) => {
                            const idx = parseInt(e.currentTarget.dataset.index, 10);
                            if (!Number.isNaN(idx)) showImage(idx);
                        });
                    });
                }
            }

            // Prev/Next handlers
            if (prevBtn) prevBtn.addEventListener('click', () => showImage(currentIndex - 1));
            if (nextBtn) nextBtn.addEventListener('click', () => showImage(currentIndex + 1));

            // Optional: keyboard navigation
            document.addEventListener('keydown', (e) => {
                if (e.key === 'ArrowLeft') showImage(currentIndex - 1);
                if (e.key === 'ArrowRight') showImage(currentIndex + 1);
            });

            // LIGHTBOX (full-size view)
            const lightbox = document.getElementById('lightbox');
            const lightboxImage = document.getElementById('lightboxImage');
            const lightboxClose = document.getElementById('lightboxClose');
            const lightboxPrev = document.getElementById('lightboxPrev');
            const lightboxNext = document.getElementById('lightboxNext');

            function openLightbox(index) {
                if (!normalizedImages.length) return;
                currentIndex = (index + normalizedImages.length) % normalizedImages.length;
                if (lightboxImage) lightboxImage.src = normalizedImages[currentIndex];
                if (lightbox) { lightbox.classList.add('active'); lightbox.setAttribute('aria-hidden','false'); }
            }

            function closeLightbox() {
                if (lightbox) { lightbox.classList.remove('active'); lightbox.setAttribute('aria-hidden','true'); }
            }

            // Open lightbox when clicking the main image
            if (mainImg) {
                mainImg.style.cursor = 'zoom-in';
                mainImg.addEventListener('click', () => openLightbox(currentIndex));
            }

            // Lightbox controls
            if (lightboxPrev) lightboxPrev.addEventListener('click', () => { showImage(currentIndex - 1); if (lightboxImage) lightboxImage.src = normalizedImages[currentIndex]; });
            if (lightboxNext) lightboxNext.addEventListener('click', () => { showImage(currentIndex + 1); if (lightboxImage) lightboxImage.src = normalizedImages[currentIndex]; });
            if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);

            // Click outside image closes
            if (lightbox) {
                lightbox.addEventListener('click', (e) => {
                    if (e.target === lightbox) closeLightbox();
                });
            }

            // Keyboard for lightbox (Escape to close, arrows to navigate)
            document.addEventListener('keydown', (e) => {
                if (!lightbox || !lightbox.classList.contains('active')) return;
                if (e.key === 'Escape') closeLightbox();
                if (e.key === 'ArrowLeft') { showImage(currentIndex - 1); if (lightboxImage) lightboxImage.src = normalizedImages[currentIndex]; }
                if (e.key === 'ArrowRight') { showImage(currentIndex + 1); if (lightboxImage) lightboxImage.src = normalizedImages[currentIndex]; }
            });

            document.getElementById('detailBadge').textContent = house.badge;
            document.getElementById('detailTitle').textContent = house.title;
            document.getElementById('detailLocation').textContent = '📍 ' + house.location;
            document.getElementById('detailPrice').textContent = house.price;
            document.getElementById('detailFeatures').innerHTML = `
                <span>🛏 ${house.bedrooms} habitaciones</span>
                <span>🛁 ${house.bathrooms} baños</span>
                <span>📐 ${house.area}</span>
            `;
            document.getElementById('detailDescription').textContent = house.description;
            document.getElementById('detailGrid').innerHTML = `
                <div><strong>Año de construcción:</strong> ${house.year}</div>
                <div><strong>Calefacción:</strong> ${house.heating}</div>
                <div><strong>Parking:</strong> ${house.parking}</div>
                <div><strong>Extra:</strong> ${house.extra}</div>
            `;
        } else {
            detailContainer.innerHTML = `
                <div style="text-align:center; padding:60px;">
                    <h2>Propiedad no encontrada</h2>
                    <p>Lo sentimos, la casa que buscas no está en nuestro catálogo.</p>
                    <a href="catalogo.html" class="btn btn-primary" style="margin-top:20px;">Ver catálogo</a>
                </div>
            `;
        }
    }
});