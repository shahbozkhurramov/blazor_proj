function Send_Data(){
    form.addEventListener("submit", (e) => {
        e.preventDefault();
    });
    
    const file = document.getElementById("uploadfile").files[0];
    const fr = new FileReader();
    fr.readAsArrayBuffer(file);
    fr.onload = (f) => {
      const url = "https://script.google.com/macros/s/AKfycbwVARt9gGCLR5M6Ml6hEazJC7TVQFBWeidUTjsOyDQyoQWbW0m15w9MEA-Z_uxJ1gZ-/exec"; 
      const qs = new URLSearchParams({
        filename: file.name,
        mimeType: file.type,
      });
      fetch(`${url}?${qs}`, {method: "POST", body: JSON.stringify([...new Int8Array(f.target.result)])})
        .then(res => console.log("success"))
        .catch(res => console.log("error occured"));
    };
}