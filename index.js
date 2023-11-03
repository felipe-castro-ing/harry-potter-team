const urlAPI = "https://hp-api.onrender.com/api/characters"

const { createApp } = Vue;

      createApp({
        data() {
          return {
            message: "Hola Harry!",
            personajes: null,
            personajesBkp: [],
            categoriasCasas: [],
            categoriasSeleccionadas:[],
            buscador: "", 

    
          };
        },
        mounted(){

        },
        created(){
            this.dataHarry(urlAPI)

        },
        methods:{
            dataHarry(url){
                fetch(url).then(response => response.json()).then(data => {
                    this.personajes = data
                    this.personajesBkp = data
                    this.categoriasCasas = Array.from(new Set(this.personajes.map((personaje) => personaje.house).splice(4,4)))
                    console.log(this.categoriasCasas);
                })
            }

        },
        computed:{
            filtro(){
                let filtrobuscador = this.personajesBkp.filter(personaje.name.toLowerCase().includes(this.buscador.toLowerCase()))

                if(this.categoriasSeleccionadas.length == 0){
                    this.personajes = filtrobuscador
                }else{
                    this.personajes = filtrobuscador.filter(personaje => this.categoriasSeleccionadas.includes(personaje.house))
                }
            },
        },
      }).mount("#app");
