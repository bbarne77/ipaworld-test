// Находим кнопку с вопросом и меню
const helpBubble = document.querySelector('.help-bubble');
const helpMenu = document.getElementById('helpMenu');

// Находим элементы модального окна с информацией
const infoModal = document.getElementById('infoModal');
const infoModalTitle = document.getElementById('infoModalTitle');
const infoModalText = document.getElementById('infoModalText');
const infoModalCloseBtn = document.querySelector('.info-modal-close-btn');

// Находим все кнопки в меню помощи
const helpMenuButtons = document.querySelectorAll('.help-menu-btn');

// Данные для модальных окон
const infoContent = {
    'certificate': {
        title: '🔐 Что такое Сертификат?',
        text: 'Сертификат — это специальное программное обеспечение для вашего <strong>iOS-устройства</strong>, которое открывает доступ к установке <strong>сторонних приложений и игр</strong> из альтернативных источников, помимо App Store.<br><br>Вы можете <strong>безопасно</strong> загружать нужные вам приложения:<br><ul><li>📲 не нарушая при этом никаких <strong>правил</strong> и <strong>законов</strong>;</li><li>🛡️ сохраняя <strong>полную безопасность</strong> ваших данных и устройства.</li></ul><br>Это надежный способ получить больше свободы без риска!'
    },
    'get-certificate': {
        title: 'Инструкция по установке сертификата',
        text: `
            <div class="step-container">
                <div class="step" data-step-id="1">
                    <strong>Как получить сертификат в боте.</strong>
                    <p>Отправляете <strong>/start</strong> боту. Нажимаете на кнопку "Проверить UDID". После сообщения "Отправьте UDID", вам нужно отправить свой UDID, который вы указывали при оплате сертификата. Нажимаете на кнопку "Получить сертификат [Имя вашего сертификата]". Бот пришлет вам два файла вашего сертификата - <strong>P12</strong> и <strong>Mobileprovision</strong>, а также ссылки для быстрой установки вашего сертификата.</p>
                    <div class="step-buttons">
                        <button class="next-step-btn">Следующий шаг</button>
                    </div>
                </div>
                <div class="step hidden" data-step-id="2">
                    <strong>Как сохранить сертификат на устройство.</strong>
                    <p>Когда бот прислал вам два файла сертификата, то вам нужно нажать на один из них. В открывшемся окне нажмите на кнопку, расположенную сверху.</p>
                    <img src="https://github.com/viibbee/Info/blob/main/cert1.png?raw=true" alt="Шаг 1">
                    <div class="step-buttons">
                        <button class="prev-step-btn">Предыдущий шаг</button>
                        <button class="next-step-btn">Следующий шаг</button>
                    </div>
                </div>
                <div class="step hidden" data-step-id="3">
                    <p>У вас снова откроется окно, в нем выберите кнопку "Сохранить в файлы". Выберите место для сохранения сертификата.</p>
                    <img src="https://github.com/viibbee/Info/blob/main/cert2.png?raw=true" alt="Шаг 2">
                    <p>Нажмите на кнопку "Сохранить" слева вверху. Повторите для второго файла сертификата.</p>
                    <div class="step-buttons">
                        <button class="prev-step-btn">Предыдущий шаг</button>
                        <button class="close-modal-btn">Закрыть</button>
                    </div>
                </div>
            </div>
        `
    },
    'scarlet': {
        title: 'Как установить Scarlet?',
        text: 'Инструкция по установке Scarlet: Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.'
    },
    'gbox': {
        title: 'Как установить Gbox?',
        text: 'Инструкция по установке Gbox: Maecenas sed diam eget risus varius blandit sit amet non magna.'
    },
    'esign': {
        title: 'Как установить ESign?',
        text: 'Инструкция по установке ESign: Donec id elit non mi porta gravida at eget metus.'
    },
   // ⚠️ Обновлено под ваш текст + кнопка Пользовательского соглашения
'warranty': {
    title: 'Условия гарантии',
    text: `
      <p><strong>Покупая сертификат, вы соглашаетесь с нашими условиями!</strong></p>

      <p><strong>1. Гарантия на сертификаты:</strong></p>
      <ul>
        <li><strong>Бюджетный сертификат</strong> — 1 месяц</li>
        <li><strong>Моментальный сертификат</strong> — 3 месяца</li>
        <li><strong>Супермоментальный сертификат</strong> — 6 месяцев</li>
        <li><strong>Парный сертификат</strong> — 1 месяц</li>
      </ul>

      <p>Если ваш сертификат был отозван или перестал работать по причине, связанной непосредственно с сертификатом, в рамках гарантийного срока мы предоставим <strong>замену на аналогичный сертификат</strong>.</p>

      <p>Замена производится максимально быстро. Гарантийный срок рассчитывается <strong>с даты регистрации сертификата</strong>.</p>

      <p><strong>Вышеуказанные условия гарантии действуют с 01.07.2026.</strong></p>

      <p><em>Важно! Сертификаты, зарегистрированные в период с 17.09.2025 по 30.06.2026, обслуживаются на условиях гарантии, действовавших на момент их регистрации.</em></p>

      <p><strong>Возврат денежных средств или частичное возмещение стоимости сертификата не предусмотрены.</strong> Приобретая сертификат, вы понимаете, что установка приложений через сторонние источники осуществляется за пределами официального App Store.</p>

      <p><strong>2. Личный сертификат</strong></p>
      <p>Вы приобретаете <strong>личный сертификат разработчика Apple</strong>, который позволяет устанавливать дополнительное программное обеспечение на ваш iPhone или iPad.</p>

      <p><strong>3. Возврат денежных средств</strong></p>
      <p>Возврат денежных средств за приобретённый сертификат не производится.</p>
      <p>Если сертификат перестал работать в течение гарантийного срока, предусмотрена <strong>замена сертификата в соответствии с условиями гарантии</strong>, а не возврат денежных средств.</p>
      <p>Если сертификат полностью исправен, но возникают сложности с установкой приложений по причинам, не связанным с работоспособностью сертификата, данные ситуации не являются гарантийным случаем.</p>

      <p><strong>4. Помощь с установкой приложений</strong></p>
      <p>Наша основная специализация — <strong>выдача и обслуживание сертификатов</strong>.</p>
      <p>Если сертификат работает исправно, а сложности возникают непосредственно при установке отдельных приложений (например, TikTok), рекомендуем воспользоваться нашей подробной инструкцией.</p>
      <p>Мы предоставляем всю необходимую информацию, которая поможет самостоятельно установить нужные приложения.</p>

      <p><strong>5. Отзыв сертификата</strong></p>
      <p>Apple может отозвать сертификат в любой момент. На такой случай распространяется наша гарантия, если ситуация соответствует её условиям.</p>

      <p><strong>5.1. Почему Apple может отозвать сертификат?</strong></p>
      <p>Сертификаты могут быть отозваны в результате действий или решений Apple, в том числе в связи с несоблюдением условий и соглашений программы Apple Developer.</p>
      <p>Мы не являемся официальным магазином приложений или представителем Apple. Сертификаты являются цифровым товаром и предоставляются на условиях, описанных в настоящем соглашении.</p>
      <p>В связи с этим <strong>мы не можем гарантировать, что сертификат будет действовать бессрочно</strong>, однако в рамках установленного гарантийного периода предоставляем замену в соответствии с условиями гарантии.</p>

      <p><strong>6. Принятие условий</strong></p>
      <p>Приобретая сертификат у нас, вы подтверждаете, что ознакомились с данными условиями и принимаете их.</p>

      <p><strong>7. Сертификат был отозван до покупки</strong></p>
      <p>Если до приобретения нового сертификата у вас уже был отозванный сертификат, но вы не сообщили об этом продавцу, такая ситуация может повлиять на возможность предоставления гарантийной замены.</p>

      <p><strong>8. Срок регистрации</strong></p>
      <p>Мы не можем повлиять на скорость регистрации сертификата, поскольку регистрация осуществляется на стороне Apple.</p>
      <p>Мы не знаем точную дату готовности сертификата. Пожалуйста, периодически проверяйте статус готовности в боте самостоятельно.</p>

      <p>С уважением, <strong>@bbarne77</strong></p>
    `
  }
};

// Функция для инициализации пошаговой навигации
function setupStepNavigation() {
    const steps = infoModal.querySelectorAll('.step');
    let currentStep = 0;

    function showStep(stepIndex) {
        steps.forEach((step, index) => {
            if (index === stepIndex) {
                step.classList.remove('hidden');
            } else {
                step.classList.add('hidden');
            }
        });
    }

    // Добавляем обработчик событий на всё модальное окно, чтобы ловить клики по кнопкам
    infoModal.addEventListener('click', (e) => {
        if (e.target.classList.contains('next-step-btn')) {
            if (currentStep < steps.length - 1) {
                currentStep++;
                showStep(currentStep);
            }
        } else if (e.target.classList.contains('prev-step-btn')) {
            if (currentStep > 0) {
                currentStep--;
                showStep(currentStep);
            }
        } else if (e.target.classList.contains('close-modal-btn')) {
            infoModal.classList.remove('active');
            // При закрытии сбрасываем шаг на первый
            currentStep = 0;
            showStep(currentStep);
        }
    });

    // Показываем первый шаг при открытии
    showStep(currentStep);
}


// Функция для отображения модального окна
function showModal(title, text, infoKey) {
    infoModalTitle.innerHTML = title;
    infoModalText.innerHTML = text;
    infoModal.classList.add('active');
    infoModal.setAttribute('aria-hidden', 'false');

    // Если это модальное окно с инструкцией по сертификату, запускаем пошаговую навигацию
    if (infoKey === 'get-certificate') {
        setupStepNavigation();
    }
}

// Обработчик для кнопки с вопросом
if (helpBubble && helpMenu) {
    helpBubble.addEventListener('click', () => {
        helpMenu.classList.toggle('show');
    });
}

// Обработчик для кнопок в меню помощи
helpMenuButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        event.preventDefault();
        const infoKey = button.getAttribute('data-info');
        console.log(`Нажата кнопка с data-info: ${infoKey}`);
        if (infoContent[infoKey]) {
            showModal(infoContent[infoKey].title, infoContent[infoKey].text, infoKey);
            helpMenu.classList.remove('show');
        } else {
            console.error(`Ошибка: Для ключа "${infoKey}" не найдено данных в infoContent.`);
        }
    });
});

// Обработчик для закрытия модального окна с информацией
if (infoModalCloseBtn) {
    infoModalCloseBtn.addEventListener('click', () => {
        infoModal.classList.remove('active');
        infoModal.setAttribute('aria-hidden', 'true');
    });
}

// Скрываем модальное окно при клике вне его
window.addEventListener('click', (event) => {
    if (event.target === infoModal) {
        infoModal.classList.remove('active');
        infoModal.setAttribute('aria-hidden', 'true');
    }
});

// Скрываем меню, если кликнуть где-либо еще
document.addEventListener('click', (event) => {
    if (!helpMenu || !helpBubble) return;
    const isClickInsideMenu = helpMenu.contains(event.target);
    const isClickOnButton = helpBubble.contains(event.target);
    if (!isClickInsideMenu && !isClickOnButton && helpMenu.classList.contains('show')) {
        helpMenu.classList.remove('show');
    }
});


// Логика кнопок покупки — единое, безопасное модальное окно подтверждения.
const buyButtons = document.querySelectorAll('.card-btn');
const buyModal = document.getElementById('buyModal');

if (buyModal) {
    const buyModalTitle = buyModal.querySelector('.modal-title');
    const buyModalDescription = buyModal.querySelector('.modal-description');
    const buyModalIcon = buyModal.querySelector('#buyModalIcon');
    const buyModalCloseBtn = buyModal.querySelector('.close-btn');
    const buyModalCancelBtn = buyModal.querySelector('.cancel-btn');
    const confirmBtn = buyModal.querySelector('.confirm-btn');

    const closeBuyModal = () => {
        buyModal.classList.remove('active');
        buyModal.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('modal-open');
    };

    buyButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();

            const title = button.getAttribute('data-title') || 'Сертификат';
            const description = button.getAttribute('data-description') || '';
            const link = button.getAttribute('data-link') || 'https://t.me/bbarne77';

            if (buyModalTitle) buyModalTitle.textContent = title;
            if (buyModalDescription) buyModalDescription.textContent = description;
            if (buyModalIcon) {
                const iconType = title.toLowerCase();
                buyModalIcon.innerHTML = iconType.includes('парн')
                    ? '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8.5 11.5a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM15.5 12.5a3.5 3.5 0 1 0 0-7"/><path d="M2.8 21a5.7 5.7 0 0 1 11.4 0M14 16.2a5.1 5.1 0 0 1 7.2 4.6"/></svg>'
                    : iconType.includes('ipad')
                    ? '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="6" y="3" width="12" height="18" rx="2"/><path d="M10 18h4"/></svg>'
                    : iconType.includes('супер') || iconType.includes('момент')
                    ? '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13 2 5 13h6l-1 9 8-12h-6z"/></svg>'
                    : '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 4h14v16H5z"/><path d="M8 8h8M8 12h8M8 16h5"/></svg>';
            }
            if (confirmBtn) {
                confirmBtn.href = link;
                confirmBtn.onclick = () => {
                    buyModal.classList.remove('active');
                    buyModal.setAttribute('aria-hidden', 'true');
                    document.body.classList.remove('modal-open');
                };
            }

            buyModal.classList.add('active');
            buyModal.setAttribute('aria-hidden', 'false');
            document.body.classList.add('modal-open');
        });
    });

    if (buyModalCloseBtn) buyModalCloseBtn.addEventListener('click', closeBuyModal);
    if (buyModalCancelBtn) buyModalCancelBtn.addEventListener('click', closeBuyModal);

    buyModal.addEventListener('click', (e) => {
        if (e.target === buyModal) closeBuyModal();
    });

    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && buyModal.classList.contains('active')) {
            closeBuyModal();
        }
    });
} else {
    // Запасной вариант: если модального окна нет, кнопка открывает ссылку покупки.
    buyButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const link = button.getAttribute('data-link');
            if (link) {
                e.preventDefault();
                window.open(link, '_blank', 'noopener,noreferrer');
            }
        });
    });
}

// Условия гарантии — делегированный обработчик, чтобы кнопка работала
// независимо от того, когда элемент появился в DOM.
document.addEventListener('click', (e) => {
    const button = e.target.closest('.warranty-open-btn, #openWarrantyBtn');
    if (!button) return;
    e.preventDefault();
    e.stopPropagation();
    const c = infoContent['warranty'];
    if (!c || !infoModal) return;
    infoModalTitle.innerHTML = c.title;
    infoModalText.innerHTML = c.text;
    infoModal.classList.add('active');
    infoModal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
});

// Универсальное закрытие окна гарантии
function closeInfoModal() {
    if (!infoModal) return;
    infoModal.classList.remove('active');
    infoModal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
}
if (infoModalCloseBtn) infoModalCloseBtn.addEventListener('click', closeInfoModal);
window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeInfoModal();
});
window.addEventListener('click', (e) => {
    if (e.target === infoModal) closeInfoModal();
});

// iPAWORLD mobile viewport safeguard
(function(){
    const isSmallDevice = () => window.screen && Math.min(window.screen.width || 9999, window.screen.height || 9999) <= 700;
    const apply = () => {
        if (isSmallDevice()) document.documentElement.classList.add('mobile-device');
    };
    apply();
    window.addEventListener('resize', apply, {passive:true});
})();

// v56 — mobile hamburger menu
(function(){
    const toggle = document.querySelector('.mobile-menu-toggle');
    const menu = document.getElementById('mobileMenu');
    if (!toggle || !menu) return;
    window.closeMobileMenu = function(){
        menu.classList.remove('open');
        menu.setAttribute('aria-hidden','true');
        toggle.setAttribute('aria-expanded','false');
        document.body.classList.remove('mobile-menu-open');
    };
    toggle.addEventListener('click', function(e){
        e.preventDefault();
        e.stopPropagation();
        const open = !menu.classList.contains('open');
        if (open){
            menu.classList.add('open');
            menu.setAttribute('aria-hidden','false');
            toggle.setAttribute('aria-expanded','true');
            document.body.classList.add('mobile-menu-open');
        } else window.closeMobileMenu();
    });
    document.addEventListener('click', function(e){
        if (!menu.contains(e.target) && !toggle.contains(e.target)) window.closeMobileMenu();
    });
    window.addEventListener('keydown', function(e){ if (e.key === 'Escape') window.closeMobileMenu(); });
})();

// v65 — reliable certificate click flip (no sticky hover flip)
(function(){
  const hitbox = document.querySelector('.certificate-hitbox');
  if (!hitbox) return;
  hitbox.addEventListener('click', function(e){
    e.preventDefault();
    e.stopPropagation();
    hitbox.classList.toggle('is-flipped');
  }, {passive:false});
})();

// v65 — duplicate review rows for a truly seamless infinite marquee
(function(){
  document.querySelectorAll('.reviews-row').forEach(function(row){
    if (row.dataset.duplicated === '1') return;
    const items = Array.from(row.children);
    if (!items.length) return;
    // Build three complete sets so the marquee never reaches a blank gap.
    for (let set = 1; set < 3; set++) {
      items.forEach(function(item){
        const clone = item.cloneNode(true);
        clone.setAttribute('aria-hidden','true');
        row.appendChild(clone);
      });
    }
    row.dataset.duplicated = '1';
  });
})();

// v75 — robust iPhone/iOS review roulette. CSS percentage animations can
// occasionally disappear as a large composited layer, so move the rows with
// requestAnimationFrame and reset at the exact width of one review set.
(function(){
  const rows = Array.from(document.querySelectorAll('.reviews-row'));
  if (!rows.length) return;
  const SPEEDS = [0.018, 0.015]; // px per ms; deliberately slow
  const states = [];

  function measure(row, state){
    const count = row.children.length;
    if (!count) return;
    const setCount = Math.floor(count / 3);
    if (!setCount) return;
    const first = row.children[0];
    const cycleEnd = row.children[setCount - 1];
    if (!first || !cycleEnd) return;
    const firstRect = first.getBoundingClientRect();
    const endRect = cycleEnd.getBoundingClientRect();
    const gap = parseFloat(getComputedStyle(row).columnGap || getComputedStyle(row).gap || '0') || 0;
    state.cycle = (endRect.right - firstRect.left) + gap;
    state.width = row.scrollWidth;
    if (!state.cycle || !isFinite(state.cycle)) state.cycle = row.scrollWidth / 3;
  }

  rows.forEach(function(row, index){
    // The v65 duplication already creates exactly three sets. If another
    // script has not duplicated yet, wait for the next frame rather than
    // starting with a wrong width.
    const state = {row, x: index === 1 ? 0 : 0, last: performance.now(), cycle:0};
    measure(row, state);
    states.push(state);
  });

  function tick(now){
    states.forEach(function(state, index){
      measure(state.row, state);
      if (!state.cycle) return;
      const dt = Math.min(50, Math.max(0, now - state.last));
      state.last = now;
      const speed = SPEEDS[index] || SPEEDS[0];
      if (index === 0){
        state.x -= speed * dt;
        if (state.x <= -state.cycle) state.x += state.cycle;
      } else {
        state.x += speed * dt;
        if (state.x >= 0) state.x -= state.cycle;
      }
      state.row.style.transform = 'translate3d(' + state.x.toFixed(3) + 'px,0,0)';
    });
    requestAnimationFrame(tick);
  }

  // Re-measure after layout/duplication is complete.
  requestAnimationFrame(function(){
    states.forEach(function(state){ measure(state.row,state); state.last=performance.now(); });
    requestAnimationFrame(tick);
  });

  window.addEventListener('resize', function(){
    states.forEach(function(state){ measure(state.row,state); });
  }, {passive:true});
})();
