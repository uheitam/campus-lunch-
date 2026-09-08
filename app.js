/**
 * Campus Lunch - Client Application
 * Embedded dataset for Monday, Tuesday, and Wednesday.
 * Fully self-contained: No fetch calls or web server required.
 */

const MENU_DATA = {
  campus: "Central Campus Cafeteria",
  service: "Lunch",
  hours: "11:30 AM - 2:00 PM",
  days: {
    Monday: {
      day: "Monday",
      date: "2026-09-08",
      meals: [
        {
          id: "mon-meal-1",
          option: "Option A",
          name: "Soy-Glazed Tofu & Fresh Vegetable Bibimbap",
          koreanName: "두부 야채 비빔밥",
          description: "Steamed multigrain rice served with seasoned spinach, bean sprouts, shiitake mushrooms, crisp shredded zucchini, pan-seared tofu, and sweet-savory gochujang chili sauce.",
          price: 5500,
          currency: "KRW",
          isVegetarian: true,
          dietaryLabel: "Vegetarian"
        },
        {
          id: "mon-meal-2",
          option: "Option B",
          name: "Aged Kimchi Stew with Pork & Soft Tofu",
          koreanName: "돼지고기 김치찌개 정식",
          description: "Hearty slow-simmered kimchi stew with tender sliced pork and soft tofu, served with warm white rice, seasoned roasted seaweed (gim), and daily side dishes.",
          price: 6000,
          currency: "KRW",
          isVegetarian: false,
          dietaryLabel: "Non-Vegetarian"
        },
        {
          id: "mon-meal-3",
          option: "Option C",
          name: "Crispy Pork Cutlet (Donkatsu) & Japanese Curry",
          koreanName: "수제 돈까스 & 카레",
          description: "Panko-crusted pork cutlet deep-fried to golden perfection, served over steamed rice with rich aromatic vegetable curry, pickled radish, and shredded cabbage salad.",
          price: 6500,
          currency: "KRW",
          isVegetarian: false,
          dietaryLabel: "Non-Vegetarian"
        }
      ]
    },
    Tuesday: {
      day: "Tuesday",
      date: "2026-09-09",
      meals: [
        {
          id: "tue-meal-1",
          option: "Option A",
          name: "Mushroom & Vegetable Japchae Rice Bowl",
          koreanName: "버섯 야채 잡채밥",
          description: "Stir-fried sweet potato glass noodles with shiitake and king oyster mushrooms, colorful bell peppers, tender spinach, and toasted sesame oil over warm steamed rice.",
          price: 5500,
          currency: "KRW",
          isVegetarian: true,
          dietaryLabel: "Vegetarian"
        },
        {
          id: "tue-meal-2",
          option: "Option B",
          name: "Spicy Stir-Fried Pork (Jeyuk Bokkeum) Set",
          koreanName: "제육볶음 정식",
          description: "Thinly sliced pork marinated in rich gochujang chili sauce and wok-tossed with scallions and sweet onions, served with steamed rice, soup, and fresh lettuce wraps.",
          price: 6000,
          currency: "KRW",
          isVegetarian: false,
          dietaryLabel: "Non-Vegetarian"
        },
        {
          id: "tue-meal-3",
          option: "Option C",
          name: "Golden Chicken Katsu with Japanese Brown Sauce",
          koreanName: "수제 치킨까스 정식",
          description: "Tender chicken cutlet breaded with crispy panko crumbs, served with finely shredded cabbage salad in toasted sesame dressing, tangy tonkatsu sauce, and rice.",
          price: 6500,
          currency: "KRW",
          isVegetarian: false,
          dietaryLabel: "Non-Vegetarian"
        }
      ]
    },
    Wednesday: {
      day: "Wednesday",
      date: "2026-09-10",
      meals: [
        {
          id: "wed-meal-1",
          option: "Option A",
          name: "Chickpea & Roasted Vegetable Golden Curry",
          koreanName: "병아리콩 채소 카레",
          description: "Hearty chickpeas simmered with tender potatoes, sweet carrots, and zucchini in a fragrant mild Japanese golden curry, served over warm multigrain rice.",
          price: 5500,
          currency: "KRW",
          isVegetarian: true,
          dietaryLabel: "Vegetarian"
        },
        {
          id: "wed-meal-2",
          option: "Option B",
          name: "Traditional Beef Bulgogi Rice Bowl",
          koreanName: "소불고기 덮밥",
          description: "Tender thinly sliced beef ribeye sautéed with sweet onions, scallions, and enoki mushrooms in an authentic sweet soy glaze, served over steamed white rice.",
          price: 6500,
          currency: "KRW",
          isVegetarian: false,
          dietaryLabel: "Non-Vegetarian"
        },
        {
          id: "wed-meal-3",
          option: "Option C",
          name: "Rustic Soybean Paste Stew & Grilled Mackerel",
          koreanName: "된장찌개 & 고등어구이",
          description: "Classic fermented soybean stew with tofu, zucchini, and clams, paired with a savory crispy salted grilled mackerel fillet, steamed rice, and daily banchan.",
          price: 6000,
          currency: "KRW",
          isVegetarian: false,
          dietaryLabel: "Non-Vegetarian"
        }
      ]
    }
  }
};

/**
 * Formats a numeric price into a Korean Won (KRW) string.
 * e.g., 5500 -> "₩5,500"
 */
function formatKRW(amount) {
  try {
    return new Intl.NumberFormat('ko-KR', {
      style: 'currency',
      currency: 'KRW',
      maximumFractionDigits: 0
    }).format(amount);
  } catch (e) {
    return `₩${amount.toLocaleString()}`;
  }
}

/**
 * Safely escapes HTML special characters.
 */
function escapeHtml(str) {
  if (typeof str !== 'string') return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/**
 * Renders the meals and count for the selected day.
 * @param {string} day - 'Monday' | 'Tuesday' | 'Wednesday'
 */
function renderMealsForDay(day) {
  const dayData = MENU_DATA.days[day] || MENU_DATA.days.Monday;
  const activeDay = dayData.day;
  const meals = dayData.meals || [];

  // Update header subtitle
  const subtitle = document.getElementById('menu-subtitle');
  if (subtitle) {
    subtitle.textContent = `${activeDay} Menu • ${MENU_DATA.campus}`;
  }

  // Update dropdown selector value
  const select = document.getElementById('day-select');
  if (select && select.value !== activeDay) {
    select.value = activeDay;
  }

  // Update quick tab buttons
  const pills = document.querySelectorAll('.day-pill');
  pills.forEach((pill) => {
    const isCurrent = pill.getAttribute('data-day') === activeDay;
    pill.classList.toggle('active', isCurrent);
    pill.setAttribute('aria-selected', isCurrent ? 'true' : 'false');
  });

  // Update meal count indicator
  const mealCountEl = document.getElementById('meal-count');
  if (mealCountEl) {
    const mealWord = meals.length === 1 ? 'meal' : 'meals';
    mealCountEl.textContent = `Showing ${meals.length} ${mealWord} for ${activeDay}`;
    mealCountEl.setAttribute('data-count', meals.length.toString());
  }

  // Render meal cards into container
  const container = document.getElementById('meals-container');
  if (!container) return;

  container.innerHTML = '';

  if (meals.length === 0) {
    container.innerHTML = '<div class="meal-card"><p>No meals scheduled for this day.</p></div>';
    return;
  }

  meals.forEach((meal) => {
    const card = document.createElement('article');
    card.className = 'meal-card';

    const dietaryBadge = meal.isVegetarian
      ? `<span class="badge badge-vegetarian" aria-label="Vegetarian meal">🌱 Vegetarian</span>`
      : `<span class="badge badge-standard" aria-label="Standard meal">Standard</span>`;

    card.innerHTML = `
      <div class="meal-meta">
        <span class="option-tag">${escapeHtml(meal.option || 'Lunch')}</span>
        ${dietaryBadge}
      </div>
      <div class="meal-title-group">
        <h2 class="meal-name">${escapeHtml(meal.name)}</h2>
        ${meal.koreanName ? `<p class="meal-korean-name">${escapeHtml(meal.koreanName)}</p>` : ''}
      </div>
      <p class="meal-description">${escapeHtml(meal.description)}</p>
      <div class="meal-footer">
        <span class="meal-price">${formatKRW(meal.price)}</span>
      </div>
    `;

    container.appendChild(card);
  });
}

/**
 * Sets up event listeners and loads default day (Monday).
 */
function initApp() {
  // Dropdown change listener
  const select = document.getElementById('day-select');
  if (select) {
    select.addEventListener('change', (e) => {
      renderMealsForDay(e.target.value);
    });
  }

  // Day button pill click listeners
  const pills = document.querySelectorAll('.day-pill');
  pills.forEach((pill) => {
    pill.addEventListener('click', () => {
      const selectedDay = pill.getAttribute('data-day');
      if (selectedDay) {
        renderMealsForDay(selectedDay);
      }
    });
  });

  // Check URL query param, default to Monday
  const urlParams = new URLSearchParams(window.location.search);
  const paramDay = urlParams.get('day');
  const initialDay = (paramDay && MENU_DATA.days[paramDay]) ? paramDay : 'Monday';
  renderMealsForDay(initialDay);
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
