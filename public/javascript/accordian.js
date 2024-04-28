<script>
  document.addEventListener("DOMContentLoaded", function () {
    // Get all the accordion buttons
    const accordionButtons = document.querySelectorAll('[data-accordion-target]');

    // Loop through each accordion button
    accordionButtons.forEach(button => {
      // Add click event listener to each button
      button.addEventListener('click', function () {
        // Get the target accordion body using data-accordion-target attribute
        const targetId = this.getAttribute('data-accordion-target');
        const accordionBody = document.querySelector(targetId);

        // Toggle the visibility of the accordion body
        accordionBody.classList.toggle('hidden');

        // Toggle aria-expanded attribute of the button
        const expanded = this.getAttribute('aria-expanded') === 'true' || false;
        this.setAttribute('aria-expanded', !expanded);
      });
    });
  });
</script>
