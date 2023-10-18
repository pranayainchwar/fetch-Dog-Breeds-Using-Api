//inJquery
// $(document).ready(function(){
//     //load the list of breed from  the Api
//     $.get("https://dog.ceo/api/breeds/list/all", function(data){
//         const breeds = Object.keys(data.message);
//         const breedSelect = $('#breedSelect');

//         breeds.forEach(function(breed){
//           breedSelect.append($('<option>',{
//             value:breed,
//             text:breed
//           }));
//         });
//         // Event Handler  for 'Get Image' button
//         $('#getImageButton').on('click',function(){
//             const selectedBreed = breedSelect.val();
//             if(selectedBreed){
//                 fetchRandomImage(selectedBreed);
//                 $('#nextButton').prop('disabled', false);
//             }
//         });

//         //Event Handler for the nextButton 'Next' Button
//         $('#nextButton').on('click', function(){
//             const selectedBreed =breedSelect.val();
//             if(selectedBreed){
//                 fetchRandomImage(selectedBreed);
//             }
//         });
//     });
// });

// // 1st step to fetch  and display image of specific breed of a dog

// function fetchRandomImage(breed){
//     $.get(`https://dog.ceo/api/breed/${breed}
// /images/random`, function(data){
//     const imageUrl = data.message;
//     $('#dogImage').attr('src', imageUrl)
// });
// }

//in JavaScript

document.addEventListener("DOMContentLoaded", function () {
  // Load the list of breeds from the API
  const breedSelect = document.getElementById("breedSelect");
  const getImageButton = document.getElementById("getImageButton");
  const nextButton = document.getElementById("nextButton");
  const dogImage = document.getElementById("dogImage");

  fetch("https://dog.ceo/api/breeds/list/all")
    .then((response) => response.json())
    .then((data) => {
      const breeds = Object.keys(data.message);
      breeds.forEach(function (breed) {
        const option = document.createElement("option");
        option.value = breed;
        option.text = breed;
        breedSelect.appendChild(option);
      });

      // Event Handler for 'Get Image' button
      getImageButton.addEventListener("click", function () {
        const selectedBreed = breedSelect.value;
        if (selectedBreed) {
          fetchRandomImage(selectedBreed);
          nextButton.disabled = false;
        }
      });

      // Event Handler for the 'Next' Button
      nextButton.addEventListener("click", function () {
        const selectedBreed = breedSelect.value;
        if (selectedBreed) {
          fetchRandomImage(selectedBreed);
        }
      });
    });

  // Function to fetch and display an image of a specific breed of dog
  function fetchRandomImage(breed) {
    fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
      .then((response) => response.json())
      .then((data) => {
        const imageUrl = data.message;
        dogImage.src = imageUrl;
      });
  }
});
