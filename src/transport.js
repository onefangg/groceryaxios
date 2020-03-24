import {Line} from 'vue-chartjs'
import axios from 'axios'

export default{
    extends:Line,
    data: () => ({
        results:[],
        chartdata: {
          labels:[],
          datasets: [
            {
                label: 'MRT Ridership',
                data:[],
                borderWidth:0.5,
                borderColor:"magenta",
                backgroundColor:'magenta',
                fill:false
            }
            ,
            {
                label: 'LRT Ridership',
                data:[],
                borderWidth:0.5,
                borderColor:"blue",
                backgroundColor:'blue',
                fill:false
            },
            {
                label: 'Taxi Ridership',
                data:[],
                borderWidth:0.5,
                borderColor:"yellow",
                backgroundColor:'yellow',
                fill:false
            },
            {
                label: 'Bus Ridership',
                data:[],
                borderWidth:0.5,
                borderColor:"red",
                backgroundColor:'red',
                fill:false
            }
            ]
        },
        options: {
           scales:{
            yAxes:[{
                ticks:{
                    min:0
                }

            }]
        }
          
        }
      }),
    methods:{
    
    fetchData : function(){
        axios.get('https://data.gov.sg/api/action/datastore_search?resource_id=552b8662-3cbc-48c0-9fbb-abdc07fb377a').then(response=>{
            
        this.results = response.data.result["records"]
        for(let d in this.results){
            
            if (this.results[d]["type_of_public_transport"] == "MRT") {
                this.chartdata.datasets[0].data.push(this.results[d]["average_ridership"])
            } 
            else if (this.results[d]["type_of_public_transport"] == "LRT") {
                this.chartdata.datasets[1].data.push(this.results[d]["average_ridership"])
            } else if (this.results[d]["type_of_public_transport"] == "Taxi") {
                this.chartdata.datasets[2].data.push(this.results[d]["average_ridership"])
            } else if (this.results[d]["type_of_public_transport"] == "Bus") {
                this.chartdata.datasets[3].data.push(this.results[d]["average_ridership"])
            }
            if (d%4 == 0) {
                this.chartdata.labels.push(this.results[d]["year"]+'')
            }
            
        }
        this.renderChart(this.chartdata,this.options)
            
    })
    
    }
    
    },
     mounted(){

        this.fetchData()
        
     }

    
    
    
}