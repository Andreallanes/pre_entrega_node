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
                        console.table (elemento);
                    });
                    break;
                } catch (error) {
                    console.log(error);
                    break;
                }
            }
    }
};

gestion_de_productos (args);




