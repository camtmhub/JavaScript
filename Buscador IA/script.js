document.addEventListener("DOMContentLoaded", function() {
    const imageUpload = document.getElementById("image-upload");
    const searchButton = document.getElementById("search-button");
    const searchText = document.getElementById("search-text");
    const resultsSection = document.querySelector(".results-section");

    searchButton.addEventListener("click", function() {
        if (imageUpload) {
            const uploadedImage = imageUpload.files[0];
            
            if (uploadedImage) {
                // Simulación de búsqueda con inteligencia artificial y base de datos
                const modelName = "Modelo Ejemplo";
                const socialMediaLinks = {
                    instagram: "https://www.instagram.com/ejemplo",
                    twitter: "https://twitter.com/ejemplo"
                };
                const productInfo = {
                    productName: "Producto Ejemplo",
                    productLink: "https://www.ejemplo.com/producto"
                };

                // Mostrar resultados en la página
                showResults(modelName, socialMediaLinks, productInfo);
            }
        } else if (searchText) {
            const searchQuery = searchText.value.trim();

            if (searchQuery !== "") {
                // Simulación de búsqueda en la base de datos
                const modelName = "Modelo Ejemplo";
                const socialMediaLinks = {
                    instagram: "https://www.instagram.com/ejemplo",
                    twitter: "https://twitter.com/ejemplo"
                };
                const productInfo = {
                    productName: "Producto Ejemplo",
                    productLink: "https://www.ejemplo.com/producto"
                };

                // Mostrar resultados en la página
                showResults(modelName, socialMediaLinks, productInfo);
            }
        }
    });

    function showResults(modelName, socialMediaLinks, productInfo) {
        resultsSection.innerHTML = "";

        const modelNameHeading = document.createElement("h3");
        modelNameHeading.textContent = "Modelo: " + modelName;

        const socialMediaList = document.createElement("ul");
        for (const platform in socialMediaLinks) {
            const socialMediaItem = document.createElement("li");
            const socialMediaLink = document.createElement("a");
            socialMediaLink.href = socialMediaLinks[platform];
            socialMediaLink.textContent = platform.charAt(0).toUpperCase() + platform.slice(1);
            socialMediaItem.appendChild(socialMediaLink);
            socialMediaList.appendChild(socialMediaItem);
        }

        const productLink = document.createElement("a");
        productLink.href = productInfo.productLink;
        productLink.textContent = "Ver Producto: " + productInfo.productName;

        resultsSection.appendChild(modelNameHeading);
        resultsSection.appendChild(socialMediaList);
        resultsSection.appendChild(productLink);

        resultsSection.classList.add("show"); // Mostrar la sección de resultados
    }
});
