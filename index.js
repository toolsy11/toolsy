document.querySelectorAll('.tool-link').forEach(link => {
   link.addEventListener('click', () => {
      const tool = link.getAttribute('data-tool');
      // Open the tool here
      console.log(`Opening tool: ${tool}`);
   });
});