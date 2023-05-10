async function onGetTextFromImage() {

    const files = document.getElementById("uploader").files;
    console.log(files)
    const ocrImg = new Image();
    ocrImg.id = "ocr-img";

    const reader = new FileReader();

    reader.addEventListener(
    "load",
    async () => {
      // convert image file to base64 string
      ocrImg.src = reader.result;
    const { data: { text } } = await Tesseract.recognize(reader.result)
    console.log(text);
    resultDiv = document.createElement("div")
    resultDiv.innerText = text
    document.getElementById("ocr-text").appendChild(resultDiv)
    },
    false
  );
    reader.readAsDataURL(files[0])

    const imgContainer = document.getElementById("img-container")
    imgContainer.children = []
    // if (imgContainer.firstChild) 
    //     imgContainer.replaceChild(imgContainer.firstChild, ocrImg)
    // else
        imgContainer.appendChild(ocrImg);
    // const { data: { text } } = await Tesseract.recognize(files[0])
    // console.log(text);
    // document.getElementById("ocr-text").innerText = text;
}

// async function onLoadImage(event) {
    // const url = document.getElementById("img-url").value;
    // const ocrImg = new Image();
    // ocrImg.src = url;
    // ocrImg.id = "ocr-img";
    // document.getElementById("img-container").appendChild(ocrImg);
// }

