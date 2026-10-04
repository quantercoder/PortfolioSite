// Forms post to the existing Google Sheets scripts. The endpoint lives on the form.
document.querySelectorAll("form[data-endpoint]").forEach((form) => {
  const status = form.querySelector(".status");
  const button = form.querySelector("button[type=submit]");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    button.disabled = true;
    status.removeAttribute("data-state");
    status.textContent = "Sending…";
    try {
      const res = await fetch(form.dataset.endpoint, { method: "POST", body: new FormData(form) });
      if (!res.ok) throw new Error(res.status);
      status.textContent = form.dataset.success;
      form.reset();
    } catch {
      status.dataset.state = "error";
      status.textContent = "That didn't go through. Try again, or email contact@samlam.eu.";
    } finally {
      button.disabled = false;
    }
  });
});

// Close the mobile menu after picking a link on the same page.
const nav = document.getElementById("nav");
nav?.addEventListener("click", (e) => {
  if (e.target.closest("a") && nav.matches(":popover-open")) nav.hidePopover();
});

document.querySelectorAll("[data-year]").forEach((el) => (el.textContent = new Date().getFullYear()));
