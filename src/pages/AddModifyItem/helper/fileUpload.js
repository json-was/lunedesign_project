// Funcion que recibe la imagen en forma de variable
export const fileUpload = async (file) => {
  // Si esque el usuario no selecciona una imagen de su ordenador, no ejecutara el resto de la funcion
  // if (!file) throw new Error("No tenemos ningun archivo para subir.");
  if (!file) return console.log("No tenemos ningun archivo para subir.");

  // Al cumplir que si exite una imagen, haremos referencia a la base de datos de nuestro CLOUDINARY
  // guardandola en una variable
  const cloudUrl = "https://api.cloudinary.com/v1_1/dssccuwn8/upload";

  // Ajustes de formato para poder hacer la peticion con mayor facilidad
  const formData = new FormData();
  formData.append("upload_preset", "lune-app");
  formData.append("file", file);

  // Aqui se intentara subir la imagen
  try {
    // Se realizara una peticion a CLOUDINARY, gracias a nuestros pre-ajustes anteriores
    const resp = await fetch(cloudUrl, {
      method: "POST",
      body: formData,
    });

    // Si esque la peticion falla, nos dara un error de aviso, para alertarnos
    if (!resp.ok) throw new Error("No se pudo subir el archivo.");

    // Al ser la peticion existosa, retornaremos una direccion URL, de la imagen subia a la base de datos
    const cloudResp = await resp.json();
    return cloudResp.secure_url;
  } catch (error) {
    // En caso de error, devolvera que no se pudo subir crrectamente la imagen.
    console.log("No tenemos ningun archivo para subir.");
    // throw new Error("No tenemos ningun archivo para subir.");
  }
};
