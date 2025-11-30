// Simple hash-based router to mimic React Router

const routes = {
  '/': `
    <section class="grid gap-10 md:grid-cols-2 items-center">
      <div class="space-y-6">
        <p class="inline-flex items-center gap-2 text-xs font-medium px-3 py-1 rounded-full bg-blue-50 text-primary border border-blue-100">
          <span class="h-1.5 w-1.5 rounded-full bg-primary"></span>
          Hospital Management System
        </p>
        <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary leading-tight">
          Modern, affordable
          <span class="text-primary">Hospital Management</span>
          for every clinic.
        </h1>
        <p class="text-slate-600 text-base sm:text-lg max-w-xl">
          Manage patients, staff, appointments, billing and analytics in one
          clean dashboard. Designed for Indian hospitals and clinics with a
          focus on simplicity and cost-effectiveness.
        </p>

        <div class="flex flex-wrap gap-3">
          <a
            href="#/register"
            class="px-5 py-2.5 rounded-full bg-primary text-white font-medium hover:bg-blue-700"
          >
            Get Started
          </a>
          <a
            href="#/features"
            class="px-5 py-2.5 rounded-full border border-primary text-primary hover:bg-blue-50 font-medium"
          >
            View Features
          </a>
        </div>

        <div class="flex flex-wrap gap-6 text-sm text-slate-600">
          <div>
            <p class="font-semibold text-secondary">10+ modules</p>
            <p>OPD, IPD, Pharmacy, Billing, Lab & more</p>
          </div>
          <div>
            <p class="font-semibold text-secondary">Multi-tenant</p>
            <p>Separate, secure data per hospital</p>
          </div>
        </div>
      </div>

      <div class="hidden md:block">
        <div
          class="rounded-2xl border border-slate-200 bg-white shadow-sm p-4 space-y-4"
        >
          <div class="flex justify-between items-center">
            <div>
              <p class="text-sm font-medium text-secondary">
                Today’s overview
              </p>
              <p class="text-xs text-slate-500">Demo hospital</p>
            </div>
            <span
              class="inline-flex items-center px-2.5 py-1 text-xs rounded-full bg-green-50 text-green-700 border border-green-100"
              >Live</span
            >
          </div>
          <div class="grid grid-cols-3 gap-3 text-center text-xs">
            <div class="rounded-xl bg-slate-50 p-3">
              <p class="text-slate-500">OPD patients</p>
              <p class="text-xl font-semibold text-secondary">46</p>
            </div>
            <div class="rounded-xl bg-slate-50 p-3">
              <p class="text-slate-500">IPD admitted</p>
              <p class="text-xl font-semibold text-secondary">18</p>
            </div>
            <div class="rounded-xl bg-slate-50 p-3">
              <p class="text-slate-500">Appointments</p>
              <p class="text-xl font-semibold text-secondary">32</p>
            </div>
          </div>
          <p class="text-xs text-slate-500">
            This is a demo UI. Hook it to your backend API later.
          </p>
        </div>
      </div>
    </section>
  `,
  '/features': `
    <section class="space-y-6">
      <h2 class="text-3xl font-semibold text-secondary">Features</h2>
      <p class="text-slate-600 max-w-2xl">
        A complete, modular hospital management system that grows with your
        needs.
      </p>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div class="border rounded-xl bg-white p-4 shadow-sm">
          <h3 class="font-semibold text-secondary mb-1">Patient Management</h3>
          <p class="text-sm text-slate-600">
            Register patients, manage OPD/IPD flows, maintain history and
            discharge summaries.
          </p>
        </div>
        <div class="border rounded-xl bg-white p-4 shadow-sm">
          <h3 class="font-semibold text-secondary mb-1">Appointments</h3>
          <p class="text-sm text-slate-600">
            Doctor-wise calendar, slot booking, reminders and queue management.
          </p>
        </div>
        <div class="border rounded-xl bg-white p-4 shadow-sm">
          <h3 class="font-semibold text-secondary mb-1">Billing</h3>
          <p class="text-sm text-slate-600">
            Generate bills, track payments, integrate with insurance & TPA.
          </p>
        </div>
        <div class="border rounded-xl bg-white p-4 shadow-sm">
          <h3 class="font-semibold text-secondary mb-1">Pharmacy & Inventory</h3>
          <p class="text-sm text-slate-600">
            Stock management, expiry alerts, purchase orders and usage logs.
          </p>
        </div>
        <div class="border rounded-xl bg-white p-4 shadow-sm">
          <h3 class="font-semibold text-secondary mb-1">Lab & Reports</h3>
          <p class="text-sm text-slate-600">
            Test orders, sample tracking and auto-generated lab reports.
          </p>
        </div>
        <div class="border rounded-xl bg-white p-4 shadow-sm">
          <h3 class="font-semibold text-secondary mb-1">Analytics</h3>
          <p class="text-sm text-slate-600">
            Daily, weekly and monthly stats on OPD, revenue, bed occupancy and
            more.
          </p>
        </div>
      </div>
    </section>
  `,
  '/pricing': `
    <section class="space-y-6">
      <h2 class="text-3xl font-semibold text-secondary">Pricing</h2>
      <p class="text-slate-600 max-w-2xl">
        Simple, transparent pricing for hospitals of every size.
      </p>

      <div class="grid md:grid-cols-3 gap-6">
        <div class="border rounded-2xl bg-white p-5 shadow-sm flex flex-col gap-3">
          <h3 class="font-semibold text-secondary">Clinic</h3>
          <p class="text-3xl font-bold">₹X / month</p>
          <p class="text-sm text-slate-600">
            For single-doctor clinics and small practices.
          </p>
          <ul class="text-sm text-slate-600 list-disc pl-5 space-y-1">
            <li>Up to 2 doctors</li>
            <li>OPD, basic billing</li>
            <li>Email support</li>
          </ul>
        </div>
        <div class="border-2 border-primary rounded-2xl bg-white p-5 shadow-md flex flex-col gap-3">
          <h3 class="font-semibold text-secondary">Hospital</h3>
          <p class="text-3xl font-bold">₹Y / month</p>
          <p class="text-sm text-slate-600">
            For mid-size hospitals with multiple departments.
          </p>
          <ul class="text-sm text-slate-600 list-disc pl-5 space-y-1">
            <li>Unlimited doctors</li>
            <li>OPD, IPD, billing, lab</li>
            <li>Priority support</li>
          </ul>
        </div>
        <div class="border rounded-2xl bg-white p-5 shadow-sm flex flex-col gap-3">
          <h3 class="font-semibold text-secondary">Enterprise</h3>
          <p class="text-3xl font-bold">Custom</p>
          <p class="text-sm text-slate-600">
            For chains, multi-location hospitals or special requirements.
          </p>
          <ul class="text-sm text-slate-600 list-disc pl-5 space-y-1">
            <li>Multi-tenant setup</li>
            <li>On-prem or cloud</li>
            <li>Dedicated account manager</li>
          </ul>
        </div>
      </div>
    </section>
  `,
  '/about': `
    <section class="space-y-5">
      <h2 class="text-3xl font-semibold text-secondary">About</h2>
      <p class="text-slate-600 max-w-2xl">
        This Hospital Management System (HealthGrid) aims to make digital tools
        accessible to hospitals and clinics that currently rely on paper or
        disconnected software.
      </p>
      <p class="text-slate-600 max-w-2xl">
        Built by an aspiring AI engineer, the system is designed to be modular,
        API-driven and ready for future integration with AI-powered analytics,
        forecasting and automation.
      </p>
    </section>
  `,
  '/login': `
    <section class="max-w-md mx-auto space-y-5">
      <h2 class="text-3xl font-semibold text-secondary mb-2">Login</h2>
      <p class="text-sm text-slate-600">
        Use demo credentials or connect this form to your backend API later.
      </p>
      <form id="login-form" class="space-y-4">
        <div>
          <label class="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            name="email"
            class="w-full border rounded-lg px-3 py-2 text-sm"
            placeholder="admin@hospital.com"
            required
          />
        </div>
        <div>
          <label class="block text-sm font-medium mb-1">Password</label>
          <input
            type="password"
            name="password"
            class="w-full border rounded-lg px-3 py-2 text-sm"
            placeholder="••••••••"
            required
          />
        </div>
        <button
          type="submit"
          class="w-full px-4 py-2 rounded-lg bg-primary text-white font-medium hover:bg-blue-700"
        >
          Sign In
        </button>
      </form>
      <p id="login-message" class="text-xs text-slate-600"></p>
    </section>
  `,
  '/register': `
    <section class="max-w-md mx-auto space-y-5">
      <h2 class="text-3xl font-semibold text-secondary mb-2">Register</h2>
      <p class="text-sm text-slate-600">
        Create a new hospital admin account. Later, connect this form to the
        backend.
      </p>
      <form id="register-form" class="space-y-4">
        <div>
          <label class="block text-sm font-medium mb-1">Hospital Name</label>
          <input
            type="text"
            name="hospitalName"
            class="w-full border rounded-lg px-3 py-2 text-sm"
            placeholder="City Care Hospital"
            required
          />
        </div>
        <div>
          <label class="block text-sm font-medium mb-1">Admin Email</label>
          <input
            type="email"
            name="email"
            class="w-full border rounded-lg px-3 py-2 text-sm"
            placeholder="admin@hospital.com"
            required
          />
        </div>
        <div>
          <label class="block text-sm font-medium mb-1">Password</label>
          <input
            type="password"
            name="password"
            class="w-full border rounded-lg px-3 py-2 text-sm"
            placeholder="Create a strong password"
            required
          />
        </div>
        <button
          type="submit"
          class="w-full px-4 py-2 rounded-lg bg-primary text-white font-medium hover:bg-blue-700"
        >
          Create Account
        </button>
      </form>
      <p id="register-message" class="text-xs text-slate-600"></p>
    </section>
  `,
};

function renderRoute() {
  const app = document.getElementById('app');
  if (!app) return;

  const hash = window.location.hash || '#/';
  const path = hash.replace('#', '') || '/';

  const html = routes[path] || `<p>Page not found</p>`;
  app.innerHTML = html;

  // Attach simple demo handlers for login/register
  if (path === '/login') {
    const form = document.getElementById('login-form');
    const msg = document.getElementById('login-message');
    if (form && msg) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        msg.textContent =
          'Login form submitted (connect to /api/login on backend).';
      });
    }
  }

  if (path === '/register') {
    const form = document.getElementById('register-form');
    const msg = document.getElementById('register-message');
    if (form && msg) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        msg.textContent =
          'Register form submitted (connect to /api/register on backend).';
      });
    }
  }

  window.scrollTo(0, 0);
}

window.addEventListener('DOMContentLoaded', renderRoute);
window.addEventListener('hashchange', renderRoute);
