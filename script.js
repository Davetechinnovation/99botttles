function typewriterEffect(elementId, speed) {
    const element = document.getElementById("typewriter");
    const fullText = element.innerHTML; // Get the full text from the element
    element.innerHTML = ''; // Clear the text to start the effect
    let index = 0;

    function type() {
      // Gradually append HTML character by character
      element.innerHTML = fullText.substring(0, index);
      if (index < fullText.length) {
        index++;
        setTimeout(type, speed); // Adjust typing speed
      }
    }

    type();
  }

  // Apply the typewriter effect to the div with the text already in it
  typewriterEffect("typewriter", 40); 