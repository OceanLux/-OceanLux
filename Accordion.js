// Accordion tabs*//
// Accordion Tabs Functionality


// 1. Select all headers and content
const accordionHeaders = document.querySelectorAll(".accordion-header");
const accordionContents = document.querySelectorAll(".accordion-content");


// 2. Add click listener to each header
accordionHeaders.forEach((header) => {
 header.addEventListener("click", () => {


   // Find the content corresponding to the clicked header
   const accordionItem = header.parentElement; // accordion-item
   const accordionContent = accordionItem.querySelector(".accordion-content");


   // Close all other accordion contents
   accordionContents.forEach((content) => {
     if (content !== accordionContent) {
       content.classList.remove("active");
       content.style.maxHeight = "0";
     }
   });


   // Toggle the clicked accordion content
   accordionContent.classList.toggle("active");


   if (accordionContent.classList.contains("active")) {
     // Set max-height dynamically to scrollHeight for smooth animation
     accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
   } else {
     accordionContent.style.maxHeight = "0";
   }
 });
});
