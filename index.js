console.log ("tarea iniciada");

const url = "https://fakestoreapi.com";

const args = process.argv.slice (2); 

const args_validos = ["GET", "POST", "DELETE"];

async function gestion_de_productos ( args = [] ) {
    if (!args[0] in args_validos) {
        console.log ("Argumento incorrecto");
        return; 
    }
    switch (args[0]) {
        case "GET":
            if (!args[1].includes("/") && args[1] =="products"){
                try {
                    const response = await fetch (`${url}/products`,{
                        method: "GET"
                    });
                    if (response.status !=200) {
                        throw new Error ("Falla en la solicitud");
                        break;
                    }
                    const data = await response.json ();
                    data.forEach (elemento => {
                        console.log (elemento);
                    });
                    break;
                } catch (error) {
                    console.log(error);
                    break;
                }
            } else if (args[1].includes("/") && args[1].includes("products")) {
                let id_prod = args[1].split("/");
                try {
                    const id = parseInt (id_prod[1]);
                    const response = await fetch (`${url}/products/${id}`, { 
                        method: "GET"
                    })
                    if (response.status != 200) {
                        throw new Error ("Error en la solicitud");
                        break;
                    }
                    const data = await response.json ();
                    console.log (data);
                    break;
                }catch (error) {
                    console.log (error);
                    break;
                }
            }
    }
};

gestion_de_productos (args);




