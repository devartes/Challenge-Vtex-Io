const Placeholder = () => {
  if (typeof document !== "undefined") {
    const observer = new MutationObserver(mutations => {
      mutations.forEach(_mutation => {
        const postalCodeInput = document.querySelector(
          ".vtex-address-form-4-x-input"
        );
        const postalCodeValue = document.querySelector(".postalCode");

        if (postalCodeInput) {
          postalCodeInput.classList.add("postalCode");
          observer.disconnect();
        }

        if (postalCodeValue) {
          postalCodeValue.setAttribute("placeholder", "Digite seu CEP");
        }
      });
    });

    observer.observe(document, {
      childList: true,
      subtree: true
    });
  }

  return null;
};

export default Placeholder;
