function typewriterEffect(elementId, speed) {
    const element = document.getElementById("write");
    const fullText = element.innerHTML; // Get the full text from the element
    element.innerHTML = ''; 
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

  
  typewriterEffect("typewriter", 20); 